
document.addEventListener('DOMContentLoaded', () => {
    // Screen elements
    const startScreen = document.getElementById('start-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const resultScreen = document.getElementById('result-screen');

    // Button elements
    const startButton = document.getElementById('start-button');
    const resetButton = document.getElementById('reset-button');
    const copyAddressButton = document.getElementById('copy-address-button');

    // Result content elements
    const restaurantName = document.getElementById('restaurant-name');
    const restaurantMenu = document.getElementById('restaurant-menu');
    const restaurantPrice = document.getElementById('restaurant-price');

    let currentAddress = ''; // Variable to store the address

    // Event listener for the start button
    startButton.addEventListener('click', () => {
        startScreen.classList.remove('active');
        loadingScreen.classList.add('active');

        setTimeout(() => {
            // Using the absolute GitHub URL as requested for deployment
            fetch('https://raw.githubusercontent.com/bluebeatle97/jiwonjumsim/main/food.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    // *** CORRECTED LOGIC IS BACK ***
                    // This correctly handles the object structure of lunchData (korean, chinese, etc.)
                    const allRestaurants = Object.values(data.lunchData).flat();

                    if (!allRestaurants || allRestaurants.length === 0) {
                        throw new Error('No restaurant data found or data is empty.');
                    }

                    const randomIndex = Math.floor(Math.random() * allRestaurants.length);
                    const selectedRestaurant = allRestaurants[randomIndex];

                    // Update UI with selected restaurant data
                    restaurantName.textContent = `식당이름: "${selectedRestaurant.name}"`;
                    restaurantMenu.textContent = `대표메뉴: "${selectedRestaurant.menu}"`;
                    restaurantPrice.textContent = `가격: "${selectedRestaurant.price}"`;
                    
                    // Store the address for the copy button
                    currentAddress = selectedRestaurant.address;

                    // Switch to the result screen
                    loadingScreen.classList.remove('active');
                    resultScreen.classList.add('active');
                })
                .catch(error => {
                    console.error('Error fetching or processing food data:', error);
                    loadingScreen.classList.remove('active');
                    startScreen.classList.add('active');
                    alert('맛집 데이터를 불러오는 데 실패했습니다. GitHub 저장소가 Public인지, 네트워크 연결을 확인해주세요.');
                });
        }, 2500);
    });

    // Event listener for the reset button
    resetButton.addEventListener('click', () => {
        resultScreen.classList.remove('active');
        startScreen.classList.add('active');
    });

    // Event listener for the copy address button
    copyAddressButton.addEventListener('click', () => {
        if (currentAddress && navigator.clipboard) {
            navigator.clipboard.writeText(currentAddress)
                .then(() => {
                    alert('식당 주소가 클립보드에 복사되었습니다!');
                })
                .catch(err => {
                    console.error('클립보드 복사 실패:', err);
                    alert('주소 복사에 실패했습니다.');
                });
        } else {
            alert('복사할 주소가 없습니다.');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const resultScreen = document.getElementById('result-screen');
    const startButton = document.getElementById('start-button');
    const resetButton = document.getElementById('reset-button');
    const resultText = document.getElementById('result-text');

    const menuItems = [
        '돈까스', '짜장면', '김치찌개', '된장찌개', '비빔밥', '칼국수', '냉면', '부대찌개', '순대국',
        '제육볶음', '오므라이스', '카레', '라멘', '우동', '초밥', '파스타', '피자', '햄버거', '샌드위치'
    ];

    startButton.addEventListener('click', () => {
        startScreen.classList.remove('active');
        loadingScreen.classList.add('active');

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * menuItems.length);
            const selectedMenu = menuItems[randomIndex];
            resultText.textContent = selectedMenu;

            loadingScreen.classList.remove('active');
            resultScreen.classList.add('active');
        }, 2500);
    });

    resetButton.addEventListener('click', () => {
        resultScreen.classList.remove('active');
        startScreen.classList.add('active');
    });
});

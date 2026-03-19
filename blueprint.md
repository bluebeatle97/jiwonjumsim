
# Blueprint: 점심메뉴 추천기

## Overview

A simple, mobile-first web application to recommend a lunch menu item. The user starts the "game", sees a loading animation, and then gets a random lunch suggestion.

## Design and Features

### V1 (Initial Version)

*   **Mobile-First Responsive Design:** The application is designed for a minimum screen size of 390x844px and will adapt to larger screens.
*   **Fixed 9:16 Aspect Ratio:** The application will be displayed within a 9:16 container, centered on the screen. On wider screens, this will create a "letterbox" effect, ensuring the mobile layout is preserved.
*   **Contained Background Images:** Background images will be scaled to fit within the container without being excessively cropped or zoomed.
*   **Three Screens:**
    1.  **Start Screen:**
        *   Background: `img/002.jpg`
        *   Title: "지원지원지원이 점심메뉴 추천기" (with a slightly tacky/fun design).
        *   Button: "게임 스타트" to begin the recommendation process.
    2.  **Loading Screen:**
        *   Background: `img/001.jpg`
        *   Text: "점심메뉴고르는중..." at the top.
        *   Duration: Displayed for 2-3 seconds.
    3.  **Result Screen:**
        *   Background: `img/003.jpg`
        *   Recommended Menu: A randomly selected lunch menu item displayed at the top.
        *   Reset Button: A "되돌리기" button in the bottom-right to return to the start screen.
*   **Random Menu Generation:** The app will feature a predefined list of lunch options, and one will be chosen at random.

## Current Plan

*   Implement the HTML structure for the three screens.
*   Style the screens and elements using CSS for a mobile-first, responsive layout.
*   Implement the JavaScript logic for screen transitions and random menu generation.
*   **Update layout to maintain a 9:16 aspect ratio on all screen sizes.**

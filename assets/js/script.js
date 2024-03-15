`strict`

// TOGGLES DARK MODE
function toggleDarkMode() {

    // CHANGES THE LIGHT MODE BUTTON
    document.querySelector(`.lightMode`);
    let lightModeCss = {
        backgroundColor: `rgba(255, 255, 255, 1)`,
        cursor: `initial`,
        display: `contents`
    };
    Object.assign(document.querySelector(`.lightMode`).style, lightModeCss);

    // CHANGES THE LIGHTMODE AND DARKMODE BUTTONS CONTAINER
    document.querySelector(`.themeChangerButtonsContainer`)
    let themeChangerButtonsContainerCss = {
        backgroundColor: `black`,
        justifyContent: `space-evenly`,
        backgroundColor: `rgba(44, 44, 44, 1)`,
        paddingLeft: `21px`
    };
    Object.assign(document.querySelector(`.themeChangerButtonsContainer`).style, themeChangerButtonsContainerCss);

    // CHANGES THE DARKMODE BUTTON
    document.querySelector(`.darkMode`).style
    let darkModeCss = {
        backgroundColor: `rgba(0, 41, 255, 1)`,
        display: `block`,
        margin: `6px 6px 6px 33px`,
        cursor: `pointer`
    };
    Object.assign(document.querySelector(`.darkMode`).style, darkModeCss);

    // CHANGES THE BACKGROUND COLOR OF THE PARENT CONTAINER WHICH CAN ALSO SUBSTITUTED WITH THE BODY WHEN USING IN REAL PROJECTS.
    document.querySelector(`.themeChangerContainer`).style.backgroundColor = `rgba(32, 32, 32, 1)`;
    
};
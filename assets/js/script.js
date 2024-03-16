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
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        margin: `6px 6px 6px 33px`,
        cursor: `pointer`
    };
    Object.assign(document.querySelector(`.darkMode`).style, darkModeCss);

    // CHANGES THE COLOR OF THE MOON SVG
    document.querySelector(`.darkModeSvgPath`).style.fill = `rgba(255, 255, 255, 1)`;

    // CHANGES THE BACKGROUND COLOR OF THE PARENT CONTAINER WHICH CAN ALSO SUBSTITUTED WITH THE BODY WHEN USING IN REAL PROJECTS.
    document.querySelector(`.themeChangerContainer`).style.backgroundColor = `rgba(32, 32, 32, 1)`;

    // CHANGES THE BACKGROUND COLOR OF THE BODY
    document.body.style.backgroundColor = `rgba(32, 32, 32, 1)`;

};


// TOGGLES LIGHTMODE
function toggleLightMode() {

    // CHANGES THE DARKMODE BUTTON
    document.querySelector(`.darkMode`).style
    let darkModeCss = {
        backgroundColor: `rgba(0, 41, 255, 1)`,
        display: `contents`,
        cursor: `initial`,
    };
    Object.assign(document.querySelector(`.darkMode`).style, darkModeCss);

    // CHANGES THE LIGHT MODE BUTTON
    document.querySelector(`.lightMode`);
    let lightModeCss = {
        backgroundColor: `rgba(0, 41, 255, 1)`,
        cursor: `pointer`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        margin: `6px 32px 6px 6px`,
    };
    Object.assign(document.querySelector(`.lightMode`).style, lightModeCss);

    // CHANGES THE LIGHTMODE AND DARKMODE BUTTONS CONTAINER
    document.querySelector(`.themeChangerButtonsContainer`)
    let themeChangerButtonsContainerCss = {
        backgroundColor: `rgba(255, 255, 255, 1)`,
        padding: ``,
        justifyContent: ``
    };
    Object.assign(document.querySelector(`.themeChangerButtonsContainer`).style, 
    themeChangerButtonsContainerCss);

    // REVERTS THE COLOR OF THE MOON SVG
    document.querySelector(`.darkModeSvgPath`).style.fill = ``;

    // CHANGES THE BACKGROUND COLOR OF THE PARENT CONTAINER WHICH CAN ALSO SUBSTITUTED WITH THE BODY WHEN USING IN REAL PROJECTS.
    document.querySelector(`.themeChangerContainer`).style.backgroundColor = `rgba(226, 224, 224, 1)`;

    // CHANGES THE BACKGROUND COLOR OF THE BODY
    document.body.style.backgroundColor = `rgba(226, 224, 224, 1)`;

}
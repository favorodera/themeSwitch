`strict`

function toggleDarkMode() {

    let lightModeCss = {
        cursor: `initial`,
        display: `contents`,
    };
    Object.assign(document.querySelector(`.lightMode`).style, lightModeCss);

    let darkModeCss = {
        backgroundColor: `rgba(0, 41, 255, 1)`,
        display: `block`,
        width: `50px`,
        height: `50px`,
        borderRadius: `100px`,
        margin: `6px 6px 6px 0px`,
        cursor: `pointer`,
        border: `none`,
    };
    Object.assign(document.querySelector(`.darkMode`).style, darkModeCss);

    document.querySelector(`.lightModeSvg`).style.margin = `19px 33px 19px 21px`;

    document.querySelector(`.themeChangerButtonsContainer`).style.backgroundColor = `rgba(44, 44, 44, 1)`;

    document.querySelector(`.darkModeSvg`).style.margin = `13px`;

    document.querySelector(`.darkModeSvgPath`).style.stroke = `rgba(255, 255, 255, 1)`;

    document.querySelector(`.themeChangerContainer`).style.backgroundColor = `rgba(32, 32, 32, 1)`;

    document.body.style.backgroundColor = `rgba(32, 32, 32, 1)`;
};


function toggleLightMode() {

    let lightModeCss = {
        cursor: `pointer`,
        display: `block`,
        width: `50px`,
        height: `50px`,
        borderRadius: `100px`,
        backgroundColor: `rgba(0, 41, 255, 1)`,
        border: `none`,
        margin: `6px 32px 6px 8px`
    };
    Object.assign(document.querySelector(`.lightMode`).style, lightModeCss);

    document.querySelector(`.lightModeSvg`).style.margin = `13px`

    let darkModeCss = {
        cursor: ``,
        display: `contents`
    };
    Object.assign(document.querySelector(`.darkMode`).style, darkModeCss);

    document.querySelector(`.darkModeSvg`).style.margin = `19px 20px 19px 0px`;

    document.querySelector(`.themeChangerButtonsContainer`).style.backgroundColor = `rgba(255, 255, 255, 1)`;

    document.querySelector(`.darkModeSvgPath`).style.stroke = `#bababa`;

    document.querySelector(`.themeChangerContainer`).style.backgroundColor = `rgba(226, 224, 224, 1)`;

    document.body.style.backgroundColor = `rgba(226, 224, 224, 1)`;
}
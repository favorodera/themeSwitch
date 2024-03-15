`strict`

document.querySelector(`.lightMode`).style.cursor = `pointer`

function darkMode() {
    document.querySelector(`.lightMode`);
    let lightModeCss = {
        backgroundColor: `rgba(255, 255, 255, 1)`,
        cursor: `initial`,
        display:`contents`,
        marginLeft: `21px`,
        marginRight: `33px`,
    };
    Object.assign(document.querySelector(`.lightMode`).style, lightModeCss )
document.querySelector(`.darkMode`).style.backgroundColor = `rgba(0, 41, 255, 1)`;
document.querySelector(`.themeChangerButtonsContainer`).style.backgroundColor = `rgba(44, 44, 44, 1)`;
}
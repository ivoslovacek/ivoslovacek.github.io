// theme switcher
const themeToggleBtn = document.querySelector('.theme-toggle');
const buttonDark = document.querySelector('.button-dark');
const buttonLight = document.querySelector('.button-light');

const theme = localStorage.getItem('theme');

if (theme) {
    document.documentElement.classList.add(theme);
}

themeToggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-mode');
    if (document.documentElement.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light-mode');
        buttonDark.style.display = "block";
        buttonLight.style.display = "none";
    } else {
        localStorage.removeItem('theme', 'light-mode');
        buttonDark.style.display = "none";
        buttonLight.style.display = "block";
    }
});


//check if the device is a mobilephone
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const isMobile = isMobileDevice();

//change padding to accomodate smaller viewports
const container = document.getElementById("container");

function resizeWindow() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 700 || isMobile) {
        container.style.padding = '0% 5%';
    }
    else {
        container.style.padding = '0% 20%';
    }

    if (windowWidth < window.innerHeight) {
        document.documentElement.style.fontSize = "36px";
    }

}

resizeWindow();

window.addEventListener('resize', resizeWindow);

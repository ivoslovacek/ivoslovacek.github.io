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

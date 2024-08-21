const hamburger = document.getElementById('hamburger');
const title = document.getElementById('header-title');

hamburger.addEventListener('click', () => {
    document.body.classList.toggle('hamburger-active');
});

title.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    document.body.classList.toggle('hamburger-active');
});
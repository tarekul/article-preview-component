const body = document.body;
const shareButton = document.getElementsByClassName('share');
const social = document.querySelector('.social');

shareButton.addEventListener('click', (event) => {
    social.classList.toggle('active');
    event.stopPropagation();
})

body.addEventListener('click', () => {
    if (social.classList.contains('active')) {
        social.classList.remove('active');
    }
})
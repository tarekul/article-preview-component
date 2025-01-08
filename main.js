const body = document.body;
const shareButton = document.getElementById('share');
const social = document.querySelector('.social');

shareButton.addEventListener('click', (event) => {
    social.classList.add('active');
    event.stopPropagation();
})

body.addEventListener('click', () => {
    if (social.classList.contains('active')) {
        social.classList.remove('active');
    }
})
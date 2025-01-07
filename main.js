const shareButton = document.getElementById('share');
const social = document.querySelector('.social');

shareButton.addEventListener('click', () => {
    social.classList.toggle('active');
})
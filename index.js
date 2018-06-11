const shareBtn = document.querySelector('.share-btn');

shareBtn.addEventListener('click', () => {
    shareBtn.classList.add('share-btn--activated');
});

document.addEventListener('click', e => {
    if (!e.target.closest('.share-btn')) {
        shareBtn.classList.remove('share-btn--activated');
    }
});

document.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
        shareBtn.classList.remove('share-btn--activated');
    }
});

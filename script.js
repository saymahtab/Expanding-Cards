const imgArray = document.querySelectorAll('.panel');

imgArray.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add('active');
    });
});

function removeActiveClass() {
    imgArray.forEach(panel => {
        panel.classList.remove('active');
    });
};
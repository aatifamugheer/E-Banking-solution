// Add a delay to make buttons appear after a slight pause
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn, index) => {
        setTimeout(() => {
            btn.classList.add('fadeIn');
        }, index * 300); // delay buttons by 300ms
    });
});

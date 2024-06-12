document.querySelectorAll('.question-container').forEach(container => {
    container.addEventListener('click', () => {
        container.classList.toggle('expanded');
    });
});

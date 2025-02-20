const acordeon = document.querySelectorAll('.acordeon');

acordeon.forEach(acordeon => {
    acordeon.addEventListener('click', () => {
        acordeon.classList.toggle('open');
    });
});

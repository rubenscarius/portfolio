const acordeon = document.querySelectorAll('.acordeon');

acordeon.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
    });
});

const acordeon = document.querySelectorAll('.acordeon');

acordeon.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
        const icon = item.querySelector('#icon-arrow');
        icon.classList.toggle('rotate');
    });
});

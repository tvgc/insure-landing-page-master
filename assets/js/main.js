const header = document.querySelector('.js-header');

const toggleMenu = document.querySelector('.js-toggle-menu')

toggleMenu.addEventListener('click', e => {
    header.classList.toggle('is-active')
})

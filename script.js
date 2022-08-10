
const links = document.querySelectorAll('.link');
const desativedLinks = document.querySelectorAll('.link');
document.querySelector('.h').classList.add('selected')

links.forEach(e => {
    e.addEventListener('click', () => {
        const selected = e.className;
        e.className += ' selected';
        links.forEach((d) => {
            if (d.className !== e.className) {
                d.classList.remove('selected')
            }
        })
    })
})

const buttonBurger = document.querySelector('.burger');
const menuToggle = document.querySelector('.menu-toggle');

let isActive = false;
buttonBurger.addEventListener('click', () => {
    isActive = !isActive

    if (isActive) {
        buttonBurger.classList.add('actived-button')
        buttonBurger.classList.remove('desatived-button')
        menuToggle.style.right = '0'
    } else {
        buttonBurger.classList.remove('actived-button')
        buttonBurger.classList.add('desatived-button')
        menuToggle.style.right = '-200px'
    }
})
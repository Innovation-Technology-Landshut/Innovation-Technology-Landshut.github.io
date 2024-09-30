const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const content = document.querySelector('.content');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    content.classList.toggle('blur');
})

const observerright = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('überuns__visible');
        } else {
            entry.target.classList.remove('überuns__visible');
        }
    });
});

const observerleft = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('überuns__visible');
        } else {
            entry.target.classList.remove('überuns__visible');
        }
    });
});

const hiddenElementsright = document.querySelectorAll('.überuns__hidden.right');
hiddenElementsright.forEach((element) => observerright.observe(element));

const hiddenElementsleft = document.querySelectorAll('.überuns__hidden.left');
hiddenElementsleft.forEach((element) => observerleft.observe(element));
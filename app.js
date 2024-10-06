const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navbar= document.querySelector('.navbar');
const content = document.querySelector('.content');

menu.addEventListener('click', function(){
    navbar.classList.toggle('is-active');
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

document.addEventListener("DOMContentLoaded", function() {
    const cardContainer = document.getElementById('cardContainer');
    const firstCard = cardContainer.querySelector('.card');
    
    // Breite des Containers und der ersten Karte berechnen
    const containerWidth = cardContainer.offsetWidth;
    const firstCardWidth = firstCard.offsetWidth;
    
    // Berechne die Scrollposition, um die erste Karte zu zentrieren
    const scrollPosition = firstCard.offsetLeft - (containerWidth / 2) + (firstCardWidth / 2);
    
    // Setze die Scrollposition des Containers
    cardContainer.scrollLeft = scrollPosition;
});

document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.getElementById('cardContainer');
    const cards = cardContainer.querySelectorAll('.card');
    const dots = document.querySelectorAll('.dot');

    // Funktion, um den aktiven Punkt zu aktualisieren
    function updateActiveDot(index) {
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Scroll-Event überwachen
    cardContainer.addEventListener('scroll', function() {
        // Aktuelle Scroll-Position berechnen
        const scrollLeft = cardContainer.scrollLeft;
        const cardWidth = cards[0].offsetWidth + 16; // Kartenbreite + Abstand

        // Aktuelle Karte bestimmen
        const currentIndex = Math.round(scrollLeft / cardWidth);
        updateActiveDot(currentIndex);
    });

    // Klick-Event für die Punkte
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const cardWidth = cards[0].offsetWidth + 16;
            const scrollPosition = index * cardWidth;
            cardContainer.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        });
    });
});


function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

const images = [
    './assets/img1.jpg',
    './assets/img2.jpg',
    './assets/img3.jpg'
];


let currentIndex = 0;

function changeBackground() {
    document.querySelector(".slideshow-container").style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 2000); // Change every 5 seconds
changeBackground(); // Initial call


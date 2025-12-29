// ======================
// 1. Navigation & Menu
// ======================
const navLinks = document.querySelector(".nav-links");
const hamburger = document.querySelector(".hamburger");

function toggleMenu() {
    navLinks.classList.toggle("active");
    
    // Change hamburger icon to an 'X'
    if (navLinks.classList.contains("active")) {
        hamburger.innerHTML = "&times;"; // X icon
    } else {
        hamburger.innerHTML = "☰"; // Hamburger icon
    }
}

// Close menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.innerHTML = "☰";
    });
});

// ======================
// 2. Hero Slideshow
// ======================
const images = [
    './assets/img1.JPG', 
    './assets/img2.JPG',
    './assets/img3.JPG'
];

let currentIndex = 0;

function changeBackground() {
    const slideContainer = document.querySelector(".slideshow-container");
    if (slideContainer) {
        slideContainer.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }
}

setInterval(changeBackground, 3000); 
changeBackground();

// ======================
// 3. Stats Counter
// ======================
const counters = document.querySelectorAll('.counter');
const speed = 200;

const animateCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = Math.max(1, Math.ceil(target / speed));

            if (count < target) {
                counter.innerText = count + inc;
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

const statsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// ======================
// 4. Lightbox
// ======================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(element) {
    const imgSrc = element.querySelector("img").src;
    lightboxImg.src = imgSrc;
    lightbox.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    lightbox.style.display = "none";
    document.body.style.overflow = "auto";
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            closeLightbox();
        }
    });
}

// ======================
// 5. Scroll Reveal
// ======================
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

revealElements.forEach(element => {
    revealObserver.observe(element);
});
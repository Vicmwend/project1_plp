// Smooth Scrolling for Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple Fade-in Effect on Scroll
window.addEventListener("scroll", function () {
    document.querySelectorAll(".project-card").forEach((card) => {
        if (card.getBoundingClientRect().top < window.innerHeight - 50) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
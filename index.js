/* ═══════════════════════════════════════════════════
   INDEX.JS — Homepage testimonial slider
   ═══════════════════════════════════════════════════ */

let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');

function changeTestimonial(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Auto cycle testimonials every 5 seconds
setInterval(() => changeTestimonial(1), 5000);

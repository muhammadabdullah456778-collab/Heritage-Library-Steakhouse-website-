/* ═══════════════════════════════════════════════════
   COMMON.JS — Shared across ALL pages
   Mobile menu toggle, navbar scroll effect, scroll-to-top
   ═══════════════════════════════════════════════════ */

// Mobile hamburger menu toggle
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    if (nav.classList.contains("mobile-menu")) {
        nav.classList.remove("mobile-menu");
    } else {
        nav.classList.add("mobile-menu");
    }
}

// Close menu when a link is clicked (useful for smooth experience)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("navLinks").classList.remove("mobile-menu");
    });
});

// Navbar scroll effect + Scroll-to-top button visibility
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollBtn = document.getElementById('scrollToTop');

    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
        if (scrollBtn) scrollBtn.style.display = 'flex';
    } else {
        navbar.classList.remove('scrolled');
        if (scrollBtn) scrollBtn.style.display = 'none';
    }
});

/* ═══════════════════════════════════════════════════
   GALLERY-APP.JS — Lightbox functionality
   ═══════════════════════════════════════════════════ */

const modal = document.getElementById("myLightbox");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

function openLightbox(element) {
    const img = element.querySelector("img");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

function closeLightbox() {
    modal.style.display = "none";
}

// Close lightbox if clicking outside the image
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

/* ═══════════════════════════════════════════════════
   CONTACT-APP.JS — Contact form & Geolocation
   ═══════════════════════════════════════════════════ */

function handleContact(e) {
    e.preventDefault();
    alert('Thank you for reaching out to Herritage Library! We have received your inquiry and will get back to you shortly.');
    e.target.reset();
}

function getLiveLocation() {
    if (navigator.geolocation) {
        document.getElementById('locationBtn').innerHTML = '<i class="fas fa-spinner fa-spin"></i> Locating...';
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    document.getElementById('locationBtn').innerHTML = '<i class="fas fa-check"></i> Location Found! Showing Route...';
    let map = document.getElementById('mapIframe');
    map.src = `https://www.google.com/maps?saddr=${lat},${lon}&daddr=Karachi,Pakistan&output=embed`;
}

function showError(error) {
    document.getElementById('locationBtn').innerHTML = '<i class="fas fa-location-arrow"></i> Get Live Location & Route';
    switch (error.code) {
        case error.PERMISSION_DENIED: alert("User denied the request for Geolocation."); break;
        case error.POSITION_UNAVAILABLE: alert("Location information is unavailable."); break;
        case error.TIMEOUT: alert("The request to get user location timed out."); break;
        default: alert("An unknown error occurred.");
    }
}

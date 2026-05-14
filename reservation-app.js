/* ═══════════════════════════════════════════════════
   RESERVATION-APP.JS — Reservation form handler
   ═══════════════════════════════════════════════════ */

function handleReservation(e) {
    e.preventDefault();
    alert('Your reservation has been successfully placed! We will send a confirmation message shortly.');
    e.target.reset();
}

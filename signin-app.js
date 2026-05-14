/* ═══════════════════════════════════════════════════
   SIGNIN-APP.JS — Auth tab switching & form handling
   ═══════════════════════════════════════════════════ */

function switchTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    document.getElementById('successMsg').style.display = 'none';

    if (tab === 'signin') {
        document.querySelectorAll('.auth-tab')[0].classList.add('active');
        document.getElementById('signinForm').classList.add('active');
    } else {
        document.querySelectorAll('.auth-tab')[1].classList.add('active');
        document.getElementById('signupForm').classList.add('active');
    }
}

function handleAuth(e, action) {
    e.preventDefault();
    const msgBox = document.getElementById('successMsg');
    msgBox.textContent = `${action} Successful! Welcome to Herritage Library.`;
    msgBox.style.display = 'block';
    e.target.reset();

    // Redirect to dashboard after sign-in
    if (action === 'Sign In') {
        setTimeout(() => { window.location.href = 'dashboard.html'; }, 1500);
    } else {
        // After sign-up, switch to sign-in tab
        setTimeout(() => {
            msgBox.style.display = 'none';
            switchTab('signin');
        }, 3000);
    }
}

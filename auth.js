// auth.js
// Handles both signup (with profile picture) and signin forms

document.addEventListener('DOMContentLoaded', () => {
  const signInForm = document.getElementById('signinForm');
  const signUpForm = document.getElementById('signupForm');

  function showError(id, message) {
    const el = document.getElementById(id);
    if (el) el.textContent = message;
  }

  function clearErrors() {
    document.querySelectorAll('.error').forEach(e => e.textContent = '');
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // ─────── SIGN UP ───────
  if (signUpForm) {
    signUpForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      clearErrors();

      const pictureEl = document.getElementById('picture');
      const file = pictureEl && pictureEl.files[0];
      const name     = document.getElementById('name').value.trim();
      const email    = document.getElementById('email').value.trim();
      const phone    = document.getElementById('phone').value.trim();
      const password = document.getElementById('password').value;

      let valid = true;
      if (!file) {
        showError('pictureError', 'Profile picture is required');
        valid = false;
      }
      if (!name) {
        showError('nameError', 'Name is required'); valid = false;
      }
      if (!validateEmail(email)) {
        showError('emailError', 'Please enter a valid email'); valid = false;
      }
      if (!/^\d{11}$/.test(phone)) {
        showError('phoneError', 'Phone must be 11 digits'); valid = false;
      }
      if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters'); valid = false;
      }
      if (!valid) return;

      // Build FormData to include file and fields
      const formData = new FormData(signUpForm);

      try {
        const res = await fetch('/api/signup', {
          method: 'POST',
          credentials: 'include',
          body: formData
        });
        const data = await res.json();
        if (!res.ok) {
          // Show server-side error under email field
          showError('emailError', data.error || 'Sign up failed');
          return;
        }
        // On success, redirect to sign-in page
        window.location.href = 'signin.html';
      } catch (err) {
        alert('Network error: ' + err.message);
      }
    });
  }

  // ─────── SIGN IN ───────
  if (signInForm) {
    signInForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      clearErrors();

      const email    = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      let valid = true;
      if (!validateEmail(email)) {
        showError('emailError', 'Please enter a valid email'); valid = false;
      }
      if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters'); valid = false;
      }
      if (!valid) return;

      try {
        const res  = await fetch('/api/login', {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        const user = await res.json();
        if (!res.ok) {
          showError('emailError', user.error || 'Sign in failed');
          return;
        }
        // On success, redirect to home page
        window.location.href = 'index.html';
      } catch (err) {
        alert('Network error: ' + err.message);
      }
    });
  }
});

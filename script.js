// Select main wrapper
const wrapper = document.querySelector('.wrapper');

// Select links
const loginLink = document.querySelectorAll('.login-link'); 
const signupLink = document.querySelector('.signup-link');
const forgotLink = document.querySelector('.forgot-link');

// Select buttons
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Switch to Signup 
signupLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

// Switch back to Login (para sa mga login links) 
loginLink.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.remove('active');
    wrapper.classList.remove('active-forgot');
  });
});

// Open Popup
btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});

// Close Popup
iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
  wrapper.classList.remove('active');
  wrapper.classList.remove('active-forgot');
});

// Switch to Forgot Password 
forgotLink.addEventListener('click', (e) => {
  e.preventDefault();
  wrapper.classList.add('active-forgot');
});

// Forgot Password Validation 
const forgotForm = document.getElementById('forgotForm');
const newPassword = document.getElementById('newPassword');
const confirmPassword = document.getElementById('confirmPassword');

forgotForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (newPassword.value !== confirmPassword.value) {
    alert('New password and Confirm password do not match!');
    return;
  }

  alert('Password reset successful!');
  // add backend logic para maupdate ung password
});

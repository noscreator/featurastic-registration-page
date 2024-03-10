// /js/main.js

function registerUser(event) {
  event.preventDefault();

  // Fetch user input
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Add your registration logic here
  // For example, you might want to send this data to the server for user creation

  // Display a message or redirect the user after successful registration
 //  console.log('Registration successful! Redirecting to login page...');
  // window.location.href = 'login.html';
}

// Add event listener to the registration form
document.getElementById('registration-Form').addEventListener('submit', registerUser);



// Wait for the DOM content to be fully loaded before initializing the app
document.addEventListener('DOMContentLoaded', initApp);

// Function to initialize the app
function initApp() {
  // Get references to the password input and password toggle button
  const passwordInput = document.getElementById('password');
  const passwordToggle = document.getElementById('passwordToggle');

  // Add click event listener to the password toggle button
  passwordToggle.addEventListener('click', () => {
    // Toggle between password and text types for the password input
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text'; // Show password
      passwordToggle.innerHTML = getSVGUnlocked(); // Change toggle icon to unlocked
    } else {
      passwordInput.type = 'password'; // Hide password
      passwordToggle.innerHTML = getSVGLocked(); // Change toggle icon to locked
    }
  });
}

// Function to get SVG markup for a locked icon
function getSVGLocked() {
  return `
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="#05F1FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 14c-.5-.6-.9-1.3-1-2 0-1 4-6 9-6m7.6 3.8A5 5 0 0 1 21 12c0 1-3 6-9 6h-1m-6 1L19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  `;
}

// Function to get SVG markup for an unlocked icon
function getSVGUnlocked() {
  return `
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path stroke="#05F1FF" stroke-width="1" d="M21 12c0 1.2-4 6-9 6s-9-4.8-9-6c0-1.2 4-6 9-6s9 4.8 9 6Z" />
      <path stroke="#05F1FF" stroke-width="1" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  `;
}


// /js/registration.js

function registerUser() {
  
  // Fetch user input
  const usernameInput = document.getElementById('username');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  // Add your registration logic here
  // For example, you might want to send this data to the server for user creation

  // Display a message or redirect the user after successful registration
  //  console.log('Registration successful! Redirecting to login page...');
  // window.location.href = 'login.html';



  // Get values from form inputs
  const email = emailInput.value.trim();
  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  // Simple validation: Ensure all fields are non-empty
  if (email === '' || username === '' || password === '') {
    alert('Please fill in all fields');
    return false;
  }

  // Additional validation logic
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address');
    return false;
  }

  if (!isValidUsername(username)) {
    alert('Username must be at least 3 characters long');
    return false;
  }

  if (!isValidPassword(password)) {
    alert('Password must be at least 8 characters long');
    return false;
  }

  // Display success message (replace this with actual registration logic)
  alert('Registration successful!');

  // Optional: Reset form inputs
  emailInput.value = '';
  usernameInput.value = '';
  passwordInput.value = '';

  // Prevent form submission to the server
  return false;
}

// Helper functions for additional validation
function isValidEmail(email) {
  // Simple email validation using regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidUsername(username) {
  // Ensure the username is at least 3 characters long
  return username.length >= 3;
}

function isValidPassword(password) {
  // Ensure the password is at least 8 characters long
  return password.length >= 8;
}

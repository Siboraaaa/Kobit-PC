/*
 * Kobit-PC - Main JavaScript File
 * This file contains simple interactive features for the website
 * All code is commented for easy understanding
 */

// Wait for the page to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', function () {
  // ============================================
  // CONTACT FORM VALIDATION
  // ============================================
  // Get the contact form element
  const contactForm = document.getElementById('contactForm');

  // Check if the form exists on the page (only on contact.html)
  if (contactForm) {
    // Add an event listener for when the form is submitted
    contactForm.addEventListener('submit', function (event) {
      // Prevent the form from submitting normally (since we have no backend)
      event.preventDefault();

      // Get form input values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Simple validation check
      if (name && email && message) {
        // Show success message using alert
        alert(
          'Thank you for your message, ' +
            name +
            '! We will get back to you soon.\n\n'
        );

        // Reset the form after submission
        contactForm.reset();
      } else {
        // Show error message if validation fails
        alert('Please fill in all required fields.');
      }
    });
  }

  // ============================================
  // BUTTON CLICK ALERT (Example)
  // ============================================
  // This function shows an alert when a button with class "sv-alert-btn" is clicked
  // You can add this class to any button to use this feature
  const alertButtons = document.querySelectorAll('.sv-alert-btn');

  alertButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      alert('Button clicked! This is a simple JavaScript interaction.');
    });
  });

  // ============================================
  // CONSOLE LOG (For debugging)
  // ============================================
  // This message appears in the browser console to confirm JavaScript is loaded
  console.log('Kobit PC website - JavaScript loaded successfully!');

  // ============================================
  // SIMPLE BUTTON CLICK EXAMPLE
  // ============================================
  // This is a simple example of how JavaScript can interact with buttons
  // You can add the class "sv-alert-btn" to any button to make it show an alert when clicked
});

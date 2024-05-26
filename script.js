document.addEventListener('DOMContentLoaded', () => {
    // Theme switcher logic
    const themeSwitch = document.getElementById('checkbox');
    themeSwitch.addEventListener('change', function() {
        document.body.classList.toggle('dark-theme');
    });

    // Log in link event
    document.getElementById('login-link-overlay').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        document.getElementById('overlay-login').style.display = 'block';
        document.getElementById('overlay').style.display = 'none'; // Hide the signup overlay
    });

    // Get Started button event
    document.getElementById('get-started').addEventListener('click', function() {
        document.getElementById('overlay').style.display = 'block';
    });

    // Close overlay event for signup
    document.getElementById('close-overlay').addEventListener('click', function() {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('email').value = ''; // Clear email input
        document.getElementById('password').value = ''; // Clear password input
    });

    // Log in button event
    document.getElementById('login-link').addEventListener('click', function() {
        document.getElementById('overlay-login').style.display = 'block';
    });

    // Close overlay event for login
    document.getElementById('close-overlay-login').addEventListener('click', function() {
        document.getElementById('overlay-login').style.display = 'none';
        document.getElementById('login-email').value = ''; // Clear email input
        document.getElementById('login-password').value = ''; // Clear password input
    });

    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Redirect to spreadsheet.html
        window.location.href = "spreadsheet.html";
    });
});

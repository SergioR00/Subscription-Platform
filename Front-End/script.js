document.addEventListener('DOMContentLoaded', function() {
    // Handle dark/light mode toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        });
    }

    // Form validation for signup
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // In a real app, you would submit the form data to your server here
            window.location.href = '/payment.html';
        });
    }

    // Form validation for login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real app, you would validate credentials with your server here
            window.location.href = '/';
        });
    }

    // Form validation for payment
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real app, you would process the payment here
            // Show success message and redirect
            alert('Payment successful! Thank you for your subscription.');
            window.location.href = '/dashboard.html';
        });
    }

    // Credit card input formatting
    const cardNumber = document.getElementById('card-number');
    if (cardNumber) {
        cardNumber.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s+/g, '');
            if (value.length > 0) {
                value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
            }
            e.target.value = value;
        });
    }

    const cardExpiry = document.getElementById('card-expiry');
    if (cardExpiry) {
        cardExpiry.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\//g, '');
            if (value.length > 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }
});
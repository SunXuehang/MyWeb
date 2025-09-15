// This file contains JavaScript code for interactive features of the personal website.

document.addEventListener('DOMContentLoaded', function() {
    // Example of a simple interaction: alert on button click
    const button = document.getElementById('contact-button');
    if (button) {
        button.addEventListener('click', function() {
            alert('Thank you for reaching out!');
        });
    }

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
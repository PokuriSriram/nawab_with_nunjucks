// Main JavaScript file
// Add any client-side JavaScript here

console.log('Nawabi Kitchens - Loaded');

// Example: Form enhancement, animations, etc.
document.addEventListener('DOMContentLoaded', () => {
    // Success message handling for contact form
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        alert('Thank you for your inquiry! We will contact you soon.');
    }
});

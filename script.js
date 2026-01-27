// ===== INITIALIZATION =====
// Wait for DOM to fully load before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');
    initializeEventListeners();
});

// ===== EVENT LISTENER SETUP =====
// Initialize all event listeners for interactive elements
function initializeEventListeners() {
    // Event listeners setup
}

// ===== SMOOTH SCROLLING =====
// Add smooth scroll behavior to all anchor links (links starting with #)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevent default link behavior
        e.preventDefault();
        // Get the target element based on the link's href attribute
        const target = document.querySelector(this.getAttribute('href'));
        // Scroll smoothly to the target element if it exists
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',  // Enables smooth animation
                block: 'start'       // Aligns target to top of viewport
            });
        }
    });
});

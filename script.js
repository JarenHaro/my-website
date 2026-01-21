// ===== DOM ELEMENTS =====
// Get reference to the contact button for event handling
const contactBtn = document.getElementById('contactBtn');

// ===== INITIALIZATION =====
// Wait for DOM to fully load before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');
    initializeEventListeners();
});

// ===== EVENT LISTENER SETUP =====
// Initialize all event listeners for interactive elements
function initializeEventListeners() {
    // Add click handler to contact button if it exists
    if (contactBtn) {
        contactBtn.addEventListener('click', handleContactClick);
    }
}

// ===== EVENT HANDLERS =====
// Handle contact button click - displays alert with contact information
function handleContactClick() {
    alert('Thank you for your interest! Please email me at: contact@example.com');
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

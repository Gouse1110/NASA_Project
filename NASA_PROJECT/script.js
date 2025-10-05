document.addEventListener('DOMContentLoaded', () => {

    // Setup Intersection Observer for scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the section comes into view, make it visible
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
                // Stop observing after it's visible once
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // Triggers when 15% of the element is visible
    });

    // Observe all main content sections (excluding the hero)
    document.querySelectorAll('section, footer').forEach(element => {
        // We added the 'hidden' class to these in the HTML for the initial state
        observer.observe(element);
    });

    // You can add logic for a scroll-to-top button here if you create one in HTML
});
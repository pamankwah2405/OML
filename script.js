git document.addEventListener("DOMContentLoaded", () => {
    // --- Animated Stats Counter ---
    const counters = document.querySelectorAll('[data-target]');
    if (counters.length > 0) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute('data-target');
                    let current = 0;
                    const duration = 2000; // 2 seconds
                    const increment = target / (duration / 16); // ~60fps

                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target; // Ensure it ends on the exact target
                        }
                    };
                    requestAnimationFrame(updateCounter);
                    observer.unobserve(counter); // Animate only once
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    // --- Modern ScrollReveal Animations ---
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',
            distance: '60px',
            duration: 1200,
            delay: 100,
            opacity: 0,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            reset: false, // Animations will only run once
            viewFactor: 0.2, // Element is revealed when 20% is visible
            mobile: true // Animations run on mobile devices
        });

        // General reveal for titles and cards
        sr.reveal('.section-title-dark, .section-title');
        sr.reveal('.oml-card, .service-tile, .value-card, .testimonial-card', { interval: 150 });
        sr.reveal('.how-we-help-item', { interval: 200 });
        sr.reveal('img.shadow-xl, .img-container-constrained');
    }
});
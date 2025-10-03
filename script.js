document.addEventListener('DOMContentLoaded', function() {
    
    // --- Animated Stats Counter ---
    const statsSection = document.getElementById('stats');
    const statItems = document.querySelectorAll('.stat-item h3');

    const animateCounter = (element) => {
        const target = +element.getAttribute('data-target');
        const duration = 2000; // 2 seconds
        const stepTime = Math.abs(Math.floor(duration / target));
        let current = 0;

        const timer = setInterval(() => {
            current += 1;
            element.innerText = current;
            if (current === target) {
                clearInterval(timer);
            }
        }, stepTime);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statItems.forEach(item => animateCounter(item));
                observer.unobserve(statsSection); // Animate only once
            }
        });
    }, { threshold: 0.5 });

    observer.observe(statsSection);

    // --- ScrollReveal Animations ---
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            distance: '50px',
            duration: 1000,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            reset: false // Animations will only run once
        });

        // Reveal animations for different sections
        sr.reveal('.section-title', { origin: 'top' });
        sr.reveal('.section-subtitle', { origin: 'top', delay: 100 });
        sr.reveal('.about-us-image', { origin: 'left' });
        sr.reveal('.service-card', { interval: 150, origin: 'bottom' });
        sr.reveal('.case-study-card', { interval: 150, origin: 'bottom' });
        sr.reveal('.process-step', { interval: 150, origin: 'bottom' });
        sr.reveal('.stat-item', { interval: 150, origin: 'bottom' });
        sr.reveal('.testimonial-card', { interval: 150, origin: 'bottom' });
        sr.reveal('.value-card', { interval: 150, origin: 'bottom' });
        sr.reveal('.team-card', { interval: 150, origin: 'bottom' });
        sr.reveal('.insight-card', { interval: 150, origin: 'bottom' });
        sr.reveal('#contact > .container > .grid > div:first-child', { origin: 'left' });
        sr.reveal('#contact > .container > .grid > div:last-child', { origin: 'right' });
    }
});
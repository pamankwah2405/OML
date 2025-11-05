document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.counter-value');

    if (counters.length === 0) {
        console.warn("No elements with class 'counter-value' found for the counting animation.");
        return;
    }

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // Animation duration in milliseconds
        let startTimestamp = null;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = Math.floor(progress * target);
            
            counter.innerText = currentValue;

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                counter.innerText = target; // Ensure it ends on the exact target
            }
        };

        window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // When the element is in view
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                // Stop observing the element once the animation has been triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // relative to the viewport
        threshold: 0.1 // trigger when 10% of the element is visible
    });

    // Observe each counter
    counters.forEach(counter => {
        observer.observe(counter);
    });
});
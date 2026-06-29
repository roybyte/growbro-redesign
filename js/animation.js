// Scroll Reveal Animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });
}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

/* ===================================
   SCROLL REVEAL
=================================== */

const revealElements = document.querySelectorAll(
    "section, .feature-card, .workflow-card, .pricing-card, .testimonial-card, .faq-item"
);

const revealOnScroll = () => {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((element, index) => {

        const top = element.getBoundingClientRect().top;

        if (top < triggerBottom) {
            element.classList.add("reveal");
            element.classList.add("active");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
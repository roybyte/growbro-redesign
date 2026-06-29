/* ==========================================
   GROWBRO REDESIGN
   SCRIPT.JS
==========================================*/

// ===============================
// Navbar Shadow on Scroll
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.background = "rgba(11,15,25,.92)";
        header.style.backdropFilter = "blur(20px)";
        header.style.boxShadow = "0 10px 35px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(11,15,25,.75)";
        header.style.boxShadow = "none";

    }

});

// ===============================
// Dashboard Hover Effect
// ===============================

const dashboard = document.querySelector(".dashboard-card");

if (dashboard) {

    dashboard.addEventListener("mousemove", (e) => {

        const rect = dashboard.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height / 2) / 30;
        const rotateY = (x - rect.width / 2) / 18;

        dashboard.style.transform =
            `perspective(1400px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    dashboard.addEventListener("mouseleave", () => {

        dashboard.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    });

}

// ===============================
// Fade Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(
    ".feature-card, .workflow-card, .dashboard-card"
).forEach(el => observer.observe(el));

// ===============================
// Button Ripple Effect
// ===============================

const buttons = document.querySelectorAll(".primary-btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

const glow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animateGlow() {

    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;

    glow.style.left = currentX + "px";
    glow.style.top = currentY + "px";

    requestAnimationFrame(animateGlow);

}

animateGlow();

/* ==========================
   SMOOTH SCROLL + ACTIVE NAV
========================== */

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1000);

});

/* ==========================
   MOBILE MENU
========================== */

const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});
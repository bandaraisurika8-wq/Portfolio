
/* ========================================
   MOBILE NAVIGATION
======================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Open / close mobile menu
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    // Close menu when clicking navigation link
    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        });

    });
}


/* ========================================
   SCROLL REVEAL ANIMATIONS
======================================== */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.1
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("active");
    });

}


/* ========================================
   PROJECT FILTERING
======================================== */

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active style from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Activate clicked button
        button.classList.add("active");

        const selectedCategory = button.dataset.filter;

        projectCards.forEach(card => {

            const categories = card.dataset.category.split(" ");

            const shouldShow =
                selectedCategory === "all" ||
                categories.includes(selectedCategory);

            card.classList.toggle("is-hidden", !shouldShow);

        });

    });

});

/* =====================================
   FLOATING STARS / FIREFLIES ANIMATION
   ===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const starsContainer =
        document.getElementById("stars-background");

    if (!starsContainer) return;

    // Prevent duplicate stars
    starsContainer.replaceChildren();

    // Reduce particles on smaller screens
    const numberOfStars =
        window.innerWidth < 768 ? 35 : 80;

    const colors = [
        "#ffffff",
        "#c4b5fd",
        "#a78bfa",
        "#93c5fd"
    ];

    for (let i = 0; i < numberOfStars; i++) {

        const star = document.createElement("span");

        star.classList.add("firefly");

        // Random star size
        const size = Math.random() * 3 + 1;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        // Random color
        const color =
            colors[Math.floor(Math.random() * colors.length)];

        star.style.backgroundColor = color;

        // Random movement
        const moveX = Math.random() * 120 - 60;
        const moveY = Math.random() * 120 - 60;

        star.style.setProperty("--move-x", `${moveX}px`);
        star.style.setProperty("--move-y", `${moveY}px`);

        // Random animation speed
        const duration = Math.random() * 8 + 6;

        star.style.setProperty(
            "--duration",
            `${duration}s`
        );

        // Different starting times
        star.style.setProperty(
            "--delay",
            `${Math.random() * -15}s`
        );

        starsContainer.appendChild(star);
    }

});




/* ===================================
SUSHEEL PORTFOLIO MAIN JS
=================================== */

document.addEventListener("DOMContentLoaded", () => {

```
console.log("Portfolio Loaded Successfully");

initializeAnimations();
initializeNavbar();
initializeSmoothScroll();
initializeActiveNav();
updateFooterYear();
```

});

/* ===================================
FADE-UP ANIMATIONS
=================================== */

function initializeAnimations() {

```
const elements = document.querySelectorAll(
    ".card, .timeline-item, .project-card, section h2"
);

elements.forEach(el => {
    el.classList.add("fade-up");
});

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

elements.forEach(el => {
    observer.observe(el);
});
```

}

/* ===================================
NAVBAR EFFECTS
=================================== */

function initializeNavbar() {

```
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});
```

}

/* ===================================
SMOOTH SCROLL
=================================== */

function initializeSmoothScroll() {

```
const links =
    document.querySelectorAll(
        'a[href^="#"]'
    );

links.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});
```

}

/* ===================================
ACTIVE NAVBAR LINK
=================================== */

function initializeActiveNav() {

```
const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});
```

}

/* ===================================
FOOTER YEAR
=================================== */

function updateFooterYear() {

```
const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}
```

}

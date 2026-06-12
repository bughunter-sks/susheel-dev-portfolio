/* =====================================================
SUSHEEL PORTFOLIO - MAIN JAVASCRIPT
Version: 2.0
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

```
console.log("Portfolio Loaded Successfully");

initializeAnimations();
initializeNavbar();
initializeSmoothScroll();
initializeActiveNavigation();
initializeCounters();
updateFooterYear();
```

});

/* =====================================================
FADE-UP ANIMATIONS
===================================================== */

function initializeAnimations() {

```
const elements = document.querySelectorAll(
    ".card, .timeline-item, .project-card, .skill-card, .contact-box"
);

if (!elements.length) return;

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);

elements.forEach(element => {

    element.classList.add("fade-up");

    observer.observe(element);

});
```

}

/* =====================================================
NAVBAR SCROLL EFFECT
===================================================== */

function initializeNavbar() {

```
const navbar = document.querySelector(".navbar");

if (!navbar) return;

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});
```

}

/* =====================================================
SMOOTH SCROLL
===================================================== */

function initializeSmoothScroll() {

```
const navLinks =
    document.querySelectorAll(
        '.nav-link[href^="#"]'
    );

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        function (e) {

            e.preventDefault();

            const targetId =
                this.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (!target) return;

            const navbar =
                document.querySelector(".navbar");

            const navbarHeight =
                navbar ?
                navbar.offsetHeight :
                80;

            const targetPosition =
                target.offsetTop -
                navbarHeight -
                10;

            window.scrollTo({

                top: targetPosition,
                behavior: "smooth"

            });

            /* Close mobile menu automatically */

            const navbarCollapse =
                document.querySelector(
                    ".navbar-collapse"
                );

            if (
                navbarCollapse &&
                navbarCollapse.classList.contains("show")
            ) {

                const bsCollapse =
                    bootstrap.Collapse.getInstance(
                        navbarCollapse
                    );

                if (bsCollapse) {

                    bsCollapse.hide();

                }

            }

        }
    );

});
```

}

/* =====================================================
ACTIVE NAVIGATION HIGHLIGHT
===================================================== */

function initializeActiveNavigation() {

```
const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");

if (!sections.length) return;

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 200;

        const sectionHeight =
            section.offsetHeight;

        if (

            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight

        ) {

            currentSection =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (

            link.getAttribute("href")
            === "#" + currentSection

        ) {

            link.classList.add("active");

        }

    });

});
```

}

/* =====================================================
COUNTER ANIMATION
===================================================== */

function initializeCounters() {

```
const counters =
    document.querySelectorAll(".counter");

if (!counters.length) return;

counters.forEach(counter => {

    const target =
        Number(counter.dataset.target);

    let current = 0;

    const increment =
        target / 100;

    function updateCounter() {

        if (current < target) {

            current += increment;

            counter.innerText =
                Math.ceil(current);

            requestAnimationFrame(
                updateCounter
            );

        } else {

            counter.innerText =
                target;

        }

    }

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        updateCounter();

                        observer.unobserve(
                            counter
                        );

                    }

                });

            },

            {
                threshold: 0.5
            }

        );

    observer.observe(counter);

});
```

}

/* =====================================================
FOOTER YEAR
===================================================== */

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

/* =====================================================
OPTIONAL: BACK TO TOP BUTTON
===================================================== */

// Future Enhancement:
//
// Add:
//
// <button id="backToTop">
// ↑
// </button>
//
// Then enable below code.
//

/*
const backToTop =
document.getElementById("backToTop");

window.addEventListener(
"scroll",
() => {

```
    if(window.scrollY > 500){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

}
```

);

backToTop.addEventListener(
"click",
() => {

```
    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

}
```

);
*/
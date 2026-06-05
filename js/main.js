/* ==========================
   PORTFOLIO SCRIPT
========================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log(
        "Welcome to Susheel Kumar Shukla Portfolio"
    );

    initializeAnimations();
    initializeNavbar();
    initializeSmoothScroll();

});

/* ==========================
   FADE ANIMATIONS
========================== */

function initializeAnimations(){

    const elements =
        document.querySelectorAll(
            ".card, .timeline-item, section h2"
        );

    elements.forEach(el => {
        el.classList.add("fade-up");
    });

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if(entry.isIntersecting){

                        entry.target.classList.add("show");

                    }

                });

            },
            {
                threshold:0.15
            }
        );

    elements.forEach(el => {
        observer.observe(el);
    });

}

/* ==========================
   NAVBAR SHADOW
========================== */

function initializeNavbar(){

    const navbar =
        document.querySelector(".navbar");

    window.addEventListener(
        "scroll",
        () => {

            if(window.scrollY > 50){

                navbar.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,.15)";

            }else{

                navbar.style.boxShadow =
                    "0 2px 10px rgba(0,0,0,.08)";
            }

        }
    );

}

/* ==========================
   SMOOTH NAVIGATION
========================== */

function initializeSmoothScroll(){

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    links.forEach(link => {

        link.addEventListener(
            "click",
            function(e){

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );

                if(target){

                    target.scrollIntoView({
                        behavior:"smooth"
                    });

                }

            }
        );

    });

}

/* ==========================
   CURRENT YEAR FOOTER
========================== */

const yearElement =
    document.getElementById("year");

if(yearElement){

    yearElement.textContent =
        new Date().getFullYear();

}

/* ==========================
   FUTURE GITHUB API SECTION
========================== */

// Future Enhancement:
//
// Fetch GitHub repositories automatically
//
// fetch(
// 'https://api.github.com/users/bughunter-sks/repos'
// )
//
// Then dynamically render projects
//
// Useful after you upload
// ML, CV and LLM repositories.
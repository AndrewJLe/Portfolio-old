function projectNavigation() {
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const projectSlides = document.querySelectorAll(".project");
    const projectSlideIcons = document.querySelectorAll(".project-slide-icon");
    const numberOfProjects = projectSlides.length;
    let slideNumber = 0;

    // Project Slider Next Button
    nextBtn.addEventListener("click", () => {
        projectSlides.forEach((slide) => {
            slide.classList.remove("active");
        });
        projectSlideIcons.forEach((projectSlideIcon) => {
            projectSlideIcon.classList.remove("active");
        })

        slideNumber++;

        if (slideNumber > numberOfProjects - 1) {
            slideNumber = 0;
        }

        projectSlides[slideNumber].classList.add("active");
        projectSlideIcons[slideNumber].classList.add("active");
    });

    // Project Slider Previous Button
    prevBtn.addEventListener("click", () => {
        projectSlides.forEach((slide) => {
            slide.classList.remove("active");
        });
        projectSlideIcons.forEach((projectSlideIcon) => {
            projectSlideIcon.classList.remove("active");
        })

        slideNumber--;

        if (slideNumber < 0) {
            slideNumber = numberOfProjects - 1;
        }

        projectSlides[slideNumber].classList.add("active");
        projectSlideIcons[slideNumber].classList.add("active");
    });
}

function hamburgerNavigation() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav__list");
    const navLinks = document.querySelectorAll('.nav__list li');

    // Hamburger Navigation Bar Toggle
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.2}s`
            }
        });

        // Burger Animation
        burger.classList.toggle("toggle");
    });
}

function resumeModal() {
    const openModal = document.querySelector(".resume-open-modal");
    const closeModal = document.querySelector(".resume-close-modal");
    const modal = document.querySelector(".resume-modal-container");
    openModal.onclick = function () {
        modal.style.display = "block";
    }
    closeModal.onclick = function () {
        modal.style.display = "none";
    }
}

function init() {

    // Prevent animations on resize
    let resizeTimer;
    window.addEventListener("resize", () => {
        document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove("resize-animation-stopper");
        }, 400);
    });

    projectNavigation();
    hamburgerNavigation();
    resumeModal();
}

init();
var typed = new Typed('#element', {
    strings: ['Software Developer', 'Web Developer', 'Full Stack Developer','Problem Solver', 'Tech Enthusiast'],
    typeSpeed: 50,
});

const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

scrollBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

window.addEventListener("scroll", function () {
    const skillsSection = document.querySelector(".skills-section");
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        document.querySelector(".java").style.width = "90%";
        document.querySelector(".python").style.width = "85%";
        document.querySelector(".mysql").style.width = "75%";
        document.querySelector(".web").style.width = "80%";
    }
});

const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    // Change icon
    if (document.body.classList.contains("light-mode")) {
        themeToggle.innerHTML = "☀";
    } else {
        themeToggle.innerHTML = "🌙";
    }

});
// Mobile menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    menuBtn.classList.toggle("active", isOpen);
    menuBtn.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuBtn.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Terminal typing effect — the one orchestrated motion moment on the page

const roles = [
    "building a web app",
    "tracing C++ by hand",
    "learning networking",
    "shipping side projects"
];

const typingEl = document.getElementById("typing");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let roleIndex = 0;
let charIndex = 0;

function typeRole(){
    const current = roles[roleIndex];

    if(charIndex < current.length){
        typingEl.textContent += current.charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 70);
    }else{
        setTimeout(eraseRole, 1400);
    }
}

function eraseRole(){
    const current = roles[roleIndex];

    if(charIndex > 0){
        typingEl.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 35);
    }else{
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 250);
    }
}

if(typingEl){
    if(prefersReducedMotion){
        typingEl.textContent = roles[0];
    }else{
        typeRole();
    }
}

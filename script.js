// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
}

// MOVING GRADIENT WAVE ON HOME PAGE
const mouseWave = document.getElementById("mouseWave");

if (mouseWave) {
  document.addEventListener("mousemove", (event) => {
    mouseWave.style.left = `${event.clientX}px`;
    mouseWave.style.top = `${event.clientY}px`;
  });
}

// SCROLL REVEAL
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// PAGE EXIT TRANSITION FOR INTERNAL LINKS
const internalLinks = document.querySelectorAll("a[href$='.html']");

internalLinks.forEach((link) => {
  link.addEventListener("click", function(event) {
    const target = this.getAttribute("href");

    if (!target || target.startsWith("#")) return;

    event.preventDefault();

    document.body.style.opacity = "0";
    document.body.style.transform = "scale(1.01)";
    document.body.style.transition = "opacity 0.55s ease, transform 0.55s ease";

    setTimeout(() => {
      window.location.href = target;
    }, 550);
  });
});

// CONTACT FORM
const demoForm = document.getElementById("demoForm");

if (demoForm) {
  demoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Demo request received. Later, connect this form to WhatsApp, Formspree, Firebase, Supabase, EmailJS, or Google Sheets.");
  });
}
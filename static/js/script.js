// Micro-interactions for terminal effect
document.addEventListener("mousemove", (e) => {
    const glow = document.querySelector(".terminal-glow");
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    if (glow) {
        glow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(6, 182, 212, 0.08) 0%, transparent 70%)`;
    }
});

// Typing effect simulation
const terminalTexts = [
    "status: online",
    "task: building_intelligence",
    "optimizing_neural_pathways...",
    "core_temp: nominal",
    "uptime: 99.999%",
];
let textIndex = 0;
const terminalDiv = document.querySelector(".text-left.font-code-md");

if (terminalDiv) {

    setInterval(() => {
        if (terminalDiv?.children.length > 8) {
            terminalDiv.removeChild(terminalDiv.children[0]);
        }
        const p = document.createElement("p");
        p.className =
            "text-on-surface-variant opacity-0 transition-opacity duration-500";
        p.innerHTML = `<span class="text-primary">></span> ${terminalTexts[textIndex]}`;
        terminalDiv.appendChild(p);
        setTimeout(() => p.classList.remove("opacity-0"), 10);
        textIndex = (textIndex + 1) % terminalTexts.length;
    }, 3000);
}









// about
// Simple micro-interaction for hover effects on tech tags
document.querySelectorAll(".tech-tag").forEach((tag) => {
    tag.addEventListener("mouseenter", () => {
        tag.style.transform = "translateY(-2px)";
    });
    tag.addEventListener("mouseleave", () => {
        tag.style.transform = "translateY(0)";
    });
});

// Sticky nav shadow on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 20) {
        header.classList.add("shadow-lg");
    } else {
        header.classList.remove("shadow-lg");
    }
});



// Custom Animation
const style = document.createElement('style');
style.textContent = `
            @keyframes slide {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(300%); }
            }
        `;
document.head.appendChild(style);
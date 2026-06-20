// Micro-interactions for terminal-like feel
document.querySelectorAll("button, a").forEach((el) => {
    el.addEventListener("mousedown", () => {
        el.classList.add("opacity-80", "scale-95");
    });
    el.addEventListener("mouseup", () => {
        el.classList.remove("opacity-80", "scale-95");
    });
});

// Simple scroll observer for nav
window.addEventListener("scroll", () => {
    const nav = document.getElementById("main-nav");
    if (window.scrollY > 50) {
        nav.classList.add("bg-surface/90", "backdrop-blur-xl", "py-1");
    } else {
        nav.classList.remove("bg-surface/90", "backdrop-blur-xl", "py-1");
    }
});

// Mock Search functionality
const searchInput = document.querySelector('input[type="text"]');
searchInput.addEventListener("input", (e) => {
    console.log(`Searching database for: ${e.target.value}`);
    // Implementation would filter card elements
});

// Simple micro-interaction for performance metric bars
document.querySelectorAll('.group').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const bars = card.querySelectorAll('.mt-md div');
        bars.forEach((bar, index) => {
            bar.style.transition = `height 0.3s ease ${index * 0.05}s`;
            const originalHeight = bar.offsetHeight;
            bar.style.height = (originalHeight + 5) + 'px';
            setTimeout(() => bar.style.height = originalHeight + 'px', 200);
        });
    });
});

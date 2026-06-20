// Contact
// Micro-interactions for terminal
const terminalOutput = document.querySelector('.terminal-glow p');
// Add subtle blinking effect to terminal prompt
setInterval(() => {
    const prompt = document.querySelector('.text-primary.opacity-70');
    if (prompt) {
        prompt.style.opacity = prompt.style.opacity === '0.2' ? '0.7' : '0.2';
    }
}, 800);

// Form submission animation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const btnText = btn.querySelector('span:first-child');
    btnText.innerText = 'TRANSMITTING...';
    btn.classList.add('animate-pulse');

    setTimeout(() => {
        btnText.innerText = 'SENT_SUCCESSFULLY';
        btn.classList.remove('animate-pulse');
        btn.classList.add('bg-on-tertiary-container');
        form.reset();
    }, 2000);
});
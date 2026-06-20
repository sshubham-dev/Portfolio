// blog
// Subtle cursor tracking glow effect
document.addEventListener('mousemove', (e) => {
    const glow = document.createElement('div');
    // This is just a conceptual placeholder for more complex effects
    // To maintain performance, we only use CSS for major animations
});

// Hover effect for project cards
const cards = document.querySelectorAll('article');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});



// blog view
// Interactive Quantization Calculator
const calcData = {
    fp16: { vram: "14.0 GB", speed: "1.0x", insight: "Current: Native model size. Standard for server-side inference." },
    int8: { vram: "7.2 GB", speed: "1.8x", insight: "Balanced: 50% memory reduction with <1% perplexity hit." },
    int4: { vram: "3.6 GB", speed: "3.2x", insight: "Optimized: Maximum efficiency for mobile & edge deployments." }
};

function updateCalc(mode) {
    document.querySelectorAll('.calc-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    document.getElementById('vram-res').textContent = calcData[mode].vram;
    document.getElementById('speed-res').textContent = calcData[mode].speed;
    document.getElementById('insight-res').textContent = calcData[mode].insight;

    // Sync with sidebar telemetry
    document.getElementById('vram-ticker').textContent = `VRAM_USE: ${calcData[mode].vram}`;
}

// Copy Code Functionality
function copyCode(btn) {
    const code = document.getElementById('code-snippet').innerText;
    navigator.clipboard.writeText(code);
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span class="material-symbols-outlined text-[14px]">check</span> COPIED';
    setTimeout(() => {
        btn.innerHTML = originalText;
    }, 2000);
}

// Simulated Run
function runSim(btn) {
    const output = document.getElementById('terminal-output');
    output.classList.remove('hidden');
    btn.innerHTML = '<span class="material-symbols-outlined text-[16px] animate-spin">refresh</span> RUNNING...';
    setTimeout(() => {
        btn.innerHTML = '<span class="material-symbols-outlined text-[16px]">play_arrow</span> RE_RUN';
    }, 1500);
}

// Scroll-triggered Telemetry
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const teleLeft = document.getElementById('telemetry-left');
    const teleRight = document.getElementById('telemetry-right');
    const teleNode = document.getElementById('telemetry-node');

    if (scrollPos > 300) {
        teleLeft.classList.add('visible');
        teleRight.classList.add('visible');
        teleNode.classList.add('visible');
    } else {
        teleLeft.classList.remove('visible');
        teleRight.classList.remove('visible');
        teleNode.classList.remove('visible');
    }
});
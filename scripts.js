document.addEventListener('DOMContentLoaded', () => {
    console.log("Futuristic College Event Website Loaded!");
    // Add futuristic interactive animations
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.transform = `translate(-${x / 30}px, -${y / 30}px)`;
        });
    });
});

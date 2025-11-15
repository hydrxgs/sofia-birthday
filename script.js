// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Heart Animation
    const canvas = document.getElementById('heartsCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hearts = [];

    function createHeart() {
        const heart = {
            x: Math.random() * canvas.width,
            y: canvas.height,
            size: Math.random() * 20 + 10,
            speed: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.3
        };
        hearts.push(heart);
    }

    function drawHearts() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        hearts.forEach((heart, index) => {
            heart.y -= heart.speed;
            heart.opacity -= 0.002;
            if (heart.opacity <= 0 || heart.y < 0) {
                hearts.splice(index, 1);
                return;
            }
            ctx.beginPath();
            ctx.fillStyle = rgba(183, 110, 121, ${heart.opacity}); // Rose Gold
            ctx.moveTo(heart.x, heart.y);
            ctx.quadraticCurveTo(heart.x - heart.size / 2, heart.y - heart.size / 2, heart.x - heart.size, heart.y);
            ctx.quadraticCurveTo(heart.x - heart.size * 1.5, heart.y + heart.size, heart.x, heart.y + heart.size * 1.5);
            ctx.quadraticCurveTo(heart.x + heart.size * 1.5, heart.y + heart.size, heart.x + heart.size, heart.y);
            ctx.quadraticCurveTo(heart.x + heart.size / 2, heart.y - heart.size / 2, heart.x, heart.y);
            ctx.fill();
        });
    }

    function animate() {
        drawHearts();
        if (Math.random() < 0.1) createHeart();
        requestAnimationFrame(animate);
    }

    animate();

    // Button Interaction
    document.querySelector('.heart-btn').addEventListener('click', () => {
        alert('Sofia, I love you forever and always! ❤️');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
    document.getElementById('year').textContent = new Date().getFullYear();
});

particlesJS("particles-js", {
    particles: {
        number: { value: 100 },
        size: { value: 3 },
        move: { speed: 2 },
        line_linked: { enable: true, distance: 150 }
    }
});
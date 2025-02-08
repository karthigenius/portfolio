document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
    document.getElementById('year').textContent = new Date().getFullYear();
});

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 60,  // Reduced particle count for a cleaner look
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": ["#ffffff", "#d4d4d4", "#a8a8a8"] // Subtle gradient effect
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.6,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.5,
          "opacity_min": 0.3,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 140,
        "color": "#cccccc",
        "opacity": 0.5,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2, // Slower for a smooth, professional feel
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab" // More engaging than repulse
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        }
      },
      "modes": {
        "grab": {
          "distance": 180,
          "line_linked": {
            "opacity": 0.8
          }
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  }
);
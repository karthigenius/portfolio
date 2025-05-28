'use strict';
const showLoading = () => {
    const loading = document.createElement('div');
    loading.className = 'loading';
    document.body.appendChild(loading);
    return loading;
};

const hideLoading = (loading) => {
    loading.style.opacity = '0';
    setTimeout(() => loading.remove(), 500);
};
const createProgressBar = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    document.body.appendChild(progressBar);
    return progressBar;
};

const updateProgressBar = (progressBar) => {
    if (!progressBar) return;
    
    const windowHeight = window.innerHeight;
    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Calculate scroll percentage
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    progressBar.style.width = `${Math.min(scrollPercentage, 100)}%`;
};

// Smooth scroll to section
const smoothScroll = (target) => {
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
};

// Intersection Observer for animations
const createIntersectionObserver = () => {
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    return observer;
};

// Theme management
const ThemeManager = {
    STORAGE_KEY: 'portfolio-theme',
    DARK_CLASS: 'dark',
    
    init() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.mobileThemeToggle = document.getElementById('mobile-theme-toggle');
        this.htmlElement = document.documentElement;
        
        // Set initial theme without transition
        document.body.style.transition = 'none';
        this.setTheme(this.getStoredTheme() || this.getPreferredTheme());
        document.body.offsetHeight; // Force reflow
        document.body.style.transition = '';
        
        // Add event listeners for both desktop and mobile toggles
        const toggleTheme = () => this.toggleTheme();
        this.themeToggle.addEventListener('click', toggleTheme);
        this.mobileThemeToggle.addEventListener('click', toggleTheme);
        
        // Handle system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!this.getStoredTheme()) {
                this.setTheme(e.matches ? 'dark' : 'light');
            }
        });
    },
    
    getStoredTheme() {
        return localStorage.getItem(this.STORAGE_KEY);
    },
    
    getPreferredTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },
    
    setTheme(theme) {
        if (theme === 'dark') {
            this.htmlElement.classList.add(this.DARK_CLASS);
        } else {
            this.htmlElement.classList.remove(this.DARK_CLASS);
        }
        localStorage.setItem(this.STORAGE_KEY, theme);
        
        // Update both desktop and mobile buttons
        [this.themeToggle, this.mobileThemeToggle].forEach(button => {
            if (button) {
                button.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
                button.style.display = 'none';
                button.offsetHeight;
                button.style.display = '';
            }
        });
    },
    
    toggleTheme() {
        const currentTheme = this.htmlElement.classList.contains(this.DARK_CLASS) ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }
};

// Particles.js Configuration
const initParticles = () => {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#2563eb'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#2563eb',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
};

// Smooth Scroll
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
};

// Skill Progress Animation
const initSkillProgress = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const parentDiv = progressBar.closest('.skill-item');
                if (!parentDiv) return;

                const percentSpan = parentDiv.querySelector('span:last-child');
                if (!percentSpan) return;

                // Get the target width
                const targetWidth = percentSpan.textContent;
                if (!targetWidth) return;

                // Set initial width to 0
                progressBar.style.width = '0';
                // Force reflow
                progressBar.offsetWidth;
                // Set the target width to trigger animation
                progressBar.style.width = targetWidth;
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.2 });

    // Only observe progress bars that exist and have a valid parent
    document.querySelectorAll('.skill-progress').forEach(progress => {
        const parentDiv = progress.closest('.skill-item');
        if (!parentDiv) return;

        const percentSpan = parentDiv.querySelector('span:last-child');
        if (!percentSpan) return;

        const targetWidth = percentSpan.textContent;
        if (!targetWidth) return;

        progress.style.width = targetWidth;
        observer.observe(progress);
    });
};

// Back to Top Button
const initBackToTop = () => {
    const backToTop = document.getElementById('back-to-top');
    const scrollThreshold = 400;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// Simple contact form handling
const initContactForm = () => {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const subject = encodeURIComponent(formData.get('name'));
            const body = encodeURIComponent(formData.get('message'));
            window.location.href = `mailto:karthikeyanofficial24@gmail.com?subject=Portfolio Contact: ${subject}&body=${body}`;
        });
    }
};

// Update Copyright Year
const updateCopyright = () => {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
};

// Mobile Menu
const initMobileMenu = () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuButton.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuButton.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }
};

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const loading = showLoading();
    const progressBar = createProgressBar();
    const observer = createIntersectionObserver();

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Initialize features
    ThemeManager.init();
    initParticles();
    initSmoothScroll();
    initSkillProgress();
    initBackToTop();
    initContactForm();
    updateCopyright();
    initMobileMenu();

    // Add scroll event listener
    window.addEventListener('scroll', () => {
        updateProgressBar(progressBar);
    });

    // Hide loading screen
    window.addEventListener('load', () => {
        hideLoading(loading);
        document.body.classList.add('loaded');
    });
});
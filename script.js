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
            this.htmlElement.setAttribute('data-theme', 'dark');
        } else {
            this.htmlElement.classList.remove(this.DARK_CLASS);
            this.htmlElement.setAttribute('data-theme', 'light');
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

const initAnimations = () => {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    gsap.from('#hero h1', { duration: 1, y: 50, opacity: 0, ease: 'power3.out' });
    gsap.from('#hero p', { duration: 1, y: 50, opacity: 0, ease: 'power3.out', delay: 0.3 });
    gsap.fromTo('#hero .social-link', { y: 50, opacity: 0 }, { duration: 1, y: 0, opacity: 1, ease: 'power3.out', delay: 0.6, stagger: 0.2 });
    
    

    // Section Title Animation
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
            }
        });
    });

    // About Section Animation
    gsap.from('#about p', { duration: 1, y: 50, opacity: 0, ease: 'power3.out', stagger: 0.2, scrollTrigger: { trigger: '#about', start: 'top 60%' } });
    gsap.from('#about .btn-primary', { duration: 1, y: 50, opacity: 0, ease: 'power3.out', delay: 0.5, scrollTrigger: { trigger: '#about', start: 'top 60%' } });
    gsap.from('#about .btn-secondary', { duration: 1, y: 50, opacity: 0, ease: 'power3.out', delay: 0.7, scrollTrigger: { trigger: '#about', start: 'top 60%' } });

    // Experience Section Animation
    gsap.utils.toArray('.experience-card').forEach(card => {
        gsap.from(card, {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
            }
        });
    });

    // Projects Section Animation
    gsap.utils.toArray('.project-card').forEach(card => {
        gsap.from(card, {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
            }
        });
    });

    // Skills Section Animation
    gsap.utils.toArray('.skill-category-card').forEach(card => {
        gsap.from(card, {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
            }
        });
    });

    gsap.utils.toArray('.skill-progress').forEach(progress => {
        gsap.from(progress, {
            width: '0%',
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: progress,
                start: 'top 80%',
            }
        });
    });

    // Certificates Section Animation
    gsap.utils.toArray('#certificates .project-card').forEach(card => {
        gsap.from(card, {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
            }
        });
    });

    // Contact Section Animation
    gsap.from('#contact p', { duration: 1, y: 50, opacity: 0, ease: 'power3.out', scrollTrigger: { trigger: '#contact', start: 'top 60%' } });
    gsap.from('#contact .contact-link', { duration: 1, y: 50, opacity: 0, ease: 'power3.out', stagger: 0.2, scrollTrigger: { trigger: '#contact', start: 'top 60%' } });
    gsap.from('#contact-form', { duration: 1, y: 50, opacity: 0, ease: 'power3.out', delay: 0.5, scrollTrigger: { trigger: '#contact-form', start: 'top 80%' } });
};

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

    // Initialize features
    ThemeManager.init();
    initParticles();
    initSmoothScroll();
    initAnimations();

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

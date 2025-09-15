import { ThemeManager } from './components/themeManager.js';
import { initSmoothScroll } from './components/smoothScroll.js';
import { initAnimations } from './components/animations.js';
import { initParticles } from './components/particles.js';

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

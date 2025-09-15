export const initAnimations = () => {
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
    gsap.from('#about .stat-card', { duration: 1, y: 50, opacity: 0, ease: 'power3.out', stagger: 0.2, scrollTrigger: { trigger: '#about .stat-card', start: 'top 80%' } });

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
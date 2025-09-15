export const ThemeManager = {
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
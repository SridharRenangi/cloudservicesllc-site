function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

// Use a single function to initialize everything
const initSite = () => {
    // --- Theme Logic ---
    const toggle = document.getElementById('modeToggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    if (toggle) {
        toggle.onclick = () => {
            const isNowDark = document.body.classList.toggle('dark');
            localStorage.setItem('theme', isNowDark ? 'dark' : 'light');
            window.dispatchEvent(new Event('storage'));
        };
    }

    // --- Mobile Menu Logic ---
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        // Remove any old listeners to prevent "double clicking"
        menuBtn.replaceWith(menuBtn.cloneNode(true));
        const newMenuBtn = document.querySelector('.mobile-menu-btn');

        newMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // prevent this click from immediately triggering the outside-click handler
            e.preventDefault();
            navLinks.classList.toggle('active');
            newMenuBtn.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
        });

        // Close menu when clicking anywhere outside the navbar
        document.addEventListener('click', (e) => {
            const navContainer = document.querySelector('.nav-container');
            if (navContainer && !navContainer.contains(e.target)) {
                navLinks.classList.remove('active');
                newMenuBtn.innerHTML = '☰';
            }
        });
    }
};

// Run on initial load
document.addEventListener('DOMContentLoaded', initSite);

// Sync theme across tabs
window.addEventListener('storage', () => {
    applyTheme(localStorage.getItem('theme'));
});
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
            e.preventDefault();
            navLinks.classList.toggle('active');
            newMenuBtn.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
        });
    }
};

// Run on initial load
document.addEventListener('DOMContentLoaded', initSite);

// Sync across tabs
window.addEventListener('storage', () => {
    applyTheme(localStorage.getItem('theme'));
});
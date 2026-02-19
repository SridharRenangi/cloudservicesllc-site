// Function to apply the theme visuals
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

document.addEventListener('DOMContentLoaded', () => {
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
        menuBtn.addEventListener('click', () => {
            // Toggle the visibility of the menu
            navLinks.classList.toggle('active');
            
            // Optional: Change the icon from ☰ to ✕ when open
            menuBtn.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
        });

        // Close menu when a link is clicked (useful for anchor tags)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuBtn.innerHTML = '☰';
            });
        });
    }

    window.addEventListener('storage', () => {
        applyTheme(localStorage.getItem('theme'));
    });
});
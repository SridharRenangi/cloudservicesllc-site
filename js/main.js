// This function handles the actual visual change
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('modeToggle');
    
    // 1. Check storage for existing preference, default to 'dark'
    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    // 2. Setup the click listener if the button exists on this page
    if (toggle) {
        toggle.onclick = () => {
            const isNowDark = document.body.classList.toggle('dark');
            const newTheme = isNowDark ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            
            // Sync with other open tabs of your site
            window.dispatchEvent(new Event('storage'));
        };
    }

    // 3. Sync across tabs
    window.addEventListener('storage', () => {
        const syncTheme = localStorage.getItem('theme');
        applyTheme(syncTheme);
    });

    console.log('Cloud Services LLC - Theme Engine Online');
});
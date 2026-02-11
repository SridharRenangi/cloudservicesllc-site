document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('modeToggle');
    const body = document.body;

    // 1. Check Local Storage for saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
    }

    // 2. Toggle Function
    toggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        
        // Save preference
        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    console.log('Cloud Services LLC - System Ready');
});
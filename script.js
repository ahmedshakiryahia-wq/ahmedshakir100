// ============= Dark Mode Toggle =============
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const isDarkMode = localStorage.getItem('darkMode') === 'true';

// تطبيق الوضع المحفوظ عند التحميل
if (isDarkMode) {
    enableDarkMode();
} else {
    disableDarkMode();
}

// الاستماع لتغيير الوضع
themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-mode');
    isDark ? disableDarkMode() : enableDarkMode();
});

function enableDarkMode() {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('darkMode', 'true');
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('darkMode', 'false');
}

// ============= Contact Function =============
function contactMe() {
    const email = 'your-email@example.com';
    const subject = 'تواصل من الموقع';
    const body = 'السلام عليكم ورحمة الله وبركاته';
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// ============= Smooth Scroll Behavior =============
document.addEventListener('DOMContentLoaded', () => {
    // إضافة تأثيرات عند تحميل الصفحة
    const elements = document.querySelectorAll('.social-btn, .cta-btn');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
    
    // التحقق من تفضيلات النظام
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        if (!localStorage.getItem('darkMode')) {
            enableDarkMode();
        }
    }
});  
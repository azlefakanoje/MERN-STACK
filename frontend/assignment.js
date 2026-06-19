// ── Mobile Menu ──
function toggleMenu() {
  const links = document.getElementById('navLinks');
  const buttons = document.querySelector('.nav-buttons');
  const hamburger = document.getElementById('hamburger');

  const isOpen = links.classList.toggle('open');
  buttons.classList.toggle('open', isOpen);
  hamburger.classList.toggle('open', isOpen);
}

function closeMenu() {
  const links = document.getElementById('navLinks');
  const buttons = document.querySelector('.nav-buttons');
  const hamburger = document.getElementById('hamburger');
  links.classList.remove('open');
  buttons.classList.remove('open');
  hamburger.classList.remove('open');
}

// ── Scroll: Navbar shadow ──
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Smooth Scroll ──
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ── Toast Notification ──
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

// ── Button Alerts (as toasts) ──
function showAlert(type) {
  const messages = {
    login:    '👋 Login coming soon! Try the free trial first.',
    register: '🚀 Registration opens soon. You\'re early!',
    trial:    '🎉 Free trial started! 30 days, no card needed.',
    credits:  '💳 Credits page launching soon. Stay tuned!',
    docs:     '📖 Documentation is being written. Check back!',
    support:  '🛠️ Support team is ready at support@projectx.dev',
    privacy:  '🔒 Privacy Policy: we never sell your data.',
    terms:    '📋 Terms of Service available on launch.',
    cookies:  '🍪 We only use essential cookies.',
  };
  showToast(messages[type] || 'Coming soon!');
}

// ── Scroll Reveal ──
function initReveal() {
  const revealEls = document.querySelectorAll(
    '.feature-card, .price-card, .pricing-note, .footer-brand, .footer-links'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));
}

// ── Staggered card animation ──
function staggerCards() {
  document.querySelectorAll('.feature-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 80}ms`;
  });
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  staggerCards();
});
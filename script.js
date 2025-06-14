// Highlight active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function activateNavLink() {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 70; // offset for navbar height
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {  // <-- fixed here
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', activateNavLink);

// Contact Form Handling
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // Basic validation
  if (!name || !email || !message) {
    formMessage.style.color = '#FF6B6B';
    formMessage.textContent = 'Please fill in all fields.';
    return;
  }

  // Simple email pattern check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.style.color = '#FF6B6B';
    formMessage.textContent = 'Please enter a valid email address.';
    return;
  }

  // Simulate form submission
  formMessage.style.color = '#A29BFE';
  formMessage.textContent = 'Sending...';

  setTimeout(() => {
    formMessage.style.color = '#6FCF97'; // soft green
    formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
    form.reset();
  }, 1500);
});
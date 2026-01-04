// Footer year
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Contact form handler (client-side only)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const response = document.getElementById('response');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = data.get('name')?.trim();
    const email = data.get('email')?.trim();
    const message = data.get('message')?.trim();

    if (!name || !email || !message) {
      response.textContent = 'Please fill out all required fields.';
      return;
    }

    // For Netlify forms, just set a success message; Netlify will capture the submission.
    if (form.hasAttribute('data-netlify')) {
      response.textContent = 'Thanks! Your message has been received.';
      form.reset();
      return;
    }

    // If you later add a backend endpoint, replace this block with fetch('/api/contact', { ... })
    await new Promise(r => setTimeout(r, 600));
    response.textContent = 'Thanks! We will get back to you shortly.';
    form.reset();
  });
});

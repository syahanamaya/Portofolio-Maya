const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Tutup navigasi' : 'Buka navigasi');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Buka navigasi');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const copyButton = document.getElementById('copyProfile');
const copyFeedback = document.getElementById('copyFeedback');
if (copyButton && copyFeedback) {
  copyButton.addEventListener('click', async () => {
    const portfolioUrl = 'https://syahanamaya.github.io/portofolio-syahana-maya/';
    try {
      await navigator.clipboard.writeText(portfolioUrl);
      copyFeedback.textContent = 'Link portofolio berhasil disalin.';
    } catch (error) {
      copyFeedback.textContent = 'Salin link ini secara manual: ' + portfolioUrl;
    }
  });
}

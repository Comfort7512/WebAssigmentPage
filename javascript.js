document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.navLinks');
  
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
  
  // Close menu when a link is clicked
  document.querySelectorAll('.navLinks a').forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const menuLinks = document.querySelectorAll('ul li a');

  menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop;

        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

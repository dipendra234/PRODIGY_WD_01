
  // JavaScript to add/remove scrolled class from nav
  (function() {
    const nav = document.getElementById('navbar');
    const scrollTrigger = 50; // px

    function checkScroll() {
      if(window.scrollY > scrollTrigger){
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', checkScroll);
    // Initial check in case page is loaded scrolled
    checkScroll();
  })();

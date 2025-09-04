// ✅ Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navFlex = document.querySelector(".nav-flex");
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Hamburger toggle
  if (hamburger && navFlex) {
    hamburger.addEventListener("click", () => {
      navFlex.classList.toggle("active");
      hamburger.classList.toggle("open");
    });
  }

  // Scroll to Top Button
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Nav disappearing on scroll
  let lastScrollTop = 0;
  let scrollTimeout;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    clearTimeout(scrollTimeout);

    if (currentScroll > lastScrollTop && currentScroll > 50) {
      // Scrolling down → hide nav after delay
      scrollTimeout = setTimeout(() => {
        document.documentElement.classList.add("scrolled");
      }, 200);
    } else {
      // Scrolling up → show nav immediately
      document.documentElement.classList.remove("scrolled");
    }

    lastScrollTop = Math.max(currentScroll, 0);
  });
});

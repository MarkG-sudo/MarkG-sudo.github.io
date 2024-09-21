// script.js

// Get the button
let scrollTopBtn = document.getElementById("scrollTopBtn");

// When the user scrolls down 20px from the top, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top smoothly
scrollTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

// nav disappering on scroll
let lastScrollTop = 0;
const scrollDelay = 300; // Time to wait before hiding the nav (in ms)

window.addEventListener('scroll', function() {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Add the class after scrolling down for a short time
  if (currentScroll > lastScrollTop && currentScroll > 50) {
    setTimeout(function() {
      document.documentElement.classList.add('scrolled'); // Add class to <html> element
    }, scrollDelay);
  } else if (currentScroll < lastScrollTop) {
    // Remove the class when scrolling back to the top or up
    document.documentElement.classList.remove('scrolled');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
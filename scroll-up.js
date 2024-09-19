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

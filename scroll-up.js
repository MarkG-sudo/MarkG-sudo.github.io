




// // ✅ DOM Ready
// document.addEventListener("DOMContentLoaded", () => {
//   const hamburger = document.querySelector(".hamburger");
//   const navFlex = document.querySelector(".nav-flex");
//   const scrollTopBtn = document.getElementById("scrollTopBtn");
//   const form = document.getElementById("contact-form");
//   const status = document.getElementById("form-status");

//   // ================================
//   // ✅ Hamburger toggle
//   // ================================
//   if (hamburger && navFlex) {
//     hamburger.addEventListener("click", () => {
//       navFlex.classList.toggle("active");
//       hamburger.classList.toggle("open");
//     });
//   }

//   // ================================
//   // ✅ Scroll to Top Button
//   // ================================
//   if (scrollTopBtn) {
//     window.addEventListener("scroll", () => {
//       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         scrollTopBtn.style.display = "block";
//       } else {
//         scrollTopBtn.style.display = "none";
//       }
//     });

//     scrollTopBtn.addEventListener("click", () => {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     });
//   }

//   // ================================
//   // ✅ Nav disappearing on scroll
//   // ================================
//   let lastScrollTop = 0;
//   let scrollTimeout;

//   window.addEventListener("scroll", () => {
//     const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//     clearTimeout(scrollTimeout);

//     if (currentScroll > lastScrollTop && currentScroll > 50) {
//       // Scrolling down → hide nav after delay
//       scrollTimeout = setTimeout(() => {
//         document.documentElement.classList.add("scrolled");
//       }, 200);
//     } else {
//       // Scrolling up → show nav immediately
//       document.documentElement.classList.remove("scrolled");
//     }

//     lastScrollTop = Math.max(currentScroll, 0);
//   });

//   // ================================
//   // ✅ Formspree Submission
//   // ================================
//   if (form) {
//     form.addEventListener("submit", async (event) => {
//       event.preventDefault(); // stop default form submit

//       const data = new FormData(form);

//       try {
//         const response = await fetch(form.action, {
//           method: form.method,
//           body: data,
//           headers: { Accept: "application/json" },
//         });

//         if (response.ok) {
//           status.style.color = "lightgreen";
//           status.innerText = "✅ Message sent successfully! I'll get back to you soon.";
//           form.reset();
//         } else {
//           status.style.color = "tomato";
//           status.innerText = "⚠️ Oops! Something went wrong. Please try again.";
//         }
//       } catch (error) {
//         status.style.color = "tomato";
//         status.innerText = "⚠️ Network error. Please check your connection.";
//       }
//     });
//   }
// });




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

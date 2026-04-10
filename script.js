/* =========================================
   MAIN JAVASCRIPT FILE (Vanilla JS)
   Tailwind-ready, jQuery-free
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  // 1️⃣ Mobile Menu Toggle
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // 2️⃣ Smooth Scroll for Anchor Links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        // Offset for fixed navbar (optional)
        window.scrollBy(0, -70);
      }
    });
  });

  // 3️⃣ Navbar Shrink on Scroll
  const navbar = document.querySelector(".navbar");
  const shrinkNavbar = () => {
    if (!navbar) return;
    if (window.scrollY > 50) navbar.classList.add("navbar-shrink");
    else navbar.classList.remove("navbar-shrink");
  };
  window.addEventListener("scroll", shrinkNavbar);
  shrinkNavbar(); // Run on load

  // 4️⃣ Scroll to Top Button
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    const toggleScrollBtn = () => {
      if (window.scrollY > 300) scrollBtn.classList.add("show");
      else scrollBtn.classList.remove("show");
    };
    window.addEventListener("scroll", toggleScrollBtn);
    toggleScrollBtn(); // Run on load

    scrollBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 5️⃣ Footer Current Year
  const yearElements = document.querySelectorAll(".current-year");
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => el.textContent = currentYear);

  // 6️⃣ Navbar Active Link Highlight
  const path = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach(link => {
    if (link.getAttribute("href") === path) {
      link.parentElement.classList.add("active");
    }
  });

  // 7️⃣ Collapse Mobile Menu on Link Click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (!mobileMenu) return;
      mobileMenu.classList.add("hidden");
    });
  });

});
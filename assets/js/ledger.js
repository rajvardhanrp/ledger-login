// Ledger UI Kit — shared behavior
// Vanilla JS, no build step, no dependencies.

document.addEventListener("DOMContentLoaded", function () {
  var app = document.querySelector(".app");
  var menuBtn = document.querySelector(".menu-btn");

  if (menuBtn && app) {
    menuBtn.addEventListener("click", function () {
      app.classList.toggle("nav-open");
    });
  }

  // Close mobile nav when a nav link is tapped
  document.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      if (app) app.classList.remove("nav-open");
    });
  });

  // Filter chip toggling (visual only — wire up to real filtering logic)
  document.querySelectorAll(".filter-chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      document.querySelectorAll(".filter-chip").forEach(function (c) {
        c.classList.remove("active");
      });
      chip.classList.add("active");
    });
  });
});

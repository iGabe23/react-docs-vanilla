// --- Navbar: toggle theme ---
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const html = document.documentElement;
      const current = html.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      themeToggle.textContent = next === "dark" ? "☀️" : "🌙";
    });
  }

  // --- Sidebar: mobile toggle ---
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  if (mobileMenuBtn && sidebar && overlay) {
    mobileMenuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
      overlay.classList.toggle("show");
    });
  }

  // --- Sidebar: dropdowns ---
  document.querySelectorAll(".dropdown-header").forEach((button) => {
    button.addEventListener("click", function () {
      const dropdown = this.nextElementSibling;
      dropdown.classList.toggle("open");
      toggleDropdown(this);
    });
  });

  function toggleDropdown(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector(".dropdown-icon");
    const isOpen = content.classList.contains("open");
    if (isOpen) {
      if (icon) icon.style.transform = "rotate(180deg)";
      header.classList.add("rotated");
    } else {
      if (icon) icon.style.transform = "rotate(0deg)";
      header.classList.remove("rotated");
    }
  }
});

// --- Back to Top Button ---
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("backToTop");
  if (backToTopButton) {
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

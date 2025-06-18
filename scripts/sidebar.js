// Sidebar toggle
document.getElementById("mobileMenuBtn")?.addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("open");
  document.getElementById("overlay").classList.toggle("show");
});

//Sidebar dropdown
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

//Component variables
const components = [
  {
    id: "navbar-placeholder",
    file: "components/navbar.html",
    script: "scripts/navbar.js",
  },
  {
    id: "sidebar-placeholder",
    file: "components/sidebar.html",
    script: "scripts/sidebar.js",
  },
  {
    id: "main-content",
    file: "components/main.html",
    script: "scripts/main.js",
  },
];

// Function to load components dynamically
async function loadComponents() {
  for (const { id, file, script } of components) {
    const res = await fetch(file);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
    if (script) {
      const s = document.createElement("script");
      s.src = script;
      document.body.appendChild(s);
    }
  }
}

loadComponents();


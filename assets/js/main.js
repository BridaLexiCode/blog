(function () {
  // Year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Theme toggle
  const root = document.documentElement;
  const btn = document.querySelector("[data-theme-toggle]");
  const icon = btn ? btn.querySelector(".theme-icon") : null;

  const getSystemTheme = () =>
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  const getSavedTheme = () => {
    try { return localStorage.getItem("theme"); } catch { return null; }
  };

  const setTheme = (theme) => {
    if (theme === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");

    if (btn) btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    if (icon) icon.textContent = theme === "dark" ? "☀" : "☾";

    try { localStorage.setItem("theme", theme); } catch {}
  };

  // Initialize
  const initial = getSavedTheme() || getSystemTheme();
  setTheme(initial);

  // Toggle click
  if (btn) {
    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
      setTheme(current === "dark" ? "light" : "dark");
    });
  }
})();

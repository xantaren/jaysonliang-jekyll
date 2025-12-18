document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  function setTheme(isDark, save = true) {
    if (isDark) {
      body.classList.add("dark-mode");
      if (toggleButton) {
        toggleButton.setAttribute("aria-label", "Toggle light mode");
      }
    } else {
      body.classList.remove("dark-mode");
      if (toggleButton) {
        toggleButton.setAttribute("aria-label", "Toggle dark mode");
      }
    }
    if (save) {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  }

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      const isCurrentlyDark = body.classList.contains("dark-mode");
      setTheme(!isCurrentlyDark);
    });

    // Priority: 1. Saved preference, 2. System preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme !== null) {
      setTheme(savedTheme === "dark", false);
    } else {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark, false);
    }
  }
});

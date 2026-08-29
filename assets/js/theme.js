/* =============================================================
   theme.js — Light / Dark mode
   Persists the user choice in localStorage and respects the
   system preference (prefers-color-scheme) on first visit.
   ============================================================= */
(function () {
  "use strict";

  var STORAGE_KEY = "mysite-theme";

  function getStored() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function setStored(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* localStorage unavailable */
    }
  }

  function getSystemTheme() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    updateToggleIcon(theme);
    updateBranding(theme);
  }

  // Swap the website logo and favicon between dark/light variants.
  function updateBranding(theme) {
    var logo =
      theme === "dark" ? "assets/images/logos/logo-dark.png" : "assets/images/logos/logo-light.png";
    var favicon =
      theme === "dark" ? "assets/images/favicon-dark.png" : "assets/images/favicon-light.png";

    document
      .querySelectorAll(".logo img, .mobile-logo img, .footer-logo img")
      .forEach(function (img) {
        img.src = logo;
        img.onerror = function () {
          img.src = "assets/images/logos/logo.png";
        };
      });
    document
      .querySelectorAll('link[rel="icon"], link[rel="shortcut icon"]')
      .forEach(function (link) {
        link.href = favicon;
      });
  }

  function updateToggleIcon(theme) {
    var toggles = document.querySelectorAll("[data-theme-toggle]");
    toggles.forEach(function (el) {
      el.setAttribute(
        "aria-label",
        theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre",
      );
      var icon = el.querySelector(".theme-icon");
      if (icon) {
        icon.className = "theme-icon fas " + (theme === "dark" ? "fa-sun" : "fa-moon");
      }
    });
  }

  function init() {
    var stored = getStored();
    var theme = stored ? stored : getSystemTheme();
    applyTheme(theme);

    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var current =
          document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
        var next = current === "dark" ? "light" : "dark";
        setStored(next);
        applyTheme(next);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

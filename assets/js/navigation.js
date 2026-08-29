/* =============================================================
   navigation.js — Marks the active page in the shared header
   ============================================================= */
(function () {
  "use strict";

  function init() {
    var current = window.location.pathname.split("/").pop() || "index.html";

    if (current === "" ) {
      current = "index.html";
    }

    document.querySelectorAll(".main-header .navigation a").forEach(function (link) {
      var href = (link.getAttribute("href") || "").split("#")[0].split("?")[0];
      if (href === current) {
        link.classList.add("nav-active");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

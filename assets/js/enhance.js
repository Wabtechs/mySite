/* ============================================================================
   enhance.js — Professional animation & interaction layer for Wabtechs
   Adds: IntersectionObserver scroll reveals, typed hero text, parallax,
   animated counters, 3D tilt cards, cursor glow, hero decorative orbs,
   and a header scroll-state helper. Lightweight & dependency-free (jQuery not required).
============================================================================ */
(function () {
  "use strict";

  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ------------------------------------------------------------------
     Scroll reveal via IntersectionObserver
     Elements with .reveal* classes fade/move in when they enter view.
     Optional [data-delay="0.2s"] for stagger.
  ------------------------------------------------------------------ */
  function initReveal() {
    var els = document.querySelectorAll(
      ".reveal, .reveal-up, .reveal-down, .reveal-left, .reveal-right, " +
        ".reveal-zoom, .reveal-flip, .reveal-blur"
    );
    if (!els.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in-view"); });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var delay = el.getAttribute("data-delay");
            if (delay) el.style.transitionDelay = delay;
            el.classList.add("in-view");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach(function (el) { io.observe(el); });
  }

  /* ------------------------------------------------------------------
     Typed text for hero role line.
     Usage: <span class="eh-typed" data-words='["A","B","C"]'></span>
     Falls back to the first word when reduced motion is on.
  ------------------------------------------------------------------ */
  function initTyped() {
    var targets = document.querySelectorAll(".eh-typed");
    if (!targets.length) return;

    function typeWord(el, words, wordIndex, charIndex, deleting, resolveStart) {
      var word = words[wordIndex];
      var out = word.slice(0, charIndex);

      if (deleting && charIndex === 0) {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(function () { typeWord(el, words, wordIndex, 0, false); }, 220);
        return;
      }

      el.textContent = out;
      var nextDeleting = deleting;
      var nextChar = charIndex;

      if (deleting) {
        nextChar--;
      } else {
        nextChar++;
      }

      var pause;
      if (!deleting && nextChar > word.length) {
        pause = 1400;
        nextDeleting = true;
      } else if (deleting && nextChar <= 0) {
        nextDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        nextChar = 0;
        pause = 200;
      } else {
        pause = deleting ? 38 : 62;
      }

      setTimeout(function () {
        typeWord(el, words, wordIndex, nextChar, nextDeleting);
      }, pause);
    }

    targets.forEach(function (el) {
      var data = el.getAttribute("data-words");
      var words = [];
      try { words = JSON.parse(data); } catch (e) { words = []; }
      if (!words.length) return;

      if (reduceMotion) {
        el.textContent = words[0];
        return;
      }
      typeWord(el, words, 0, 0, false);
    });
  }

  /* ------------------------------------------------------------------
     Parallax on scroll for elements with [data-parallax] (values in px).
  ------------------------------------------------------------------ */
  function initScrollParallax() {
    var els = document.querySelectorAll("[data-parallax]");
    if (!els.length || reduceMotion) return;

    var ticking = false;
    function update() {
      var vh = window.innerHeight;
      els.forEach(function (el) {
        var speed = parseFloat(el.getAttribute("data-parallax")) || 0.12;
        var rect = el.getBoundingClientRect();
        var center = rect.top + rect.height / 2 - vh / 2;
        var offset = -center * speed;
        offset = Math.max(-90, Math.min(90, offset));
        el.style.transform = "translate3d(0, " + offset + "px, 0)";
      });
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ------------------------------------------------------------------
     Mouse parallax for hero author image (subtle 3D).
  ------------------------------------------------------------------ */
  function initHeroMouseParallax() {
    var hero = document.querySelector(".main-hero-area");
    var imgWrap = document.querySelector(".author-image-part");
    if (!hero || !imgWrap || reduceMotion || window.matchMedia("(hover: none)").matches) return;

    var img = imgWrap.querySelector("img");
    var raf = null;
    hero.addEventListener("mousemove", function (e) {
      if (!img) return;
      var rect = hero.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      if (raf) return;
      raf = requestAnimationFrame(function () {
        img.style.transform =
          "translate3d(" + x * 22 + "px, " + y * 22 + "px, 0)";
        raf = null;
      });
    });
    hero.addEventListener("mouseleave", function () {
      if (img) img.style.transform = "";
    });
  }

  /* ------------------------------------------------------------------
     Animated counters.
     Usage: <span class="eh-counter" data-count="120">0</span>
     Optional [data-suffix="+"] / [data-prefix="$"].
  ------------------------------------------------------------------ */
  function initCounters() {
    var counters = document.querySelectorAll(".eh-counter");
    if (!counters.length) return;

    function run(el) {
      var target = parseFloat(el.getAttribute("data-count")) || 0;
      var duration = parseInt(el.getAttribute("data-duration"), 10) || 1600;
      var prefix = el.getAttribute("data-prefix") || "";
      var suffix = el.getAttribute("data-suffix") || "";
      var start = null;

      function format(n) {
        var val = n % 1 === 0 ? n.toFixed(0) : n.toFixed(1);
        return prefix + val + suffix;
      }

      function frame(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = format(target * eased);
        if (progress < 1) requestAnimationFrame(frame);
        else el.textContent = format(target);
      }
      requestAnimationFrame(frame);
    }

    if (reduceMotion || !("IntersectionObserver" in window)) {
      counters.forEach(function (el) {
        el.textContent =
          (el.getAttribute("data-prefix") || "") +
          (el.getAttribute("data-count") || "0") +
          (el.getAttribute("data-suffix") || "");
      });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            run(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (el) { io.observe(el); });
  }

  /* ------------------------------------------------------------------
     3D tilt on cards with [data-tilt].
  ------------------------------------------------------------------ */
  function initTilt() {
    if (reduceMotion || window.matchMedia("(hover: none)").matches) return;
    var cards = document.querySelectorAll("[data-tilt]");
    cards.forEach(function (card) {
      card.style.transformStyle = "preserve-3d";
      card.style.transition = "transform 0.4s cubic-bezier(0.22,1,0.36,1)";
      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        var max = parseFloat(card.getAttribute("data-tilt")) || 8;
        card.style.transform =
          "perspective(900px) rotateX(" + -y * max + "deg) rotateY(" + x * max + "deg) translateY(-6px)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
      });
    });
  }

  /* ------------------------------------------------------------------
     Hero decorative floating orbs (injected into .main-hero-area).
  ------------------------------------------------------------------ */
  function initHeroOrbs() {
    if (reduceMotion) return;
    var hero = document.querySelector(".main-hero-area");
    if (!hero || hero.querySelector(".eh-orb")) return;
    for (var i = 1; i <= 3; i++) {
      var orb = document.createElement("span");
      orb.className = "eh-orb eh-orb-" + i;
      hero.appendChild(orb);
    }
  }

  /* ------------------------------------------------------------------
     Cursor glow trail (fine pointer desktops only).
  ------------------------------------------------------------------ */
  function initCursor() {
    if (reduceMotion || window.matchMedia("(hover: none)").matches) return;
    var div = document.createElement("div");
    div.className = "eh-cursor";
    document.body.appendChild(div);
    var raf = null;
    var x = -999, y = -999;
    window.addEventListener("mousemove", function (e) {
      x = e.clientX;
      y = e.clientY;
      div.classList.remove("is-hidden");
      if (raf) return;
      raf = requestAnimationFrame(function () {
        div.style.left = x + "px";
        div.style.top = y + "px";
        raf = null;
      });
    }, { passive: true });
    window.addEventListener("mouseleave", function () {
      div.classList.add("is-hidden");
    });
  }

  /* ------------------------------------------------------------------
     Header scroll state (adds .fixed-header, used by CSS for glass).
  ------------------------------------------------------------------ */
  function initHeaderState() {
    var header = document.querySelector(".main-header");
    if (!header) return;
    function update() {
      if (window.scrollY > 24) header.classList.add("fixed-header");
      else header.classList.remove("fixed-header");
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  /* ------------------------------------------------------------------
     Performance-friendly init when DOM is ready.
  ------------------------------------------------------------------ */
  function init() {
    initReveal();
    initTyped();
    initCounters();
    initHeroOrbs();
    initHeaderState();

    // Heavy / pointer-only effects deferred a beat so first paint stays fast.
    window.setTimeout(function () {
      initScrollParallax();
      initHeroMouseParallax();
      initTilt();
      initCursor();
    }, 120);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

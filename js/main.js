/**
 * ============================================================
 * LUMINOS TILES — Premium Stone & Tile
 * Main JavaScript | main.js
 * Version: 1.0
 * ============================================================
 */

(function () {
  "use strict";

  /* ============================================================
     1. PRELOADER
     ============================================================ */
  function initPreloader() {
    const preloader = document.getElementById("preloader");
    if (!preloader) return;

    window.addEventListener("load", function () {
      setTimeout(function () {
        preloader.classList.add("fade-out");
        document.body.classList.remove("preloader-active");
        setTimeout(function () {
          preloader.style.display = "none";
        }, 700);
      }, 1800);
    });
  }

  /* ============================================================
     2. STICKY NAVIGATION
     ============================================================ */
  function initNavbar() {
    const nav = document.getElementById("main-nav");
    if (!nav) return;

    const isTransparent = nav.classList.contains("nav-transparent");

    function handleScroll() {
      if (window.scrollY > 60) {
        nav.classList.add("nav-scrolled");
        if (isTransparent) nav.classList.remove("nav-transparent");
      } else {
        nav.classList.remove("nav-scrolled");
        if (isTransparent) nav.classList.add("nav-transparent");
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run on load
  }

  /* ============================================================
     3. MOBILE NAVIGATION
     ============================================================ */
  function initMobileNav() {
    const hamburger = document.querySelector(".nav-hamburger");
    const mobileNav = document.querySelector(".nav-mobile");
    const overlay = document.querySelector(".nav-mobile-overlay");
    const closeBtn = document.querySelector(".nav-mobile-close");

    if (!hamburger || !mobileNav) return;

    function openNav() {
      hamburger.classList.add("open");
      mobileNav.classList.add("open");
      if (overlay) overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    function closeNav() {
      hamburger.classList.remove("open");
      mobileNav.classList.remove("open");
      if (overlay) overlay.classList.remove("open");
      document.body.style.overflow = "";
    }

    hamburger.addEventListener("click", function () {
      if (mobileNav.classList.contains("open")) {
        closeNav();
      } else {
        openNav();
      }
    });

    if (closeBtn) closeBtn.addEventListener("click", closeNav);
    if (overlay) overlay.addEventListener("click", closeNav);

    // Close on link click
    const mobileLinks = document.querySelectorAll(".nav-mobile-link, .nav-mobile-sub");
    mobileLinks.forEach(function (link) {
      link.addEventListener("click", closeNav);
    });
  }

  /* ============================================================
     4. HERO SLIDER
     ============================================================ */
  function initHeroSlider() {
    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".hero-dot");
    if (!slides.length) return;

    let current = 0;
    let timer = null;

    function goTo(index) {
      slides[current].classList.remove("active");
      if (dots[current]) dots[current].classList.remove("active");
      current = index;
      slides[current].classList.add("active");
      if (dots[current]) dots[current].classList.add("active");
    }

    function next() {
      goTo((current + 1) % slides.length);
    }

    function startTimer() {
      timer = setInterval(next, 5500);
    }

    function stopTimer() {
      clearInterval(timer);
    }

    // Dot click
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        stopTimer();
        goTo(i);
        startTimer();
      });
    });

    // Initialize
    goTo(0);
    startTimer();

    // Pause on hover
    const heroSection = document.querySelector(".hero-fullscreen");
    if (heroSection) {
      heroSection.addEventListener("mouseenter", stopTimer);
      heroSection.addEventListener("mouseleave", startTimer);
    }
  }

  /* ============================================================
     5. SCROLL REVEAL ANIMATIONS
     ============================================================ */
  function initScrollReveal() {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ============================================================
     6. PRODUCT FILTERS
     ============================================================ */
  function initProductFilters() {
    const filterTabs = document.querySelectorAll(".filter-tab");
    const productCards = document.querySelectorAll(".product-card[data-category]");
    if (!filterTabs.length) return;

    filterTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        // Update active tab
        filterTabs.forEach(function (t) {
          t.classList.remove("active");
        });
        tab.classList.add("active");

        const filter = tab.getAttribute("data-filter");

        productCards.forEach(function (card) {
          if (filter === "all" || card.getAttribute("data-category") === filter) {
            card.style.opacity = "0";
            card.style.transform = "scale(0.95)";
            card.style.display = "block";
            setTimeout(function () {
              card.style.opacity = "1";
              card.style.transform = "scale(1)";
              card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
            }, 50);
          } else {
            card.style.opacity = "0";
            card.style.transform = "scale(0.9)";
            setTimeout(function () {
              card.style.display = "none";
            }, 400);
          }
        });
      });
    });
  }

  /* ============================================================
     7. TESTIMONIAL SLIDER
     ============================================================ */
  function initTestimonialSlider() {
    const track = document.querySelector(".testimonial-track");
    const cards = document.querySelectorAll(".testimonial-card");
    const prevBtn = document.querySelector(".testimonial-nav-btn.prev");
    const nextBtn = document.querySelector(".testimonial-nav-btn.next");
    if (!track || !cards.length) return;

    let current = 0;

    function slideTo(index) {
      if (index < 0) index = cards.length - 1;
      if (index >= cards.length) index = 0;
      current = index;
      track.style.transform = "translateX(-" + current * 100 + "%)";
    }

    if (prevBtn) prevBtn.addEventListener("click", function () { slideTo(current - 1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { slideTo(current + 1); });

    // Auto rotate
    setInterval(function () {
      slideTo(current + 1);
    }, 6000);
  }

  /* ============================================================
     8. PRODUCT THUMBNAIL GALLERY (Detail Page)
     ============================================================ */
  function initProductGallery() {
    const mainImg = document.querySelector(".product-main-img img");
    const thumbs = document.querySelectorAll(".product-thumb");
    if (!mainImg || !thumbs.length) return;

    thumbs.forEach(function (thumb) {
      thumb.addEventListener("click", function () {
        const src = thumb.getAttribute("data-full") || thumb.getAttribute("src");
        mainImg.style.opacity = "0";
        setTimeout(function () {
          mainImg.src = src;
          mainImg.style.opacity = "1";
        }, 200);
        mainImg.style.transition = "opacity 0.2s ease";

        thumbs.forEach(function (t) {
          t.classList.remove("active");
        });
        thumb.classList.add("active");
      });
    });
  }

  /* ============================================================
     9. SIZE SELECTOR
     ============================================================ */
  function initSizeSelector() {
    const options = document.querySelectorAll(".size-option");
    options.forEach(function (opt) {
      opt.addEventListener("click", function () {
        options.forEach(function (o) {
          o.classList.remove("selected");
        });
        opt.classList.add("selected");
      });
    });
  }

  /* ============================================================
     10. TILE SWATCH SELECTOR
     ============================================================ */
  function initSwatchSelector() {
    const swatchGroups = document.querySelectorAll(".tile-swatches");
    swatchGroups.forEach(function (group) {
      const swatches = group.querySelectorAll(".tile-swatch");
      swatches.forEach(function (swatch) {
        swatch.addEventListener("click", function () {
          swatches.forEach(function (s) {
            s.classList.remove("active");
          });
          swatch.classList.add("active");

          // Optionally change parent card's image
          const imgUrl = swatch.getAttribute("data-img");
          const card = group.closest(".product-card");
          if (card && imgUrl) {
            const img = card.querySelector(".product-card-img");
            if (img) img.src = imgUrl;
          }
        });
      });
    });
  }

  /* ============================================================
     11. GALLERY LIGHTBOX
     ============================================================ */
  function initLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.querySelector(".lightbox-close");
    const galleryItems = document.querySelectorAll(".gallery-item[data-full]");

    if (!lightbox) return;

    galleryItems.forEach(function (item) {
      item.addEventListener("click", function () {
        const src = item.getAttribute("data-full");
        if (lightboxImg) lightboxImg.src = src;
        lightbox.classList.add("open");
        document.body.style.overflow = "hidden";
      });
    });

    function closeLightbox() {
      lightbox.classList.remove("open");
      document.body.style.overflow = "";
    }

    if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLightbox();
    });
  }

  /* ============================================================
     12. SCROLL TO TOP
     ============================================================ */
  function initScrollTop() {
    const btn = document.querySelector(".scroll-top");
    if (!btn) return;

    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    }, { passive: true });

    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ============================================================
     13. NUMBER COUNTER ANIMATION
     ============================================================ */
  function initCounters() {
    const counters = document.querySelectorAll(".counter-number[data-target]");
    if (!counters.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"));
        const suffix = el.getAttribute("data-suffix") || "";
        let start = 0;
        const duration = 2000;
        const step = Math.ceil(target / (duration / 16));
        const interval = setInterval(function () {
          start += step;
          if (start >= target) {
            start = target;
            clearInterval(interval);
          }
          el.innerHTML = start + '<span>' + suffix + '</span>';
        }, 16);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach(function (counter) {
      observer.observe(counter);
    });
  }

  /* ============================================================
     14. BEFORE / AFTER SLIDER
     ============================================================ */
  function initBeforeAfter() {
    const containers = document.querySelectorAll(".before-after-container");
    containers.forEach(function (container) {
      const after = container.querySelector(".before-after-after");
      const handle = container.querySelector(".before-after-handle");
      if (!after || !handle) return;

      let isDragging = false;

      function getPercent(e) {
        const rect = container.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        let percent = ((clientX - rect.left) / rect.width) * 100;
        return Math.max(0, Math.min(100, percent));
      }

      function update(percent) {
        const right = 100 - percent;
        after.style.clipPath = "inset(0 " + right + "% 0 0)";
        handle.style.left = percent + "%";
      }

      container.addEventListener("mousedown", function (e) {
        isDragging = true;
        update(getPercent(e));
      });
      container.addEventListener("touchstart", function (e) {
        isDragging = true;
        update(getPercent(e));
      });
      window.addEventListener("mousemove", function (e) {
        if (isDragging) update(getPercent(e));
      });
      window.addEventListener("touchmove", function (e) {
        if (isDragging) update(getPercent(e));
      });
      window.addEventListener("mouseup", function () {
        isDragging = false;
      });
      window.addEventListener("touchend", function () {
        isDragging = false;
      });

      update(50); // Start at middle
    });
  }

  /* ============================================================
     15. FORM VALIDATION
     ============================================================ */
  function initForms() {
    const forms = document.querySelectorAll(".form-luxury");
    forms.forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        let valid = true;
        const required = form.querySelectorAll("[required]");

        required.forEach(function (field) {
          if (!field.value.trim()) {
            field.style.borderBottomColor = "#C0392B";
            valid = false;
          } else {
            field.style.borderBottomColor = "";
          }
        });

        if (valid) {
          const btn = form.querySelector("[type='submit']");
          if (btn) {
            const original = btn.textContent;
            btn.textContent = "Message Sent ✓";
            btn.style.background = "#27AE60";
            setTimeout(function () {
              btn.textContent = original;
              btn.style.background = "";
              form.reset();
            }, 3000);
          }
        }
      });
    });
  }

  /* ============================================================
     16. NEWSLETTER FORM
     ============================================================ */
  function initNewsletter() {
    const newsletterForms = document.querySelectorAll(".newsletter-form");
    newsletterForms.forEach(function (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = form.querySelector("input[type='email']");
        const btn = form.querySelector("button");
        if (input && input.value.trim()) {
          if (btn) {
            btn.textContent = "Subscribed!";
            setTimeout(function () {
              btn.textContent = "Subscribe";
              input.value = "";
            }, 2500);
          }
        }
      });
    });
  }

  /* ============================================================
     17. ACTIVE NAV LINK
     ============================================================ */
  function initActiveNav() {
    const links = document.querySelectorAll(".nav-link");
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    links.forEach(function (link) {
      const href = link.getAttribute("href");
      if (href === currentPath) {
        link.classList.add("active");
      }
    });
  }

  /* ============================================================
     18. SMOOTH SCROLL FOR ANCHOR LINKS
     ============================================================ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        const target = document.querySelector(anchor.getAttribute("href"));
        if (target) {
          e.preventDefault();
          const navH = parseInt(
            getComputedStyle(document.documentElement).getPropertyValue("--nav-height") || "88"
          );
          const top = target.getBoundingClientRect().top + window.scrollY - navH - 20;
          window.scrollTo({ top: top, behavior: "smooth" });
        }
      });
    });
  }

  /* ============================================================
     19. HEADER PARALLAX
     ============================================================ */
  function initParallax() {
    const heroImgs = document.querySelectorAll(".hero-slide-img");
    if (!heroImgs.length) return;

    window.addEventListener("scroll", function () {
      const scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroImgs.forEach(function (img) {
          img.style.transform = "translateY(" + scrolled * 0.25 + "px)";
        });
      }
    }, { passive: true });
  }

  /* ============================================================
     20. INIT ALL
     ============================================================ */
  document.addEventListener("DOMContentLoaded", function () {
    initPreloader();
    initNavbar();
    initMobileNav();
    initHeroSlider();
    initScrollReveal();
    initProductFilters();
    initTestimonialSlider();
    initProductGallery();
    initSizeSelector();
    initSwatchSelector();
    initLightbox();
    initScrollTop();
    initCounters();
    initBeforeAfter();
    initForms();
    initNewsletter();
    initActiveNav();
    initSmoothScroll();
    initParallax();

    console.log("%cLUMINOS TILES", "color: #C4973C; font-family: serif; font-size: 1.5rem; font-weight: bold;");
    console.log("%cWhere Architecture Meets Art", "color: #8E8880; font-size: 0.9rem;");
  });
})();

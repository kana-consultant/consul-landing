/* =========================================================================
   consul.perfect10.id — interactions (revamp)
   Vanilla JS, no dependencies. Progressive enhancement.
   ========================================================================= */

/* ----------------------------------------------------------------------
   CONFIG  —  EDIT INI
   WA_NUMBER: nomor WhatsApp tujuan, format internasional TANPA + atau 0.
              contoh: 0812-3456-7890  ->  "6281234567890"
   ---------------------------------------------------------------------- */
const CONFIG = {
  WA_NUMBER: "62XXXXXXXXXXX", // TODO: ganti dengan nomor WA Perfect10
  DEFAULT_MSG: "Halo Perfect10, saya tertarik konsultasi gratis soal AI Automation untuk bisnis saya.",
};

/* build wa.me link */
function waLink(text) {
  const msg = encodeURIComponent(text || CONFIG.DEFAULT_MSG);
  return `https://wa.me/${CONFIG.WA_NUMBER}?text=${msg}`;
}

/* fire Meta Pixel Lead event if pixel is loaded */
function trackLead() {
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead");
  }
}

/* respect reduced-motion */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.addEventListener("DOMContentLoaded", () => {
  initYear();
  initFloatingWA();
  initLeadForm();
  initReveals();
  initHeaderScroll();
  initFaq();
  initStickyCta();
  initParallax();
});

/* ---- footer year ---- */
function initYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

/* ---- floating WA button -> open WhatsApp directly ---- */
function initFloatingWA() {
  document.querySelectorAll(".wa-float.js-cta, .f-wa.js-cta").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      trackLead();
      window.open(waLink(), "_blank", "noopener");
    });
  });
}

/* ---- lead form -> compose WhatsApp message (with light validation) ---- */
function initLeadForm() {
  const form = document.getElementById("lead-form");
  if (!form) return;

  const v = (id) => (document.getElementById(id)?.value || "").trim();

  const markInvalid = (fieldId, on) => {
    const field = document.getElementById(fieldId);
    if (field) field.classList.toggle("invalid", on);
  };

  // clear invalid state as user types
  ["nama", "wa"].forEach((id) => {
    const input = document.getElementById(id);
    if (input) input.addEventListener("input", () => markInvalid("f-" + id, false));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nama = v("nama");
    const wa = v("wa");
    const waDigits = wa.replace(/\D/g, "");

    let ok = true;
    if (!nama) { markInvalid("f-nama", true); ok = false; }
    if (waDigits.length < 8) { markInvalid("f-wa", true); ok = false; }

    if (!ok) {
      const firstInvalid = form.querySelector(".field.invalid input");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const lines = [
      "Halo Perfect10, saya ingin konsultasi gratis.",
      "",
      `Nama: ${nama}`,
      `WhatsApp: ${wa}`,
      v("email") && `Email: ${v("email")}`,
      v("perusahaan") && `Perusahaan: ${v("perusahaan")}`,
      v("kebutuhan") && `Kebutuhan: ${v("kebutuhan")}`,
      v("pesan") && `Pesan: ${v("pesan")}`,
    ].filter(Boolean);

    trackLead();
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
  });
}

/* ---- scroll reveal via IntersectionObserver ---- */
function initReveals() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("in"));
    triggerDash();
    return;
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  els.forEach((el) => io.observe(el));

  // Reveal above-the-fold content immediately — never leave the hero blank
  // for a visitor who hasn't scrolled (the observer's initial fire is unreliable
  // for elements already in view on first paint).
  const revealInView = () => {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.95 && r.bottom > 0) {
        el.classList.add("in");
        io.unobserve(el);
      }
    });
  };
  requestAnimationFrame(revealInView);

  // dashboard bars + count-up when hero visual enters view
  const dash = document.getElementById("hero-dash");
  if (dash) {
    const dio = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerDash();
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    dio.observe(dash);
    // fire on load too if the dashboard is already on screen
    requestAnimationFrame(() => {
      const r = dash.getBoundingClientRect();
      if (r.top < (window.innerHeight || 0) && r.bottom > 0) triggerDash();
    });
  }
}

/* ---- dashboard mock animation: bars heights + count-up KPIs ---- */
let _dashTriggered = false;
function triggerDash() {
  if (_dashTriggered) return; // guard against double count-up
  const dash = document.getElementById("hero-dash");
  if (!dash) return;
  _dashTriggered = true;
  dash.classList.add("in"); // CSS animates bars (height from --h, reveal via scaleY)

  // count-up KPI numbers
  dash.querySelectorAll("[data-count]").forEach((el) => countUp(el));
}

function countUp(el) {
  const target = parseFloat(el.getAttribute("data-count"));
  const prefix = el.getAttribute("data-prefix") || "";
  const suffix = el.getAttribute("data-suffix") || "";
  if (isNaN(target)) return;

  if (prefersReducedMotion) {
    el.textContent = prefix + target + suffix;
    return;
  }

  const duration = 1400;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
    const val = Math.round(target * eased);
    el.textContent = prefix + val + suffix;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = prefix + target + suffix;
  };
  requestAnimationFrame(step);
}

/* ---- header: add shadow/solid bg after scroll ---- */
function initHeaderScroll() {
  const header = document.getElementById("site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---- FAQ accordion (accessible) ---- */
function initFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-q");
    const ans = item.querySelector(".faq-a");
    if (!btn || !ans) return;

    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      // close siblings for a clean single-open accordion
      document.querySelectorAll(".faq-item.open").forEach((other) => {
        if (other !== item) {
          other.classList.remove("open");
          other.querySelector(".faq-q")?.setAttribute("aria-expanded", "false");
          const oa = other.querySelector(".faq-a");
          if (oa) oa.style.maxHeight = null;
        }
      });

      item.classList.toggle("open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
      ans.style.maxHeight = !isOpen ? ans.scrollHeight + "px" : null;
    });
  });
}

/* ---- sticky mobile CTA: show after hero, hide near final form ---- */
function initStickyCta() {
  const bar = document.getElementById("sticky-cta");
  const form = document.getElementById("konsultasi");
  if (!bar) return;

  const update = () => {
    const past = window.scrollY > window.innerHeight * 0.8;
    let nearForm = false;
    if (form) {
      const r = form.getBoundingClientRect();
      nearForm = r.top < window.innerHeight && r.bottom > 0;
    }
    bar.classList.toggle("show", past && !nearForm);
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update, { passive: true });
}

/* ---- subtle hero glow parallax on scroll ---- */
function initParallax() {
  if (prefersReducedMotion) return;
  const glows = document.querySelectorAll(".hero .glow");
  if (!glows.length) return;

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      if (y < 900) {
        glows.forEach((g, i) => {
          const speed = (i + 1) * 0.04;
          g.style.transform = `translateY(${y * speed}px)`;
        });
      }
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
}

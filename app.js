/* =========================================================================
   consul.perfect10.id — interactions (lean, low-motion)
   Vanilla JS, no dependencies.
   ========================================================================= */

/* ----------------------------------------------------------------------
   CONFIG  —  EDIT INI
   WA_NUMBER: nomor WhatsApp tujuan, format internasional TANPA + atau 0.
              contoh: 0812-3456-7890  ->  "6281234567890"
   ---------------------------------------------------------------------- */
const CONFIG = {
  WA_NUMBER: "628219257827", // WA Bisnis PERFECT10 (0821-9257-827)
  DEFAULT_MSG: "Halo Perfect10, saya tertarik konsultasi gratis soal AI Automation untuk bisnis saya.",
};

/* build wa.me link */
function waLink(text) {
  return `https://wa.me/${CONFIG.WA_NUMBER}?text=${encodeURIComponent(text || CONFIG.DEFAULT_MSG)}`;
}

/* fire Meta Pixel Lead event if pixel is loaded */
function trackLead() {
  if (typeof window.fbq === "function") window.fbq("track", "Lead");
}

document.addEventListener("DOMContentLoaded", () => {
  initYear();
  initWhatsAppCtas();
  initLeadForm();
  initHeaderScroll();
  initStickyCta();
  initSliders();
});

/* ---- footer year ---- */
function initYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

/* ---- direct-to-WhatsApp buttons (float + footer) ---- */
function initWhatsAppCtas() {
  document.querySelectorAll(".fm-wa.js-cta, .f-wa.js-cta").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      trackLead();
      window.open(waLink(), "_blank", "noopener");
    });
  });
}

/* ---- lead form -> compose WhatsApp message (no hard requirements) ---- */
function initLeadForm() {
  const form = document.getElementById("lead-form");
  if (!form) return;

  const v = (id) => (document.getElementById(id)?.value || "").trim();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const lines = [
      "Halo Perfect10, saya ingin konsultasi gratis.",
      "",
      v("nama") && `Nama/Bisnis: ${v("nama")}`,
      v("kebutuhan") && `Tantangan: ${v("kebutuhan")}`,
      v("pesan") && `Catatan: ${v("pesan")}`,
    ].filter(Boolean);

    trackLead();
    window.open(waLink(lines.join("\n")), "_blank", "noopener");
  });
}

/* ---- header: subtle solid bg after scroll (not an animation, just state) ---- */
function initHeaderScroll() {
  const header = document.getElementById("site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
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

/* ---- sliders: modern carousel — fades, dots, flick momentum, arrows, keys ---- */
function initSliders() {
  const ARROW = {
    prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
  };

  document.querySelectorAll(".slider").forEach((slider) => {
    const slides = Array.from(slider.querySelectorAll(".slide"));
    if (!slides.length) return;

    // wrap so arrows/fades can sit over the slider
    const wrap = document.createElement("div");
    wrap.className = "slider-wrap";
    slider.parentNode.insertBefore(wrap, slider);
    wrap.appendChild(slider);

    const mkBtn = (dir, label) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "slider-nav slider-" + dir;
      b.setAttribute("aria-label", label);
      b.innerHTML = ARROW[dir];
      return b;
    };
    const prev = mkBtn("prev", "Sebelumnya / Previous");
    const next = mkBtn("next", "Berikutnya / Next");
    wrap.appendChild(prev);
    wrap.appendChild(next);

    // page-based dots (every page is reachable, active is always correct)
    const dotsWrap = document.createElement("div");
    dotsWrap.className = "slider-dots";
    wrap.after(dotsWrap);

    let dots = [], pageCount = 0;
    const pages = () =>
      Math.max(1, Math.ceil((slider.scrollWidth - slider.clientWidth - 2) / slider.clientWidth) + 1);
    const curPage = () =>
      Math.max(0, Math.min(pages() - 1, Math.round(slider.scrollLeft / slider.clientWidth)));
    const goPage = (i) => {
      const pc = pages();
      i = Math.max(0, Math.min(pc - 1, i));
      slider.scrollTo({ left: i * slider.clientWidth, behavior: "smooth" });
    };
    const buildDots = () => {
      const pc = pages();
      if (pc === pageCount) return;
      pageCount = pc;
      dotsWrap.innerHTML = "";
      dots = [];
      for (let i = 0; i < pc; i++) {
        const d = document.createElement("button");
        d.type = "button";
        d.className = "slider-dot";
        d.setAttribute("aria-label", "Halaman " + (i + 1));
        d.addEventListener("click", () => goPage(i));
        dotsWrap.appendChild(d);
        dots.push(d);
      }
      dotsWrap.style.display = pc <= 1 ? "none" : ""; // no lone dot when nothing to page
    };

    prev.addEventListener("click", () => goPage(curPage() - 1));
    next.addEventListener("click", () => goPage(curPage() + 1));

    let raf = 0;
    const update = () => {
      const max = slider.scrollWidth - slider.clientWidth - 2;
      const atStart = slider.scrollLeft <= 2;
      const atEnd = slider.scrollLeft >= max;
      prev.classList.toggle("is-hidden", atStart);
      next.classList.toggle("is-hidden", atEnd);
      slider.style.setProperty("--fl", atStart ? "0px" : "36px");
      slider.style.setProperty("--fr", atEnd ? "0px" : "36px");
      const cp = curPage();
      dots.forEach((d, i) => d.classList.toggle("is-active", i === cp));
    };
    const onScroll = () => { if (raf) return; raf = requestAnimationFrame(() => { raf = 0; update(); }); };
    buildDots(); update();
    slider.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => { buildDots(); update(); }, { passive: true });

    // drag with flick momentum, snap to nearest page on release
    let down = false, startX = 0, startLeft = 0, moved = false, lastX = 0, lastT = 0, vx = 0;
    slider.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse") return;
      down = true; moved = false; startX = lastX = e.clientX; startLeft = slider.scrollLeft;
      lastT = performance.now(); vx = 0;
      slider.classList.add("dragging");
      try { slider.setPointerCapture(e.pointerId); } catch (_) {}
    });
    slider.addEventListener("pointermove", (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      slider.scrollLeft = startLeft - dx;
      const now = performance.now(), dt = now - lastT;
      if (dt > 0) vx = (e.clientX - lastX) / dt;
      lastX = e.clientX; lastT = now;
    });
    const endDrag = () => {
      if (!down) return;
      down = false;
      slider.classList.remove("dragging");
      const projected = slider.scrollLeft - vx * 160; // flick projection
      goPage(Math.round(projected / slider.clientWidth));
    };
    slider.addEventListener("pointerup", endDrag);
    slider.addEventListener("pointercancel", endDrag);
    slider.addEventListener("click", (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);

    // keyboard (when slider focused)
    if (!slider.hasAttribute("tabindex")) slider.setAttribute("tabindex", "0");
    slider.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); goPage(curPage() + 1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); goPage(curPage() - 1); }
    });
  });
}

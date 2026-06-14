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
  WA_NUMBER: "62XXXXXXXXXXX", // TODO: ganti dengan nomor WA Perfect10
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
  document.querySelectorAll(".wa-float.js-cta, .f-wa.js-cta").forEach((el) => {
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

/* ---- sliders: arrow buttons + drag-to-scroll, snap, no visible scrollbar ---- */
function initSliders() {
  const ARROW = {
    prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
  };

  document.querySelectorAll(".slider").forEach((slider) => {
    // wrap so arrows can be positioned over the slider
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

    const step = () => {
      const card = slider.querySelector(".slide");
      const gap = 16;
      return card ? card.getBoundingClientRect().width + gap : slider.clientWidth * 0.8;
    };
    prev.addEventListener("click", () => slider.scrollBy({ left: -step(), behavior: "smooth" }));
    next.addEventListener("click", () => slider.scrollBy({ left: step(), behavior: "smooth" }));

    const update = () => {
      const max = slider.scrollWidth - slider.clientWidth - 2;
      prev.classList.toggle("is-hidden", slider.scrollLeft <= 2);
      next.classList.toggle("is-hidden", slider.scrollLeft >= max);
    };
    update();
    slider.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    // drag-to-scroll (mouse / trackpad)
    let down = false, startX = 0, startLeft = 0, moved = false;
    slider.addEventListener("pointerdown", (e) => {
      if (e.pointerType !== "mouse") return;
      down = true; moved = false; startX = e.clientX; startLeft = slider.scrollLeft;
      slider.classList.add("dragging");
    });
    window.addEventListener("pointermove", (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 4) moved = true;
      slider.scrollLeft = startLeft - dx;
    });
    window.addEventListener("pointerup", () => {
      down = false;
      slider.classList.remove("dragging");
    });
    // prevent click after a drag
    slider.addEventListener("click", (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
  });
}

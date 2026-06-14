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

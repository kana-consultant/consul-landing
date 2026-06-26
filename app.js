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
  WA_NUMBER: "628216957827", // WA Bisnis PERFECT10 (0821-6957-827)
  DEFAULT_MSG: "Halo Perfect10, saya tertarik konsultasi gratis soal AI Automation untuk bisnis saya.",

  // Lead store (Google Apps Script Web App → Google Sheet).
  // Leads land in a Sheet that the Hermes sales agent polls over HTTP and
  // follows up on. Deploy backend/leads.gs and paste the /exec URL here.
  // See backend/SETUP.md. Until set, the form falls back to opening WhatsApp.
  LEAD_ENDPOINT: "https://script.google.com/macros/s/AKfycbzsW30_hq1ohBVIOUH6IXGmBSyYUSoVaCVJiw-4IJJy06Xo3G-RnqmBYOAFy1-7CA-t3A/exec",
};

/* build wa.me link */
function waLink(text) {
  return `https://wa.me/${CONFIG.WA_NUMBER}?text=${encodeURIComponent(text || CONFIG.DEFAULT_MSG)}`;
}

/* Open WhatsApp in a new tab, then move THIS tab to the thank-you page.
   The Meta Pixel `Lead` event lives on thanks.html (not here), so a lead is
   only counted once the user actually reaches the thank-you page — a single,
   valid conversion instead of firing on the landing page. The wa.me link is
   passed along so thanks.html can offer a "re-open WhatsApp" fallback. */
function goToWhatsAppThenThanks(url) {
  // open WA first, synchronously inside the click handler, so the browser
  // treats it as a user-initiated action and does not block the popup
  window.open(url, "_blank", "noopener");
  window.location.href = "thanks.html?wa=" + encodeURIComponent(url);
}

document.addEventListener("DOMContentLoaded", () => {
  initYear();
  initWhatsAppCtas();
  initLeadForm();
  initHeaderScroll();
  initStickyCta();
  initSliders();
  initFaqToggle();
});

/* ---- FAQ: reveal the remaining questions on tap ---- */
function initFaqToggle() {
  const btn = document.getElementById("faq-toggle");
  const more = document.getElementById("faq-more");
  if (!btn || !more) return;
  const label = btn.querySelector("[data-i18n]");

  btn.addEventListener("click", () => {
    const open = more.hidden;
    more.hidden = !open;
    btn.setAttribute("aria-expanded", String(open));
    btn.classList.toggle("is-open", open);

    // swap label key + text so it stays correct across language switches
    if (label) {
      const key = open ? "faq.less" : "faq.more";
      label.setAttribute("data-i18n", key);
      try {
        const lang = typeof getLang === "function" ? getLang() : "id";
        const dict = (typeof I18N === "object" && I18N[lang]) || {};
        if (dict[key] != null) label.textContent = dict[key];
      } catch (e) {}
    }
  });
}

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
      goToWhatsAppThenThanks(waLink());
    });
  });
}

/* ---- lead form -> store on server, then Perfect10 follows up ----
   Flow (per client request): the lead's contact number (id=kontak) + challenge
   (id=kebutuhan) are REQUIRED. On submit we POST the lead to a Google Sheet via
   an Apps Script Web App (CONFIG.LEAD_ENDPOINT). The Hermes sales agent polls
   that Sheet over HTTP and does the WhatsApp follow-up — the visitor no longer
   has to open WhatsApp themselves. We then send them to the thank-you page
   (where the Meta Pixel `Lead` fires).

   Fallbacks: if no endpoint is configured yet, or the POST can't reach the
   network, we degrade to the old "open WhatsApp" behaviour so a lead is never
   lost while the backend is being set up. */
function initLeadForm() {
  const form = document.getElementById("lead-form");
  if (!form) return;

  const v = (id) => (document.getElementById(id)?.value || "").trim();
  const errEl = document.getElementById("form-err");
  const btn = form.querySelector('button[type="submit"]');

  // WhatsApp message used as the network-failure fallback only.
  const waFallback = () => {
    const lines = [
      "Halo Perfect10, saya ingin konsultasi gratis.",
      "",
      v("nama") && `Nama/Bisnis: ${v("nama")}`,
      v("kontak") && `Kontak: ${v("kontak")}`,
      v("kebutuhan") && `Tantangan: ${v("kebutuhan")}`,
      v("pesan") && `Catatan: ${v("pesan")}`,
    ].filter(Boolean);
    goToWhatsAppThenThanks(waLink(lines.join("\n")));
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (errEl) errEl.hidden = true;

    // require a contact number — this is who Perfect10 follows up with
    if (!v("kontak")) {
      const f = document.getElementById("kontak");
      f?.reportValidity?.();
      f?.focus();
      return;
    }
    // require a challenge to be picked — qualifies the lead, blocks empty submits
    if (!v("kebutuhan")) {
      const sel = document.getElementById("kebutuhan");
      sel?.reportValidity?.();
      sel?.focus();
      return;
    }

    // no backend configured yet → keep working via the WhatsApp fallback
    if (!CONFIG.LEAD_ENDPOINT) {
      waFallback();
      return;
    }

    const payload = {
      nama: v("nama"),
      kontak: v("kontak"),
      kebutuhan: v("kebutuhan"),
      pesan: v("pesan"),
      lang: (typeof getLang === "function" ? getLang() : "id"),
      source: location.href,
      ua: navigator.userAgent,
    };

    btn?.classList.add("is-loading");
    btn && (btn.disabled = true);

    try {
      // text/plain keeps this a CORS "simple request" (no preflight); Apps
      // Script reads the raw body in doPost via e.postData.contents.
      await fetch(CONFIG.LEAD_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      // no-cors gives an opaque response (can't read status); a resolved
      // promise means the request left the browser — treat as submitted.
      window.location.href = "thanks.html";
    } catch (_) {
      // network error → surface the error and fall back to WhatsApp
      btn?.classList.remove("is-loading");
      btn && (btn.disabled = false);
      if (errEl) errEl.hidden = false;
      waFallback();
    }
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

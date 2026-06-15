/* =========================================================================
   consul.perfect10.id — bilingual (ID / EN)
   Default = ID. Choice persists in localStorage. No-JS users see ID.
   Positioning: AI CONSULTANT (advise + implement) — not product selling.
   To edit copy: change the strings below (id + en) per key.
   ========================================================================= */

const I18N = {
  id: {
    "meta.title": "Perfect10 — Konsultan AI untuk Efisiensi Operasional Bisnis",
    "meta.desc": "Perfect10 adalah konsultan AI. Kami bantu petakan, rancang, dan terapkan automation paling berdampak untuk bisnis Anda. Konsultasi gratis via WhatsApp.",
    "skip": "Lewati ke form konsultasi",

    "nav.solusi": "Yang Kami Bantu", "nav.bukti": "Bukti", "nav.faq": "FAQ", "nav.konsultasi": "Konsultasi",
    "cta.header": "Konsultasi Gratis",

    "hero.tag": "AI Consultant",
    "hero.pill": "Pendamping AI untuk bisnis Anda",
    "hero.h1": "AI Automation untuk Meningkatkan <span class=\"grad-text\">Efisiensi Operasional Bisnis</span> Kamu",
    "hero.lead": "Sebagai konsultan AI, kami dampingi dari analisa kebutuhan sampai implementasi — memetakan proses mana yang paling layak diotomatiskan, lalu membangunnya bersama tim Anda.",
    "hero.cta1": "Konsultasi Gratis via WhatsApp",
    "hero.cta2": "Lihat Bukti & Use Case",
    "hero.note": "Gratis, tanpa komitmen — langsung ngobrol via WhatsApp",
    "hero.photocap": "Sesi pendampingan bersama klien kami",
    "hero.badge": "Dipercaya klien di 5 negara",

    "trust.lbl": "Dipercaya lintas industri & lintas negara",
    "trust.geo": "Termasuk 2 kementerian RI · <span class=\"geo-flags\">🇺🇸 🇦🇺 🇩🇪 🇸🇬 🇮🇩</span>",

    "dash.tag": "Ilustrasi",
    "dash.k1": "Jam manual / minggu", "dash.k1v": "312 jam", "dash.k1s": "▼ turun 70%",
    "dash.k2": "Lead dibalas < 60 dtk", "dash.k2s": "▲ naik dari 41%",
    "dash.k3": "Akurasi data", "dash.k3s": "▲ error ~ nol",
    "dash.k4": "Biaya proses", "dash.k4s": "▲ margin naik",
    "dash.chart": "Output tim / minggu",

    "sol.eyebrow": "Yang Kami Bantu",
    "sol.h2": "Kami petakan & terapkan AI yang tepat sasaran",
    "sol.lead": "Kami bukan penjual tools. Sebagai konsultan, kami bantu Anda memilih dan menerapkan automation yang benar-benar berdampak di area berikut.",
    "sol.hint": "Geser untuk lihat semua →",
    "sol.c1t": "Customer Service Automation",
    "sol.c1d": "AI agent membalas chat & pertanyaan customer 24/7 dengan konteks bisnis Anda — eskalasi ke tim hanya saat benar-benar perlu.",
    "sol.c2t": "Sales & Lead Automation",
    "sol.c2d": "Kualifikasi, follow-up, dan nurturing lead berjalan otomatis tanpa ada yang terlewat — dari iklan masuk sampai closing.",
    "sol.c3t": "Document & Data Processing",
    "sol.c3d": "Ekstraksi, klasifikasi & input data dari invoice, kontrak, dan form dilakukan otomatis — cepat dan akurat.",
    "sol.c4t": "Workflow Orchestration",
    "sol.c4d": "Hubungkan WhatsApp, CRM, spreadsheet, dan tools Anda menjadi satu alur kerja yang mulus dari ujung ke ujung.",
    "sol.c5t": "Business Intelligence & Insight",
    "sol.c5d": "Dashboard real-time + ringkasan otomatis agar Anda dan tim mengambil keputusan berbasis data, bukan tebakan.",
    "sol.c6t": "Custom AI Agent",
    "sol.c6d": "AI agent yang dirancang khusus mengikuti proses & aturan unik bisnis Anda — bukan solusi cetakan untuk semua.",

    "bukti.eyebrow": "Bukti & Use Case",
    "bukti.h2": "Hasil nyata, bukan janji <span class=\"grad-text\">di brosur</span>",
    "bukti.lead": "Cuplikan kerja sama dan dampak nyata bersama klien kami di berbagai industri dan negara.",
    "bukti.sub1": "Bersama klien kami",
    "bukti.ph1": "Diskusi kebutuhan bersama tim klien",
    "bukti.ph2": "Sesi konsultasi lanjutan",
    "bukti.ph3": "Pendampingan & review online lintas tim",
    "bukti.sub2": "Apa kata klien",
    "bukti.q1": "\"Proses rekap dan pelaporan yang dulu makan waktu berhari-hari sekarang jauh lebih ringkas. Tim bisa fokus ke hal yang lebih penting.\"",
    "bukti.q2": "\"Follow-up yang tadinya sering terlewat kini jalan otomatis. Respon ke pihak luar jadi jauh lebih cepat dan rapi.\"",
    "bukti.q3": "\"Pendampingannya praktis — bukan jualan tools, tapi benar-benar bantu sampai sistemnya jalan dipakai sehari-hari.\"",
    "bukti.q1n": "Pengurus Atveti", "bukti.q1r": "Asosiasi Pendidikan Vokasi",
    "bukti.q2n": "Tim Operasional URAI", "bukti.q2r": "Layanan & Operasional",
    "bukti.q3n": "Operations Lead", "bukti.q3r": "Strata52 · Amerika Serikat",
    "bukti.sub3": "Use case & hasil per klien",
    "bukti.draft": "Angka di bawah ilustrasi awal — mohon verifikasi tim sebelum go-live.",
    "bukti.uc1ind": "Exam Prep / Pendidikan",
    "bukti.uc1t": "Atveti",
    "bukti.uc1p": "Menilai Writing & Speaking IELTS/PTE secara konsisten sulit diskalakan. Kami bangun scoring AI berbasis rubrik resmi + feedback otomatis — hasil cepat dan terkalibrasi.",
    "bukti.uc1m": "Feedback < 60 detik",
    "bukti.uc2ind": "HR / Talent Assessment",
    "bukti.uc2t": "URAI",
    "bukti.uc2p": "Asesmen talenta manual lambat dan subjektif. Kami susun platform asesmen psikometri tervalidasi + narasi rekomendasi otomatis untuk keputusan hiring.",
    "bukti.uc2m": "Rekomendasi otomatis",
    "bukti.uc4ind": "Healthcare / Mental Health",
    "bukti.uc4t": "Vantage",
    "bukti.uc4p": "Intake pasien menumpuk dan butuh respon cepat namun aman. AI intake assistant menjawab 24/7 dengan eskalasi krisis langsung ke staf.",
    "bukti.uc4m": "Intake 24/7, aman",
    "bukti.hint": "Geser →",

    "cta.eyebrow": "Konsultasi Gratis",
    "cta.h2": "Cari tahu apa yang bisa <span class=\"grad-text\">diotomatiskan</span>",
    "cta.lead": "Pilih tantangan terbesar Anda, kami langsung beri arahan via WhatsApp — gratis, tanpa komitmen.",
    "cta.p1": "Audit proses & titik boros",
    "cta.p2": "Rekomendasi solusi + estimasi dampak",
    "cta.p3": "Tanpa biaya, tanpa jualan agresif",

    "form.head": "Mulai konsultasi",
    "form.sub": "Isi singkat, lalu lanjut ngobrol di WhatsApp.",
    "form.l1": "Nama / Bisnis", "form.opt": "(opsional)",
    "form.ph1": "Nama atau nama bisnis Anda",
    "form.l2": "Tantangan operasional utama Anda",
    "form.o0": "Pilih yang paling terasa…",
    "form.o1": "Tim habis waktu untuk tugas repetitif",
    "form.o2": "Respon ke customer lambat / lead bocor",
    "form.o3": "Data tersebar, tidak ada visibilitas",
    "form.o4": "Biaya operasional membengkak",
    "form.o5": "Proses bergantung pada orang tertentu",
    "form.o6": "Lainnya / belum yakin",
    "form.l3": "Catatan singkat",
    "form.ph3": "Contoh: tim CS kewalahan balas chat, ingin otomatis…",
    "form.submit": "Konsultasi via WhatsApp",
    "form.foot": "Tombol ini langsung membuka WhatsApp dengan pesan terisi — Anda tinggal kirim.",

    "faq.eyebrow": "FAQ",
    "faq.h2": "Pertanyaan yang sering muncul",
    "faq.q1": "Perfect10 itu agensi/konsultan atau jual produk?",
    "faq.a1": "Kami konsultan AI. Kami bantu analisa kebutuhan, rancang, dan terapkan automation yang paling berdampak — bukan menjual satu produk jadi.",
    "faq.q2": "Tim kami tidak paham teknis, apa bisa?",
    "faq.a2": "Bisa. Anda cukup paham bisnis Anda; sisi teknis sepenuhnya kami yang tangani, dari rancang sampai jalan.",
    "faq.q3": "Mulai dari mana?",
    "faq.a3": "Dari konsultasi gratis via WhatsApp. Kami petakan kebutuhan Anda dan beri rekomendasi sebelum komit apa pun.",
    "faq.q4": "Berapa biayanya?",
    "faq.a4": "Menyesuaikan ruang lingkup dan dampak yang ingin dicapai. Mulai dari konsultasi gratis, lalu estimasi yang transparan.",

    "footer.mini": "Konsultan AI · Automation untuk efisiensi operasional bisnis.",
    "footer.wa": "Chat WhatsApp",
  },

  en: {
    "meta.title": "Perfect10 — AI Consultant for Operational Efficiency",
    "meta.desc": "Perfect10 is an AI consultancy. We help you map, design, and implement the automation that matters most for your business. Free consultation via WhatsApp.",
    "skip": "Skip to consultation form",

    "nav.solusi": "How We Help", "nav.bukti": "Proof", "nav.faq": "FAQ", "nav.konsultasi": "Consultation",
    "cta.header": "Free Consultation",

    "hero.tag": "AI Consultant",
    "hero.pill": "Your AI partner for business",
    "hero.h1": "AI Automation to Boost Your <span class=\"grad-text\">Operational Efficiency</span>",
    "hero.lead": "As your AI consultant, we guide you from needs analysis to implementation — mapping which processes are worth automating, then building them together with your team.",
    "hero.cta1": "Free Consultation via WhatsApp",
    "hero.cta2": "See Proof & Use Cases",
    "hero.note": "Free, no commitment — chat directly via WhatsApp",
    "hero.photocap": "A hands-on session with our clients",
    "hero.badge": "Trusted by clients in 5 countries",

    "trust.lbl": "Trusted across industries & borders",
    "trust.geo": "Including 2 Indonesian ministries · <span class=\"geo-flags\">🇺🇸 🇦🇺 🇩🇪 🇸🇬 🇮🇩</span>",

    "dash.tag": "Illustration",
    "dash.k1": "Manual hours / week", "dash.k1v": "312 hrs", "dash.k1s": "▼ down 70%",
    "dash.k2": "Leads replied < 60 sec", "dash.k2s": "▲ up from 41%",
    "dash.k3": "Data accuracy", "dash.k3s": "▲ near-zero errors",
    "dash.k4": "Process cost", "dash.k4s": "▲ margin up",
    "dash.chart": "Team output / week",

    "sol.eyebrow": "How We Help",
    "sol.h2": "We map & apply the right AI for you",
    "sol.lead": "We don't sell tools. As consultants, we help you choose and implement automation that truly moves the needle across these areas.",
    "sol.hint": "Swipe to see all →",
    "sol.c1t": "Customer Service Automation",
    "sol.c1d": "An AI agent answers chats & customer questions 24/7 with your business context — escalating to your team only when truly needed.",
    "sol.c2t": "Sales & Lead Automation",
    "sol.c2d": "Lead qualification, follow-up, and nurturing run automatically with nothing missed — from ad click to close.",
    "sol.c3t": "Document & Data Processing",
    "sol.c3d": "Extraction, classification & data entry from invoices, contracts, and forms — done automatically, fast and accurate.",
    "sol.c4t": "Workflow Orchestration",
    "sol.c4d": "Connect WhatsApp, your CRM, spreadsheets, and tools into one seamless end-to-end workflow.",
    "sol.c5t": "Business Intelligence & Insight",
    "sol.c5d": "Real-time dashboards + automated summaries so you and your team decide on data, not guesswork.",
    "sol.c6t": "Custom AI Agent",
    "sol.c6d": "An AI agent designed around your unique processes & rules — not a one-size-fits-all template.",

    "bukti.eyebrow": "Proof & Use Cases",
    "bukti.h2": "Real results, not <span class=\"grad-text\">brochure promises</span>",
    "bukti.lead": "Snapshots of our work and real impact with clients across industries and countries.",
    "bukti.sub1": "With our clients",
    "bukti.ph1": "Mapping needs with the client team",
    "bukti.ph2": "A follow-up consultation session",
    "bukti.ph3": "Online review & support across teams",
    "bukti.sub2": "What clients say",
    "bukti.q1": "\"Recaps and reporting that used to take days are far leaner now. The team can focus on what actually matters.\"",
    "bukti.q2": "\"Follow-ups that used to slip through now run automatically. Our response to outside parties is much faster and tidier.\"",
    "bukti.q3": "\"Pragmatic guidance — not tool-selling, but real help until the system is running day to day.\"",
    "bukti.q1n": "Atveti board", "bukti.q1r": "Vocational Education Association",
    "bukti.q2n": "URAI operations team", "bukti.q2r": "Services & Operations",
    "bukti.q3n": "Operations Lead", "bukti.q3r": "Strata52 · United States",
    "bukti.sub3": "Use cases & results per client",
    "bukti.draft": "Figures below are early illustrations — please verify with the team before go-live.",
    "bukti.uc1ind": "Exam Prep / Education",
    "bukti.uc1t": "Atveti",
    "bukti.uc1p": "Scoring IELTS/PTE Writing & Speaking consistently is hard to scale. We built AI scoring on the official rubric + automated feedback — fast and calibrated.",
    "bukti.uc1m": "Feedback < 60 sec",
    "bukti.uc2ind": "HR / Talent Assessment",
    "bukti.uc2t": "URAI",
    "bukti.uc2p": "Manual talent assessment is slow and subjective. We built a validated psychometric assessment platform + automated recommendation narratives for hiring.",
    "bukti.uc2m": "Automated recommendations",
    "bukti.uc4ind": "Healthcare / Mental Health",
    "bukti.uc4t": "Vantage",
    "bukti.uc4p": "Patient intake piled up and needed fast yet safe responses. An AI intake assistant answers 24/7 with crisis escalation straight to staff.",
    "bukti.uc4m": "24/7, safe intake",
    "bukti.hint": "Swipe →",

    "cta.eyebrow": "Free Consultation",
    "cta.h2": "Find out what can be <span class=\"grad-text\">automated</span>",
    "cta.lead": "Pick your biggest challenge and we'll give you direction right away via WhatsApp — free, no commitment.",
    "cta.p1": "Process audit & waste points",
    "cta.p2": "Solution recommendation + impact estimate",
    "cta.p3": "No cost, no aggressive sales pitch",

    "form.head": "Start a consultation",
    "form.sub": "Fill in briefly, then continue the chat on WhatsApp.",
    "form.l1": "Name / Business", "form.opt": "(optional)",
    "form.ph1": "Your name or business name",
    "form.l2": "Your main operational challenge",
    "form.o0": "Pick the one that hits hardest…",
    "form.o1": "Team buried in repetitive tasks",
    "form.o2": "Slow customer response / leaking leads",
    "form.o3": "Data scattered, no visibility",
    "form.o4": "Operational costs ballooning",
    "form.o5": "Process depends on specific people",
    "form.o6": "Other / not sure yet",
    "form.l3": "Short note",
    "form.ph3": "e.g. CS team overwhelmed with chats, want it automated…",
    "form.submit": "Consult via WhatsApp",
    "form.foot": "This button opens WhatsApp with a pre-filled message — you just hit send.",

    "faq.eyebrow": "FAQ",
    "faq.h2": "Frequently asked questions",
    "faq.q1": "Is Perfect10 a consultancy or a product?",
    "faq.a1": "We're an AI consultancy. We help analyze needs, design, and implement the automation that matters most — not sell a one-size product.",
    "faq.q2": "Our team isn't technical — can we still do this?",
    "faq.a2": "Yes. You just need to know your business; we handle the entire technical side, from design to launch.",
    "faq.q3": "How do we start?",
    "faq.a3": "With a free WhatsApp consultation. We map your needs and give recommendations before any commitment.",
    "faq.q4": "How much does it cost?",
    "faq.a4": "It depends on scope and the impact you're after. We start with a free consultation, then a transparent estimate.",

    "footer.mini": "AI Consultant · Automation for operational efficiency.",
    "footer.wa": "Chat on WhatsApp",
  },
};

const I18N_KEY = "p10_lang";

function getLang() {
  try {
    const saved = localStorage.getItem(I18N_KEY);
    if (saved === "id" || saved === "en") return saved;
  } catch (e) {}
  return "id"; // default ID per client
}

function applyLang(lang) {
  const dict = I18N[lang] || I18N.id;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const t = dict[el.getAttribute("data-i18n")];
    if (t != null) el.textContent = t;
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const t = dict[el.getAttribute("data-i18n-html")];
    if (t != null) el.innerHTML = t;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const t = dict[el.getAttribute("data-i18n-ph")];
    if (t != null) el.setAttribute("placeholder", t);
  });

  document.documentElement.lang = lang;
  if (dict["meta.title"]) document.title = dict["meta.title"];
  const md = document.querySelector('meta[name="description"]');
  if (md && dict["meta.desc"]) md.setAttribute("content", dict["meta.desc"]);

  document.querySelectorAll(".lang-btn").forEach((b) => {
    const on = b.getAttribute("data-lang") === lang;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-pressed", String(on));
  });

  try { localStorage.setItem(I18N_KEY, lang); } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang(getLang());
  document.querySelectorAll(".lang-btn").forEach((b) => {
    b.addEventListener("click", () => applyLang(b.getAttribute("data-lang")));
  });
});

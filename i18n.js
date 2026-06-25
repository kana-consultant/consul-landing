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
    "hero.lead": "Kami dampingi Anda untuk menemukan proses yang paling menyita waktu, lalu membangun automasi AI yang memberikan dampak nyata bagi bisnis Anda.",
    "hero.cta1": "Konsultasi Gratis via WhatsApp",
    "hero.cta2": "Lihat Bukti & Use Case",
    "hero.note": "Gratis, tanpa komitmen — langsung ngobrol via WhatsApp",
    "hero.photocap": "Sesi pendampingan bersama klien kami",
    "hero.badge": "Dipercaya klien di 5 negara",

    "trust.lbl": "Dipercaya lintas industri & lintas negara",
    "trust.geo": "<span class=\"geo-flags\">🇺🇸 🇦🇺 🇩🇪 🇸🇬 🇮🇩</span>",
    "trust.more": "+20 klien lainnya",

    "dash.tag": "Ilustrasi",
    "dash.k1": "Jam manual / minggu", "dash.k1v": "312 jam", "dash.k1s": "▼ turun 70%",
    "dash.k2": "Lead dibalas < 60 dtk", "dash.k2s": "▲ naik dari 41%",
    "dash.k3": "Akurasi data", "dash.k3s": "▲ error ~ nol",
    "dash.k4": "Biaya proses", "dash.k4s": "▲ margin naik",
    "dash.chart": "Output tim / minggu",

    "sol.eyebrow": "Yang Kami Bantu",
    "sol.h2": "Kami petakan & terapkan AI yang tepat sasaran",
    "sol.lead": "4 cara kami bantu bisnis Anda pakai AI — dari yang baru mau coba sampai skala enterprise.",
    "sol.hint": "Geser untuk lihat semua →",
    "sol.fitlbl": "Cocok untuk:",
    "sol.c1t": "Audit & Optimalisasi Proses",
    "sol.c1d": "Kami petakan proses bisnis Anda dan tunjukkan bagian mana yang paling layak diotomatiskan duluan.",
    "sol.c1f": "yang mau adopsi AI tapi bingung mulai dari mana.",
    "sol.c2t": "Custom AI Solution",
    "sol.c2d": "Rapikan proses internal, atau ubah ide jadi produk. Kami bangun sesuai kebutuhan Anda — sekaligus jadi tech partner.",
    "sol.c2f": "SMB yang mau merapikan operasional, atau yang punya peluang pasar dan ingin jadikan produk.",
    "sol.c3t": "Setup & Konfigurasi Hermes Agent",
    "sol.c3d": "Bukan sekadar pasang AI agent — kami setel sesuai proses Anda, ditangani tim berpengalaman 5 tahun.",
    "sol.c3f": "yang mau coba AI dulu tanpa ribet.",
    "sol.c4t": "On-Premise AI",
    "sol.c4d": "Generative AI & Computer Vision di server Anda sendiri, dioptimalkan hingga 3–4x lebih cepat dari solusi konvensional.",
    "sol.c4f": "enterprise menengah–besar yang butuh data tetap internal.",

    "bukti.eyebrow": "Bukti & Use Case",
    "bukti.h2": "Hasil nyata, bukan janji <span class=\"grad-text\">di brosur</span>",
    "bukti.lead": "Cuplikan kerja sama dan dampak nyata bersama klien kami di berbagai industri dan negara.",
    "bukti.sub1": "Bersama klien kami",
    "bukti.ph1": "Diskusi kebutuhan bersama tim klien",
    "bukti.ph2": "Sesi konsultasi lanjutan",
    "bukti.ph3": "Pendampingan & review online lintas tim",
    "bukti.sub3": "Use case & hasil per klien",
    "bukti.uc1ind": "Exam Prep / Pendidikan",
    "bukti.uc1t": "Penilaian latihan instan, setara standar penguji",
    "bukti.uc1p": "Koreksi Writing & Speaking IELTS/PTE yang manual itu lambat & subjektif. Kami bangun scoring AI berbasis rubrik resmi, hasilnya cepat dan konsisten.",
    "bukti.uc1m": "Waktu koreksi turun 95% — 3 hari → < 60 detik per siswa",
    "bukti.uc2ind": "HR / Talent Assessment",
    "bukti.uc2t": "Keputusan hiring berbasis bukti, bukan tebakan",
    "bukti.uc2p": "Asesmen talenta manual cenderung subjektif dan lama diinterpretasi. Kami susun platform psikometri tervalidasi plus rekomendasi otomatis siap pakai HR.",
    "bukti.uc2m": "Tim HR proses 5x lebih banyak kandidat per minggu",
    "bukti.uc4ind": "Healthcare / Mental Health",
    "bukti.uc4t": "Intake pasien 24/7 dengan eskalasi krisis yang aman",
    "bukti.uc4p": "Antrean intake menumpuk dan butuh respons cepat tanpa korbankan keamanan. AI intake melayani 24/7, menandai sinyal krisis, dan eskalasi ke staf saat perlu.",
    "bukti.uc4m": "Respons intake < 1 menit, 24/7 (dari antre berjam-jam)",
    "bukti.uc5ind": "Sales / AI SDR",
    "bukti.uc5t": "Pipeline outbound yang menjalankan dirinya sendiri",
    "bukti.uc5p": "Tim sales boros waktu riset prospek & nulis cold email. KUNCI menjalankannya otomatis: tangkap lead, riset, profilkan, kirim email personal, lalu balas sendiri saat prospek merespons.",
    "bukti.uc5m": "Hemat ~20 jam/minggu per SDR",
    "bukti.hint": "Geser →",

    "cta.eyebrow": "Konsultasi Gratis",
    "cta.h2": "Cari tahu apa yang bisa <span class=\"grad-text\">diotomatiskan</span>",
    "cta.lead": "Pilih tantangan terbesar Anda, kami langsung beri arahan via WhatsApp — gratis, tanpa komitmen.",
    "cta.p1": "Audit proses & titik boros",
    "cta.p2": "Rekomendasi solusi + estimasi dampak",
    "cta.p3": "Tanpa biaya, tanpa jualan agresif",

    "form.head": "Mulai konsultasi",
    "form.sub": "Isi singkat — tim Perfect10 yang akan menghubungi Anda.",
    "form.l1": "Nama / Bisnis", "form.opt": "(opsional)",
    "form.ph1": "Nama atau nama bisnis Anda",
    "form.l4": "Nomor WhatsApp / Telepon",
    "form.ph4": "Contoh: 0812-3456-7890",
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
    "form.submit": "Kirim — tim kami hubungi Anda",
    "form.foot": "Data Anda kami simpan aman — tim Perfect10 menghubungi via WhatsApp/telepon, biasanya di jam kerja.",
    "form.err": "Gagal mengirim. Coba lagi, atau hubungi kami via WhatsApp.",

    "faq.eyebrow": "FAQ",
    "faq.h2": "Pertanyaan yang sering muncul",
    "faq.q1": "PERFECT10 ini konsultan atau jualan produk?",
    "faq.a1": "Konsultan. Kami bantu analisa kebutuhan, rancang, dan terapkan automation yang paling berdampak — bukan jual satu produk jadi yang dipaksa cocok ke semua bisnis.",
    "faq.q2": "Tim kami nggak ngerti teknis, masih bisa jalan?",
    "faq.a2": "Bisa. Anda cukup paham bisnis Anda; urusan teknis dari rancang sampai jalan sepenuhnya kami tangani. Kami terjemahkan kebutuhan bisnis jadi solusi, bukan sebaliknya.",
    "faq.q3": "Mulainya dari mana?",
    "faq.a3": "Dari konsultasi gratis via WhatsApp. Kami petakan proses Anda, tunjukkan bagian mana yang paling layak diotomatiskan duluan, baru kasih rekomendasi — sebelum Anda komit apa pun.",
    "faq.q4": "Berapa biayanya?",
    "faq.a4": "Menyesuaikan ruang lingkup dan dampak yang ingin dicapai. Mulai dari konsultasi gratis, lalu estimasi yang transparan tanpa biaya tersembunyi.",
    "faq.q5": "Berapa lama sampai kelihatan hasilnya?",
    "faq.a5": "Tergantung kompleksitas, tapi kami sengaja mulai dari satu proses berdampak tinggi supaya Anda lihat hasil nyata dalam hitungan minggu, bukan bulan.",
    "faq.q6": "Data bisnis kami aman?",
    "faq.a6": "Aman. Kami bisa rancang solusi sesuai tingkat sensitivitas data Anda — termasuk opsi on-premise, di mana semua data dan AI berjalan di server Anda sendiri tanpa keluar ke pihak ketiga.",
    "faq.q7": "Bisnis kami kecil / niche, cocok nggak?",
    "faq.a7": "Cocok. Justru bisnis kecil dan niche paling cepat merasakan dampaknya. Kalau pasarnya spesifik dan belum ada yang garap, kami bisa bantu jadikan itu produk — kami yang jadi tech partner-nya.",
    "faq.q8": "Apa bedanya dengan langganan tools AI yang sudah ada (ChatGPT dll)?",
    "faq.a8": "Tools jadi itu generik. Kami sesuaikan AI dengan proses, aturan, dan konteks unik bisnis Anda — plus pengalaman 5 tahun supaya konfigurasinya benar-benar pas, bukan sekadar dipasang.",
    "faq.q9": "Setelah jadi, kami tergantung terus ke kalian?",
    "faq.a9": "Tidak harus. Kami bangun supaya bisa Anda kelola sendiri, lengkap dengan pendampingan. Kalau mau, kami juga sedia dukungan berkelanjutan — pilihan ada di tangan Anda.",
    "faq.q10": "AI ini bakal gantiin karyawan kami?",
    "faq.a10": "Tujuannya bukan ganti orang, tapi hilangkan kerja repetitif yang bikin tim Anda boros waktu — supaya mereka fokus ke hal yang butuh penilaian manusia.",
    "faq.more": "Lihat semua pertanyaan",
    "faq.less": "Tampilkan lebih sedikit",

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
    "hero.lead": "We help you pinpoint the processes that drain the most time, then build AI automation that delivers real impact for your business.",
    "hero.cta1": "Free Consultation via WhatsApp",
    "hero.cta2": "See Proof & Use Cases",
    "hero.note": "Free, no commitment — chat directly via WhatsApp",
    "hero.photocap": "A hands-on session with our clients",
    "hero.badge": "Trusted by clients in 5 countries",

    "trust.lbl": "Trusted across industries & borders",
    "trust.geo": "<span class=\"geo-flags\">🇺🇸 🇦🇺 🇩🇪 🇸🇬 🇮🇩</span>",
    "trust.more": "+20 more clients",

    "dash.tag": "Illustration",
    "dash.k1": "Manual hours / week", "dash.k1v": "312 hrs", "dash.k1s": "▼ down 70%",
    "dash.k2": "Leads replied < 60 sec", "dash.k2s": "▲ up from 41%",
    "dash.k3": "Data accuracy", "dash.k3s": "▲ near-zero errors",
    "dash.k4": "Process cost", "dash.k4s": "▲ margin up",
    "dash.chart": "Team output / week",

    "sol.eyebrow": "How We Help",
    "sol.h2": "We map & apply the right AI for you",
    "sol.lead": "4 ways we help your business with AI — from just getting started to enterprise scale.",
    "sol.hint": "Swipe to see all →",
    "sol.fitlbl": "Best for:",
    "sol.c1t": "Process Audit & Optimization",
    "sol.c1d": "We map your business processes and show which parts are most worth automating first.",
    "sol.c1f": "those who want to adopt AI but aren't sure where to start.",
    "sol.c2t": "Custom AI Solution",
    "sol.c2d": "Streamline internal processes, or turn an idea into a product. We build to your needs — and act as your tech partner.",
    "sol.c2f": "SMBs streamlining operations, or those with a market opportunity ready to productize it.",
    "sol.c3t": "Hermes Agent Setup & Configuration",
    "sol.c3d": "Not just installing an AI agent — we tune it to your processes, handled by a team with 5 years of experience.",
    "sol.c3f": "those who want to try AI first, without the hassle.",
    "sol.c4t": "On-Premise AI",
    "sol.c4d": "Generative AI & Computer Vision on your own servers, optimized up to 3–4x faster than conventional solutions.",
    "sol.c4f": "mid-to-large enterprises that need data to stay internal.",

    "bukti.eyebrow": "Proof & Use Cases",
    "bukti.h2": "Real results, not <span class=\"grad-text\">brochure promises</span>",
    "bukti.lead": "Snapshots of our work and real impact with clients across industries and countries.",
    "bukti.sub1": "With our clients",
    "bukti.ph1": "Mapping needs with the client team",
    "bukti.ph2": "A follow-up consultation session",
    "bukti.ph3": "Online review & support across teams",
    "bukti.sub3": "Use cases & results per client",
    "bukti.uc1ind": "Exam Prep / Education",
    "bukti.uc1t": "Instant practice scoring, on the examiner's standard",
    "bukti.uc1p": "Manual IELTS/PTE Writing & Speaking scoring is slow & subjective. We built AI scoring on the official rubric, so results come fast and consistent.",
    "bukti.uc1m": "Grading time down 95% — 3 days → < 60 sec per student",
    "bukti.uc2ind": "HR / Talent Assessment",
    "bukti.uc2t": "Evidence-based hiring decisions, not guesswork",
    "bukti.uc2p": "Manual talent assessment tends to be subjective and slow to interpret. We built a validated psychometric platform plus automated recommendations HR can use right away.",
    "bukti.uc2m": "HR processes 5x more candidates per week",
    "bukti.uc4ind": "Healthcare / Mental Health",
    "bukti.uc4t": "24/7 patient intake with safe crisis escalation",
    "bukti.uc4p": "Intake queues piled up and needed fast responses without compromising safety. An AI intake assistant runs 24/7, flags crisis signals, and escalates to staff when needed.",
    "bukti.uc4m": "Intake response < 1 min, 24/7 (from hours-long queues)",
    "bukti.uc5ind": "Sales / AI SDR",
    "bukti.uc5t": "An outbound pipeline that runs itself",
    "bukti.uc5p": "Sales teams burn time researching prospects & writing cold emails. KUNCI runs it autonomously: capturing leads, researching, profiling, sending personalized email, then replying on its own when prospects respond.",
    "bukti.uc5m": "Saves ~20 hours/week per SDR",
    "bukti.hint": "Swipe →",

    "cta.eyebrow": "Free Consultation",
    "cta.h2": "Find out what can be <span class=\"grad-text\">automated</span>",
    "cta.lead": "Pick your biggest challenge and we'll give you direction right away via WhatsApp — free, no commitment.",
    "cta.p1": "Process audit & waste points",
    "cta.p2": "Solution recommendation + impact estimate",
    "cta.p3": "No cost, no aggressive sales pitch",

    "form.head": "Start a consultation",
    "form.sub": "Fill in briefly — the Perfect10 team will reach out to you.",
    "form.l1": "Name / Business", "form.opt": "(optional)",
    "form.ph1": "Your name or business name",
    "form.l4": "WhatsApp / Phone number",
    "form.ph4": "e.g. 0812-3456-7890",
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
    "form.submit": "Send — we'll contact you",
    "form.foot": "We store your details securely — the Perfect10 team will reach out via WhatsApp/phone, usually within business hours.",
    "form.err": "Couldn't send. Please try again, or contact us on WhatsApp.",

    "faq.eyebrow": "FAQ",
    "faq.h2": "Frequently asked questions",
    "faq.q1": "Is Perfect10 a consultancy or a product vendor?",
    "faq.a1": "A consultancy. We help analyze needs, design, and implement the automation that matters most — not sell a one-size product forced to fit every business.",
    "faq.q2": "Our team isn't technical — can we still do this?",
    "faq.a2": "Yes. You just need to know your business; we handle the entire technical side, from design to launch. We translate business needs into solutions, not the other way around.",
    "faq.q3": "How do we start?",
    "faq.a3": "With a free WhatsApp consultation. We map your processes, show which parts are most worth automating first, then give recommendations — before you commit to anything.",
    "faq.q4": "How much does it cost?",
    "faq.a4": "It depends on scope and the impact you're after. We start with a free consultation, then a transparent estimate with no hidden fees.",
    "faq.q5": "How long until we see results?",
    "faq.a5": "It depends on complexity, but we deliberately start with one high-impact process so you see real results in weeks, not months.",
    "faq.q6": "Is our business data safe?",
    "faq.a6": "Yes. We can design the solution to match your data sensitivity — including an on-premise option where all data and AI run on your own servers, never leaving to a third party.",
    "faq.q7": "Our business is small / niche — is it a fit?",
    "faq.a7": "Yes. Small and niche businesses often feel the impact fastest. If your market is specific and untapped, we can help turn it into a product — with us as your tech partner.",
    "faq.q8": "How is this different from off-the-shelf AI tools (ChatGPT, etc.)?",
    "faq.a8": "Off-the-shelf tools are generic. We tailor the AI to your unique processes, rules, and context — plus 5 years of experience so it's configured to truly fit, not just installed.",
    "faq.q9": "Once it's built, are we stuck depending on you?",
    "faq.a9": "Not at all. We build it so you can run it yourself, with full guidance. If you want, we also offer ongoing support — the choice is yours.",
    "faq.q10": "Will this AI replace our employees?",
    "faq.a10": "The goal isn't to replace people, but to remove the repetitive work that drains your team's time — so they can focus on what needs human judgment.",
    "faq.more": "See all questions",
    "faq.less": "Show fewer",

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

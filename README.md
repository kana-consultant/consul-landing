# consul.perfect10.id — Landing Page (revamp)

High-ticket lead-gen landing page untuk **AI Automation** (Perfect10).
Branding mengikuti identity perfect10.id. Semua CTA & form mengarah ke
**WhatsApp**. Siap dipasang **Meta Pixel**. Static murni — HTML/CSS/JS,
tanpa build step / framework / dependency.

## Struktur halaman

1. **Hero** — headline + sub + CTA ganda + social proof + mock dashboard "Operations Cockpit" (animasi count-up + bar chart).
2. **Trust bar** — daftar industri yang dilayani.
3. **Masalah** — 6 pain point (grid) + kalimat penutup pemicu.
4. **Solusi** (section gelap) — 6 layanan automation.
5. **Proses** (4 langkah) — cara kerja + estimasi waktu tiap tahap.
6. **Sebelum vs Sesudah** — perbandingan tanpa/dengan Perfect10.
7. **Studi Kasus** — 6 case study + angka hasil.
8. **Guarantee / risk reversal** — kartu jaminan "tanpa dampak, tidak lanjut".
9. **FAQ** — 5 pertanyaan (accordion).
10. **Konsultasi (Form, dark)** — form lead → WhatsApp, dengan validasi ringan.
11. **Footer** (multi-kolom) + tombol WhatsApp mengambang + sticky CTA mobile.

## File

| File | Isi |
| ---- | --- |
| `index.html` | Markup semua section (semantic, a11y) |
| `styles.css` | Desain + brand tokens + responsive + reduced-motion |
| `app.js` | WhatsApp + form + Meta Pixel hook + scroll reveal + count-up + FAQ + sticky CTA |
| `assets/favicon.svg` | Favicon mark "10" |

## ⚙️ Yang WAJIB diisi sebelum live

### 1. Nomor WhatsApp
Edit `app.js` bagian `CONFIG`:
```js
const CONFIG = {
  WA_NUMBER: "62XXXXXXXXXXX", // ganti: format internasional, tanpa + atau 0
  ...
};
```
Contoh: `0812-3456-7890` → `"6281234567890"`.

### 2. Meta Pixel (mas Adit)
Di `index.html` `<head>` ada blok Meta Pixel yang masih **di-comment**.
Uncomment, lalu ganti `YOUR_PIXEL_ID` (2 tempat: script + noscript).
Event `Lead` otomatis ter-fire saat user submit form / klik tombol WA
(lihat `trackLead()` di `app.js`).

## Interaksi (vanilla JS)

- **Scroll reveal** — IntersectionObserver (`.reveal`, opsi delay `data-d`).
- **Count-up KPI + bar chart** — mock dashboard hero beranimasi saat masuk viewport (`data-count`/`data-prefix`/`data-suffix`).
- **Header** — solid + shadow setelah scroll.
- **FAQ** — accordion aksesibel (single-open, `aria-expanded`).
- **Sticky CTA mobile** — muncul setelah hero, sembunyi saat form terlihat.
- **Parallax glow hero** — halus, rAF-throttled.
- **prefers-reduced-motion** — semua animasi dimatikan otomatis.

## Brand tokens (dari perfect10.id)

| Token | Hex |
| ----- | --- |
| Violet | `#7C3AED` |
| Teal | `#14E0C5` |
| Magenta | `#E6007A` |
| Ink (heading) | `#101828` |
| Navy (dark bg) | `#0A0E1A` |
| Gradient utama | `#14E0C5 → #7C3AED → #E6007A` |
| Font | Inter |

> Gradient dipakai **terbatas** (top strip, 1 kata headline, beberapa aksen/glow) — bukan di setiap elemen.

## Jalankan lokal

```bash
python3 -m http.server 8899 --directory .
# buka http://127.0.0.1:8899/index.html
```

## Deploy

Static murni (HTML/CSS/JS) — bisa di mana saja: Nginx/Caddy, Netlify, Vercel,
Cloudflare Pages, atau di-host bareng infra P10. Cukup serve folder ini.
Binding subdomain `consul.perfect10.id` → ditangani Zain.

## Catatan

- **Copywriting + angka stat/case** masih bisa difinalisasi (Alif). Angka di mock dashboard & case study bersifat ilustratif.
- `<meta name="darkreader-lock">` sengaja dipasang supaya extension Dark Reader
  tidak merusak gradient/warna brand.
- `color-scheme: light only` — halaman memang light theme (section gelap tetap di-handle manual).
- Form belum kirim ke server/CRM; murni buka WhatsApp dengan pesan terisi.
  Kalau nanti perlu simpan lead ke DB/Sheet, tambah handler di `app.js`.

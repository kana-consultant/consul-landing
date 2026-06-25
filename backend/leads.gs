/* =========================================================================
   Perfect10 — Lead store (Google Apps Script Web App → Google Sheet)

   Purpose
   -------
   The landing page form (index.html / app.js) POSTs each lead here. We append
   it as a row in a Google Sheet. The Hermes sales agent then polls this same
   Web App over HTTP (doGet), does the WhatsApp follow-up, and marks the lead
   done (doGet action=markdone) so it isn't contacted twice.

   Why Apps Script + Sheet
   -----------------------
   The site is static (GitHub Pages) — no server. Apps Script gives a free,
   zero-host HTTP endpoint that writes to a Sheet. The Sheet is structured and
   HTTP-pollable, which is exactly what Hermes can consume (HTTP tool + cron).

   Deploy: see backend/SETUP.md.
   ========================================================================= */

/* ---- CONFIG — EDIT THESE ------------------------------------------------ */
// Shared secret. The public form does NOT need it (POST is open), but every
// READ / status-update (doGet) from Hermes MUST pass ?token=SECRET.
// Generate a long random string and keep it private.
const SECRET = "CHANGE_ME_LONG_RANDOM_TOKEN";

// Sheet tab name. Created automatically on first POST if missing.
const SHEET_NAME = "Leads";

// Column order. Keep in sync with the header row written by ensureSheet_().
const COLUMNS = [
  "timestamp", "nama", "kontak", "kebutuhan", "pesan",
  "lang", "source", "ua", "status", "followup_at", "notes",
];
/* ----------------------------------------------------------------------- */

function ensureSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(COLUMNS);
    sh.setFrozenRows(1);
  }
  return sh;
}

function jsonOut_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/* ---- POST: form submits a new lead -------------------------------------
   Body is JSON sent as text/plain (a CORS "simple request", so the browser
   does no preflight). We read it from e.postData.contents. */
function doPost(e) {
  try {
    const body = (e && e.postData && e.postData.contents) || "{}";
    const d = JSON.parse(body);

    // minimal guard: a contact number is required to be a usable lead
    const kontak = String(d.kontak || "").trim();
    if (!kontak) return jsonOut_({ ok: false, error: "missing_kontak" });

    const sh = ensureSheet_();
    const now = new Date();
    sh.appendRow([
      now,                              // timestamp
      String(d.nama || "").trim(),
      kontak,
      String(d.kebutuhan || "").trim(),
      String(d.pesan || "").trim(),
      String(d.lang || "").trim(),
      String(d.source || "").trim(),
      String(d.ua || "").trim(),
      "NEW",                            // status — Hermes flips to DONE
      "",                               // followup_at
      "",                               // notes
    ]);
    return jsonOut_({ ok: true });
  } catch (err) {
    return jsonOut_({ ok: false, error: String(err) });
  }
}

/* ---- GET: Hermes reads + updates leads ---------------------------------
   ?token=SECRET                              -> required on every GET
   &action=leads (default) [&status=NEW]      -> list leads as JSON
   &action=markdone&row=<n> [&notes=...]      -> mark a lead followed up
   row is the 1-based Sheet row (as returned in the leads list).            */
function doGet(e) {
  const p = (e && e.parameter) || {};
  if (p.token !== SECRET) return jsonOut_({ ok: false, error: "unauthorized" });

  const sh = ensureSheet_();
  const action = p.action || "leads";

  if (action === "markdone") {
    const row = parseInt(p.row, 10);
    if (!row || row < 2) return jsonOut_({ ok: false, error: "bad_row" });
    const statusCol = COLUMNS.indexOf("status") + 1;
    const followCol = COLUMNS.indexOf("followup_at") + 1;
    const notesCol = COLUMNS.indexOf("notes") + 1;
    sh.getRange(row, statusCol).setValue("DONE");
    sh.getRange(row, followCol).setValue(new Date());
    if (p.notes) sh.getRange(row, notesCol).setValue(String(p.notes));
    return jsonOut_({ ok: true, row: row });
  }

  // action === "leads"
  const wantStatus = (p.status || "NEW").toUpperCase(); // NEW | DONE | ALL
  const values = sh.getDataRange().getValues();
  const out = [];
  for (let r = 1; r < values.length; r++) { // skip header
    const row = values[r];
    const obj = { row: r + 1 }; // 1-based Sheet row for markdone
    COLUMNS.forEach((c, i) => (obj[c] = row[i]));
    if (wantStatus === "ALL" || String(obj.status).toUpperCase() === wantStatus) {
      out.push(obj);
    }
  }
  return jsonOut_({ ok: true, count: out.length, leads: out });
}

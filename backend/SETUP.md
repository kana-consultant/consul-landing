# Lead store — setup (Google Apps Script → Google Sheet → Hermes)

New form flow (per client request):

1. Visitor fills the form. **WhatsApp/phone number is required.**
2. On submit, the lead is **POSTed to a Google Sheet** (via an Apps Script Web App) — no WhatsApp auto-open anymore.
3. Visitor lands on `thanks.html` (Meta Pixel `Lead` still fires there).
4. The **Hermes sales agent polls the Sheet over HTTP**, follows up on WhatsApp, and marks the lead `DONE`.

Why this backend: the site is static (GitHub Pages, no server). Apps Script is a free, zero-host HTTP endpoint that writes to a Sheet. A Sheet is structured + HTTP-pollable — exactly what Hermes consumes (its HTTP tool + cron scheduler).

---

## 1. Create the Sheet + script

1. New Google Sheet (any name, e.g. `Perfect10 Leads`).
2. **Extensions → Apps Script**.
3. Delete the stub, paste the contents of [`leads.gs`](./leads.gs).
4. Set `SECRET` to a long random string (keep it private). Generate one e.g.:
   ```
   openssl rand -hex 24
   ```
5. Save.

## 2. Deploy as Web App

1. **Deploy → New deployment → type: Web app**.
2. *Execute as:* **Me**.
3. *Who has access:* **Anyone** (required so the public form can POST; reads are still gated by `SECRET`).
4. Deploy, authorize, copy the **Web app URL** (ends in `/exec`).

> Re-deploy (**Manage deployments → Edit → New version**) after any code edit, or the old version keeps serving.

## 3. Wire the frontend

In [`app.js`](../app.js), set:

```js
LEAD_ENDPOINT: "https://script.google.com/macros/s/AKfy.../exec",
```

Leave it `""` to keep the old "open WhatsApp" fallback while testing. With it set, submits POST to the Sheet and redirect to `thanks.html`. If the network call fails, the form still falls back to WhatsApp so no lead is lost.

Test: submit the form → a new row appears in the Sheet with `status = NEW`.

---

## 4. Hermes polling (the follow-up loop)

Hermes runs locally and has an HTTP tool + cron scheduler (see `hermes/SETUP.md`).

**List new leads** (Hermes GET, on a cron e.g. every 5–10 min):

```
GET {WEB_APP_URL}?token={SECRET}&action=leads&status=NEW
```

Response:

```json
{ "ok": true, "count": 1, "leads": [
  { "row": 2, "timestamp": "...", "nama": "Budi", "kontak": "0812-3456-7890",
    "kebutuhan": "Respon ke customer lambat / lead bocor", "pesan": "...",
    "lang": "id", "status": "NEW" }
] }
```

For each lead, Hermes opens WhatsApp to `kontak`, follows up using its persona (`hermes/persona.md`), then **marks it done** so it's never contacted twice:

```
GET {WEB_APP_URL}?token={SECRET}&action=markdone&row=2&notes=contacted%20via%20WA
```

Suggested Hermes cron prompt:

> Every 10 minutes: GET the leads endpoint with `status=NEW`. For each lead, message `kontak` on WhatsApp with a warm consultative opener referencing their `kebutuhan` (use persona.md). After messaging, call the endpoint with `action=markdone&row=<row>`. Never message a lead twice.

### Endpoint reference

| Call | Purpose |
|------|---------|
| `POST {url}` (JSON body) | form submits a new lead (open, no token) |
| `GET {url}?token=…&action=leads&status=NEW\|DONE\|ALL` | list leads |
| `GET {url}?token=…&action=markdone&row=<n>&notes=…` | mark a lead followed up |

---

## Security notes

- `SECRET` gates all reads/updates. POST is intentionally open (it's a public form) — only appends rows, never reads.
- Don't commit the deployed URL+token together anywhere public. `SECRET` lives only in the Apps Script project; `LEAD_ENDPOINT` (URL only) is safe in `app.js`.
- Leads contain phone numbers (PII). The Sheet is the system of record — restrict its sharing.

/* =========================================================================
   consul.perfect10.id — PostHog conversion tracking
   Loaded in <head> of index.html and thanks.html, before app.js.

   Same PostHog project as perfect10.id, so a visitor's journey across the
   subdomains stays one person.

   Events (P10 SEO F1):
     consultation_form_start   first edit of a field in #lead-form
     consultation_form_submit  lead stored successfully (never on failure)
     whatsapp_click            a click that opens WhatsApp
     trial_cta_click, demo_request, trial_signup
                               wired declaratively: data-track="<event>"

   Every event carries source_page (the page the action happened on) and the
   session's traffic source (utm_* or referring domain, else "direct").

   PRIVACY: events never contain names, emails, phone numbers or message text.
   Only pass the fixed, non-personal props below through P10Track.
   ========================================================================= */

/* PostHog loader snippet (stubs the API until array.js arrives) */
!function(t,e){var o,n,p,r;e.__SV||(window.posthog&&window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

posthog.init("phc_YdS1tNEqxzvHmKj8rO7a91S3l6Q9udobanDkbALv260", {
  api_host: "https://us.i.posthog.com",
  ui_host: "https://us.posthog.com",
  person_profiles: "identified_only",
  // The project records request bodies in replays; the lead POST carries the
  // visitor's name and phone, so replay stays off on this site.
  disable_session_recording: true,
});

(function () {
  var SRC_KEY = "p10_src";      // session traffic source (first touch in session)
  var QUEUE_KEY = "p10_ev_queue"; // events handed over to the next page

  function store() {
    try { return window.sessionStorage; } catch (_) { return null; }
  }

  /* page URL without query/hash: no ids or prefilled text can leak */
  function pageUrl() {
    return location.origin + location.pathname;
  }

  /* traffic source for this session: utm params, else external referrer
     domain, else "direct". Saved on the first page so thanks.html (whose
     referrer is our own landing page) reports where the visit came from. */
  function trafficSource() {
    var s = store();
    try {
      var saved = s && s.getItem(SRC_KEY);
      if (saved) return JSON.parse(saved);
    } catch (_) {}

    var q = new URLSearchParams(location.search);
    var src = {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach(function (k) {
      var v = q.get(k);
      if (v) src[k] = v.slice(0, 100);
    });
    var refHost = "";
    try { refHost = document.referrer ? new URL(document.referrer).hostname : ""; } catch (_) {}
    var external = refHost && refHost !== location.hostname;
    src.traffic_source = src.utm_source || (external ? refHost : "direct");
    src.landing_page = pageUrl();

    // only persist a real first touch, never an internal hop
    if (s && (external || src.utm_source || !refHost)) {
      try { s.setItem(SRC_KEY, JSON.stringify(src)); } catch (_) {}
    }
    return src;
  }

  function props(extra) {
    var out = { source_page: pageUrl() };
    var src = trafficSource();
    for (var k in src) out[k] = src[k];
    for (var e in extra || {}) out[e] = extra[e];
    return out;
  }

  function capture(event, p) {
    posthog.capture(event, p);
  }

  /* fire now (the page stays) */
  function track(event, extra) {
    capture(event, props(extra));
  }

  /* fire on the NEXT page: use right before navigating away, so the event is
     not lost with the unloading page. Flushed exactly once on load. */
  function trackOnNextPage(event, extra) {
    var p = props(extra);
    var s = store();
    if (!s) { capture(event, p); return; }
    try {
      var q = JSON.parse(s.getItem(QUEUE_KEY) || "[]");
      q.push({ e: event, p: p });
      s.setItem(QUEUE_KEY, JSON.stringify(q));
    } catch (_) { capture(event, p); }
  }

  function flushQueue() {
    var s = store();
    if (!s) return;
    var q;
    try {
      q = JSON.parse(s.getItem(QUEUE_KEY) || "[]");
      s.removeItem(QUEUE_KEY); // remove first so a reload cannot re-fire
    } catch (_) { return; }
    q.forEach(function (item) { capture(item.e, item.p); });
  }

  trafficSource(); // record the first touch on arrival
  flushQueue();

  /* declarative clicks: <a data-track="trial_cta_click" data-src="hero"> */
  document.addEventListener("click", function (e) {
    var el = e.target.closest && e.target.closest("[data-track]");
    if (!el) return;
    track(el.getAttribute("data-track"), { cta: el.getAttribute("data-src") || null });
  });

  window.P10Track = { track: track, trackOnNextPage: trackOnNextPage };
})();

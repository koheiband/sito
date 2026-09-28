/* =====================================================================
   KŌHEI — logica del sito (vanilla JS, nessuna dipendenza)
   Non serve modificare questo file per aggiornare i contenuti:
   usa js/content.js e js/live.js.
   ===================================================================== */
(function () {
  "use strict";

  var I18N = window.KOHEI_I18N;
  var C = window.KOHEI_CONTENT;
  var LIVE = window.KOHEI_LIVE || [];
  var LANGS = ["it", "en"];
  var lang = pickLang();

  /* ---------- Icone social (SVG disegnate a mano, colore = currentColor) ---------- */
  var ICO = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">';
  var ICONS = {
    instagram: ICO + '<rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.3" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.4" cy="6.6" r="1.3" fill="currentColor"/></svg>',
    bandcamp: ICO + '<path d="M0 18.75l7.44-13.5H24l-7.44 13.5z" fill="currentColor"/></svg>',
    spotify: ICO + '<circle cx="12" cy="12" r="11" fill="currentColor"/><path class="ico-cut" d="M6 9.3c4-1.2 8.5-.9 12 1.1M6.7 12.7c3.3-.9 7-.6 9.9 1M7.4 15.9c2.6-.7 5.4-.5 7.6.8" fill="none" stroke-width="1.8" stroke-linecap="round"/></svg>',
    youtube: ICO + '<rect x="1" y="4.5" width="22" height="15" rx="4.5" fill="currentColor"/><path class="ico-cut-fill" d="M9.8 8.6v6.8l5.9-3.4z"/></svg>',
    soundcloud: ICO + '<path d="M10 17V8.6a5.5 5.5 0 0 1 10.3 2.5A3 3 0 1 1 21 17z" fill="currentColor"/><rect x="1" y="13" width="1.3" height="4" rx=".65" fill="currentColor"/><rect x="3.3" y="11.4" width="1.3" height="5.6" rx=".65" fill="currentColor"/><rect x="5.6" y="10" width="1.3" height="7" rx=".65" fill="currentColor"/><rect x="7.9" y="9.2" width="1.3" height="7.8" rx=".65" fill="currentColor"/></svg>'
  };

  /* ---------- Utility ---------- */
  function isPlaceholder(v) { return typeof v === "string" && /\[[^\]]+\]/.test(v); }
  function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.it[key] || ""; }
  function loc(v) { return v && typeof v === "object" ? (v[lang] || v.it || "") : (v || ""); }
  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else if (attrs[k] !== null && attrs[k] !== undefined) n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  // Data di oggi in formato AAAA-MM-GG, fuso orario del visitatore
  function todayISO() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function isISODate(s) { return typeof s === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s); }
  function parseISO(s) { var p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function fmtDate(s, opts) {
    return new Intl.DateTimeFormat(lang === "it" ? "it-IT" : "en-GB", opts).format(parseISO(s));
  }

  // Link esterno; se l'URL è un segnaposto il link resta visibile ma marcato e inattivo
  function extLink(url, label, cls) {
    var a = el("a", { class: cls || "", href: isPlaceholder(url) ? "#" : url });
    a.appendChild(document.createTextNode(label));
    if (isPlaceholder(url)) {
      a.classList.add("is-placeholder");
      a.setAttribute("aria-disabled", "true");
      a.title = t("placeholder") + ": " + url;
      a.addEventListener("click", function (e) { e.preventDefault(); });
    } else if (/^https?:/.test(url)) {
      a.target = "_blank";
      a.rel = "noopener";
      a.appendChild(el("span", { class: "visually-hidden", text: " " + t("newTab") }));
    }
    return a;
  }

  function img(src, alt, w, h) {
    var i = el("img", { alt: loc(alt), width: w, height: h, loading: "lazy", decoding: "async" });
    if (isPlaceholder(src)) {
      i.classList.add("is-placeholder");
      i.alt = t("placeholder");
      i.title = src;
    } else {
      i.src = src;
      if (/-1200\.webp$/.test(src)) {
        i.srcset = src.replace(/-1200\.webp$/, "-600.webp") + " 600w, " + src + " 1200w";
        i.sizes = "(min-width: 700px) 45vw, 100vw";
      }
    }
    return i;
  }

  /* ---------- Lingua ---------- */
  function pickLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (LANGS.indexOf(q) > -1) return q;
    try { var s = localStorage.getItem("kohei-lang"); if (LANGS.indexOf(s) > -1) return s; } catch (e) {}
    // Default sempre italiano: l'inglese solo se scelto con la bandiera o con ?lang=en
    return "it";
  }
  function applyStaticTexts() {
    document.documentElement.lang = lang;
    var page = document.documentElement.getAttribute("data-page") || "meta";
    document.title = t(page + ".title");
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t(page + ".description"));
    var canon = document.querySelector('link[rel="canonical"]');
    if (canon) canon.href = canon.href.split("?")[0] + (lang === "en" ? "?lang=en" : "");

    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      var v = t(n.getAttribute("data-i18n"));
      if (v) n.textContent = v;
    });
    // testi con corsivi (<em>) scritti in i18n.js: mai contenuti esterni
    document.querySelectorAll("[data-i18n-html]").forEach(function (n) {
      var v = t(n.getAttribute("data-i18n-html"));
      if (v) n.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (n) {
      n.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var p = pair.split(":");
        n.setAttribute(p[0], t(p[1]));
      });
    });
    document.querySelectorAll("[data-set-lang]").forEach(function (b) {
      var on = b.getAttribute("data-set-lang") === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    // blocchi di testo lunghi (pagina privacy)
    document.querySelectorAll("[data-lang-block]").forEach(function (n) {
      n.hidden = n.getAttribute("data-lang-block") !== lang;
    });
    var loc_ = document.querySelector('input[name="locale"]');
    if (loc_) loc_.value = lang;
  }
  function setLang(l) {
    lang = l;
    try { localStorage.setItem("kohei-lang", l); } catch (e) {} // preferenza tecnica, non è un cookie
    var u = new URL(location.href);
    if (l === "it") u.searchParams.delete("lang"); else u.searchParams.set("lang", l);
    history.replaceState(null, "", u);
    renderAll();
  }

  /* ---------- Menu mobile ---------- */
  function initMenu() {
    var header = document.querySelector(".site-header");
    var btn = document.querySelector(".menu-toggle");
    var nav = document.getElementById("site-nav");
    if (!btn || !nav) return;
    function setOpen(open) {
      header.classList.toggle("is-open", open);
      btn.setAttribute("aria-expanded", String(open));
      btn.setAttribute("aria-label", t(open ? "nav.close" : "nav.open"));
      document.body.style.overflow = open ? "hidden" : "";
      if (open) setTimeout(function () { var first = nav.querySelector("a"); if (first) first.focus(); }, 60);
    }
    btn.addEventListener("click", function () { setOpen(btn.getAttribute("aria-expanded") !== "true"); });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && header.classList.contains("is-open")) { setOpen(false); btn.focus(); }
    });
    window.matchMedia("(min-width: 900px)").addEventListener("change", function () { setOpen(false); });
  }

  /* ---------- Hero ---------- */
  function renderHero() {
    var a = document.getElementById("featured-link");
    if (!a || !C.featured) return;
    a.textContent = loc(C.featured.label);
    a.href = C.featured.href;
    if (/^https?:/.test(C.featured.href)) {
      a.target = "_blank"; a.rel = "noopener";
      a.appendChild(el("span", { class: "visually-hidden", text: " " + t("newTab") }));
    }
    var k = document.getElementById("featured-kicker");
    if (k) k.textContent = loc(C.featured.kicker);
  }

  /* ---------- Musica ---------- */
  function releaseStatus(r) {
    var today = todayISO();
    if (isISODate(r.date)) {
      if (r.date > today) return { text: t("music.outOn") + " " + fmtDate(r.date, { day: "numeric", month: "long", year: "numeric" }), upcoming: true };
      return { text: r.date.slice(0, 4), upcoming: false };
    }
    if (r.upcoming) return { text: t("music.soon"), upcoming: true };
    return { text: isPlaceholder(r.date) ? r.date : "", upcoming: false };
  }
  function renderReleases() {
    var root = document.getElementById("releases");
    if (!root) return;
    root.textContent = "";
    // prima le uscite future, poi le altre in ordine di data decrescente
    var list = C.releases.slice().sort(function (a, b) {
      var sa = releaseStatus(a).upcoming, sb = releaseStatus(b).upcoming;
      if (sa !== sb) return sa ? -1 : 1;
      // senza data: in fondo tra le future ("Prossimamente"), in fondo anche tra le passate
      var none = sa ? "9999" : "0";
      var da = isISODate(a.date) ? a.date : none, db = isISODate(b.date) ? b.date : none;
      return sa ? (da < db ? -1 : 1) : (da > db ? -1 : 1);
    });
    list.forEach(function (r) {
      var st = releaseStatus(r);
      var meta = el("p", { class: "release__meta" }, [
        loc(r.type), st.text ? " · " : "",
        st.text ? el("span", { class: st.upcoming ? "release__status" : "", text: st.text }) : null
      ]);
      var body = el("div", { class: "release__body" }, [meta, el("h3", { class: "release__title", text: r.title })]);

      if (r.tracks && r.tracks.length) {
        body.appendChild(el("p", { class: "release__tracks-label", text: t("music.tracklist") }));
        body.appendChild(el("ol", { class: "release__tracks" }, r.tracks.map(function (tr) { return el("li", { text: tr }); })));
      }
      var links = (r.links || []).filter(function (l) { return l.url; });
      if (links.length) {
        var box = el("div", { class: "release__links", role: "group", "aria-label": t("music.listen") + " — " + r.title });
        links.forEach(function (l) { box.appendChild(extLink(l.url, l.name, "btn btn--small")); });
        body.appendChild(box);
      }
      root.appendChild(el("article", { class: "release" }, [
        (function () { var i = img(r.cover, r.coverAlt, 1200, 1200); i.classList.add("release__cover"); return i; })(),
        body
      ]));
    });
  }

  /* ---------- Live ---------- */
  function showItem(s, past) {
    var dateText = s.placeholder ? "[DATA]" :
      fmtDate(s.date, past ? { day: "2-digit", month: "2-digit", year: "numeric" } : { weekday: "short", day: "numeric", month: "short", year: "numeric" });
    var place = el("p", { class: "show__place" }, [
      el("span", { class: "show__city", text: s.city + (s.country ? " (" + s.country + ")" : "") }),
      el("br"), el("span", { class: "show__venue", text: s.venue }),
      s.note ? el("br") : null, s.note ? el("span", { class: "show__note", text: loc(s.note) }) : null
    ]);
    place.style.margin = "0";
    var cta = null;
    if (!past) {
      if (s.soldOut) cta = el("span", { class: "show__soldout", text: t("live.soldout") });
      else if (s.tickets) cta = extLink(s.tickets, t("live.tickets"), "btn btn--invert btn--small");
      else if (s.info) cta = extLink(s.info, t("live.free"), "btn btn--invert btn--small");
      if (cta) cta.classList.add("show__cta");
    }
    var li = el("li", { class: "show" + (s.placeholder ? " is-placeholder" : "") }, [
      el("time", { class: "show__date", datetime: s.placeholder ? null : s.date, text: dateText }), place, cta
    ]);
    return li;
  }
  function renderLive() {
    var up = document.getElementById("shows-upcoming");
    var pastList = document.getElementById("shows-past");
    var archive = document.getElementById("shows-archive");
    var empty = document.getElementById("shows-empty");
    if (!up) return;
    var today = todayISO();
    var valid = LIVE.filter(function (s) { return isISODate(s.date); });
    var upcoming = valid.filter(function (s) { return s.date >= today; }).sort(function (a, b) { return a.date < b.date ? -1 : 1; });
    var past = valid.filter(function (s) { return s.date < today; }).sort(function (a, b) { return a.date > b.date ? -1 : 1; });

    up.textContent = ""; pastList.textContent = "";
    upcoming.forEach(function (s) { up.appendChild(showItem(s, false)); });
    past.forEach(function (s) { pastList.appendChild(showItem(s, true)); });
    up.hidden = !upcoming.length;
    empty.hidden = !!upcoming.length;
    archive.hidden = !past.length;
    injectEventsLD(upcoming.filter(function (s) { return !s.placeholder; }));
  }
  // Dati strutturati per Google (solo date reali future)
  function injectEventsLD(shows) {
    var old = document.getElementById("ld-events");
    if (old) old.remove();
    if (!shows.length) return;
    var data = shows.map(function (s) {
      var ev = {
        "@context": "https://schema.org", "@type": "MusicEvent",
        name: "KŌHEI — " + s.city, startDate: s.date,
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: { "@type": "Place", name: s.venue, address: { "@type": "PostalAddress", addressLocality: s.city, addressCountry: s.country || "IT" } },
        performer: { "@type": "MusicGroup", name: "KŌHEI" }
      };
      if (s.tickets && !isPlaceholder(s.tickets)) ev.offers = { "@type": "Offer", url: s.tickets, availability: s.soldOut ? "https://schema.org/SoldOut" : "https://schema.org/InStock" };
      return ev;
    });
    var sc = el("script", { type: "application/ld+json", id: "ld-events" });
    sc.textContent = JSON.stringify(data);
    document.head.appendChild(sc);
  }

  /* ---------- Video: click-to-load su youtube-nocookie ---------- */
  function renderVideos() {
    var root = document.getElementById("videos");
    if (!root) return;
    root.textContent = "";
    C.videos.slice(0, 1).forEach(function (v) {
      var frame = el("div", { class: "video__frame" });
      if (isPlaceholder(v.id)) {
        frame.classList.add("is-placeholder");
        frame.appendChild(el("p", { class: "video__missing", text: t("video.missing") + " " + v.id }));
      } else {
        var btn = el("button", { class: "video__play", type: "button", "aria-label": t("video.play") + ": " + v.title });
        var th = img(v.thumb, "", 1280, 720);
        th.alt = "";
        btn.appendChild(th);
        btn.appendChild(el("span", { class: "video__icon", "aria-hidden": "true" }));
        btn.addEventListener("click", function () {
          var f = el("iframe", {
            src: "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(v.id) + "?autoplay=1&rel=0",
            title: v.title,
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowfullscreen: "",
            referrerpolicy: "strict-origin-when-cross-origin"
          });
          frame.replaceChildren(f);
          f.focus();
        });
        frame.appendChild(btn);
      }
      root.appendChild(el("figure", { class: "video", style: "margin:0" }, [
        frame, el("figcaption", { class: "video__title", text: v.title })
      ]));
    });
  }

  /* ---------- Merch ---------- */
  function renderMerch() {
    var ul = document.getElementById("merch-gallery");
    if (!ul || !C.merch) return;
    ul.textContent = "";
    (C.merch.photos || []).forEach(function (ph) {
      var i = el("img", { alt: loc(ph.alt), width: 1080, height: 1440, loading: "lazy", decoding: "async" });
      if (isPlaceholder(ph.src)) { i.classList.add("is-placeholder"); i.title = ph.src; }
      else {
        i.src = ph.src;
        if (/-1080\.webp$/.test(ph.src)) {
          i.srcset = ph.src.replace(/-1080\.webp$/, "-540.webp") + " 540w, " + ph.src + " 1080w";
          i.sizes = "(min-width: 800px) 30vw, 85vw";
        }
      }
      ul.appendChild(el("li", null, [i]));
    });
    var store = document.getElementById("merch-store");
    var a = document.getElementById("merch-link");
    store.hidden = !C.merch.url;
    if (C.merch.url) {
      var fresh = extLink(C.merch.url, t("merch.cta"), a.className);
      fresh.id = "merch-link";
      a.replaceWith(fresh);
    }
  }

  /* ---------- Newsletter ---------- */
  function initNewsletter() {
    var f = document.getElementById("news-form");
    if (!f) return;
    var msg = document.getElementById("news-msg");
    var action = C.newsletter && C.newsletter.action;
    if (action && !isPlaceholder(action)) f.action = action;
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      msg.textContent = "";
      if (!f.checkValidity()) { f.reportValidity(); return; }
      if (!action || isPlaceholder(action)) { msg.textContent = t("news.notReady"); return; }
      // Invio diretto a Brevo. La risposta non è leggibile (no-cors):
      // Brevo invia poi l'email di conferma (double opt-in) all'iscritto.
      var btn = f.querySelector('button[type="submit"]');
      btn.disabled = true;
      fetch(action, { method: "POST", mode: "no-cors", body: new FormData(f) })
        .then(function () { f.reset(); msg.textContent = t("news.ok"); })
        .catch(function () { msg.textContent = t("news.error"); })
        .then(function () { btn.disabled = false; var l = f.querySelector('input[name="locale"]'); if (l) l.value = lang; });
    });
  }

  /* ---------- Contatti ---------- */
  function renderContacts() {
    var box = document.getElementById("contact-emails");
    if (box) {
      box.textContent = "";
      C.contacts.filter(function (c) { return c.email; }).forEach(function (c) {
        box.appendChild(el("dt", { text: loc(c.label) }));
        box.appendChild(el("dd", null, [el("a", { class: "big-link", href: "mailto:" + c.email, text: c.email })]));
      });
    }
    var ul = document.getElementById("contact-socials");
    if (ul) {
      ul.textContent = "";
      C.socials.filter(function (s) { return s.url; }).forEach(function (s) {
        var a = extLink(s.url, "", "social-link");
        var svg = ICONS[s.name.toLowerCase()];
        if (svg) {
          // icona visibile; il nome resta per lettori di schermo e come tooltip
          a.insertAdjacentHTML("afterbegin", svg + '<span class="visually-hidden">' + s.name + "</span>");
          a.title = s.name;
        } else {
          a.insertBefore(document.createTextNode(s.name), a.firstChild);
        }
        ul.appendChild(el("li", null, [a]));
      });
    }
  }

  /* ---------- Link che portano la lingua (es. privacy) ---------- */
  function updateLangLinks() {
    document.querySelectorAll("[data-privacy-link]").forEach(function (a) {
      var base = a.getAttribute("href").replace(/\?lang=en/, "");
      var hash = "";
      var i = base.indexOf("#");
      if (i > -1) { hash = base.slice(i).replace(/-en$/, ""); base = base.slice(0, i); }
      if (hash && lang === "en") hash += "-en";
      a.setAttribute("href", base + (lang === "en" ? "?lang=en" : "") + hash);
    });
  }

  function renderAll() {
    applyStaticTexts();
    if (C) {
      renderHero(); renderReleases(); renderLive(); renderVideos(); renderMerch(); renderContacts();
    }
    updateLangLinks();
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderAll();
    initMenu();
    initNewsletter();
    document.querySelectorAll("[data-set-lang]").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-set-lang")); });
    });
  });
})();

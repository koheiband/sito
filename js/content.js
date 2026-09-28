/* =====================================================================
   KŌHEI — CONTENUTI DEL SITO
   ---------------------------------------------------------------------
   Questo è l'UNICO file da modificare per link, uscite, video e contatti.
   (Le date dei concerti sono in js/live.js.)

   Regole:
   - Un valore tra parentesi quadre, es. "[LINK_YOUTUBE]", è un SEGNAPOSTO:
     sul sito compare evidenziato con bordo tratteggiato finché non lo
     sostituisci con il valore reale.
   - Un valore null nasconde l'elemento (es. una piattaforma che non usate).
   - Le immagini vanno in assets/img/ in formato WebP (vedi README.md).
   ===================================================================== */

window.KOHEI_CONTENT = {

  /* ---------- Contatti ---------- */
  /* Ogni riga = un indirizzo nella sezione Contatti, nell'ordine scritto qui. */
  contacts: [
    { label: { it: "Band", en: "Band" },       email: "band.kohei@gmail.com" },
    { label: { it: "Booking", en: "Booking" }, email: "monica.m@agiantleap.info" }
  ],

  /* ---------- Canali (header, footer, sezione Contatti) ---------- */
  socials: [
    { name: "Instagram",  url: "https://www.instagram.com/kohei.band/" },
    { name: "Bandcamp",   url: "https://kohei.bandcamp.com" },
    { name: "Spotify",    url: "[LINK_SPOTIFY_ARTISTA]" },
    { name: "YouTube",    url: "[LINK_YOUTUBE_CANALE]" },
    { name: "SoundCloud", url: "[LINK_SOUNDCLOUD]" }       // null se non usato
  ],

  /* ---------- In evidenza nell'hero ---------- */
  featured: {
    label: { it: "Graphene Cult — nuovo singolo", en: "Graphene Cult — new single" },
    href: "#musica"
  },

  /* ---------- Musica ----------
     cover: se il file finisce con "-1200.webp", il sito usa in automatico
            anche la versione "-600.webp" sugli schermi piccoli.
     date: "AAAA-MM-GG" → prima di quel giorno compare "In uscita il …",
           dopo compare l'anno. null + upcoming:true → "Prossimamente".   */
  releases: [
    {
      title: "Graphene Cult",
      type: { it: "Singolo", en: "Single" },
      date: "2026-10-16",
      cover: "assets/img/[COVER_GRAPHENE_CULT].webp",
      coverAlt: { it: "[ALT_COVER_GRAPHENE_CULT]", en: "[ALT_COVER_GRAPHENE_CULT]" },
      tracks: [],
      links: [
        { name: "Bandcamp", url: "[LINK_BANDCAMP_GRAPHENE_CULT]" },
        { name: "Spotify",  url: "[LINK_SPOTIFY_GRAPHENE_CULT]" }
      ]
    },
    {
      title: "Everything Looks Real",
      type: { it: "Album", en: "Album" },
      date: null,
      upcoming: true,
      cover: "assets/img/cover-everything-looks-real-1200.webp",
      coverAlt: {
        it: "Copertina di Everything Looks Real: illustrazione in bianco e nero di un circo in una piazza, con due figure mascherate che ballano e un cane seduto su un piedistallo.",
        en: "Everything Looks Real cover: black and white illustration of a circus in a town square, with two masked figures dancing and a dog sitting on a pedestal."
      },
      tracks: [
        "Drones Above So Below", "Plastic Grins", "Yonigeya",
        "Where The Nowhere Ends", "Ruse", "Plutocracy",
        "Claustrophobia", "Drunken Sunken", "Graphene Cult"
      ],
      links: []
    },
    {
      title: "Plunge",
      type: { it: "EP", en: "EP" },
      date: "[DATA_USCITA_PLUNGE]",
      cover: "assets/img/[COVER_PLUNGE].webp",
      coverAlt: { it: "[ALT_COVER_PLUNGE]", en: "[ALT_COVER_PLUNGE]" },
      tracks: ["Shelter", "Terra Nullius", "Companion"],
      links: [
        { name: "Bandcamp", url: "[LINK_BANDCAMP_PLUNGE]" },
        { name: "Spotify",  url: "https://open.spotify.com/album/3jwid32GA5sReXfTccsNUu" }
      ]
    }
  ],

  /* ---------- Video ----------
     id = codice YouTube (la parte dopo "watch?v=").
     thumb = anteprima salvata in locale (niente richieste a Google finché
     l'utente non clicca).                                               */
  videos: [
    {
      id: "[YOUTUBE_ID_1]",
      title: "[TITOLO_VIDEO_1]",
      thumb: "assets/img/[THUMB_VIDEO_1].webp"
    },
    {
      id: "[YOUTUBE_ID_2]",
      title: "[TITOLO_VIDEO_2]",
      thumb: "assets/img/[THUMB_VIDEO_2].webp"
    }
  ],

  /* ---------- Merch ---------- */
  merch: {
    url: "[LINK_STORE_MERCH]",
    image: "assets/img/[FOTO_MERCH].webp",
    imageAlt: { it: "[ALT_FOTO_MERCH]", en: "[ALT_FOTO_MERCH]" }
  },

  /* ---------- Newsletter (Brevo) ----------
     Copia da Brevo > Moduli > il tuo modulo > "Condividi" > HTML:
     l'attributo action del <form>.                                      */
  newsletter: {
    action: "[BREVO_FORM_ACTION_URL]"
  }
};

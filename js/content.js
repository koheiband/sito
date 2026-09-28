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
    { name: "Spotify",    url: "https://open.spotify.com/artist/0cD3GTbUbGiZ6goQBkSjxv" },
    { name: "YouTube",    url: "[LINK_YOUTUBE_CANALE]" },
    { name: "SoundCloud", url: "https://soundcloud.com/koheiband" }
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
      cover: "assets/img/cover-graphene-cult-1200.webp",
      coverAlt: {
        it: "Copertina di Graphene Cult: illustrazione in bianco e nero di una figura con le corna, avvolta in un maglione di lana irto di spine, che balla su una gamba sola.",
        en: "Graphene Cult cover: black and white illustration of a horned figure wrapped in a spiky wool sweater, dancing on one leg."
      },
      tracks: [],
      // Dopo l'uscita: sostituire con i link diretti al singolo
      links: [
        { name: "Bandcamp", url: "https://kohei.bandcamp.com" },
        { name: "Spotify",  url: "https://open.spotify.com/artist/0cD3GTbUbGiZ6goQBkSjxv" }
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
      date: null,           // facoltativo: "AAAA-MM-GG" per mostrare l'anno
      cover: "assets/img/cover-plunge-1200.webp",
      coverAlt: {
        it: "Copertina di Plunge: la sagoma scura di una figura che si tuffa sopra un grande fiore bianco e rosa, con una cornice di scritte nere fitte.",
        en: "Plunge cover: the dark silhouette of a diving figure above a large white and pink flower, framed by dense black handwriting."
      },
      tracks: ["Shelter", "Terra Nullius", "Companion"],
      links: [
        { name: "Bandcamp", url: "https://kohei.bandcamp.com" },
        { name: "Spotify",  url: "https://open.spotify.com/album/3jwid32GA5sReXfTccsNUu" }
      ]
    }
  ],

  /* ---------- Video ----------
     id = codice YouTube (la parte dopo "watch?v=").
     thumb = anteprima salvata in locale (niente richieste a Google finché
     l'utente non clicca).
     Il sito mostra un solo video, a tutta larghezza: il primo della lista.                                               */
  videos: [
    {
      id: "[YOUTUBE_ID_1]",
      title: "[TITOLO_VIDEO_1]",
      thumb: "assets/img/[THUMB_VIDEO_1].webp"
    }
  ],

  /* ---------- Merch ---------- */
  merch: {
    url: "[LINK_STORE_MERCH]",
    image: "assets/img/merch-tshirt-elr-1200.webp",
    imageAlt: {
      it: "Grafica del retro della T-shirt: logo KŌHEI, illustrazione di Everything Looks Real e la scritta EVERYTHING LOOKS REAL.",
      en: "T-shirt back print: KŌHEI logo, Everything Looks Real illustration and the words EVERYTHING LOOKS REAL."
    }
  },

  /* ---------- Newsletter (Brevo) ----------
     Copia da Brevo > Moduli > il tuo modulo > "Condividi" > HTML:
     l'attributo action del <form>.                                      */
  newsletter: {
    action: "[BREVO_FORM_ACTION_URL]"
  }
};

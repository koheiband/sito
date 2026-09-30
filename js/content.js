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
    { label: { it: "Booking & press", en: "Booking & press" }, email: "monica.m@agiantleap.info" }
  ],

  /* ---------- Canali (header, footer, sezione Contatti) ---------- */
  socials: [
    { name: "Instagram",  url: "https://www.instagram.com/kohei.band/" },
    { name: "Facebook",   url: "https://www.facebook.com/people/K%C5%8Dhei/61595102183719/" },
    { name: "Bandcamp",   url: "https://kohei.bandcamp.com" },
    { name: "Spotify",    url: "https://open.spotify.com/artist/0cD3GTbUbGiZ6goQBkSjxv" },
    { name: "YouTube",    url: "https://www.youtube.com/channel/UCEfP9StgEbi5l374fq8VXBw" },
    { name: "SoundCloud", url: "https://soundcloud.com/koheiband" }
  ],

  /* ---------- Crediti ----------
     Ogni voce compare sotto l'opera (didascalia) e nel blocco Crediti del footer.
     Nelle uscite e nel merch si richiama con credit: "artwork" / "print".     */
  credits: {
    artwork: {
      label: { it: "Artwork", en: "Artwork" },
      works: { it: "Everything Looks Real e Graphene Cult", en: "Everything Looks Real and Graphene Cult" },
      name: "@alfio_ciada",
      url: "https://www.instagram.com/alfio_ciada/"
    },
    photo: {
      label: { it: "Foto", en: "Photo" },
      name: "@a_simple_look",
      url: "https://www.instagram.com/a_simple_look/"
    },
    print: {
      label: { it: "Stampa T-shirt", en: "T-shirt printing" },
      name: "@tinto_serigrafia",
      url: "https://www.instagram.com/tinto_serigrafia/"
    }
  },

  /* ---------- News (sezione subito sotto l'hero) ----------
     Una riga per notizia: data · testo · link. La più recente va in cima.
     link.href può puntare a una sezione del sito (es. "#graphene-cult")
     o a un sito esterno.                                                     */
  news: [
    {
      date: "2026-09-28",
      text: { it: "Il nuovo singolo Graphene Cult esce il 16 ottobre.",
              en: "New single Graphene Cult is out on 16 October." },
      link: { label: { it: "Presave", en: "Pre-save" }, href: "#graphene-cult" }
    }
  ],

  /* ---------- Musica ----------
     id della scheda = titolo in minuscolo con trattini (es. "#graphene-cult").
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
      credit: "artwork",
      /* presave: true → il bottone compare solo prima della data di uscita.
         url: null → bottone visibile ma non cliccabile ("Disponibile dal …").
         Dopo l'uscita: inserire i link diretti al singolo al posto di null. */
      links: [
        { name: "Presave",    url: "https://distrokid.com/hyperfollow/khei1/graphene-cult?ref=release", presave: true },
        { name: "Spotify",    url: null },
        { name: "Bandcamp",   url: null },
        { name: "SoundCloud", url: null }
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
        "Plastic Grins",
        "Graphene Cult",
        "Yonigeya",
        "Ruse",
        "Claustrophobia (feat. Antonio Iarrusa from Mother Giraffe)",
        "Plutocracy",
        "Drunken Sunken",
        "Drones Above So Below",
        "Where the Nowhere Ends"
      ],
      credit: "artwork",
      links: []
    },
    {
      title: "Plunge",
      type: { it: "EP", en: "EP" },
      date: "2025-02-18",
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

  /* ---------- Merch ----------
     url: link del bottone (ora: messaggio diretto su Instagram, ig.me/m/<account>),
          oppure null per nascondere testo e bottone.
     photos: foto verticali 3:4. Per ogni foto servono due file:
             "…-1080.webp" (1080×1440) e "…-540.webp" (540×720).          */
  merch: {
    credit: "print",
    url: "https://ig.me/m/kohei.band",
    photos: [
      {
        src: "assets/img/merch-1-1080.webp",
        alt: { it: "T-shirt KŌHEI color panna, retro e fronte: sul retro logo, illustrazione e scritta Everything Looks Real.",
               en: "Cream KŌHEI T-shirt, back and front: the back shows the logo, the illustration and the words Everything Looks Real." }
      },
      {
        src: "assets/img/merch-2-1080.webp",
        alt: { it: "Retro della T-shirt KŌHEI con logo, illustrazione del circo e scritta Everything Looks Real.",
               en: "Back of the KŌHEI T-shirt with logo, circus illustration and the words Everything Looks Real." }
      },
      {
        src: "assets/img/merch-3-1080.webp",
        alt: { it: "Fronte della T-shirt KŌHEI con piccolo logo e illustrazione sul petto.",
               en: "Front of the KŌHEI T-shirt with a small logo and illustration on the chest." }
      }
    ]
  },

  /* ---------- Newsletter (Brevo) ----------
     URL del modulo Brevo (è lo stesso indirizzo dell'iframe fornito da Brevo). */
  newsletter: {
    action: "https://6426fec2.sibforms.com/v2/serve/MUIFAOQ6Qd8tzq0nlai1oEUdEWBP-XTk71OFyh0vPXi6BtHD06Od0RuHSYhUfnyK3tC8uK7kBeWFEdb-6nQYfqb_ZiS5G6p_nfVhYId7S5l_PDDuq4Ar7xizmZJoKSt5UxWeuL6xvclog3dLA-F39YJ-L9iZ4h0dI1jqQ33-j3KOlznRcz7ItYoiVtYJsOgGbGKzroa4NS2cUwAKUQ=="
  }
};

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
      date: "2026-10-16",
      text: { it: "È uscito Graphene Cult, il primo singolo dall'album di debutto Everything Looks Real.",
              en: "Graphene Cult, the first single from the debut album Everything Looks Real, is out now." },
      link: { label: { it: "Ascolta", en: "Listen" }, href: "#graphene-cult" }
    },
    {
      date: "2026-10-15",
      text: { it: "Premiere internazionale del video di Graphene Cult su Jammerzine.",
              en: "International premiere of the Graphene Cult video on Jammerzine." },
      link: { label: { it: "Guarda", en: "Watch" }, href: "https://jammerzine.com/106625-2/" }
    },
    {
      date: "2026-10-14",
      text: { it: "Video premiere italiana di Graphene Cult su Indie for Bunnies.",
              en: "Italian video premiere of Graphene Cult on Indie for Bunnies." },
      link: { label: { it: "Guarda", en: "Watch" },
              href: "https://www.indieforbunnies.com/2026/10/14/video-kohei-graphene-cult-esclusiva-ifb/" }
    },
    {
      date: "2026-09-28",
      text: { it: "Il nuovo singolo Graphene Cult esce il 16 ottobre.",
              en: "New single Graphene Cult is out on 16 October." },
      link: { label: { it: "Ascolta", en: "Listen" }, href: "#graphene-cult" }
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
      released: true,   // già disponibile: niente "In uscita il …"
      badge: "New release",   // bollino sulla copertina; togliere la riga per nasconderlo
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
        { name: "Spotify",    url: "https://open.spotify.com/album/1ZyumXdNUxtRUp5nxQSG82" },
        { name: "Bandcamp",   url: "https://kohei.bandcamp.com/track/graphene-cult" },
        { name: "SoundCloud", url: "https://soundcloud.com/koheiband/sets/graphene-cult-single" }
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
      /* id: null → il video non è collegato a YouTube: si vede solo l'anteprima.
           - se ci sono "premieres", sull'anteprima compaiono i loro bottoni
             (url: null = bottone visibile ma non cliccabile, "in arrivo");
           - altrimenti compaiono "Coming soon" e il link al presave.
         Quando il video diventa pubblico, inserire qui il codice YouTube
         (es. id: "abc123XYZ"): tornano il tasto play e il player.          */
      id: "GT0pt0LPsvM",
      title: "Graphene Cult — Live From Casetta",
      thumb: "assets/img/video-graphene-cult-live-1280.webp",
      presave: "https://distrokid.com/hyperfollow/khei1/graphene-cult?ref=release",
      premieres: [
        { label: { it: "Premiere italiana", en: "Italian premiere" }, name: "Indie for Bunnies",
          url: "https://www.indieforbunnies.com/2026/10/14/video-kohei-graphene-cult-esclusiva-ifb/" },
        { label: { it: "Premiere internazionale", en: "International premiere" }, name: "Jammerzine",
          url: "https://jammerzine.com/106625-2/" }
      ]
    }
  ],

  /* ---------- Press ----------
     Una riga per articolo: bandierina del paese + nome della testata (link).
     country = sigla del paese della testata (IT, GB, US, FR, ES, DE…).
     title = titolo originale dell'articolo (non mostrato, utile come promemoria). */
  press: [
    { outlet: "Vive Le Rock", country: "GB",
      title: "KŌHEI: Oh You Sicily Thing #2",
      url: "https://vivelerock.net/blogs/news-1/kohei-oh-you-sicily-thing-2" },
    { outlet: "Jammerzine", country: "US",
      title: "Kōhei Have No Time for Your Bullshit on 'Graphene Cult' – First Look (Video Premieres)",
      url: "https://jammerzine.com/106625-2/" },
    { outlet: "Sélection Sorties", country: "FR",
      title: "Kōhei – Graphene Cult: Fierce New Noise Rock Single",
      url: "https://www.selectionsorties.net/2026/10/kohei-graphene-cult-fierce-new-noise-rock-single.html" },
    { outlet: "Revista The 13th", country: "AR",
      title: "Single: Kōhei – Graphene Cult",
      url: "https://revistathe13th.blogspot.com/2026/10/single-kohei-graphene-cult.html" },
    { outlet: "Indie for Bunnies", country: "IT",
      title: "Video: Kohei – Graphene Cult [Esclusiva IfB]",
      url: "https://www.indieforbunnies.com/2026/10/14/video-kohei-graphene-cult-esclusiva-ifb/" },
    { outlet: "Switch On", country: "IT",
      title: "Kōhei: “Graphene Cult” è il nuovo brano",
      url: "https://www.switchonmusic.it/kohei-graphene-cult-e-il-nuovo-brano/" },
    { outlet: "Foxy Lady Ascolta", country: "IT",
      title: "Singoli della settimana – 16 ottobre 2026",
      url: "https://foxyladyascolta.altervista.org/singoli-della-settimana-16-ottobre-2026/" }
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

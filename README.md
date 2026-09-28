# KŌHEI — sito ufficiale (kohei.it)

Sito statico: HTML, CSS e JavaScript vanilla. Nessun framework, nessun build step, nessun backend.
Pubblicato con GitHub Pages sul dominio `kohei.it`.

## Struttura del repository

```
.
├── index.html            Pagina principale (tutte le sezioni)
├── privacy.html          Informativa privacy e cookie (IT/EN)
├── 404.html              Pagina di errore
├── CNAME                 Dominio personalizzato per GitHub Pages (kohei.it)
├── .nojekyll             Disattiva Jekyll su GitHub Pages
├── robots.txt
├── sitemap.xml
├── favicon.ico
├── css/
│   └── style.css         Stili (palette e font in cima al file)
├── js/
│   ├── content.js        ← CONTENUTI: link, uscite, video, merch, contatti, newsletter
│   ├── live.js           ← DATE LIVE
│   ├── i18n.js           ← TESTI IT/EN (bio, etichette, messaggi)
│   └── main.js           Logica (non serve modificarlo)
└── assets/
    ├── fonts/            Font ospitati in locale (WOFF2)
    └── img/              Immagini (WebP), logo, icone, immagine social
```

## Come aggiornare i contenuti

- **Link, uscite, video, merch**: modifica `js/content.js`.
- **Date live**: modifica `js/live.js`. Aggiungi una riga per concerto (`date` nel formato `AAAA-MM-GG`).
  Dal giorno dopo il concerto la data passa da sola nell'archivio "Date passate".
- **Testi (bio, etichette)**: modifica `js/i18n.js`, blocco `it` e blocco `en`.
- **Uscite future**: con `date` futura il sito mostra "In uscita il …". Dopo quella data mostra l'anno.
  Con `date: null` e `upcoming: true` mostra "Prossimamente".

Ogni valore tra parentesi quadre, per esempio `[LINK_YOUTUBE_CANALE]`, è un **segnaposto**.
Sul sito compare con un bordo tratteggiato finché non lo sostituisci.
Un valore `null` nasconde l'elemento.

## Segnaposto da compilare

| Segnaposto | File | Cosa serve |
|---|---|---|
| `[LINK_SPOTIFY_ARTISTA]` | js/content.js | Link al profilo artista Spotify |
| `[LINK_YOUTUBE_CANALE]` | js/content.js | Link al canale YouTube |
| `[LINK_SOUNDCLOUD]` | js/content.js | Link SoundCloud, oppure `null` |
| `[COVER_GRAPHENE_CULT]` + alt | js/content.js | Copertina singolo |
| `[LINK_BANDCAMP_GRAPHENE_CULT]`, `[LINK_SPOTIFY_GRAPHENE_CULT]` | js/content.js | Link al singolo (dal 16/10) |
| `[COVER_PLUNGE]` + alt | js/content.js | Copertina EP Plunge |
| `[DATA_USCITA_PLUNGE]` | js/content.js | Data uscita, formato `AAAA-MM-GG` |
| `[LINK_BANDCAMP_PLUNGE]` | js/content.js | Link Bandcamp dell'EP |
| `[YOUTUBE_ID_n]`, `[TITOLO_VIDEO_n]`, `[THUMB_VIDEO_n]` | js/content.js | Video |
| `[LINK_STORE_MERCH]`, `[FOTO_MERCH]` + alt | js/content.js | Store esterno e foto |
| `[BREVO_FORM_ACTION_URL]` | js/content.js | URL del modulo Brevo |
| Righe `placeholder: true` | js/live.js | Da cancellare quando ci sono date reali |
| `[TITOLARE_NOME]`, `[TITOLARE_INDIRIZZO]`, `[TITOLARE_EMAIL]` | privacy.html | Titolare del trattamento |
| `[SERVIZIO_NEWSLETTER]`, `[DATA_AGGIORNAMENTO]` | privacy.html | Conferma servizio e data |
| `aileron-regular.woff2`, `aileron-bold.woff2` | assets/fonts/ | Font del testo |

## Immagini: formati consigliati

Tutte in **WebP** (qualità 75–85), salvo diversa indicazione.

| File | Dimensioni | Note |
|---|---|---|
| `cover-<titolo>-1200.webp` + `cover-<titolo>-600.webp` | 1200×1200 e 600×600 | Copertine. Con questi nomi il sito usa da solo la versione piccola su mobile |
| `thumb-video-n.webp` | 1280×720 | Anteprima video (fotogramma salvato in locale) |
| `merch.webp` | 1200×1200 | Foto merch, fondo scuro o neutro |
| `hero-600/900/1400.webp` | quadrate | Immagine hero (già presenti) |
| `og-image.jpg` | 1200×630 JPG | Anteprima condivisione social (già presente) |
| `logo-kohei.webp` | 1200 px di larghezza, nero su trasparente | Logo (già presente) |

## Newsletter (Brevo)

1. Crea un account gratuito su brevo.com.
2. Contatti > Liste: crea la lista "Newsletter KŌHEI".
3. Contatti > Moduli: crea un modulo di iscrizione con **doppio opt-in** attivo.
4. Nel passaggio "Condividi", scegli il codice HTML e copia il valore `action="…"` del tag `<form>`.
5. Incolla il valore in `js/content.js`, campo `newsletter.action`.
6. Controlla che i nomi dei campi nel codice Brevo siano `EMAIL`, `OPT_IN`, `email_address_check`, `locale`.
   Se sono diversi, aggiorna il form in `index.html`.

Il sito non carica script di Brevo: i dati partono verso Brevo solo quando il visitatore clicca "Iscriviti".

## Privacy

- Nessun cookie, nessun analytics.
- Font in locale.
- Video YouTube caricati solo al clic, da `youtube-nocookie.com`.
- `localStorage` salva solo la lingua scelta (chiave `kohei-lang`).

## Pubblicazione su GitHub Pages

Vedi la sezione "Pubblicazione" nelle istruzioni di consegna, oppure la documentazione ufficiale:
https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site

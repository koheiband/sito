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
- **News**: modifica `js/content.js`, voce `news` (la più recente in cima). La sezione compare subito sotto l'hero.
- **Presave e piattaforme**: nelle uscite, un link con `presave: true` compare solo prima della data di uscita;
  `url: null` mostra il bottone della piattaforma non cliccabile ("Disponibile dal …").
- **Date live**: modifica `js/live.js`. Aggiungi una riga per concerto (`date` nel formato `AAAA-MM-GG`).
  Dal giorno dopo il concerto la data passa da sola nell'archivio "Date passate".
- **Testi (bio, etichette)**: modifica `js/i18n.js`, blocco `it` e blocco `en`.
- **Uscite future**: con `date` futura il sito mostra "In uscita il …". Dopo quella data mostra l'anno.
  Con `date: null` e `upcoming: true` mostra "Prossimamente".

Sul sito compare con un bordo tratteggiato finché non lo sostituisci.
Un valore `null` nasconde l'elemento.

## Segnaposto da compilare

| Segnaposto | File | Cosa serve |
|---|---|---|
| `merch.url` | js/content.js | Link del bottone merch (ora DM Instagram); `null` lo nasconde |

## Immagini: formati consigliati

Tutte in **WebP** (qualità 75–85), salvo diversa indicazione.

| File | Dimensioni | Note |
|---|---|---|
| `cover-<titolo>-1200.webp` + `cover-<titolo>-600.webp` | 1200×1200 e 600×600 | Copertine. Con questi nomi il sito usa da solo la versione piccola su mobile |
| `thumb-video-1.webp` | 1920×1080 | Anteprima del video (fotogramma salvato in locale), mostrata a tutta larghezza |
| `merch-n-1080.webp` + `merch-n-540.webp` | 1080×1440 e 540×720 | Foto merch verticali 3:4 |
| (hero) | — | Usa la copertina di Everything Looks Real (già presente) |
| `og-image.jpg` | 1200×630 JPG | Anteprima condivisione social (già presente) |
| `logo-kohei.webp` | 1200 px di larghezza, nero su trasparente | Logo (già presente) |

## Newsletter (Brevo)

Il modulo è già collegato: l'indirizzo è in `js/content.js`, campo `newsletter.action`
(è lo stesso URL dell'iframe che fornisce Brevo). Il sito non carica né l'iframe né
script di Brevo: al clic su "Iscriviti" invia solo email e lingua, e Brevo manda
l'email di conferma. Se cambi modulo su Brevo, sostituisci solo quell'URL.

## Privacy

- Nessun cookie, nessun analytics.
- Font in locale.
- Video YouTube caricati solo al clic, da `youtube-nocookie.com`.
- `localStorage` salva solo la lingua scelta (chiave `kohei-lang`).

## Pubblicazione su GitHub Pages

Vedi la sezione "Pubblicazione" nelle istruzioni di consegna, oppure la documentazione ufficiale:
https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site

/* =====================================================================
   KŌHEI — DATE LIVE
   ---------------------------------------------------------------------
   Aggiungi una riga per ogni concerto. L'ordine non conta: il sito
   ordina da solo. Dal giorno dopo il concerto la data passa in
   automatico nell'archivio "Date passate".

   Campi:
     date     "AAAA-MM-GG"  (obbligatorio)
     city     città, es. "Catania"
     country  sigla paese, es. "IT"   (facoltativo)
     venue    locale
     tickets  link biglietti, oppure null se ingresso libero / non ancora
     soldOut  true se esaurito        (facoltativo)
     note     testo breve, es. { it: "con [BAND]", en: "w/ [BAND]" } (facoltativo)

   ===================================================================== */

window.KOHEI_LIVE = [
  {
    date: "2026-11-07",
    city: "Palermo",
    country: "IT",
    venue: "Punk Funk",
    tickets: null        // inserire il link quando disponibile
  }

  /* Esempio per aggiungere un'altra data (togli i commenti e la virgola va prima):
  ,{
    date: "2026-11-21",
    city: "Catania",
    country: "IT",
    venue: "Nome locale",
    tickets: "https://…"
  }
  */
];

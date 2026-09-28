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

   Le due righe qui sotto sono SEGNAPOSTO di esempio (placeholder: true):
   cancellale quando inserisci le date reali.
   ===================================================================== */

window.KOHEI_LIVE = [
  {
    placeholder: true,
    date: "2099-01-01",
    city: "[CITTÀ]",
    country: "IT",
    venue: "[LOCALE]",
    tickets: "[LINK_BIGLIETTI]"
  },
  {
    placeholder: true,
    date: "2099-01-02",
    city: "[CITTÀ]",
    country: "IT",
    venue: "[LOCALE]",
    tickets: null,
    note: { it: "[NOTA, es. con BAND_OSPITE]", en: "[NOTE, e.g. w/ GUEST_BAND]" }
  }

  /* Esempio di data reale:
  ,{
    date: "2026-11-21",
    city: "Catania",
    country: "IT",
    venue: "Nome locale",
    tickets: "https://…"
  }
  */
];

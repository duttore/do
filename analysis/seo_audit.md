## Audit SEO - Sito macchinedacucirefirenze.it

Scope iniziale pagine note:
- `index.html` (home)
- `assistenza.html`
- (probabili/da verificare) `ricambi.html`, `guide.html`, brand pages: `riparazione-singer.html`, `riparazione-necchi.html`, `riparazione-brother.html`, `riparazione-bernina.html`

Aggiorna l’elenco man mano che aggiungiamo/individuiamo pagine.

---

### Checklist Generale (da applicare a ogni pagina)
- Title unico, con keyword primaria + local (se rilevante), <= 60-62 char.
- Meta description unica, 145–160 char, con USP e CTA morbida.
- Un solo H1, coerente col Title. H2/H3 per sezioni logiche.
- URL leggibile, hyphen-case, con keyword (senza stopwords inutili).
- Canonical corretto e consistente.
- Open Graph / Twitter card curati (titolo, descrizione, immagine).
- Schema.org: `LocalBusiness` sulla home/contatti; `Service` per servizi/brand; `FAQPage` per FAQ.
- Immagini con `alt` descrittivo; peso e dimensioni ottimizzate; lazy-loading ove plausibile.
- Interlinking coerente (home → categorie/brand → servizi dettagli); breadcrumb dove serve.
- Contenuto esaustivo, aggiornato, con E-E-A-T (esperienza: esempi reali, casi, foto laboratorio).
- Conversioni: CTA primarie ben visibili above-the-fold (telefono/WhatsApp), microcopy di fiducia.
- Performance: LCP, CLS, INP; critical CSS, immagini next-gen, cache headers (da testare con Lighthouse).
- Indexability: noindex solo dove necessario; robots meta ok; presenza in sitemap.xml.

---

## Pagine e Osservazioni

### Home (`index.html`)
- Title: OK (chiaro, include Firenze). Valutare variante più CTR-driven.
- Meta Description: presente e ricca di USP.
- Canonical: presente.
- OG/Twitter: presenti.
- H1: presente (“Riparazione Macchine da Cucire a Firenze”) forte e coerente. Brand sopra l’H1 con stile display: ottimo per percezione qualità.
- Schema: `Organization` (JSON-LD) + `LocalBusiness` (JSON-LD) in fondo; markup microdata per contatti/aree servite; `OfferCatalog` e `FAQ` altrove. Bene.
- CTA: WhatsApp/telefono molto visibile sopra la piega (ottimo).
- Interlinking: presente (servizi, guide, community, brand cards).
- Media e alt: immagini con alt descrittivo (verificare uniformità).
- Raccomandazioni:
  - Migliorare Title per query “vicino a me”/local intent (es. “Firenze e provincia”, “a domicilio”).
  - Aggiungere `hasMap` nel `LocalBusiness` e verificare coordinate `geo` coerenti con la sede.
  - Valutare breadcrumb (facoltativo) se si amplia la profondità.

### Assistenza (`assistenza.html`)
- Title/meta: presenti e coerenti.
- Canonical/OG/Twitter: presenti.
- H1: “Assistenza Macchine da Cucire Firenze” — coerente.
- Schema: `FAQPage` (JSON-LD) presente; componenti visive con accordion.
- Sezione prezzi: rimossa come richiesto (coerenza con offerta su preventivo).
- CTA: presenti (Risolvi il Tuo Problema; contatti a piè pagina).
- Raccomandazioni:
  - Integrare `Service` schema specifico per assistenza a domicilio/laboratorio.
  - Inserire esempi di casi risolti (E-E-A-T) con foto prima/dopo.
  - Linkare fortemente le pagine brand da questa pagina.

### Ricambi (ipotizzata `ricambi.html`)
- Verificare: title/meta, lista ricambi per marca, schema `Product`/`Offer` solo se vendita diretta (altrimenti mantenere come `Service`/informativo).
- Aggiungere tabelle filtri/compatibilità e link interni a guide.

### Guide (`guide.html` + guide interne)
- Verificare: struttura H2/H3, sommario, FAQ schema dove utile.
- Ottimizzare per long-tail (“come riparare…”, “problema X Y Z”).

### Brand Pages (Singer, Necchi, Brother, Bernina, Pfaff, Toyota)
- URL suggeriti: `/riparazione-singer.html`, `/riparazione-necchi.html`, `/riparazione-brother.html`, `/riparazione-bernina.html`, `/assistenza-pfaff.html`, `/assistenza-toyota.html`.
- Contenuti minimi:
  - H1 con marca + Firenze; blocco “Problemi comuni” per quella marca.
  - Ricambi originali, garanzie, tempi; casi reali; CTA locale forte.
  - Schema `Service` (marca-specifico), `FAQPage` breve mirata.

---

## Azioni Prioritarie (Sprint)
1) Ottimizzare Title/descriptions su Home e Assistenza per “Firenze / vicino a me / a domicilio”.
2) Pubblicare/rafforzare Brand Pages (Singer/Necchi/Brother/Bernina; poi Pfaff/Toyota).
3) Migliorare `LocalBusiness` (aggiungi `hasMap`, controlla `geo`, espandi `sameAs`).
4) Potenziare FAQ con risposte mirate alle query con CTR basso da `keywords.csv`.
5) Aggiungere snippet “Problemi risolti di recente” (prove sociali + foto reali).

## Domande da porsi (checklist strategica)
- La SERP di “vicino a me” mostra local pack: abbiamo segnali locali completi e coerenti?
- Title/Description parlano il linguaggio dell’utente (problema→soluzione→beneficio→azione)?
- Le pagine marca rispondono alle ricerche con intento specifico (Singer Firenze, ecc.)?
- Stiamo collegando tra loro le pagine con una logica a grafo (home→marca→servizio→guida)?
- Gli elementi above-the-fold riducono il tempo di decisione (CTA immediata, prove sociali)?
- Le immagini sono comprensibili ai motori (alt coerenti) e veloci da caricare (peso/format)?
- Lo schema è validato (Rich Results Test) e senza conflitti (duplichiamo type/prop?)?
- Monitoriamo CTR/posizioni per le 3 query di business principali post-ottimizzazione?



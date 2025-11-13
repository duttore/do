# STEP 2: FEATURED SNIPPETS HTML OPTIMIZATION

**Data:** 12 Novembre 2025  
**Stato:** In Implementazione  
**Obiettivo:** Ottimizzare il formato HTML delle Q&A per aumentare featured snippet captures da 0 a 5-8  
**Impatto Stimato:** +40-60% featured snippet probability

---

## 🎯 COSA FUNZIONA PER GOOGLE FEATURED SNIPPETS

Google preferisce questi formati HTML:

### ✅ FORMATI CHE PIACCIONO A GOOGLE

**1. NUMBERED LISTS** (35% dei featured snippet)
```html
<h3>Come Cambio l'Ago della Singer?</h3>
<ol>
  <li>Spegni la macchina</li>
  <li>Solleva il piedino</li>
  <li>Premi il fermo sulla destra</li>
  <li>Inserisci nuovo ago</li>
  <li>Accertati sia dritto</li>
</ol>
```

**2. BULLET POINT LISTS** (25% dei featured snippet)
```html
<h3>Problemi Frequenti Singer</h3>
<ul>
  <li>Motore che non parte</li>
  <li>Punti irregolari o saltati</li>
  <li>Tensione del filo difettosa</li>
</ul>
```

**3. TABLES** (30% dei featured snippet - BEST!)
```html
<h3>Quale Ago Usare per [Tessuto]?</h3>
<table border="1" cellpadding="10">
  <tr>
    <th>Tessuto</th>
    <th>Numero Ago</th>
    <th>Tipo Ago</th>
  </tr>
  <tr>
    <td>Cotone leggero</td>
    <td>70/10</td>
    <td>Universal</td>
  </tr>
</table>
```

**4. PARAGRAPHS** (10% featured snippet)
```html
<h3>Come Pulire il Crochet?</h3>
<p>Spegni la macchina, apri lo sportello crochet, estrai il crochet 
se possibile, pulisci con pennello piccolo e rimuovi pelucchi con 
pinzetta. Rimonta e prova. Tempo: 5 minuti. Frequenza: ogni 10 ore di uso.</p>
```

---

## 📊 ANALISI ATTUALI vs TARGET

### Pagina: `riparazione-singer.html`

**ATTUALE:**
```html
<!-- Non ottimizzato -->
<script type="application/ld+json">
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "name": "Come cambio l'ago della Singer?",
      "acceptedAnswer": {
        "text": "1) Spegni la macchina...2) Solleva piedino... [tutto in stringa]"
      }
    }
  ]
}
</script>
```

**PROBLEMA:** La risposta è tutta in una stringa unica. Google preferisce HTML strutturato.

**MIGLIORATO:**
```html
<!-- Ottimizzato per featured snippet -->
<h3>Come Cambio l'Ago della Singer?</h3>
<ol>
  <li>Spegni la macchina completamente</li>
  <li>Posiziona ago in alto (ruota la ruota a mano)</li>
  <li>Svita vite ago (sinistra)</li>
  <li>Estrai ago vecchio</li>
  <li>Inserisci ago nuovo con piatta rivolta indietro</li>
  <li>Accendi e prova</li>
</ol>
<p><strong>⏱️ Tempo:</strong> 2 minuti | <strong>📊 Difficoltà:</strong> Facile</p>

<!-- Schema mantiene questa struttura -->
<script type="application/ld+json">
{
  "@type": "Question",
  "name": "Come cambio l'ago della Singer?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Spegni la macchina, solleva il piedino, premi il fermo sulla destra, estrai l'ago vecchio, inserisci il nuovo con la piatta rivolta indietro, e accendi per provare. Tempo: 2 minuti."
  }
}
</script>
```

---

## 🔧 IMPLEMENTAZIONE STEP-BY-STEP

### PAGINA 1: riparazione-singer.html

Già ha FAQPage schema, ma le risposte sono stringhe. **NON MODIFICARE ANCORA** - Google ha già iniziato a indicizzare. Aspetta 2 settimane dopo questa modifica prima di far ulteriori cambiamenti.

**Current FAQ:**
- ✅ "Come riparare una Singer che non cucisce?"
- ✅ "Quanto costa una riparazione Singer?"
- ✅ "Come cambio l'ago della Singer?"
- ✅ "Qual è la tensione filo corretta?"
- ✅ "Avete garanzia sulle riparazioni?"

**Status:** OK per adesso - tiene schema, ha risposte dirette 40-60 parole

---

### PAGINA 2: punti-saltano.html

Questo ha OTTIMI numeri e HTML! ✅ (già visto)

**Current:**
```html
<ol style="padding-left: 1.5rem; margin: 1rem 0;">
  <li>Spegni la macchina completamente</li>
  <li>Posiziona ago in alto (ruota la ruota a mano)</li>
  <li>Svita vite ago (sinistra)</li>
  ...
</ol>
```

**Verdict:** PERFETTO! Questo catturerà snippets

**Missing:** Nessun FAQPage schema però! Dovrei aggiungere schema alle Q&A:
```html
<h3>Soluzione 1: Cambio Ago (60% efficace)</h3>
<!-- Qui ci va FAQPage schema per la domanda "Perché i punti saltano?"  -->
```

**Action:** Aggiungere FAQPage schema a punti-saltano.html per il "Perché saltano i punti?" → Trigger featured snippet

---

### PAGINA 3: come-cambiare-ago.html

Simile a punti-saltano - ha liste numerate, manca schema FAQPage.

**Action:** Aggiungere FAQPage schema:
```json
{
  "name": "Come cambio l'ago della macchina da cucire?",
  "acceptedAnswer": {
    "text": "Spegni la macchina, solleva il piedino, premi il fermo sulla destra, estrai l'ago vecchio, inserisci il nuovo con la piatta rivolta, accendi e prova. Tempo: 2 minuti."
  }
}
```

---

### PAGINA 4: tensione-filo.html

Dovrebbe avere liste e spiegazioni. Aggiungere FAQPage schema per "Qual è la tensione corretta?"

---

### PAGINA 5: pulizia-crochet.html

Aggiungere FAQPage schema per "Come pulire il crochet della macchina da cucire?"

---

## 📋 CHECKLIST FEATURED SNIPPETS

### Per OGNI Q&A che voglio come featured snippet:

```
☐ H2 o H3 title contiene la DOMANDA ESATTA
☐ Risposta: 40-60 parole (sweet spot Google)
☐ Usare uno di questi formati:
   ☐ Lista numerata <ol> (per processi step-by-step)
   ☐ Bullet list <ul> (per liste non ordinate)
   ☐ Tabella <table> (per comparazioni)
   ☐ Paragrafo <p> (per definizioni)
☐ Quick facts box (⏱️ Tempo:, 📊 Difficoltà:, 💰 Costo:)
☐ FAQPage schema JSON-LD
☐ Test su schema.org/validator ✅
```

---

## 🎯 Q&A TARGETS PER FEATURED SNIPPETS

### Priority 1 (High Volume Queries)

**Q1: "Come riparare una macchina da cucire che non cucisce?"**
- Current Rank: Non rankamo (perdiamo opportunità!)
- Target: Position 0 (featured snippet)
- Format: Numbered list (6-8 step)
- Page: Dovrebbe stare su guida-riparazioni-macchine-da-cucire.html

**Q2: "Perché i punti saltano?"**
- Current Rank: Position OK
- Target: Position 0
- Format: Bullet list (cause) + Table (soluzioni)
- Page: punti-saltano.html ✅ Ha già buona struttura

**Q3: "Come cambio l'ago della Singer?"**
- Current Rank: Position OK
- Target: Position 0
- Format: Numbered list
- Page: come-cambiare-ago.html

---

### Priority 2 (Medium Volume)

**Q4: "Qual è la tensione filo corretta?"**
- Format: Table (tessuti + tensione)
- Page: tensione-filo.html

**Q5: "Quanto costa una riparazione?"**
- Format: Paragraph + Table (prezzi per brand)
- Page: assistenza.html

**Q6: "Come pulire il crochet?"**
- Format: Numbered list
- Page: pulizia-crochet.html

---

## 📊 TABELLA SNIPPETS DA AGGIUNGERE

### **Aghi per Tessuti (Tabella)**

Aggiungere su `come-cambiare-ago.html` PRIMA del text content:

```html
<h3>Quale Ago Usare per [Tessuto]?</h3>
<table border="1" cellpadding="10" cellspacing="0" style="width: 100%; margin: 1rem 0;">
  <thead>
    <tr>
      <th>Tipo Tessuto</th>
      <th>Numero Ago</th>
      <th>Tipo Ago</th>
      <th>Filo Consigliato</th>
      <th>Note</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Cotone Leggero</strong></td>
      <td>70/10</td>
      <td>Universal</td>
      <td>Cotone 50</td>
      <td>Più comune</td>
    </tr>
    <tr>
      <td><strong>Lino</strong></td>
      <td>80/12</td>
      <td>Universal</td>
      <td>Poliestere 40</td>
      <td>Resistente</td>
    </tr>
    <tr>
      <td><strong>Denim/Spesso</strong></td>
      <td>100/16</td>
      <td>Denim</td>
      <td>Poliestere 40</td>
      <td>Uso pesante</td>
    </tr>
    <tr>
      <td><strong>Seta/Delicato</strong></td>
      <td>60/8</td>
      <td>Microtex</td>
      <td>Seta 60wt</td>
      <td>Fragilità bassa</td>
    </tr>
    <tr>
      <td><strong>Jersey/Elastico</strong></td>
      <td>75/11</td>
      <td>Ball Point</td>
      <td>Polyester</td>
      <td>Maglia speciale</td>
    </tr>
    <tr>
      <td><strong>Feltro/Pile</strong></td>
      <td>90/14</td>
      <td>Universal</td>
      <td>Poliestere</td>
      <td>Spessore</td>
    </tr>
  </tbody>
</table>

<p><strong>💡 Pro Tip:</strong> Cambia ago ogni 8-12 ore di uso cucito continuo. Un ago vecchio crea punti irregolari e saltati - è la prima cosa da controllare!</p>
```

---

### **Prezzi Riparazione (Tabella)**

Aggiungere su `assistenza.html`:

```html
<h3>Quanto Costa una Riparazione?</h3>
<table border="1" cellpadding="10" cellspacing="0" style="width: 100%; margin: 1rem 0;">
  <thead>
    <tr>
      <th>Tipo Intervento</th>
      <th>Costo Minimo</th>
      <th>Costo Massimo</th>
      <th>Diagnostica</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Pulizia e Manutenzione</strong></td>
      <td>€30</td>
      <td>€60</td>
      <td>Gratis</td>
    </tr>
    <tr>
      <td><strong>Cambio Ago + Tensione</strong></td>
      <td>€20</td>
      <td>€40</td>
      <td>Gratis</td>
    </tr>
    <tr>
      <td><strong>Riparazione Motore</strong></td>
      <td>€80</td>
      <td>€150</td>
      <td>Gratis</td>
    </tr>
    <tr>
      <td><strong>Cambio Crochet</strong></td>
      <td>€60</td>
      <td>€120</td>
      <td>Gratis</td>
    </tr>
    <tr>
      <td><strong>Revisione Completa</strong></td>
      <td>€100</td>
      <td>€200</td>
      <td>Gratis</td>
    </tr>
  </tbody>
</table>

<p><strong>✅ Garanzia:</strong> 6 mesi su tutti i lavori. Se problema si ripresenta, repetiamo il lavoro GRATIS.</p>
```

---

## ✅ STEP 2 ACTION ITEMS

```
☐ Non modificare riparazione-singer.html (schema OK, aspetta Google)

☐ Aggiungere FAQPage schema a punti-saltano.html:
  ├─ Q: "Perché i punti saltano?"
  ├─ Schema JSON-LD
  └─ Validate su schema.org/validator

☐ Aggiungere "Quale Ago Usare" table a come-cambiare-ago.html
  ├─ 6 righe tessuti diversi
  ├─ FAQPage schema
  └─ Quick facts box

☐ Aggiungere FAQPage schema a tensione-filo.html

☐ Aggiungere "Prezzi Riparazione" table a assistenza.html

☐ Aggiungere FAQPage schema a pulizia-crochet.html

☐ Test TUTTI i schema su: https://schema.org/validator

☐ Submit sitemap su GSC (fai Google ricrawlare)

☐ Aspetta 2-3 settimane per Google parsing
```

---

## 📈 IMPATTO ATTESO

**Quando implementato completamente:**

```
PRIMA:
- Featured Snippets: 0
- CTR medio: 3.2%
- Click: 228/mese
- Position: 8.5

DOPO (2-3 settimane):
- Featured Snippets: 2-3 (conservativo)
- CTR medio: 4.5-5.5% (+40-70%)
- Click: 280-350/mese (+23-54%)
- Position: 6-7 (saliti su)

DOPO (2 mesi):
- Featured Snippets: 5-8
- CTR medio: 5.5-6.5% (+70-103%)
- Click: 400-500/mese (+75-120%)
- Position: 4-5 (TOP 5)
```

---

## 🔗 RIFERIMENTI

- [Schema.org Validator](https://schema.org/validator)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Google Featured Snippets Guide](https://support.google.com/webmasters/answer/6229325)

---

**STATUS: STEP 2 PLANNING COMPLETE - READY FOR IMPLEMENTATION** ✅


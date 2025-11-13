# FASE 4: MONITORING & OPTIMIZATION - GUIDA PRATICA

**Data:** 12 Novembre 2025  
**Durata:** 4+ settimane (ongoing)  
**Obiettivo:** Misurare risultati e ottimizzare continuamente

---

## 🎯 OVERVIEW

FASE 4 è **non è una-tantum**, è **CONTINUATIVA**. Questo documento ti guida su cosa monitorare, come monitorare, e come ottimizzare in base ai dati.

---

## 📊 PARTE 1: SETUP MONITORING (WEEK 1)

### A) Google Search Console - Daily Monitoring

**Accedi a:** [console.google.com](https://console.google.com)

**Dashboard Essenziali:**

#### 1. Performance Report (DAILY CHECK)
```
GSC → Performance
├─ Clicks: Trend line (target: +20% week-on-week)
├─ Impressions: Trend line (target: +5-10% week-on-week)
├─ CTR: Trend line (target: 3.2% → 5.5%)
└─ Position: Trend line (target: 8.5 → 5-6)
```

**Action:** Save screenshot ogni lunedì (per trend settimanali)

#### 2. Queries Report (WEEKLY ANALYSIS)
```
GSC → Performance → Queries (Sort by: Clicks, Descending)
├─ Top 20 queries by click
├─ Position 8-15 opportunities (target for content improvement)
├─ New queries trending (add to FAQ schema?)
└─ CTR outliers (good: >5%, bad: <2%)
```

**Action:** Identifica 3-5 queries che rankano posizione 9-15 con alto volume

#### 3. Pages Report (WEEKLY ANALYSIS)
```
GSC → Performance → Pages
├─ Top 10 pages by clicks
├─ High impression, low click (CTR problem)
├─ New pages first appearance
└─ Declining pages (investigate issue)
```

**Action:** Per ogni pagina con CTR < 3%, migliora title/meta

#### 4. Coverage Report (WEEKLY CHECK)
```
GSC → Coverage
├─ Valid: All pages indexed?
├─ Excluded: Any surprises?
├─ Error: Fix immediately if any
└─ Valid with warnings: Review
```

**Action:** Fix any errors within 24h

#### 5. Enhancements Report (WEEKLY CHECK)
```
GSC → Enhancements
├─ Rich results: Schema markup performance
├─ Mobile Usability: Any issues?
├─ Core Web Vitals: Status
└─ FAQ: Featured snippet performance
```

**Action:** Featured snippets per query (track position 0)

---

### B) Google Analytics 4 - User Behavior Tracking

**Accedi a:** [analytics.google.com](https://analytics.google.com)

**Metriche Critiche:**

#### 1. Traffico Organico (DAILY)
```
Reports → Traffic Acquisition → Organic
├─ Total users: Baseline 228 clicks/mese ≈ 50-80 users/giorno
├─ Engagement rate: Target >50%
├─ Avg session duration: Target >3 min
└─ Bounce rate: Target <35%
```

**Baseline (Week 1):**
- Screenshot delle metriche
- Salva come "Baseline Week 1"

#### 2. Page Performance (WEEKLY)
```
Reports → Engagement → Pages and Screens
├─ Top pages by users
├─ Engagement rate per pagina
├─ Scroll depth (is content engaging?)
└─ Form submissions / Contact clicks
```

**Focus Pages:**
- Homepage (traffic hub)
- riparazione-singer.html (highest traffic)
- riparazione-necchi.html
- guida-riparazioni-macchine-da-cucire.html (pillar)

#### 3. Conversions (WEEKLY) - Contact Form Tracking
```
Reports → Conversions
├─ Contact form submissions
├─ WhatsApp clicks
├─ Phone call clicks
└─ Email clicks
```

**Target Week 1:** Baseline = 1-2 contatti/settimana  
**Target Week 4:** 5-8 contatti/settimana

#### 4. Source/Medium (WEEKLY)
```
Reports → Traffic Acquisition → Source/Medium
├─ organic / google: PRIMARY FOCUS
├─ direct / none: Brand searches
├─ referral / facebook: Social
└─ Other: Track
```

**Action:** Organic should be 70%+ of traffic

---

### C) Tools di Monitoraggio Aggiuntivi

#### PageSpeed Insights (WEEKLY)
```
https://pagespeed.web.dev/
Testa: 
- homepage
- riparazione-singer.html
- guida-riparazioni-macchine-da-cucire.html
```

**Target:**
- Desktop: 90+ (verde)
- Mobile: 85+ (verde)

**Se rosso (<50):**
- [ ] Identifica bottleneck (immagini? JS? CSS?)
- [ ] Ottimizza
- [ ] Ritesta

#### Schema Markup Validator (BI-WEEKLY)
```
https://schema.org/validator/
Testa tutte le pagine con schema markup
```

**Check:**
- Nessun errore
- Nessun warning critico

#### SEMrush/Ahrefs Free Version (OPTIONAL - WEEKLY)
```
Gratis: keyword position tracker
- Track top 20 keywords
- Notifiche se position cambia >2
```

---

## 📈 PARTE 2: WEEKLY REPORTING (TEMPLATE)

### Report Template (Save as `GSC_Weekly_Report_[DATE].txt`)

```
═══════════════════════════════════════════════════════════
WEEKLY SEO REPORT - RIPARAZIONI RICCI
Week: [DATE RANGE]
═══════════════════════════════════════════════════════════

📊 PERFORMANCE METRICS
─────────────────────────────────────────
Clicks:        [WEEK] clicks (Target: +20% = [TARGET])
               Week-on-week: [+/- X%]

Impressions:   [WEEK] impressions (Target: +5-10%)
               Week-on-week: [+/- X%]

CTR:           [WEEK] % (Target: 5.5%, Baseline: 3.2%)
               Change: [+/- X%]

Position Avg:  [WEEK] (Target: 5-6, Baseline: 8.5)
               Change: [+/- X]

─────────────────────────────────────────
Conversions:   [WEEK] contact form submissions
               [WEEK] phone clicks
               [WEEK] whatsapp clicks
               Total: [WEEK] contacts (Target: 2 contacts/week)

─────────────────────────────────────────

🔝 TOP 3 QUERIES THIS WEEK
─────────────────────────────────────────
1. [Query 1] - Clicks: [X], Position: [Y], CTR: [Z%]
2. [Query 2] - Clicks: [X], Position: [Y], CTR: [Z%]
3. [Query 3] - Clicks: [X], Position: [Y], CTR: [Z%]

🎯 OPPORTUNITIES (Position 9-15, High Volume)
─────────────────────────────────────────
1. [Query] - Position: 12, Impressions: [X], Clicks: [Y]
   → Action: Improve title/meta for featured snippet
   
2. [Query] - Position: 10, Impressions: [X], Clicks: [Y]
   → Action: Add content expansion

⭐ FEATURED SNIPPETS
─────────────────────────────────────────
[Query 1]: ✅ YES (Position 0)
[Query 2]: ❌ NO (Position: [X])
New: [Query 3] captured this week!

📊 PAGE PERFORMANCE
─────────────────────────────────────────
riparazione-singer.html:
  - Clicks: [X] (↑ vs last week)
  - Avg Position: [Y]
  - CTR: [Z%]
  
guida-riparazioni-macchine-da-cucire.html:
  - Status: NEW PAGE
  - Clicks: [X]
  - Impressions: [Y]

🚨 ISSUES DETECTED
─────────────────────────────────────────
[ ] Coverage errors
[ ] Mobile usability issues
[ ] Core Web Vitals problems
[ ] Schema markup errors

⚡ ACTIONS FOR NEXT WEEK
─────────────────────────────────────────
1. [ ] Improve title/meta for "query X" (position 9-15)
2. [ ] Add FAQ schema to page Y
3. [ ] Fix Core Web Vitals on page Z
4. [ ] Publish new content on topic A
5. [ ] Outreach for backlinks from sites B, C

✅ NOTES
─────────────────────────────────────────
[Any observations, patterns, anomalies]

═══════════════════════════════════════════════════════════
```

---

## 🎯 PARTE 3: WEEKLY OPTIMIZATION ACTIONS

### Week 1 (Days 1-7)

#### Daily (5 min):
```
☐ Check GSC Performance dashboard
  - Any sudden drops?
  - Any new top queries?
☐ Verify site is up and responsive
☐ Monitor contact form submissions
```

#### 3x Per Week (Mon/Wed/Fri - 15 min each):
```
☐ Analyze GSC Queries report
  - Position 9-15 opportunities
  - New trending queries
☐ Check Google Analytics
  - Bounce rate trends
  - Engagement rates
☐ PageSpeed check (quick test on 2-3 pages)
```

#### Weekly (Sunday - 1 hour):
```
☐ Complete weekly report
☐ Identify 3-5 optimization actions
☐ Review previous week actions
☐ Plan next week priorities
```

---

### Week 2-4: Optimization Actions Based on Data

#### FOR EACH QUERY IN POSITION 9-15:

**If High Volume (>50 impressions/week):**

**OPTION 1: Improve Existing Page**
```
1. Analyze current title/meta
2. Create new title with keyword + benefit
3. Create new meta with CTA
4. Add FAQ schema if not present
5. Improve content structure (H1 → H2 → H3)
6. Test on GSC (wait 3-4 days for re-crawl)
```

**OPTION 2: Create New Dedicated Page**
```
1. Identify the query intent
2. Create new pillar/cluster page
3. Add internal links from related pages
4. Add FAQPage schema
5. Promote in footer/sidebar
```

#### FOR EACH PAGE WITH LOW CTR (<2%):

**Diagnosis:**
```
1. Is position >15? → Too low rank (need content boost)
2. Is position <5 but low CTR? → Title/meta sucks (need rewrite)
3. Is bounce rate >60%? → Content doesn't match intent
```

**Action:**
```
If Title/Meta Problem:
  - Rewrite title + meta with benefit + urgency
  - A/B test 2 variations
  - Monitor CTR daily

If Content Problem:
  - Update content to match search intent
  - Improve heading hierarchy
  - Add more practical examples
  - Reduce bounce rate target: <35%
```

---

## 📅 PARTE 4: MONTHLY DEEP DIVE

### End of Month Review (2 hours)

#### Month 1 (End of November)

**Baseline Comparison:**
```
✓ Click growth: 228 → [ACTUAL]%
✓ CTR growth: 3.2% → [ACTUAL]%
✓ Position movement: 8.5 → [ACTUAL]
✓ Featured snippets captured: [COUNT]
✓ New organic users: [COUNT]
✓ Contact form submissions: [COUNT]
```

**Success Criteria:**
- [ ] CTR increased to 4.0%+ (vs baseline 3.2%)
- [ ] Position average moved to 7-8 (vs baseline 8.5)
- [ ] 1-2 featured snippets captured
- [ ] Contact submissions: 4-6 (vs baseline 1-2)

**If Goals Met:**
→ Continue current strategy, scale up link building

**If Goals Not Met:**
→ Root cause analysis:
  - Schema markup issues?
  - Content quality issues?
  - Technical issues (speed, mobile)?
  - Competition ranking higher?
  
→ Adjust strategy accordingly

#### Month 2-3 (December-January)

**Growth Tracking:**
```
Week 1-2: +20-30% click growth
Week 3-4: +40-50% cumulative
Week 5-6: +60-80% cumulative
Week 7-8: +100-120% cumulative (2x baseline)
```

**If Tracking Below Target:**
- Increase content updates frequency
- More aggressive link building
- A/B test more title variations
- Create more FAQ content

**If Exceeding Target:**
- Document what's working (for replication)
- Scale successful strategies
- Plan Phase 5: Content Expansion

---

## 🔗 PARTE 5: LINK BUILDING STRATEGY

### Month 1: Link Building Outreach (Week 3-4)

**Target Sites:**
```
Local Directories:
- Pagine Gialle (local business listing)
- GoogleMyBusiness (optimize fully)
- BringMe.it
- Edreams
- TripAdvisor (if applicable)

Riparazioni/Hobby Sites:
- Blog cucito (outreach for guest post)
- Siti ricerca macchine cucire
- Forum hobbistica
- Pinterest (high DA, build presence)

Industry Partnerships:
- Negozi macchine cucire Firenze
- Fornitori ricambi
- Marche ufficiali (Singer, Necchi, etc.)
```

**Outreach Template:**

```
Subject: Collaborazione - Guida Riparazioni Macchine da Cucire

Ciao [Name],

Sono Stefano Ricci, specialista in riparazioni macchine da cucire a Firenze 
(30 anni di experience). Ho notato il vostro sito su [loro topic].

Ho pubblicato una guida completa su "Come riparare macchine da cucire" che 
potrebbe interessare ai vostri lettori appassionati di cucito.

Possiamo collaborare con un link/menzione? In cambio, posso linkare il vostro 
sito nei nostri articoli correlati.

Contatti: +39 334 315 6903 | riparazioni.ricci@gmail.com

Cordiali saluti,
Stefano
```

**Target: 5-10 link building outreach per settimana**

---

## 💡 PARTE 6: CONTENT REFRESH STRATEGY

### Every 3 Months: Content Audit

**Analizza:**
```
Per ogni pagina:
1. Traffic trend (up or down?)
2. Position trend (improving or declining?)
3. Content freshness (outdated info?)
4. Competitor content (better coverage?)
```

**If Declining:**
- Update all statistics/dates
- Add new Q&A based on recent trends
- Improve examples
- Check for broken links
- Reoptimize title/meta

**If Plateauing:**
- Expand content depth
- Add video/images
- Create related subtopic pages
- Build internal links
- Promote on social media

**If Growing:**
- Document what's working
- Replicate same strategy on similar pages
- Build on momentum with related topics

---

## 📱 PARTE 7: MOBILE OPTIMIZATION CHECK

### Monthly Mobile Audit

```
[ ] Mobile-Friendly Test (Google)
    Target: 100/100
    
[ ] Core Web Vitals:
    ✓ LCP (Largest Contentful Paint): <2.5s
    ✓ INP (Interaction to Next Paint): <200ms
    ✓ CLS (Cumulative Layout Shift): <0.1
    
[ ] Mobile Navigation:
    ✓ Touch targets: 48x48px minimum
    ✓ No pop-ups blocking content
    ✓ Font size: minimum 16px base
    ✓ No horizontal scrolling
    
[ ] Mobile Usability (GSC):
    Target: 0 errors, 0 warnings
```

---

## ✅ CHECKLIST: FIRST 4 WEEKS

### Week 1: Setup
- [ ] Set up GSC daily monitoring routine
- [ ] Set up GA4 tracking for conversions
- [ ] Install PageSpeed Insights bookmark
- [ ] Create first Weekly Report
- [ ] Document baseline metrics

### Week 2: Analysis
- [ ] Complete first full week analysis
- [ ] Identify 5 queries in position 9-15
- [ ] Identify 3 pages with low CTR
- [ ] Create optimization plan for each
- [ ] Start A/B testing title variations

### Week 3: Implementation
- [ ] Implement title/meta changes (5 pages)
- [ ] Add FAQPage schema to 2 new pages
- [ ] Start link building outreach (10 targets)
- [ ] Convert 5 images to WebP
- [ ] Test Core Web Vitals improvements

### Week 4: Review & Optimize
- [ ] Complete monthly deep dive analysis
- [ ] Compare metrics vs baseline
- [ ] Celebrate wins (featured snippets?)
- [ ] Adjust strategy for Month 2
- [ ] Plan content creation priorities

---

## 🎯 SUCCESS BENCHMARKS

### End of Week 1:
- ✅ All monitoring tools set up
- ✅ Baseline metrics documented
- ✅ First report completed

### End of Week 2:
- ✅ First CTR improvement (+0.3%)
- ✅ Position improved on 2-3 queries
- ✅ 1 featured snippet captured

### End of Week 4:
- ✅ CTR +1-2% (vs baseline)
- ✅ Position average 7-8 (vs 8.5)
- ✅ 2-4 featured snippets
- ✅ +2-3 contact submissions
- ✅ +20-30% click growth

### End of Month 2:
- ✅ CTR +2-4%
- ✅ Position 5-6 (TOP 5)
- ✅ 5-8 featured snippets
- ✅ +50-80% click growth
- ✅ +8-10 contact submissions/week

### End of Month 3:
- ✅ CTR +3-5%
- ✅ Position 3-4
- ✅ 8-12 featured snippets
- ✅ +100-150% click growth
- ✅ +12 contact submissions/week

---

## 🚨 RED FLAGS TO WATCH

### IF TRAFFIC DROPS:
```
1. Check Coverage Report (any new errors?)
2. Check if pages still indexed
3. Check robot.txt / sitemap
4. Check for Core Web Vitals issues
5. Analyze competitor changes
6. Check for manual actions (GSC Notifications)
```

### IF CTR DROPS:
```
1. Check title/meta still displaying correctly
2. Check if competitor has better snippet
3. Analyze search intent vs content
4. Check position hasn't changed
5. Check for SERP layout changes
```

### IF POSITION DROPS:
```
1. Check content quality (outdated?)
2. Check if competitor content better
3. Check Core Web Vitals
4. Check for technical issues
5. Check if featured snippet taken by competitor
```

---

## 📞 SUPPORTO RAPIDO

**Domanda:** CTR non sale anche dopo 2 settimane?
**Soluzione:** 
1. Analizza competitor snippet
2. Rewrite title con benefit + CTA
3. Aggiungi schema markup
4. Test alternative titles

**Domanda:** Traffic down improvvisamente?
**Soluzione:**
1. Check GSC Coverage
2. Check robots.txt
3. Check sitemap
4. Test site accessibility
5. Check for Core Web Vitals issues

**Domanda:** Competitor mi sorpassa?
**Soluzione:**
1. Analizza loro contenuto
2. Migliora il tuo di qualità/lunghezza
3. Aggiungi più examples/case studies
4. Build more backlinks
5. Improve user engagement signals

---

## 📋 FINAL CHECKLIST

**Ready for Phase 4?**
- [ ] All 3 phases implemented correctly
- [ ] Sitemap submitted to GSC
- [ ] Schema markup validated
- [ ] Monitoring tools set up
- [ ] Weekly report template ready
- [ ] First baseline metrics documented
- [ ] Team trained on GSC/GA4
- [ ] Alert system set up (if drop detected)

**READY FOR PRODUCTION:** ✅

Next Step: Deploy to production and start monitoring on Day 1!


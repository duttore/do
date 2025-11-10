(() => {
  if (typeof window === 'undefined') {
    return;
  }

  if (window.__contactTrackerInitialized) {
    return;
  }
  window.__contactTrackerInitialized = true;

  const ENDPOINT = '/api/contact-log';
  const CLICK_SELECTOR = [
    '[data-contact-event]',
    'a[href^="tel:"]',
    'a[href^="mailto:"]',
    'a[href*="wa.me"]',
    'a[href*="#contatt"]',
    'button[data-contact-event]',
  ].join(',');

  const PLACEHOLDER_GA_IDS = new Set([
    'G-XXXXXXXXXX',
    'G-0000000000',
    'G-EXAMPLE',
    '',
    null,
    undefined,
  ]);

  const loadGoogleAnalytics = () => {
    try {
      if (window.__gaMeasurementLoaded) return;
      const meta = document.querySelector('meta[name="ga-measurement-id"]');
      const gaId = meta?.content?.trim();

      if (!gaId || PLACEHOLDER_GA_IDS.has(gaId)) {
        return;
      }

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }

      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', gaId);

      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      window.__gaMeasurementLoaded = true;
    } catch (error) {
      console.warn('Impossibile inizializzare Google Analytics', error);
    }
  };

  const detectContactStep = (target) => {
    if (!target) return null;
    if (target.closest('#contatti-modal')) return 'modal';
    if (target.closest('.hero-section') || target.closest('.simple-hero')) return 'hero';
    if (target.closest('.footer-contact')) return 'footer';
    if (target.closest('.contact-cta') || target.closest('.cta-section')) return 'cta';
    if (target.closest('.forum-sidebar')) return 'forum_sidebar';
    if (target.closest('.forum-main')) return 'forum_main';
    if (target.closest('.contact-list')) return 'contact_list';
    if (target.closest('.header')) return 'nav';
    return null;
  };

  const sanitizeText = (text = '') =>
    text.replace(/\s+/g, ' ').trim().slice(0, 160);

  const buildMetadata = (target, extra = {}) => {
    const datasetStep = target?.dataset?.contactStep || null;
    const inferredStep = extra.step || datasetStep || detectContactStep(target);

    return {
      href: target?.getAttribute?.('href') || null,
      text: sanitizeText(target?.textContent),
      path: window.location.pathname,
      url: window.location.href,
      title: document.title,
      source: extra.source || 'contact-tracker',
      step: inferredStep,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
    };
  };

  const sendToDiscord = async (type, extra = {}) => {
    try {
      await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, extra }),
      });
    } catch (error) {
      if (
        typeof process !== 'undefined'
          ? process.env?.NODE_ENV !== 'production'
          : true
      ) {
        console.warn('Impossibile inviare il log contatti', error);
      }
    }
  };

  const sendToAnalytics = (type, extra = {}) => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', type, {
        event_category: 'contatti',
        event_label: extra.text || extra.href || type,
        ...extra,
      });
    }

    if (typeof window.plausible === 'function') {
      window.plausible(type, { props: extra });
    }

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: type,
        event_category: 'contatti',
        ...extra,
      });
    }
  };

  const trackContact = (type, target, extra = {}) => {
    if (!type) return;
    const metadata = { ...buildMetadata(target, extra), ...extra };
    if (!metadata.step) {
      metadata.step = detectContactStep(target) || extra.step || null;
    }
    sendToDiscord(type, metadata);
    sendToAnalytics(type, metadata);
  };

  const inferType = (target) => {
    if (!target) return null;
    if (target.dataset.contactEvent) return target.dataset.contactEvent;
    if (target.matches('a[href^="tel:"]')) return 'click_telefono';
    if (target.matches('a[href^="mailto:"]')) return 'click_email';
    if (target.matches('a[href*="wa.me"]')) return 'click_whatsapp';
    if (target.matches('a[href*="#contatt"]')) return 'click_scroll_contatti';
    return null;
  };

  document.addEventListener('click', (event) => {
    const target = event.target.closest(CLICK_SELECTOR);
    if (!target) return;

    const type = inferType(target);
    if (!type) return;

    trackContact(type, target);
  });

  document.addEventListener('submit', (event) => {
    const form = event.target.closest('form[data-contact-event]');
    if (!form) return;

    const type = form.dataset.contactEvent;
    trackContact(type, form, {
      method: form.getAttribute('method') || 'GET',
      source: 'form',
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const contactLink = document.getElementById('contatti-link');
    if (contactLink && !contactLink.dataset.contactEvent) {
      contactLink.dataset.contactEvent = 'open_modal_contatti';
      contactLink.dataset.contactStep = 'nav';
    }

    loadGoogleAnalytics();

    document.querySelectorAll('.hero-buttons a[href*="wa.me"]').forEach((el) => {
      el.dataset.contactStep = el.dataset.contactStep || 'hero';
      el.dataset.contactEvent = el.dataset.contactEvent || 'click_whatsapp';
    });

    document
      .querySelectorAll('#contatti-modal .contact-item a[href^="tel:"]')
      .forEach((el) => {
        el.dataset.contactStep = el.dataset.contactStep || 'modal';
        el.dataset.contactEvent = el.dataset.contactEvent || 'click_telefono';
      });

    document
      .querySelectorAll('#contatti-modal .contact-item a[href^="mailto:"]')
      .forEach((el) => {
        el.dataset.contactStep = el.dataset.contactStep || 'modal';
        el.dataset.contactEvent = el.dataset.contactEvent || 'click_email';
      });

    document
      .querySelectorAll('#contatti-modal .contact-item a[href*="wa.me"]')
      .forEach((el) => {
        el.dataset.contactStep = el.dataset.contactStep || 'modal';
        el.dataset.contactEvent = el.dataset.contactEvent || 'click_whatsapp';
      });

    document.querySelectorAll('.footer-contact .contact-item a').forEach((el) => {
      el.dataset.contactStep = el.dataset.contactStep || 'footer';
    });
  });

  window.trackContactEvent = (type, extra = {}) => {
    trackContact(type, null, extra);
  };
})();


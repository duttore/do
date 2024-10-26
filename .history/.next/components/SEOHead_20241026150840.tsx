// components/SEOHead.tsx
"use client";
import { NextSeo } from 'next-seo';

export default function SEOHead(): JSX.Element {
  return (
    <NextSeo
      title="Stefano Ricci - Assistenza Macchine da Cucire"
      description="Servizio professionale di riparazione e manutenzione macchine da cucire a Desio. Assistenza qualificata e consulenza specializzata."
      canonical="https://www.tuodominio.it/"
      openGraph={{
        title: 'Stefano Ricci - Assistenza Macchine da Cucire',
        description: 'Servizio professionale di riparazione e manutenzione macchine da cucire a Desio',
        images: [
          {
            url: 'https://milanimacchinepercucire.com/wp-content/uploads/2024/02/milani_shop_desio-1024x575.webp',
            width: 1024,
            height: 575,
            alt: 'Negozio Macchine da Cucire',
          }
        ],
      }}
    />
  );
}
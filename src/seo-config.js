// src/seo-config.js

const SEO = {
      title: "My Awesome Website in Firenze",
      description: "This is a detailed description of my awesome website offering services in Firenze, and we use WhatsApp for easy bookings.",
      canonical: "https://www.mywebsite.com/",  // Canonical URL for homepage
      openGraph: {
        type: "website",
        locale: "it_IT",  // Italian locale
        url: "https://www.mywebsite.com/",  // Main URL
        title: "My Awesome Website in Firenze",
        description: "Offering comprehensive services in Firenze with WhatsApp booking options.",
        site_name: "MyWebsite",
        images: [
          {
            url: "https://www.mywebsite.com/og-image.jpg",  // Open Graph image for Facebook
            width: 1200,
            height: 630,
            alt: "Og Image Alt",
            type: "image/jpeg",
          },
        ],
      },
      additionalMetaTags: [
        {
          property: "fb:app_id",  // Facebook app ID for Facebook page insights (if applicable)
          content: "YOUR_FACEBOOK_APP_ID",
        },
        {
          name: "application-name",
          content: "MyWebsite",
        },
        {
          property: "og:whatsapp",  // Meta tag for WhatsApp sharing (optional)
          content: "https://wa.me/YOUR_WHATSAPP_NUMBER",
        },
        {
          name: "msapplication-TileColor",
          content: "#ffffff",
        },
      ],
      robotsProps: {
        noindex: false,
        nosnippet: false,
        noarchive: false,
        notranslate: false,
        maxSnippet: -1,
      },
    };
    
    export default SEO;
    
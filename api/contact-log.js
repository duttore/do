export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  try {
    const { type, extra = {} } = req.body || {};

    if (!type || typeof type !== 'string') {
      res.status(400).json({ message: 'Missing type' });
      return;
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      throw new Error('DISCORD_WEBHOOK_URL non configurato');
    }

    const pageInfo = {
      url: extra.url || extra.href || null,
      path: extra.path || null,
      text: extra.text || null,
      source: extra.source || null,
      userAgent: extra.userAgent || null,
    };

    const details = Object.entries(pageInfo)
      .filter(([, value]) => value)
      .map(([key, value]) => `• ${key}: ${value}`)
      .join('\n');

    const content = details
      ? `🔔 Evento contatto: **${type}**\n${details}`
      : `🔔 Evento contatto: **${type}**`;

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Discord webhook error: ${text}`);
    }

    res.status(204).end();
  } catch (error) {
    console.error('contact-log error', error);
    res.status(500).json({ message: 'Errore nel logging' });
  }
}


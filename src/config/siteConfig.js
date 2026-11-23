// ============================================================
// CENTRAL SITE CONFIGURATION – edit contact details here only.
// ============================================================

const siteConfig = {
  brandName: 'TABEER TRAVEL & TOURS',
  tagline: 'Your Trusted Travel Partner',

  // WhatsApp number in INTERNATIONAL format, digits only (no +, spaces or dashes).
  // Provided number 0345-9200727 → Pakistan country code 92, leading 0 dropped.
  // While the value contains "X" the site treats it as a placeholder and logs a warning.
  whatsappNumber: '923459200727',
  whatsappDisplay: '0345-9200727',

  phones: [{ display: '091-6640022', tel: '+92916640022' }],
  email: 'tabeertravel.pk@gmail.com',

  // Logo file lives in src/assets (swap the file to change it)
  // Social links: leave '' to hide an icon. Nothing is invented.
  social: {
    facebook: '',
    instagram: '',
    tiktok: '',
    youtube: '',
  },

  credit: 'Made by AZICREATION',
  year: 2026,

  // Image paths (files in /public/images). Replace with real photos, e.g.
  // '/images/hero.jpg', then update the path here.
  images: {
    hero: '/images/hero.svg',
    hajj: '/images/hajj.svg',
    destinations: {
      saudi: '/images/saudi.svg',
      uae: '/images/uae.svg',
      turkey: '/images/turkey.svg',
      thailand: '/images/thailand.svg',
      malaysia: '/images/malaysia.svg',
      azerbaijan: '/images/azerbaijan.svg',
    },
  },

  // Pre-filled WhatsApp messages
  messages: {
    general:
      'Assalamualaikum! I visited the TABEER TRAVEL & TOURS website. I would like information about your travel services.',
    tickets: 'Assalamualaikum! I need information about international/domestic airline tickets.',
    visa: 'Assalamualaikum! I need visa processing information.',
    umrah: 'Assalamualaikum! I am interested in your Hajj/Umrah packages.',
    tours: 'Assalamualaikum! I am interested in your international tour packages.',
    hotel: 'Assalamualaikum! I need hotel booking assistance.',
    other: 'Assalamualaikum! I need help with other travel services.',
    destination: (name) =>
      `Assalamualaikum! I am interested in travelling to ${name}. Please share details.`,
  },
};

export default siteConfig;

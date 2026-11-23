import siteConfig from './siteConfig';

export const isPlaceholderNumber = /x/i.test(siteConfig.whatsappNumber);

if (isPlaceholderNumber && typeof console !== 'undefined') {
  console.warn('[TABEER] WhatsApp number is still a placeholder. Edit src/config/siteConfig.js');
}

/** Builds https://wa.me/NUMBER?text=ENCODED_MESSAGE */
export function waLink(message = siteConfig.messages.general) {
  const number = siteConfig.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

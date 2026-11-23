import siteConfig from '../config/siteConfig';
import { waLink } from '../config/whatsapp';
import { WhatsAppIcon } from './Icons';

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink(siteConfig.messages.general)}
      target="_blank"
      rel="noopener noreferrer"
      className="float-wa"
      aria-label="Chat with TABEER TRAVEL & TOURS on WhatsApp"
    >
      <WhatsAppIcon size={30} />
      <span className="float-wa-label">Chat on WhatsApp</span>
    </a>
  );
}

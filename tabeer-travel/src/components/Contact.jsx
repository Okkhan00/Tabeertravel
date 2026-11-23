import siteConfig from '../config/siteConfig';
import WhatsAppButton from './WhatsAppButton';
import Reveal from './Reveal';
import { WhatsAppIcon, PhoneIcon, MailIcon } from './Icons';

export default function Contact() {
  return (
    <section id="contact" className="section section-tint">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Get In Touch</span>
          <h2>LET'S PLAN YOUR NEXT JOURNEY</h2>
          <p>WhatsApp is the fastest way to reach us.</p>
        </Reveal>

        <div className="grid grid-3 contact-grid">
          <Reveal className="card contact-card">
            <div className="icon-badge wa">
              <WhatsAppIcon size={28} />
            </div>
            <h3>WhatsApp</h3>
            <p className="contact-value">{siteConfig.whatsappDisplay}</p>
            <WhatsAppButton message={siteConfig.messages.general} size="sm">
              Chat Now
            </WhatsAppButton>
          </Reveal>

          <Reveal delay={80} className="card contact-card">
            <div className="icon-badge">
              <PhoneIcon size={28} />
            </div>
            <h3>Phone</h3>
            {siteConfig.phones.map((p) => (
              <a key={p.tel} className="contact-value" href={`tel:${p.tel}`}>
                {p.display}
              </a>
            ))}
          </Reveal>

          <Reveal delay={160} className="card contact-card">
            <div className="icon-badge">
              <MailIcon size={28} />
            </div>
            <h3>Email</h3>
            <a className="contact-value email" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import siteConfig from '../config/siteConfig';
import WhatsAppButton from './WhatsAppButton';
import Reveal from './Reveal';

export default function HajjUmrah() {
  return (
    <section id="umrah" className="hajj">
      <img className="hajj-bg" src={siteConfig.images.hajj} alt="" loading="lazy" />
      <div className="hajj-overlay" />
      <Reveal className="container hajj-inner">
        <span className="pill pill-gold">Hajj &amp; Umrah</span>
        <h2>MAKE YOUR SACRED JOURNEY WITH TABEER</h2>
        <p>Let us help you plan your spiritual journey with reliable Hajj and Umrah travel assistance.</p>
        <WhatsAppButton message={siteConfig.messages.umrah} size="lg">
          INQUIRE ABOUT UMRAH ON WHATSAPP
        </WhatsAppButton>
      </Reveal>
    </section>
  );
}

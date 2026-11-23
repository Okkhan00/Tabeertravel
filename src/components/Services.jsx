import siteConfig from '../config/siteConfig';
import WhatsAppButton from './WhatsAppButton';
import Reveal from './Reveal';
import { PlaneIcon, PassportIcon, CrescentIcon, GlobeIcon, BedIcon, BriefcaseIcon } from './Icons';

const services = [
  {
    title: 'CHEAP AIRLINE TICKETS',
    text: 'Affordable international and domestic flight tickets with competitive fares across the world.',
    Icon: PlaneIcon,
    message: siteConfig.messages.tickets,
  },
  {
    title: 'VISA PROCESSING',
    text: 'Professional visa assistance and documentation support for international destinations.',
    Icon: PassportIcon,
    message: siteConfig.messages.visa,
  },
  {
    title: 'HAJJ & UMRAH PACKAGES',
    text: 'Carefully arranged Hajj and Umrah packages with accommodation, flights and travel assistance.',
    Icon: CrescentIcon,
    message: siteConfig.messages.umrah,
  },
  {
    title: 'INTERNATIONAL TOUR PACKAGES',
    text: 'Explore exciting destinations with affordable international travel packages.',
    Icon: GlobeIcon,
    message: siteConfig.messages.tours,
  },
  {
    title: 'HOTEL BOOKINGS',
    text: 'Hotel reservations and accommodation arrangements worldwide.',
    Icon: BedIcon,
    message: siteConfig.messages.hotel,
  },
  {
    title: 'OTHER TRAVEL SERVICES',
    text: 'Complete travel assistance, documentation, guidance and other travel-related services.',
    Icon: BriefcaseIcon,
    message: siteConfig.messages.other,
  },
];

export default function Services() {
  return (
    <section id="services" className="section section-tint">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">What We Offer</span>
          <h2>Our Services</h2>
          <p>Everything you need for a smooth journey, handled by one trusted team.</p>
        </Reveal>

        <div className="grid grid-3">
          {services.map(({ title, text, Icon, message }, i) => (
            <Reveal key={title} delay={(i % 3) * 80} className="card service-card">
              <div className="icon-badge">
                <Icon size={28} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <WhatsAppButton message={message} variant="outline" size="sm">
                Get Details on WhatsApp
              </WhatsAppButton>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

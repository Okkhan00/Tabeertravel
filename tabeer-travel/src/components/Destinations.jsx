import siteConfig from '../config/siteConfig';
import { waLink } from '../config/whatsapp';
import Reveal from './Reveal';
import { ArrowIcon } from './Icons';

const { destinations: img } = siteConfig.images;

const destinations = [
  { name: 'Saudi Arabia', image: img.saudi },
  { name: 'United Arab Emirates', image: img.uae },
  { name: 'Turkey', image: img.turkey },
  { name: 'Thailand', image: img.thailand },
  { name: 'Malaysia', image: img.malaysia },
  { name: 'Azerbaijan', image: img.azerbaijan },
];

export default function Destinations() {
  return (
    <section id="destinations" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Explore</span>
          <h2>Travel Destinations</h2>
          <p>Tap a destination to ask us about tickets, visas and packages on WhatsApp.</p>
        </Reveal>

        <div className="grid grid-3">
          {destinations.map(({ name, image }, i) => (
            <Reveal
              key={name}
              as="a"
              delay={(i % 3) * 80}
              className="dest-card"
              href={waLink(siteConfig.messages.destination(name))}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Inquire about ${name} on WhatsApp`}
            >
              <img src={image} alt={`${name} travel destination`} loading="lazy" width="1200" height="800" />
              <div className="dest-shade" />
              <div className="dest-body">
                <h3>{name}</h3>
                <span className="dest-link">
                  Inquire on WhatsApp <ArrowIcon size={16} />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

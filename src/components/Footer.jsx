import siteConfig from '../config/siteConfig';
import logo from '../assets/logo.png';
import WhatsAppButton from './WhatsAppButton';

const quick = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Our Services' },
  { href: '#why', label: 'Why Choose Us' },
  { href: '#contact', label: 'Contact Us' },
];

const services = [
  'Cheap Airline Tickets',
  'Visa Processing',
  'Hajj & Umrah Packages',
  'International Tour Packages',
  'Hotel Bookings',
  'Other Travel Services',
];

const socialLabels = { facebook: 'Facebook', instagram: 'Instagram', tiktok: 'TikTok', youtube: 'YouTube' };

export default function Footer() {
  const socials = Object.entries(siteConfig.social).filter(([, url]) => url);

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="footer-logo">
            <img src={logo} alt={siteConfig.brandName} loading="lazy" width="150" height="70" />
          </span>
          <p>
            Making travel simple, convenient and accessible – airline tickets, visa processing, Hajj, Umrah and
            international travel services.
          </p>
          {socials.length > 0 && (
            <ul className="social">
              {socials.map(([key, url]) => (
                <li key={key}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {socialLabels[key]}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            {quick.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Our Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s}>
                <a href="#services">{s}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p className="footer-contact">{siteConfig.whatsappDisplay}</p>
          <WhatsAppButton message={siteConfig.messages.general} size="sm">
            Chat on WhatsApp
          </WhatsAppButton>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © {siteConfig.year} TABEER TRAVEL &amp; TOURS. All Rights Reserved.
        </span>
        <span>{siteConfig.credit}</span>
      </div>
    </footer>
  );
}

import { useEffect, useState } from 'react';
import siteConfig from '../config/siteConfig';
import logo from '../assets/logo.png';
import WhatsAppButton from './WhatsAppButton';
import { MenuIcon, CloseIcon } from './Icons';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Our Services' },
  { href: '#why', label: 'Why Choose Us' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled || open ? 'nav-solid' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="nav-logo" aria-label={`${siteConfig.brandName} – home`} onClick={() => setOpen(false)}>
          <img src={logo} alt={siteConfig.brandName} width="140" height="66" />
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <WhatsAppButton message={siteConfig.messages.general} size="sm">
            WhatsApp Us
          </WhatsAppButton>
        </div>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon size={26} /> : <MenuIcon size={26} />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} hidden={!open}>
        <nav aria-label="Mobile navigation">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <WhatsAppButton message={siteConfig.messages.general} className="btn-block">
          Contact Us on WhatsApp
        </WhatsAppButton>
      </div>
    </header>
  );
}

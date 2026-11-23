import siteConfig from '../config/siteConfig';
import WhatsAppButton from './WhatsAppButton';
import { ArrowIcon } from './Icons';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <img className="hero-bg" src={siteConfig.images.hero} alt="" fetchPriority="high" />
      <div className="hero-overlay" />
      <div className="container hero-inner">
        <span className="pill">{siteConfig.tagline}</span>
        <h1>
          YOUR JOURNEY,
          <br />
          <span className="gold-text">OUR RESPONSIBILITY</span>
        </h1>
        <p className="hero-lead">
          Explore the world with confidence. From affordable airline tickets to visa assistance and unforgettable
          Hajj &amp; Umrah journeys, we make your travel dreams a reality.
        </p>
        <div className="hero-actions">
          <WhatsAppButton message={siteConfig.messages.general} size="lg">
            Contact Us on WhatsApp
          </WhatsAppButton>
          <a href="#services" className="btn btn-ghost btn-lg">
            <span>Explore Our Services</span>
            <ArrowIcon size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

import siteConfig from '../config/siteConfig';
import logo from '../assets/logo.png';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <Reveal className="about-text">
          <span className="eyebrow">Who We Are</span>
          <h2>ABOUT TABEER TRAVEL &amp; TOURS</h2>
          <p>
            At Tabeer Travel &amp; Tours, we are committed to making travel simple, convenient and accessible. From
            airline tickets and visa processing to Hajj, Umrah and international travel services, we aim to provide
            reliable assistance for every journey.
          </p>
        </Reveal>
        <Reveal delay={120} className="about-visual">
          <img src={logo} alt={siteConfig.brandName} loading="lazy" width="420" height="197" />
        </Reveal>
      </div>
    </section>
  );
}

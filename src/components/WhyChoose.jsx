import Reveal from './Reveal';
import { TagIcon, HeadsetIcon, ShieldIcon, LayersIcon, SmileIcon, ChatIcon } from './Icons';

const reasons = [
  { title: 'Competitive Travel Prices', Icon: TagIcon },
  { title: 'Professional Customer Support', Icon: HeadsetIcon },
  { title: 'Reliable Travel Assistance', Icon: ShieldIcon },
  { title: 'Multiple Travel Services', Icon: LayersIcon },
  { title: 'Customer Satisfaction', Icon: SmileIcon },
  { title: 'Easy WhatsApp Communication', Icon: ChatIcon },
];

export default function WhyChoose() {
  return (
    <section id="why" className="section section-dark">
      <div className="container">
        <Reveal className="section-head on-dark">
          <span className="eyebrow">Why Us</span>
          <h2>Why Choose TABEER TRAVEL?</h2>
          <p>Simple, dependable travel support from first message to final destination.</p>
        </Reveal>

        <div className="grid grid-3">
          {reasons.map(({ title, Icon }, i) => (
            <Reveal key={title} delay={(i % 3) * 80} className="why-card">
              <div className="why-icon">
                <Icon size={26} />
              </div>
              <h3>{title}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

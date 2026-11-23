import { waLink } from '../config/whatsapp';
import { WhatsAppIcon } from './Icons';

export default function WhatsAppButton({
  message,
  children,
  variant = 'solid',
  size = 'md',
  icon = true,
  className = '',
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-wa btn-${variant} btn-${size} ${className}`}
    >
      {icon && <WhatsAppIcon size={size === 'sm' ? 18 : 22} />}
      <span>{children}</span>
    </a>
  );
}

import { PROFILE } from '../../data/personalData';

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-[var(--border-dim)] bg-[var(--bg-main)]">
      <div className="container-safe px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-primary)]">
            {PROFILE.name} © 2025
          </span>
          {/* CONTRAST FIX: Opacity increased to 90 */}
          <span className="text-[10px] text-[var(--text-secondary)] opacity-90 mt-1">
            IT Support & Cloud Practitioner
          </span>
        </div>

        <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)]">
          <a href="https://facebook.com/arpharazons" className="hover:text-[var(--accent)] transition-colors">Facebook</a>
          <a href="https://www.linkedin.com/in/naufalhafizh4657/" className="hover:text-[var(--accent)] transition-colors">LinkedIn</a>
          <a href={`mailto:${PROFILE.email}`} className="hover:text-[var(--accent)] transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

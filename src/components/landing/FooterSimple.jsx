import { MagnetButton } from '../ui/MagnetButton';
import { Mail, Github, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const FooterSimple = () => {
  return (
    <footer className="bg-[var(--bg-primary)] pt-32 pb-12 border-t border-[var(--line)]">
      <div className="container-custom">

        {/* BIG CTA */}
        <div className="mb-24">
           <h2 className="text-display text-5xl md:text-7xl font-bold text-[var(--text-primary)] mb-8 leading-tight">
             Let's build <br />
             <span className="text-[var(--text-muted)]">something secure.</span>
           </h2>
           <div className="flex flex-wrap gap-4">
              <MagnetButton onClick={() => window.location.href = 'mailto:nawvalovsky@proton.me'}>
                  <span className="px-2">Mulai Proyek</span> <Mail size={16} />
              </MagnetButton>
              <button className="px-8 py-4 rounded-full border border-[var(--line)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all uppercase text-xs tracking-widest">
                 Jadwalkan Call
              </button>
           </div>
        </div>

        {/* RICH LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-[var(--line)] pt-16 mb-16">

           {/* Col 1 */}
           <div>
              <h4 className="text-[var(--text-primary)] font-bold mb-6">Sitemap</h4>
              <ul className="space-y-3 text-sm text-[var(--text-muted)]">
                 <li><a href="#" className="hover:text-[var(--accent)]">Home</a></li>
                 <li><a href="#" className="hover:text-[var(--accent)]">Journal</a></li>
                 <li><a href="#" className="hover:text-[var(--accent)]">Projects</a></li>
                 <li><a href="#" className="hover:text-[var(--accent)]">About</a></li>
              </ul>
           </div>

           {/* Col 2 */}
           <div>
              <h4 className="text-[var(--text-primary)] font-bold mb-6">Socials</h4>
              <ul className="space-y-3 text-sm text-[var(--text-muted)]">
                 <li><a href="#" className="hover:text-[var(--accent)] flex items-center gap-2">Github <ArrowUpRight size={12}/></a></li>
                 <li><a href="#" className="hover:text-[var(--accent)] flex items-center gap-2">LinkedIn <ArrowUpRight size={12}/></a></li>
                 <li><a href="#" className="hover:text-[var(--accent)] flex items-center gap-2">Instagram <ArrowUpRight size={12}/></a></li>
              </ul>
           </div>

           {/* Col 3 */}
           <div>
              <h4 className="text-[var(--text-primary)] font-bold mb-6">Contact</h4>
              <address className="not-italic space-y-3 text-sm text-[var(--text-muted)]">
                 <p>Bandung, Indonesia</p>
                 <p>nawvalovsky@proton.me</p>
                 <p>+62 8XX XXXX XXXX</p>
              </address>
           </div>

            {/* Col 4 - Brand */}
           <div className="col-span-2 md:col-span-1 md:text-right">
              <span className="text-2xl font-display font-bold text-[var(--text-primary)]">NWV.</span>
              <p className="text-xs text-[var(--text-muted)] mt-2">
                 Security-First Fullstack Developer.<br/>
                 © {new Date().getFullYear()}
              </p>
           </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="text-[10px] uppercase tracking-widest text-[var(--text-dim)] flex justify-between">
           <span>Local Time: WIB (UTC+7)</span>
           <span>V.2.0.0 Refactored</span>
        </div>

      </div>
    </footer>
  );
};

export default FooterSimple;

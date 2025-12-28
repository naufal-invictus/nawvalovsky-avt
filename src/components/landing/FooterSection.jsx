import { PROFILE } from '../../data/personalData';
import { Mail, ArrowUpRight } from 'lucide-react';

const FooterRich = () => {
  return (
    <footer className="bg-white text-[var(--text-primary)] pt-20 pb-10 border-t border-[var(--border-dim)]">
      <div className="container-safe px-6 md:px-8">

        {/* --- GRID 1: INTERESTS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 border-b border-[var(--border-dim)] pb-16">

           {/* Book Section */}
           <div className="flex flex-col sm:flex-row gap-6 items-start bg-[var(--bg-main)] p-6 rounded-2xl border border-[var(--border-dim)]">
              <div className="w-20 h-28 bg-gray-200 flex-shrink-0 relative overflow-hidden rounded shadow-sm">
                 {PROFILE.reading.cover && (
                   <img src={PROFILE.reading.cover} alt="Book" className="w-full h-full object-cover" />
                 )}
              </div>
              <div>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--highlight-orange)] mb-2">Reading Now</p>
                 <h4 className="font-serif italic text-lg mb-1">{PROFILE.reading.title}</h4>
                 <p className="text-xs text-[var(--text-secondary)] mb-3">by {PROFILE.reading.author}</p>
                 <p className="text-sm text-[var(--text-secondary)] italic border-l-2 border-[var(--accent)] pl-3">
                   "{PROFILE.reading.quote}"
                 </p>
              </div>
           </div>

           {/* Interests Section */}
           <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] mb-4">Minat Lain</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                 {PROFILE.interests.map((item, i) => (
                   <div key={i} className="flex items-center gap-3 p-3 rounded-lg border border-[var(--border-dim)] hover:border-[var(--accent)] hover:bg-blue-50 transition-colors group cursor-default">
                      <span className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">{item.icon}</span>
                      <span className="text-sm font-medium">{item.title}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* --- GRID 2: CTA & LINKS --- */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">

          <div className="max-w-md">
             <h2 className="text-display text-4xl md:text-5xl font-bold mb-6 text-[var(--text-primary)]">
               Let's Build <br/><span className="text-[var(--accent)]">Something Safe.</span>
             </h2>
             <a
               href={`mailto:${PROFILE.email}`}
               className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--text-primary)] text-white rounded-full font-bold hover:bg-[var(--highlight-orange)] transition-colors shadow-lg shadow-gray-200"
             >
               Start Discussion <Mail size={18} />
             </a>
          </div>

          <div className="grid grid-cols-2 gap-16 text-sm">
             <div>
                <h4 className="font-bold mb-4 text-[var(--text-primary)] uppercase tracking-wider text-xs">Navigation</h4>
                <ul className="space-y-3 text-[var(--text-secondary)]">
                   <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Overview</a></li>
                   <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Projects</a></li>
                   <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Journal</a></li>
                </ul>
             </div>
             <div>
                <h4 className="font-bold mb-4 text-[var(--text-primary)] uppercase tracking-wider text-xs">Socials</h4>
                <ul className="space-y-3 text-[var(--text-secondary)]">
                   <li><a href="#" className="hover:text-[var(--accent)] flex gap-2 items-center">GitHub <ArrowUpRight size={12}/></a></li>
                   <li><a href="#" className="hover:text-[var(--accent)] flex gap-2 items-center">LinkedIn <ArrowUpRight size={12}/></a></li>
                   <li><a href="#" className="hover:text-[var(--accent)] flex gap-2 items-center">Instagram <ArrowUpRight size={12}/></a></li>
                </ul>
             </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-[var(--border-dim)] flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] gap-4">
           <span>{PROFILE.name} © 2025</span>
           <span className="opacity-70">Security First • Cloud Native Design</span>
        </div>

      </div>
    </footer>
  );
};

export default FooterRich;

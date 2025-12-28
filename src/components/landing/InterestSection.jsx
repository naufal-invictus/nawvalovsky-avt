import { HOBBIES, PROFILE } from '../../data/personalData';
import { ArrowUpRight, BookOpen, Coffee, Cpu } from 'lucide-react';

const InterestSection = () => {
  return (
    <section className="py-24 border-t border-[var(--border)] bg-[var(--bg-main)]">
      <div className="container-custom">

        <div className="mb-12">
           <h2 className="text-display text-4xl">Personal Sector</h2>
           <p className="text-[var(--text-dim)]">Data di luar jam kerja.</p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">

           {/* BOX 1: Main Focus (Large) */}
           <div className="md:col-span-2 p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)] blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                 <div>
                    <div className="w-10 h-10 rounded-lg bg-[var(--bg-main)] border border-[var(--border)] flex items-center justify-center mb-4 text-[var(--text-primary)]">
                       <Cpu size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">Fokus Saat Ini</h3>
                    <p className="text-[var(--text-muted)] max-w-md">
                       Sedang mendalami arsitektur <strong>Zero Trust Network</strong> dan otomatisasi deployment menggunakan Ansible.
                    </p>
                 </div>
                 <div className="mt-8 pt-6 border-t border-[var(--border)] flex gap-4">
                    {HOBBIES.map((h, i) => (
                       <span key={i} className="text-xs uppercase tracking-widest text-[var(--text-dim)] flex items-center gap-2">
                          <span className="w-1 h-1 bg-[var(--accent)] rounded-full" /> {h.title}
                       </span>
                    ))}
                 </div>
              </div>
           </div>

           {/* BOX 2: Favorite Book (Tall/Square) */}
           <div className="md:col-span-1 p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-main)] flex flex-col justify-between relative">
              <BookOpen className="absolute top-8 right-8 text-[var(--text-dim)] opacity-20" size={40} />

              <div>
                 <span className="text-[10px] uppercase tracking-widest text-[var(--accent)] border border-[var(--border)] px-2 py-1 rounded-full mb-4 inline-block">
                    Reading
                 </span>
                 <h4 className="text-xl font-serif italic text-[var(--text-primary)] leading-tight">
                    "{PROFILE.favBook.title}"
                 </h4>
                 <p className="text-sm text-[var(--text-dim)] mt-1">{PROFILE.favBook.author}</p>
              </div>

              <div className="mt-6">
                 <p className="text-xs text-[var(--text-muted)] italic leading-relaxed border-l border-[var(--text-dim)] pl-3">
                    "{PROFILE.favBook.quote}"
                 </p>
              </div>
           </div>

           {/* BOX 3: CTA Strip (Wide) */}
           <div className="md:col-span-3 p-10 rounded-2xl border border-[var(--border)] bg-[var(--text-primary)] text-[var(--bg-main)] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
               {/* Noise texture overlay for richness */}
               <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

               <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-2">Let's Secure Your System.</h3>
                  <p className="font-mono text-sm opacity-70">Open for collaboration on CyberSec & Cloud Projects.</p>
               </div>

               <button
                 onClick={() => window.location.href = 'mailto:nawvalovsky@proton.me'}
                 className="relative z-10 px-8 py-4 bg-[var(--bg-main)] text-[var(--text-primary)] rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform flex items-center gap-2"
               >
                  Kirim Email <ArrowUpRight size={16} />
               </button>
           </div>

        </div>
      </div>
    </section>
  );
};

export default InterestSection;

import { PROFILE } from '../../data/personalData';
import { Mail, Github, Linkedin, ArrowUpRight, Instagram } from 'lucide-react';

const FooterRich = () => {
  return (
    <footer className="bg-[var(--bg-surface)] text-[var(--text-primary)] pt-16 pb-8 border-t border-[var(--border-dim)]">
      <div className="container-safe px-6 md:px-8">

        {/* --- BAGIAN 1: MINAT & BUKU (DI LUAR LAYAR) --- */}
        {/* FIX: Gunakan grid-cols-1 di HP, baru grid-cols-2 di Laptop (md) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-20 border-b border-[var(--border-dim)] pb-16">

           {/* Kiri: Currently Reading */}
           <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-24 h-36 bg-[var(--bg-main)] border border-[var(--border-dim)] flex-shrink-0 relative overflow-hidden grayscale opacity-80 rounded shadow-lg">
                 {/* Fallback jika gambar error/kosong */}
                 {PROFILE.reading.cover ? (
                   <img src={PROFILE.reading.cover} alt="Book" className="w-full h-full object-cover" />
                 ) : (
                   <div className="flex items-center justify-center h-full text-[var(--text-muted)] text-xs">NO COVER</div>
                 )}
              </div>
              <div className="max-w-full">
                 <p className="text-[10px] uppercase tracking-widest text-[var(--accent)] mb-2">Sedang Dibaca</p>
                 <h4 className="font-serif italic text-xl mb-1 break-words">{PROFILE.reading.title}</h4>
                 <p className="text-sm text-[var(--text-secondary)] mb-4">by {PROFILE.reading.author}</p>
                 <div className="pl-3 border-l-2 border-[var(--border-dim)]">
                    <p className="text-sm text-[var(--text-secondary)] italic opacity-80 leading-relaxed">
                      "{PROFILE.reading.quote}"
                    </p>
                 </div>
              </div>
           </div>

           {/* Kanan: Other Interests */}
           <div>
              <p className="text-[10px] uppercase tracking-widest text-[var(--accent)] mb-4">Minat Lain</p>
              {/* FIX: Grid kecil untuk minat agar rapi */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                 {PROFILE.interests.map((item, i) => (
                   <div key={i} className="flex items-center gap-3 p-3 border border-[var(--border-dim)] rounded hover:bg-[var(--bg-main)] transition-colors">
                      <span className="text-[var(--text-muted)]">{item.icon}</span>
                      <span className="text-sm font-medium">{item.title}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>


        {/* --- BAGIAN 2: CTA & LINKS --- */}
        {/* FIX: Flex-col di HP (atas bawah), Flex-row di Laptop (kiri kanan) */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">

          {/* Main CTA */}
          <div className="max-w-md w-full">
             {/* FIX: Ukuran font responsif (text-4xl di HP, 6xl di Laptop) agar tidak jebol */}
             <h2 className="text-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
               Let's Secure <br/><span className="text-[var(--text-muted)]">Your Future.</span>
             </h2>
             <a
               href={`mailto:${PROFILE.email}`}
               className="inline-flex items-center gap-2 text-base md:text-lg border-b border-[var(--text-primary)] pb-1 hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all group"
             >
               <span>Mulai Diskusi</span>
               <Mail size={18} className="group-hover:translate-x-1 transition-transform" />
             </a>
          </div>

          {/* Navigation Links - Grid 2 kolom di HP agar hemat tempat */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 w-full md:w-auto">
             <div>
                <h4 className="font-bold mb-4 text-[var(--text-primary)] text-sm uppercase tracking-wider">Menu</h4>
                <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                   <li><a href="#" className="hover:text-[var(--accent)] block py-1">Home</a></li>
                   <li><a href="#" className="hover:text-[var(--accent)] block py-1">Projects</a></li>
                   <li><a href="#" className="hover:text-[var(--accent)] block py-1">Journal</a></li>
                </ul>
             </div>
             <div>
                <h4 className="font-bold mb-4 text-[var(--text-primary)] text-sm uppercase tracking-wider">Connect</h4>
                <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
                   <li><a href="#" className="hover:text-[var(--accent)] flex gap-2 items-center py-1">GitHub <ArrowUpRight size={12}/></a></li>
                   <li><a href="#" className="hover:text-[var(--accent)] flex gap-2 items-center py-1">LinkedIn <ArrowUpRight size={12}/></a></li>
                   <li><a href="#" className="hover:text-[var(--accent)] flex gap-2 items-center py-1">Instagram <ArrowUpRight size={12}/></a></li>
                </ul>
             </div>
          </div>

        </div>

        {/* --- BAGIAN 3: COPYRIGHT --- */}
        <div className="mt-16 pt-8 border-t border-[var(--border-dim)] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-[var(--text-muted)] text-center md:text-left">
           <span>{PROFILE.name} © {new Date().getFullYear()}</span>
           <span className="opacity-50">Code is Poetry. Security is Reality.</span>
        </div>

      </div>
    </footer>
  );
};

export default FooterRich;

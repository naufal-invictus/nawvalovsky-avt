import { motion } from 'framer-motion';
import { PROFILE } from '../../data/personalData';
import { Terminal, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-12 flex flex-col justify-center relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f172a] via-[var(--bg-main)] to-[var(--bg-main)]">
      <div className="container-safe grid md:grid-cols-12 gap-12 items-center">

        {/* Text Content */}
        <div className="md:col-span-7 space-y-6 z-10">

          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-dim)] bg-[var(--bg-surface)] text-[10px] text-[var(--accent)] tracking-widest uppercase shadow-sm"
          >
            <Terminal size={12} />
            <span>System Ready • v2.5</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-display text-5xl md:text-7xl font-bold leading-[1.1] text-[var(--text-primary)]"
          >
            {PROFILE.name}<span className="text-[var(--accent)]">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-lg"
          >
            {PROFILE.bio}
          </motion.p>

          <motion.div
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
             className="flex flex-wrap gap-2 pt-2"
          >
             {PROFILE.tags.map((tag, i) => (
                <span key={i} className="text-xs font-mono text-[var(--text-secondary)] px-2 py-1 border border-[var(--border-dim)] rounded bg-[var(--bg-surface)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors cursor-crosshair">
                  #{tag}
                </span>
             ))}
          </motion.div>
        </div>

        {/* Visual / Profile */}
        <div className="md:col-span-5 relative flex justify-center md:justify-end">
           <div className="w-64 h-64 md:w-80 md:h-80 relative">
              {/* Profile Glow Blue */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />

              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-[var(--bg-main)] rounded-full border border-[var(--border-dim)] overflow-hidden z-10">
                  <img
                    src="https://i.ibb.co.com/RGZ7rDDk/pp.png"
                    alt="Profile"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
                  />
              </div>
              {/* Decorative Rings Cyan */}
              <div className="absolute inset-0 border border-sky-500/20 rounded-full scale-110 opacity-30" />
              <div className="absolute inset-0 border border-sky-500/10 rounded-full scale-125 opacity-10 dashed" />
           </div>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[var(--text-muted)]">
         <ArrowDown size={16} />
      </div>
    </section>
  );
};

export default HeroSection;

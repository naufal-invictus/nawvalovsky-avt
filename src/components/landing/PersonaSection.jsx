import { ShieldCheck, Brain, Zap, Activity, GitCommit } from 'lucide-react';

export const PersonaSection = () => {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-[var(--bg-main)]">

      {/* 1. Background Ambience (Rich & Colorful but Subtle) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-[var(--accent)]/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="container-safe relative z-10 px-6">

        {/* HEADER: Minimalist Line with Status */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 border-b border-[var(--border-dim)] pb-6">
          <div>
            <span className="block text-[var(--accent)] font-mono text-xs tracking-[0.3em] uppercase mb-2">
              System Architecture
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--text-primary)] leading-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] via-[var(--text-secondary)] to-[var(--text-primary)]">Sentinel</span>.
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-right">
             <div className="flex items-center gap-2 text-[var(--text-secondary)] font-mono text-xs">
                <Activity size={14} className="text-emerald-500" />
                <span>TYPOLOGY</span>
             </div>
             <p className="text-[var(--text-secondary)] text-sm font-serif italic mt-1">
               "Order before ego."
             </p>
          </div>
        </div>

        {/* MAIN CONTENT: Deconstructed Layout (No Grid, No Boxes) */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* COL 1: The Core Identity (Big Typography) */}
          <div className="flex-1 lg:w-5/12">
            <div className="relative">
              {/* Decorative Big Text behind */}
              <span className="absolute -top-10 -left-6 text-[10rem] font-bold text-[var(--text-primary)]/5 select-none pointer-events-none z-0">
                ISTJ
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck size={32} className="text-[var(--accent)]" />
                  <span className="text-xl font-bold text-[var(--text-primary)] tracking-wide">
                    The Guardian
                  </span>
                </div>

                <h3 className="text-6xl md:text-8xl font-display font-bold text-[var(--text-primary)] mb-6 tracking-tighter">
                  ISTJ
                </h3>

                <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-serif pl-4 border-l-2 border-[var(--accent)]">
                  Logis, terorganisir, dan berpegang teguh pada fakta. Namun memiliki drive untuk menciptakan efisiensi baru.
                  <span className="text-[var(--text-primary)] font-bold block mt-2">
                    "Saya taat aturan karena saya tahu apa yang terjadi ketika aturan diabaikan."
                  </span>
                </p>
              </div>
            </div>

            {/* Trifix Data Flow */}
            <div className="mt-12 flex items-center gap-8">
               <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-1">Trifix</span>
                  <span className="text-2xl font-mono font-bold text-[var(--text-primary)]">1-6-9</span>
               </div>
               <div className="h-10 w-[1px] bg-[var(--border-dim)]"></div>
               <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-1">Instinct</span>
                  <span className="text-2xl font-mono font-bold text-[var(--text-primary)]">sp/so</span>
               </div>
            </div>
          </div>

          {/* COL 2: Enneagram & Complex Personality (Vertical Flow) */}
          <div className="flex-1 lg:w-4/12 flex flex-col justify-center relative">
             {/* Gradient Line Decoration */}
             <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[var(--border-dim)] to-transparent hidden lg:block" />

             <div className="pl-0 lg:pl-12 space-y-10">

                {/* Enneagram 1w9 */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                     <Brain size={20} className="text-[var(--text-secondary)]" />
                     <span className="text-sm font-mono text-[var(--accent)] uppercase">Core Drive</span>
                  </div>
                  <h4 className="text-4xl font-display font-bold text-[var(--text-primary)]">
                    1w9 <span className="text-xl font-normal text-[var(--text-secondary)]">The Idealist</span>
                  </h4>
                  <p className="mt-3 text-[var(--text-body)] text-sm leading-relaxed">
                    Perfeksionis yang tenang. Memiliki standar moral yang tinggi dan disiplin (Type 1), namun dibalut dengan keinginan untuk menjaga kedamaian mental dan menghindari konflik yang tidak perlu (Wing 9).
                  </p>
                </div>

                {/* Attitudinal Psyche */}
                <div>
                   <span className="text-sm font-mono text-[var(--accent)] uppercase mb-4 block">Attitudinal Psyche</span>
                   <div className="flex items-end gap-1">
                      <span className="text-5xl font-bold text-[var(--text-primary)] leading-none">LFEV</span>
                      <span className="text-sm text-[var(--text-secondary)] mb-1 ml-2">Berthier</span>
                   </div>
                   <div className="mt-4 flex gap-6 text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">
                      <div className="group cursor-default hover:text-[var(--accent)] transition-colors">
                        <span className="block text-[10px] font-normal opacity-50">1st</span>Logic
                      </div>
                      <div className="group cursor-default hover:text-[var(--accent)] transition-colors">
                        <span className="block text-[10px] font-normal opacity-50">2nd</span>Physics
                      </div>
                      <div className="group cursor-default hover:text-[var(--accent)] transition-colors">
                        <span className="block text-[10px] font-normal opacity-50">3rd</span>Emotion
                      </div>
                      <div className="group cursor-default hover:text-[var(--accent)] transition-colors">
                        <span className="block text-[10px] font-normal opacity-50">4th</span>Volition
                      </div>
                   </div>
                </div>

             </div>
          </div>

     {/* COL 3: Cognitive Stack (Re-Layout: 2x2 Technical Grid) */}
          <div className="flex-1 lg:w-4/12 flex flex-col justify-center">

             {/* Header Kecil */}
             <div className="mb-6 flex items-center justify-between border-b border-[var(--border-dim)] pb-2">
                <h5 className="font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)]">
                  Cognitive_Stack_v1.0
                </h5>
                <Zap size={14} className="text-yellow-500 animate-pulse" />
             </div>

             {/* The Grid Layout */}
             <div className="grid grid-cols-2 gap-4 md:gap-6">

                {/* 1. Si - Hero (Dominant) */}
                <div className="col-span-2 md:col-span-1 p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--accent)]/30 relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Brain size={48} />
                   </div>
                   <span className="text-[10px] font-mono uppercase text-[var(--accent)] block mb-1">Hero / Dominant</span>
                   <div className="text-5xl font-display font-bold text-[var(--text-primary)] mb-1 group-hover:scale-105 transition-transform origin-left">
                      Si
                   </div>
                   <p className="text-xs text-[var(--text-secondary)] leading-tight">
                      Internal Database & Sensory Memory.
                   </p>
                </div>

                {/* 2. Te - Parent (Auxiliary) */}
                <div className="col-span-2 md:col-span-1 p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-dim)] hover:border-[var(--text-primary)] transition-colors group">
                   <span className="text-[10px] font-mono uppercase text-[var(--text-secondary)] block mb-1">Parent / Aux</span>
                   <div className="text-4xl font-display font-bold text-[var(--text-primary)] mb-1">
                      Te
                   </div>
                   <p className="text-xs text-[var(--text-secondary)] leading-tight opacity-80">
                      Efficiency & External Logic.
                   </p>
                </div>

                {/* 3. Fi - Child (Tertiary) */}
                <div className="col-span-1 p-4 rounded-2xl border border-[var(--border-dim)] border-dashed hover:border-solid hover:bg-[var(--bg-surface)] transition-all">
                   <span className="text-[10px] font-mono uppercase text-[var(--text-secondary)] block mb-1">Child</span>
                   <div className="text-2xl font-display font-bold text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] mb-1">
                      Fi
                   </div>
                   <p className="text-[10px] text-[var(--text-secondary)] opacity-60">
                      Authenticity.
                   </p>
                </div>

                {/* 4. Ne - Inferior (Weakness) */}
                <div className="col-span-1 p-4 rounded-2xl border border-[var(--border-dim)] border-dashed opacity-60 hover:opacity-100 transition-opacity bg-red-500/5 hover:bg-red-500/10">
                   <span className="text-[10px] font-mono uppercase text-red-400 block mb-1">Inferior</span>
                   <div className="text-2xl font-display font-bold text-[var(--text-secondary)] mb-1">
                      Ne
                   </div>
                   <p className="text-[10px] text-[var(--text-secondary)]">
                      Chaos & What-if.
                   </p>
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

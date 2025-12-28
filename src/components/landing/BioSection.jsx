import { PROFILE } from '../../data/personalData';
import { Cpu, Terminal, CheckCircle2, ShieldCheck } from 'lucide-react';

const BioSection = () => {
  if (!PROFILE) return null;

  return (
    <section className="py-16 border-t border-[var(--border-dim)] bg-[var(--bg-main)]">
      <div className="container-safe px-6 md:px-8">

        <div className="grid md:grid-cols-12 gap-12">

          {/* --- LEFT: TECHNICAL SOLVED CASES (With Scrollbar) --- */}
          <div className="md:col-span-7">
            <div className="flex items-center justify-between mb-8">
               <div className="flex items-center gap-3">
                  <Terminal className="text-[var(--accent)]" size={20} />
                  <h3 className="text-display text-2xl text-[var(--text-primary)] font-bold">Solved_Cases.log</h3>
               </div>
               <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-tighter">
                 {PROFILE.experience?.length || 0} Entries found
               </span>
            </div>

            {/* Area List dengan Scrollbar */}
            <div className="experience-scroll">
               <div className="space-y-1">
                  {PROFILE.experience?.map((exp, i) => (
                    <div
                      key={i}
                      className="group flex items-start gap-5 py-3 border-b border-[var(--border-dim)] last:border-0 hover:bg-blue-500/5 transition-all duration-200"
                    >
                       {/* Penomoran ala Line Number Editor */}
                       <span className="font-mono text-xs text-[var(--text-muted)] w-6 text-right group-hover:text-[var(--accent)]">
                         {i + 1}
                       </span>

                       <div className="flex-1">
                          <p className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors leading-relaxed text-sm md:text-base">
                             {exp.technical_case}
                          </p>
                       </div>

                       {/* Indikator Status Simpel */}
                       <div className="hidden sm:block">
                          <span className="text-[9px] font-mono text-emerald-500/50 bg-emerald-500/5 px-1.5 py-0.5 rounded border border-emerald-500/20">
                            DONE
                          </span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* --- RIGHT: TECH STACK & CERTS --- */}
          <div className="md:col-span-5 space-y-10">
            {/* Core Tech Stack */}
            <div>
               <h3 className="text-display text-xl mb-6 flex items-center gap-2 font-bold">
                 <Cpu className="text-[var(--accent)]" size={18} /> Core Stack
               </h3>
               <div className="flex flex-wrap gap-2">
                  {PROFILE.skills?.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-[11px] font-mono bg-[var(--bg-surface)] border border-[var(--border-dim)] rounded-sm text-[var(--text-secondary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
               </div>
            </div>

            {/* Validated Certifications */}
            <div>
               <h3 className="text-display text-xl mb-6 flex items-center gap-2 font-bold">
                 <ShieldCheck className="text-[var(--accent)]" size={18} /> Validated
               </h3>
               <div className="space-y-2">
                  {PROFILE.certs?.map((cert, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 py-2 border-b border-[var(--border-dim)] last:border-0"
                    >
                       <CheckCircle2 size={14} className="text-[var(--accent)] flex-shrink-0" />
                       <div className="flex justify-between w-full items-center">
                          <p className="text-xs font-medium text-[var(--text-secondary)]">{cert.name}</p>
                          <span className="text-[9px] font-mono text-[var(--text-muted)]">{cert.org}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BioSection;

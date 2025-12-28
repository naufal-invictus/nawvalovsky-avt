import { PROFILE } from '../../data/personalData';
import { Terminal, Cpu, ShieldCheck } from 'lucide-react';

const BioSection = () => {
  if (!PROFILE) return null;

  return (
    <section className="py-12 border-t border-[var(--border-dim)] bg-[var(--bg-surface)]">
      <div className="container-safe px-6 md:px-8">
        <div className="grid md:grid-cols-12 gap-10">

          {/* --- LEFT: TECHNICAL SOLVED CASES (TIDAK DISENTUH) --- */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="text-[var(--accent)]" size={16} />
              <h3 className="font-display text-lg text-[var(--text-primary)] font-bold tracking-tight">
                Solved_Cases.log
              </h3>
            </div>

            <div className="experience-scroll">
              <div className="space-y-0">
                {PROFILE.experience?.map((exp, i) => (
                  <div
                    key={i}
                    className="experience-item-hover flex items-start gap-4 py-2.5 border-b border-[var(--border-dim)] last:border-0"
                  >
                    <span className="font-mono text-[10px] text-[var(--text-secondary)] opacity-50 pt-0.5 w-4">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <p className="text-[var(--text-body)] leading-relaxed text-xs md:text-[13px]">
                        {exp.technical_case}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT: TECH STACK & CERTS (DIPERBESAR SEDIKIT) --- */}
          <div className="md:col-span-5 space-y-10">
            {/* Core Stack */}
            <div>
              <h3 className="font-display text-base mb-5 flex items-center gap-2 font-bold text-[var(--text-primary)] uppercase tracking-wider">
                <Cpu size={16} className="text-[var(--accent)]" /> Core Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {PROFILE.skills?.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-mono bg-[var(--bg-card)] border border-[var(--border-card)] rounded-md text-[var(--text-secondary)] shadow-sm hover:border-[var(--accent)] transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Validated Certifications */}
            <div>
              <h3 className="font-display text-base mb-5 flex items-center gap-2 font-bold text-[var(--text-primary)] uppercase tracking-wider">
                <ShieldCheck size={16} className="text-[var(--accent)]" /> Validated
              </h3>
              <div className="space-y-3">
                {PROFILE.certs?.map((cert, i) => (
                  <div key={i} className="flex justify-between items-end py-1.5 border-b border-[var(--border-dim)] border-dashed last:border-0">
                    <div>
                      {/* Judul sertifikat lebih besar (text-sm/14px) */}
                      <p className="text-sm font-semibold text-[var(--text-primary)]">{cert.name}</p>
                      {/* Organisasi (text-[11px]) */}
                      <p className="text-[11px] font-mono text-[var(--text-secondary)] opacity-80 mt-0.5">{cert.org}</p>
                    </div>
                    {/* ID atau detail tambahan jika ada bisa diletakkan di sini */}
                    <span className="text-[10px] font-mono text-[var(--accent)] opacity-40">#VERIFIED</span>
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

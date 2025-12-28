import { PROFILE } from '../../data/personalData';
import { Terminal, Cpu, ShieldCheck, BadgeCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const BioSection = () => {
  if (!PROFILE) return null;

  return (
    <section className="py-20 bg-[var(--bg-surface)] border-t border-[var(--border-dim)] relative overflow-hidden">
        {/* Background Decorations: Subtle Glow Line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/50 to-transparent" />

        <div className="container-safe px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

                {/* --- LEFT COLUMN: SYSTEM LOGS (SOLVED CASES) ---
                    FIX: Menggunakan h-full agar tingginya mengikuti kolom kanan (menghindari gap bawah)
                */}
                <div className="lg:col-span-7 flex flex-col h-full min-h-[500px]">
                     <div className="bg-[var(--bg-card)] border border-[var(--border-dim)] rounded-2xl shadow-sm h-full flex flex-col relative overflow-hidden group hover:border-[var(--accent)]/40 transition-colors">

                        {/* Fake Terminal Header */}
                        <div className="bg-[var(--bg-main)] px-4 py-3 border-b border-[var(--border-dim)] flex items-center justify-between z-10">
                            <div className="flex items-center gap-3">
                                <div className="flex gap-1.5 opacity-80">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                                </div>
                                <div className="h-4 w-px bg-[var(--border-dim)] mx-1" />
                                <span className="text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-widest flex items-center gap-2">
                                    <Terminal size={12} className="text-[var(--accent)]" />
                                    system_activity.log
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                <span className="text-[9px] font-bold text-[var(--text-secondary)] uppercase">Live Monitor</span>
                            </div>
                        </div>

                        {/* Content Area - Scrollable List */}
                        <div className="flex-grow relative bg-[var(--bg-main)]/30">
                            <div className="absolute inset-0 overflow-y-auto p-4 experience-scroll space-y-2">
                                {PROFILE.experience?.map((exp, i) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.02 }}
                                        key={i}
                                        className="flex gap-3 group/item p-2 rounded-lg hover:bg-[var(--bg-surface)] transition-colors border border-transparent hover:border-[var(--border-dim)]"
                                    >
                                        <span className="font-mono text-[10px] text-[var(--text-secondary)] opacity-40 pt-1 select-none shrink-0 w-6 text-right">
                                            {(i + 1).toString().padStart(2, '0')}
                                        </span>
                                        <div className="flex-1">
                                            <p className="text-xs md:text-sm text-[var(--text-body)] font-mono leading-relaxed group-hover/item:text-[var(--text-primary)] transition-colors">
                                                <span className="text-[var(--accent)] opacity-70 mr-2 font-bold">{'>'}</span>
                                                {exp.technical_case}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                                {/* Cursor Effect di akhir log */}
                                <div className="pl-11 pt-2">
                                    <span className="inline-block w-2 h-4 bg-[var(--accent)] animate-pulse align-middle"></span>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>

                {/* --- RIGHT COLUMN: STACK & CERTS --- */}
                <div className="lg:col-span-5 flex flex-col gap-6 h-full">

                    {/* 1. TECH STACK CARD */}
                    <div className="bg-[var(--bg-card)] border border-[var(--border-dim)] rounded-2xl p-6 shadow-sm relative overflow-hidden group hover:shadow-md transition-all shrink-0">
                        {/* Background Icon Decoration */}
                        <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity rotate-12">
                            <Cpu size={120} />
                        </div>

                        <h3 className="font-display text-sm font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2 uppercase tracking-wider">
                            <Zap size={16} className="text-amber-500 fill-amber-500/20" />
                            Core Stack
                        </h3>

                        <div className="flex flex-wrap gap-2 relative z-10">
                            {PROFILE.skills?.map((skill, i) => (
                                <span key={i} className="px-3 py-1.5 text-[10px] md:text-[11px] font-bold font-mono text-[var(--text-secondary)] bg-[var(--bg-surface)] border border-[var(--border-dim)] rounded hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--bg-card)] transition-all cursor-default select-none">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* 2. CERTIFICATIONS CARD (Expanded to fill remaining height) */}
                    <div className="bg-[var(--bg-card)] border border-[var(--border-dim)] rounded-2xl shadow-sm flex-1 flex flex-col overflow-hidden hover:border-[var(--accent)]/40 transition-colors h-full min-h-[300px]">
                         {/* Header */}
                         <div className="px-5 py-4 border-b border-[var(--border-dim)] bg-[var(--bg-surface)]/50 flex justify-between items-center">
                            <h3 className="font-display text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider flex items-center gap-2">
                                <ShieldCheck size={16} className="text-emerald-500 fill-emerald-500/10" />
                                Validated Certs
                            </h3>
                            <span className="text-[9px] font-bold bg-[var(--bg-main)] px-2 py-0.5 rounded border border-[var(--border-dim)] text-[var(--text-secondary)]">
                                {PROFILE.certs?.length} ITEMS
                            </span>
                         </div>

                         {/* Scrollable Cert List */}
                         <div className="relative flex-grow bg-[var(--bg-main)]/30">
                            <div className="absolute inset-0 overflow-y-auto experience-scroll p-2">
                                <div className="space-y-1">
                                    {PROFILE.certs?.map((cert, i) => (
                                        <div key={i} className="p-3 rounded-xl border border-transparent hover:border-[var(--border-dim)] hover:bg-[var(--bg-card)] hover:shadow-sm transition-all group flex items-start gap-3">
                                            <div className="mt-0.5 text-[var(--accent)] opacity-40 group-hover:opacity-100 transition-opacity">
                                                <BadgeCheck size={16} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-xs font-bold text-[var(--text-primary)] leading-tight truncate">
                                                    {cert.name}
                                                </h4>
                                                <div className="flex justify-between items-center mt-1">
                                                    <p className="text-[10px] font-mono text-[var(--text-secondary)] opacity-80 truncate max-w-[70%]">
                                                        {cert.org}
                                                    </p>
                                                    <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        VERIFIED
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                         </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
  );
};

export default BioSection;

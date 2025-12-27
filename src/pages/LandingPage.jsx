import { motion } from 'framer-motion';
import { ArrowUpRight, Cloud, Layers, Music, Cpu, Database, Mail, Calendar, Shield, MapPin, Globe } from 'lucide-react';
import { PROFILE, PROJECTS } from '../data/personalData';

export const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="h-screen w-full overflow-hidden p-3 pt-24 font-sans text-sm"
    >
      {/* Dynamic Background Overlay */}
      <div className="absolute inset-0 bg-[var(--bg-primary)]/60 backdrop-blur-[1px] -z-10 transition-colors duration-700" />

      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-6 gap-4 h-full max-w-7xl mx-auto pb-4">

          {/* === COLUMN 1: PROFILE & TERMINAL (LEFT) === */}

          {/* WIDGET 1: PROFILE CARD (Expanded) */}
          <motion.div
              initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
              className="col-span-12 md:col-span-4 row-span-2 bg-[var(--glass)] border border-[var(--border)] rounded-2xl p-5 relative overflow-hidden group shadow-2xl flex flex-col justify-between hover:border-[var(--accent)]/30 transition-all"
          >
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/10 rounded-full blur-3xl -z-10 transition-all group-hover:bg-[var(--accent)]/20" />

              <div className="flex items-start gap-4">
                   <div className="relative">
                       <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--accent)] to-blue-600 flex items-center justify-center text-[var(--bg-primary)] font-bold text-2xl shadow-lg shadow-[var(--accent)]/30">
                         N
                       </div>
                       <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[var(--bg-primary)] rounded-full" title="Online" />
                   </div>
                   <div>
                      <h1 className="text-xl font-bold text-[var(--text-primary)] tracking-tight leading-none mb-1">{PROFILE.name}</h1>
                      <div className="flex items-center gap-1 text-[var(--accent)] text-[10px] uppercase tracking-widest font-bold mb-2">
                        <Shield size={10} /> System Administrator
                      </div>
                      {/* Deskripsi Singkat */}
                      <p className="text-[var(--text-secondary)] text-xs leading-relaxed line-clamp-2">
                        Building secure digital fortresses & scalable cloud architectures.
                        Let's secure the future.
                      </p>
                   </div>
              </div>

              <div className="mt-auto space-y-2">
                 <div className="flex justify-between items-center text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-wider">
                    <span>System Integrity</span>
                    <span className="text-[var(--accent)]">100%</span>
                 </div>
                 <div className="h-1.5 w-full bg-[var(--bg-primary)] rounded-full overflow-hidden border border-[var(--border)]">
                    <motion.div
                        initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-[var(--accent)] to-purple-500"
                    />
                 </div>
              </div>
          </motion.div>

          {/* WIDGET 2: TERMINAL "REAL" (Left Bottom) */}
          <motion.div
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}
              className="col-span-12 md:col-span-4 row-span-4 relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 group flex flex-col"
          >
              {/* Real Blur Backdrop */}
              <div className="absolute inset-0 bg-[#0f172a]/85 backdrop-blur-2xl z-0" />

              {/* Screen Glare Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/50 pointer-events-none z-10" />

              {/* Title Bar (Mac Style) */}
              <div className="relative z-20 bg-white/5 border-b border-white/5 px-4 py-2.5 flex items-center justify-between shrink-0">
                  <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] hover:brightness-110 transition-all shadow-inner"/>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] hover:brightness-110 transition-all shadow-inner"/>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] hover:brightness-110 transition-all shadow-inner"/>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-medium text-slate-400">
                     <Shield size={10} />
                     <span>root@nawvalovsky:~</span>
                  </div>
                  <div className="w-10"></div> {/* Spacer balance */}
              </div>

              {/* Terminal Content Area */}
              <div className="relative z-20 p-4 font-mono text-[11px] leading-relaxed text-slate-300 flex-1 overflow-hidden flex flex-col">

                  {/* Command History */}
                  <div className="opacity-60 mb-2">
                      <div className="flex gap-2">
                          <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-slate-400">whoami</span>
                      </div>
                      <div className="pl-4 text-slate-500">root</div>
                  </div>

                  {/* Current Active Command */}
                  <div className="flex gap-2 mb-3">
                      <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> <span className="text-[var(--text-primary)]">neofetch</span>
                  </div>

                  {/* Neofetch Output */}
                  <div className="flex gap-4 items-start">
                      <div className="text-[var(--accent)] font-bold text-[9px] leading-[10px] shrink-0 pt-1 select-none">
<pre>{`
      /\\
     /  \\
    /    \\
   /      \\
  /   ,,   \\
 /   |  |   \\
/_-''    ''-_\\
`}</pre>
                      </div>
                      <div className="space-y-1 w-full">
                          <div className="flex gap-2 border-b border-white/5 pb-1"><span className="text-[var(--accent)] font-bold">OS</span> <span className="text-slate-100">Arch Linux x86_64</span></div>
                          <div className="flex gap-2 border-b border-white/5 pb-1"><span className="text-[var(--accent)] font-bold">Kernel</span> <span className="text-slate-100">6.8.9-zen</span></div>
                          <div className="flex gap-2 border-b border-white/5 pb-1"><span className="text-[var(--accent)] font-bold">Uptime</span> <span className="text-slate-100">24 days, 3 hrs</span></div>
                          <div className="flex gap-2 border-b border-white/5 pb-1"><span className="text-[var(--accent)] font-bold">Shell</span> <span className="text-slate-100">zsh 5.9</span></div>
                          <div className="flex gap-2"><span className="text-[var(--accent)] font-bold">Mem</span> <span className="text-yellow-400">4096MiB / 16GiB</span></div>
                      </div>
                  </div>

                  {/* Active Prompt with Blinking Cursor */}
                  <div className="mt-auto pt-4 flex items-center gap-2">
                     <span className="text-green-400 font-bold">➜</span>
                     <span className="text-blue-400 font-bold">~</span>
                     <div className="flex items-center">
                        <span className="text-slate-400">awaiting_input</span>
                        <span className="w-2 h-4 bg-[var(--text-primary)] ml-1 animate-pulse shadow-[0_0_8px_var(--text-primary)]"></span>
                     </div>
                  </div>
              </div>
          </motion.div>

          {/* === COLUMN 2: STATS & ACTIONS (MIDDLE) === */}

          {/* WIDGET 3: MUSIC PLAYER & STATS */}
          <motion.div
              initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
              className="col-span-12 md:col-span-4 row-span-3 bg-[var(--glass)] border border-[var(--border)] rounded-2xl p-4 flex flex-col gap-3 backdrop-blur-md shadow-lg"
          >
              <div className="flex items-center gap-3 bg-[var(--bg-primary)]/40 p-3 rounded-xl border border-[var(--border)] relative overflow-hidden group cursor-pointer hover:border-[var(--accent)] transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-10 h-10 bg-green-500/20 text-green-500 rounded-lg flex items-center justify-center shadow-inner">
                      <Music size={20} />
                  </div>
                  <div className="flex-1 min-w-0 z-10">
                      <div className="flex gap-0.5 items-end h-3 mb-1">
                           {[...Array(12)].map((_,i) => (
                              <motion.div key={i} animate={{ height: [4, 12, 6, 14, 4] }} transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.1 }} className="w-1 bg-[var(--accent)] rounded-full" />
                           ))}
                      </div>
                      <p className="text-[10px] text-[var(--text-secondary)] font-medium">Spotify • Lofi Girl Radio</p>
                  </div>
              </div>

              <div className="grid grid-cols-2 gap-3 flex-1">
                  <div className="bg-[var(--bg-primary)]/40 rounded-xl p-3 flex flex-col justify-between border border-[var(--border)] hover:bg-[var(--bg-primary)]/60 transition-colors">
                      <div className="flex justify-between items-start">
                        <Cpu size={16} className="text-[var(--accent)]"/>
                        <span className="text-[9px] text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded-full">Optimal</span>
                      </div>
                      <div>
                         <span className="text-2xl font-bold text-[var(--text-primary)]">14%</span>
                         <p className="text-[10px] text-[var(--text-secondary)]">CPU Load</p>
                      </div>
                  </div>
                  <div className="bg-[var(--bg-primary)]/40 rounded-xl p-3 flex flex-col justify-between border border-[var(--border)] hover:bg-[var(--bg-primary)]/60 transition-colors">
                      <div className="flex justify-between items-start">
                        <Database size={16} className="text-purple-400"/>
                        <span className="text-[9px] text-purple-400 bg-purple-400/10 px-1.5 py-0.5 rounded-full">Cached</span>
                      </div>
                      <div>
                         <span className="text-2xl font-bold text-[var(--text-primary)]">4.2GB</span>
                         <p className="text-[10px] text-[var(--text-secondary)]">RAM Usage</p>
                      </div>
                  </div>
              </div>
          </motion.div>

          {/* WIDGET 4: ACTIONS */}
          <motion.div
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
              className="col-span-12 md:col-span-4 row-span-3 grid grid-cols-2 gap-3"
          >
               <div className="bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-[var(--accent)]/20 hover:scale-[1.02] transition-all cursor-pointer group p-4 shadow-lg">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <Mail size={20} className="text-[var(--accent)]"/>
                    </div>
                    <span className="text-[var(--text-primary)] font-bold text-xs">Email Me</span>
                    <span className="text-[var(--text-secondary)] text-[9px] mt-0.5">Encrypted</span>
               </div>

               <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl flex flex-col items-center justify-center text-center hover:bg-[var(--bg-primary)] hover:scale-[1.02] transition-all cursor-pointer group p-4 shadow-lg">
                    <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                        <Cloud size={20} className="text-sky-400"/>
                    </div>
                    <span className="text-[var(--text-primary)] font-bold text-xs">Resume</span>
                    <span className="text-[var(--text-secondary)] text-[9px] mt-0.5">.PDF</span>
               </div>

               <div className="col-span-2 bg-gradient-to-r from-indigo-900/60 to-purple-900/60 border border-[var(--border)] rounded-2xl p-4 flex items-center justify-between shadow-lg hover:shadow-purple-500/20 transition-all cursor-pointer group">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/10 rounded-lg">
                             <Calendar size={18} className="text-[var(--text-primary)]"/>
                        </div>
                        <div className="text-left">
                            <p className="text-[var(--text-primary)] font-bold text-xs">Schedule Call</p>
                            <p className="text-[var(--text-secondary)] text-[10px]">Via Google Meet</p>
                        </div>
                    </div>
                    <ArrowUpRight size={16} className="text-[var(--text-primary)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
               </div>
          </motion.div>

          {/* === COLUMN 3: PROJECTS (RIGHT) === */}

          {/* WIDGET 5: ACTIVE PROJECTS */}
          <motion.div
               initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}
               className="col-span-12 md:col-span-4 row-span-6 bg-[var(--glass)] border border-[var(--border)] rounded-2xl p-5 flex flex-col shadow-2xl backdrop-blur-md"
          >
              <div className="flex items-center justify-between mb-5">
                   <div className="flex items-center gap-2 text-[var(--accent)] uppercase tracking-widest text-[10px] font-bold">
                      <Layers size={14}/> Active Processes
                  </div>
                  <span className="text-[9px] bg-[var(--bg-secondary)] px-2 py-1 rounded-md text-[var(--text-secondary)] border border-[var(--border)] font-mono">PID: {PROJECTS.length}</span>
              </div>

              <div className="space-y-3 overflow-y-auto pr-1 flex-1 scrollbar-thin scrollbar-thumb-[var(--border)] scrollbar-track-transparent">
                  {PROJECTS.map((project, idx) => (
                      <motion.div
                          key={project.id}
                          initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + (idx * 0.1) }}
                          className="group bg-[var(--bg-primary)]/40 hover:bg-[var(--bg-primary)]/80 border border-[var(--border)] hover:border-[var(--accent)] p-3 rounded-xl transition-all cursor-pointer relative overflow-hidden shadow-sm hover:shadow-md"
                      >
                          {/* Hover Indicator */}
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />

                          <div className="flex justify-between items-start mb-1">
                              <h3 className="text-[var(--text-primary)] font-bold text-xs group-hover:text-[var(--accent)] transition-colors">{project.title}</h3>
                              <ArrowUpRight size={10} className="text-[var(--text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>

                          <p className="text-[var(--text-secondary)] text-[10px] line-clamp-2 mb-2 leading-relaxed">{project.desc}</p>

                          <div className="flex flex-wrap gap-1">
                              {project.tags.slice(0, 3).map(tag => (
                                  <span key={tag} className="text-[8px] px-1.5 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)] group-hover:border-[var(--accent)]/30 transition-colors">
                                      {tag}
                                  </span>
                              ))}
                          </div>
                      </motion.div>
                  ))}
              </div>
          </motion.div>

      </div>
    </motion.div>
  );
};

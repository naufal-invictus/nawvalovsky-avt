import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, FileText, Minus, Square, X, Activity, HardDrive, Monitor, Layout } from 'lucide-react';

const TerminalSection = ({ stats }) => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }}
      className="flex-1 min-h-0 relative rounded-t-xl rounded-b-xl overflow-hidden shadow-[0_30px_60px_-10px_rgba(0,0,0,0.5)] border border-[var(--border)] group flex flex-col backdrop-blur-3xl"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[var(--bg-secondary)]/80 backdrop-blur-2xl z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-0" />

      {/* Cyber Grid Background (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0"></div>

      {/* HEADER */}
      <div className="relative z-20 bg-black/40 border-b border-[var(--border)] px-2 pt-2 flex items-end justify-between shrink-0 select-none">
        <div className="flex gap-1">
          <button
            onClick={() => setActiveTab('home')}
            className={`
              relative px-4 py-1.5 rounded-t-md text-[10px] font-mono transition-all flex items-center gap-2 border-t border-x
              ${activeTab === 'home'
                ? 'bg-[var(--bg-secondary)]/90 border-[var(--border)] text-[var(--accent)] z-10 font-bold shadow-sm'
                : 'bg-transparent border-transparent text-[var(--text-secondary)] hover:bg-white/5 opacity-60 hover:opacity-100'}
            `}
          >
            <TerminalIcon size={11} /> <span>root@nawvalovsky:~</span>
            {activeTab === 'home' && <div className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-[var(--bg-secondary)]"></div>}
          </button>

          <button
            onClick={() => setActiveTab('logs')}
            className={`
              relative px-4 py-1.5 rounded-t-md text-[10px] font-mono transition-all flex items-center gap-2 border-t border-x
              ${activeTab === 'logs'
                ? 'bg-[var(--bg-secondary)]/90 border-[var(--border)] text-[var(--accent)] z-10 font-bold shadow-sm'
                : 'bg-transparent border-transparent text-[var(--text-secondary)] hover:bg-white/5 opacity-60 hover:opacity-100'}
            `}
          >
            <FileText size={11} /> <span>/var/log/syslog</span>
            {activeTab === 'logs' && <div className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-[var(--bg-secondary)]"></div>}
          </button>
        </div>

        <div className="flex gap-1.5 pb-2 pr-2 opacity-60">
          <Minus size={10} className="hover:text-[var(--text-primary)] cursor-pointer transition-colors" />
          <Square size={10} className="hover:text-[var(--text-primary)] cursor-pointer transition-colors" />
          <X size={10} className="hover:text-red-400 cursor-pointer transition-colors" />
        </div>
      </div>

      {/* BODY */}
      <div className="relative z-20 p-5 font-mono text-[12px] leading-relaxed text-[var(--text-primary)] flex-1 overflow-hidden flex flex-col bg-[var(--bg-secondary)]/30">
        <AnimatePresence mode="wait">
          {activeTab === 'home' ? (
            <motion.div
                key="home"
                initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                className="h-full flex flex-col justify-between"
            >
              {/* Fake History */}
              <div className="opacity-30 text-[11px] mb-2 hidden sm:block shrink-0">
                  <div className="flex gap-2">
                      <span className="text-green-500 font-bold">root@nawvalovsky</span>:<span className="text-blue-400">~</span>$ ./init_portfolio.sh --verbose
                  </div>
                  <div className="pl-4 space-y-0.5">
                      <p>Loading modules... [OK]</p>
                      <p>Mounting file system... [OK]</p>
                      <p>Connecting to secure server... [ESTABLISHED]</p>
                  </div>
              </div>

              {/* Neofetch Section */}
              <div className="flex-1 flex flex-col justify-center min-h-0">
                  <div className="opacity-60 mb-3 text-xs shrink-0">
                    <div className="flex gap-2">
                      <span className="text-green-500 font-bold">root@nawvalovsky</span>:<span className="text-blue-400">~</span>$ <span className="text-[var(--accent)] font-bold">neofetch</span>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start overflow-y-auto pr-1 scrollbar-hide">
                    {/* ASCII Art (DIPERBESAR: text-[13px]) */}
                    <div className="text-[var(--accent)] font-bold text-[13px] leading-[13px] shrink-0 pt-1 select-none opacity-90 hidden sm:block">
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

                    {/* System Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 w-full text-[11px]">
                        {/* Column 1 */}
                        <div className="space-y-1">
                             <div className="flex gap-2"><span className="text-[var(--accent)] font-bold min-w-[50px]">Host</span> <span className="text-[var(--text-secondary)]">Nawvalovsky Mainframe</span></div>
                             <div className="flex gap-2"><span className="text-[var(--accent)] font-bold min-w-[50px]">OS</span> <span className="text-[var(--text-secondary)]">Arch Linux x86_64</span></div>
                             <div className="flex gap-2"><span className="text-[var(--accent)] font-bold min-w-[50px]">Kernel</span> <span className="text-[var(--text-secondary)]">6.8.9-zen</span></div>
                             <div className="flex gap-2"><span className="text-[var(--accent)] font-bold min-w-[50px]">Uptime</span> <span className="text-[var(--text-secondary)]">24 days, 3 hrs</span></div>
                             <div className="flex gap-2"><span className="text-[var(--accent)] font-bold min-w-[50px]">Shell</span> <span className="text-[var(--text-secondary)]">zsh 5.9</span></div>
                             <div className="flex gap-2"><span className="text-[var(--accent)] font-bold min-w-[50px]">Res</span> <span className="text-[var(--text-secondary)]">3840x2160</span></div>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-1">
                             <div className="flex gap-2"><span className="text-[var(--accent)] font-bold min-w-[50px]">DE</span> <span className="text-[var(--text-secondary)]">Hyprland</span></div>
                             <div className="flex gap-2"><span className="text-[var(--accent)] font-bold min-w-[50px]">Theme</span> <span className="text-[var(--text-secondary)]">Catppuccin Mocha</span></div>
                             <div className="flex gap-2"><span className="text-[var(--accent)] font-bold min-w-[50px]">CPU</span> <span className="text-[var(--text-secondary)]">{stats.cpu}% Usage</span></div>
                             <div className="flex gap-2"><span className="text-[var(--accent)] font-bold min-w-[50px]">RAM</span> <span className="text-[var(--text-secondary)]">{stats.ram}GB / 16GB</span></div>
                             <div className="flex gap-2"><span className="text-[var(--accent)] font-bold min-w-[50px]">Disk</span> <span className="text-[var(--text-secondary)]">1.2TB / 2TB (SSD)</span></div>
                             <div className="flex gap-2"><span className="text-[var(--accent)] font-bold min-w-[50px]">Local</span> <span className="text-[var(--text-secondary)]">192.168.1.55</span></div>
                        </div>
                    </div>
                  </div>

                  {/* Color Palette */}
                  <div className="flex gap-2 mt-4 ml-0 sm:ml-[110px] pt-2 border-t border-[var(--border)]/30 w-fit">
                    <div className="w-3 h-3 rounded-sm bg-black border border-white/20"></div>
                    <div className="w-3 h-3 rounded-sm bg-red-500"></div>
                    <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                    <div className="w-3 h-3 rounded-sm bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-sm bg-blue-500"></div>
                    <div className="w-3 h-3 rounded-sm bg-purple-500"></div>
                    <div className="w-3 h-3 rounded-sm bg-cyan-500"></div>
                    <div className="w-3 h-3 rounded-sm bg-white"></div>
                  </div>
              </div>

              {/* Prompt Bottom */}
              <div className="mt-2 pt-2 border-t border-[var(--border)]/10 shrink-0">
                <div className="flex gap-2 items-center">
                  <span className="text-green-500 font-bold">➜</span>
                  <span className="text-cyan-400 font-bold">~</span>
                  <div className="flex items-center gap-1">
                      <span className="text-[var(--text-secondary)]">awaiting_input</span>
                      <span className="w-2 h-4 bg-[var(--text-primary)] animate-pulse shadow-[0_0_8px_var(--text-primary)]"></span>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
                key="logs"
                initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}
                className="h-full flex flex-col font-mono text-[11px] overflow-hidden"
            >
              <div className="flex justify-between items-center text-[var(--accent)] mb-2 font-bold opacity-80 border-b border-[var(--border)]/30 pb-1 shrink-0">
                  <span>/var/log/syslog</span>
                  <span className="text-[9px] bg-[var(--accent)]/10 px-1 rounded">TAIL -F</span>
              </div>

              {/* Logs */}
              <div className="flex-1 flex flex-col gap-1 text-[var(--text-secondary)] overflow-y-auto scrollbar-hide">
                <p className="opacity-50">... previous logs archived ...</p>
                <p><span className="text-blue-400">Oct 24 10:42:01</span> <span className="text-yellow-400">mainframe</span> CRON[142]: (root) CMD (backup_db.sh)</p>
                <p><span className="text-blue-400">Oct 24 10:43:15</span> <span className="text-yellow-400">mainframe</span> kernel: [421.12] <span className="text-green-400">UFW BLOCK</span> IN=eth0 OUT= MAC=aa:bb:cc</p>
                <p><span className="text-blue-400">Oct 24 10:45:22</span> <span className="text-yellow-400">mainframe</span> sshd[1202]: Accepted publickey for user admin</p>
                <p><span className="text-blue-400">Oct 24 10:48:05</span> <span className="text-yellow-400">mainframe</span> systemd[1]: Started Docker Application Container Engine.</p>
                <p><span className="text-blue-400">Oct 24 10:49:50</span> <span className="text-yellow-400">mainframe</span> dockerd[850]: level=info msg="Container starting: react-app"</p>
                <p><span className="text-blue-400">Oct 24 10:50:00</span> <span className="text-yellow-400">mainframe</span> node[300]: Server listening on port 3000</p>
                <p><span className="text-blue-400">Oct 24 10:51:11</span> <span className="text-yellow-400">mainframe</span> kernel: [502.33] <span className="text-green-400">Integrity Check Passed</span>: Filesystem clean.</p>
                <p><span className="text-blue-400">Oct 24 10:52:45</span> <span className="text-yellow-400">mainframe</span> nginx[404]: 192.168.1.10 - "GET /api/v1/status HTTP/1.1" 200</p>
                <p><span className="text-blue-400">Oct 24 10:55:01</span> <span className="text-yellow-400">mainframe</span> npm[300]: <span className="text-[var(--accent)] animate-pulse">REACT APP MOUNTED SUCCESSFULLY</span></p>
                <p><span className="text-blue-400">Oct 24 10:56:00</span> <span className="text-yellow-400">mainframe</span> systemd[1]: Reached target Graphical Interface.</p>
                <p><span className="text-blue-400">Oct 24 10:57:12</span> <span className="text-yellow-400">mainframe</span> kernel: [515.42] Memory optimization complete. Frees: 4024MB</p>
              </div>

              <div className="mt-2 pt-2 flex items-center gap-2 text-xs opacity-70 border-t border-[var(--border)]/10 shrink-0">
                <Activity size={12} className="text-green-500 animate-pulse" />
                <span>Live log streaming active...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default TerminalSection;

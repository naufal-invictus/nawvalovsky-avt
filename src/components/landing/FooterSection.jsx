import { motion } from 'framer-motion';
import { Server, Globe, Zap, Lock, Code, Info } from 'lucide-react';

const FooterSection = ({ stats }) => {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}
      className="flex-1 min-h-[100px] bg-[var(--bg-primary)]/30 border border-[var(--border)] rounded-xl p-3 text-[var(--text-secondary)] flex flex-col justify-between gap-2 overflow-hidden"
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1.5 text-[9px] font-bold text-[var(--text-primary)]">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
            SYSTEM ONLINE
          </div>
          <span className="text-[8px] opacity-60 font-mono tracking-wider">ID: NWV-8829-X</span>
        </div>
        <div className="text-right">
          <div className="text-[9px] font-bold text-[var(--accent)] flex items-center gap-1 justify-end">
            <Server size={9} /> v2.5.0
          </div>
          <span className="text-[8px] opacity-60">Stable</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-1 gap-x-1 py-1 border-t border-b border-[var(--border)] border-dashed my-0.5">
        <div className="flex items-center gap-1.5">
          <Globe size={10} className="text-sky-400/80" />
          <span className="text-[8px]">Jakarta, ID</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Zap size={10} className="text-yellow-400/80" />
          <span className="text-[8px]">{stats.ping}ms</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Lock size={10} className="text-emerald-400/80" />
          <span className="text-[8px]">TLS 1.3</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Code size={10} className="text-purple-400/80" />
          <span className="text-[8px]">React</span>
        </div>
      </div>

      <div className="flex justify-between items-end mt-0.5">
        <p className="text-[8px] opacity-50 leading-tight">
          © 2024 Nawvalovsky<br />
          All systems operational.
        </p>
        <Info size={10} className="opacity-40 hover:opacity-100 transition-opacity cursor-help text-[var(--accent)]" />
      </div>
    </motion.div>
  );
};

export default FooterSection;

import { motion } from 'framer-motion';
import { Cpu, Database, Wifi } from 'lucide-react';

const SystemMonitor = ({ stats }) => {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}
      className="shrink-0 grid grid-cols-3 gap-2"
    >
      <div className="bg-[var(--bg-primary)]/40 border border-[var(--border)] rounded-xl p-2 flex flex-col items-center justify-center hover:bg-[var(--bg-primary)]/60 transition-colors">
        <Cpu size={14} className="text-red-400 mb-1" />
        <span className="text-[var(--text-primary)] font-bold text-xs">{stats.cpu}%</span>
        <span className="text-[8px] text-[var(--text-secondary)]">CPU</span>
      </div>
      <div className="bg-[var(--bg-primary)]/40 border border-[var(--border)] rounded-xl p-2 flex flex-col items-center justify-center hover:bg-[var(--bg-primary)]/60 transition-colors">
        <Database size={14} className="text-purple-400 mb-1" />
        <span className="text-[var(--text-primary)] font-bold text-xs">{stats.ram}G</span>
        <span className="text-[8px] text-[var(--text-secondary)]">RAM</span>
      </div>
      <div className="bg-[var(--bg-primary)]/40 border border-[var(--border)] rounded-xl p-2 flex flex-col items-center justify-center hover:bg-[var(--bg-primary)]/60 transition-colors">
        <Wifi size={14} className="text-sky-400 mb-1" />
        <span className="text-[var(--text-primary)] font-bold text-xs">{stats.ping}ms</span>
        <span className="text-[8px] text-[var(--text-secondary)]">PING</span>
      </div>
    </motion.div>
  );
};

export default SystemMonitor;

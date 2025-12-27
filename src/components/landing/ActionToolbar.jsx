import { motion } from 'framer-motion';
import { Mail, Cloud, ArrowUpRight } from 'lucide-react';

const ActionToolbar = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
      className="shrink-0 h-14 bg-[var(--glass)] border border-[var(--border)] rounded-xl flex items-center justify-between p-2 px-3 shadow-lg gap-3 backdrop-blur-md"
    >
      <div className="flex items-center gap-3 flex-1">
        <button className="flex items-center gap-2 px-3 py-1.5 bg-[var(--accent)]/10 text-[var(--accent)] rounded-lg hover:bg-[var(--accent)]/20 transition-all text-xs font-bold border border-[var(--accent)]/20 flex-1 justify-center group">
          <Mail size={14} className="group-hover:scale-110 transition-transform" /> <span>Email</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-secondary)] text-[var(--text-primary)] rounded-lg hover:bg-[var(--bg-primary)] hover:border-sky-500/50 transition-all text-xs font-bold border border-[var(--border)] flex-1 justify-center group">
          <Cloud size={14} className="text-sky-400 group-hover:scale-110 transition-transform" /> <span>Resume</span>
        </button>
      </div>
      <div className="w-[1px] h-6 bg-[var(--border)]"></div>
      <button className="flex-[1] flex items-center justify-between gap-2 px-3 py-1.5 bg-gradient-to-r from-indigo-900/60 to-purple-900/60 border border-[var(--border)] rounded-lg hover:border-purple-500/50 transition-all group">
        <div className="text-left">
          <span className="block text-[var(--text-primary)] font-bold text-xs">Call</span>
          <span className="block text-[var(--text-secondary)] text-[8px]">G-Meet</span>
        </div>
        <div className="bg-white/10 p-1 rounded-full group-hover:bg-white/20 transition-colors">
          <ArrowUpRight size={12} className="text-white" />
        </div>
      </button>
    </motion.div>
  );
};

export default ActionToolbar;

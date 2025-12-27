import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { PROFILE } from '../../data/personalData';

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
      className="bg-[var(--glass)] border border-[var(--border)] rounded-2xl p-4 relative overflow-hidden group shadow-2xl flex flex-col shrink-0 hover:border-[var(--accent)]/30 transition-all"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/10 rounded-full blur-3xl -z-10 transition-all group-hover:bg-[var(--accent)]/20" />
      <div className="flex items-start gap-3">
        <div className="relative shrink-0">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--accent)] to-blue-600 flex items-center justify-center text-[var(--bg-primary)] font-bold text-2xl shadow-lg shadow-[var(--accent)]/30">
            N
          </div>
          <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-[var(--bg-primary)] rounded-full animate-pulse" title="Online" />
        </div>
        <div className="min-w-0 pt-1">
          <h1 className="text-lg font-bold text-[var(--text-primary)] tracking-tight leading-none mb-1 truncate">{PROFILE.name}</h1>
          <div className="flex items-center gap-1 text-[var(--accent)] text-[9px] uppercase tracking-widest font-bold mb-2">
            <Shield size={9} /> System Administrator
          </div>
          <div className="flex flex-wrap gap-1 mt-1">
            {['NetSec', 'DevSecOps', 'Cloud'].map((tag) => (
              <span key={tag} className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 space-y-1">
        <div className="flex justify-between items-center text-[9px] text-[var(--text-secondary)] font-bold uppercase tracking-wider">
          <span>System Integrity</span>
          <span className="text-[var(--accent)]">100%</span>
        </div>
        <div className="h-1 w-full bg-[var(--bg-primary)] rounded-full overflow-hidden border border-[var(--border)]">
          <motion.div
            initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1.5, delay: 0.5 }}
            className="h-full bg-gradient-to-r from-[var(--accent)] to-purple-500"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;

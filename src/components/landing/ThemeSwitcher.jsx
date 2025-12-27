import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext'; // Import Hook
import { Terminal, Cloud, Heart } from 'lucide-react'; // Ikon representatif

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  // Helper untuk class active
  const getBtnClass = (targetTheme) => {
    const isActive = theme === targetTheme;
    return `flex flex-col items-center gap-1 p-2 rounded-lg border transition-all duration-300 ${
      isActive
        ? 'bg-[var(--accent)]/20 border-[var(--accent)] scale-95 shadow-[0_0_10px_var(--accent-glow)]'
        : 'bg-[var(--bg-secondary)] border-[var(--border)] hover:bg-[var(--bg-primary)]'
    }`;
  };

  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }}
      className="shrink-0 bg-[var(--glass)] border border-[var(--border)] rounded-xl p-2 grid grid-cols-3 gap-2 backdrop-blur-md"
    >
      {/* 1. ARCH (Default) */}
      <button
        onClick={() => setTheme('arch')}
        className={getBtnClass('arch')}
      >
        <Terminal size={14} className={theme === 'arch' ? 'text-[var(--accent)]' : 'text-slate-400'} />
        <span className="text-[8px] font-bold text-[var(--text-primary)]">ARCH</span>
      </button>

      {/* 2. SKY */}
      <button
        onClick={() => setTheme('sky')}
        className={getBtnClass('sky')}
      >
        <Cloud size={14} className={theme === 'sky' ? 'text-[var(--accent)]' : 'text-slate-400'} />
        <span className="text-[8px] font-bold text-[var(--text-primary)]">SKY</span>
      </button>

      {/* 3. ANIME */}
      <button
        onClick={() => setTheme('anime')}
        className={getBtnClass('anime')}
      >
        <Heart size={14} className={theme === 'anime' ? 'text-[var(--accent)]' : 'text-slate-400'} />
        <span className="text-[8px] font-bold text-[var(--text-primary)]">ANIME</span>
      </button>
    </motion.div>
  );
};

export default ThemeSwitcher;

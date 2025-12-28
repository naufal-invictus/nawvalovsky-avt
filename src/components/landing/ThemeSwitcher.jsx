import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Terminal, Cloud, Heart } from 'lucide-react';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  // Preload Images untuk MENGHINDARI LAG saat switch tema
  useEffect(() => {
    const imageUrls = [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop', // Planet
      'https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?q=80&w=2070&auto=format&fit=crop', // Nature
      'https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=2076&auto=format&fit=crop'  // Sakura
    ];

    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }, []);

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
      <button onClick={() => setTheme('planet')} className={getBtnClass('planet')}>
        <Terminal size={14} className={theme === 'planet' ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)]'} />
        <span className="text-[8px] font-bold text-[var(--text-primary)]">ARCH</span>
      </button>

      <button onClick={() => setTheme('nature')} className={getBtnClass('nature')}>
        <Cloud size={14} className={theme === 'nature' ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)]'} />
        <span className="text-[8px] font-bold text-[var(--text-primary)]">SKY</span>
      </button>

      <button onClick={() => setTheme('sakura')} className={getBtnClass('sakura')}>
        <Heart size={14} className={theme === 'sakura' ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)]'} />
        <span className="text-[8px] font-bold text-[var(--text-primary)]">ANIME</span>
      </button>
    </motion.div>
  );
};

export default ThemeSwitcher;

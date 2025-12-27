import { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
      className="shrink-0 bg-[var(--glass)] border border-[var(--border)] rounded-2xl p-3 flex flex-col gap-2 backdrop-blur-md shadow-lg"
    >
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full bg-green-500/10 border border-[var(--border)] flex items-center justify-center shrink-0 relative overflow-hidden ${isPlaying ? 'animate-spin-slow' : ''}`}>
          <div className="absolute inset-0 bg-green-500/10 blur-sm"></div>
          <Music size={18} className="text-green-500 relative z-10" />
          <div className="absolute inset-0 border-2 border-[var(--bg-primary)] rounded-full opacity-30 scale-75"></div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <div className="flex-1 min-w-0 mr-2">
              <h4 className="text-[var(--text-primary)] font-bold text-xs truncate">Lofi Girl Radio</h4>
              <p className="text-[var(--text-secondary)] text-[9px] truncate opacity-70">Beats to Relax/Study to</p>
            </div>
            <div className="flex gap-0.5 items-end h-3 shrink-0">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`w-1 bg-[var(--accent)] rounded-full transition-all duration-300 ${isPlaying ? 'animate-music-beat' : 'h-1 opacity-50'}`} style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-1 pt-2 border-t border-[var(--border)]/50">
        <div className="flex items-center gap-3">
          <SkipBack size={14} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer" />
          <button onClick={() => setIsPlaying(!isPlaying)} className="w-6 h-6 rounded-full bg-[var(--accent)] text-[var(--bg-primary)] flex items-center justify-center hover:scale-110 transition-all">
            {isPlaying ? <Pause size={10} fill="currentColor" /> : <Play size={10} fill="currentColor" className="ml-0.5" />}
          </button>
          <SkipForward size={14} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer" />
        </div>
        <div className="flex items-center gap-1.5 group cursor-pointer">
          <Volume2 size={12} className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]" />
          <div className="w-10 h-1 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
            <div className="w-[60%] h-full bg-[var(--text-secondary)] group-hover:bg-[var(--accent)] transition-colors"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;

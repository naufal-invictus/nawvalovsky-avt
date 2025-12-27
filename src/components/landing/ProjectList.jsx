import { motion } from 'framer-motion';
import { Layers, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../data/personalData';

const ProjectList = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}
      className="flex-1 bg-[var(--glass)] border border-[var(--border)] rounded-2xl p-4 flex flex-col shadow-lg backdrop-blur-md min-h-0 overflow-hidden"
    >
      <div className="flex items-center justify-between mb-2 shrink-0">
        <div className="flex items-center gap-2 text-[var(--accent)] uppercase tracking-widest text-[10px] font-bold">
          <Layers size={14} /> Active Projects
        </div>
        <span className="text-[9px] bg-[var(--bg-secondary)] px-2 py-1 rounded-md text-[var(--text-secondary)] border border-[var(--border)] font-mono">PID: {PROJECTS.length}</span>
      </div>

      <div className="space-y-2 overflow-y-auto pr-1 flex-1 scrollbar-thin scrollbar-thumb-[var(--border)] scrollbar-track-transparent">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + (idx * 0.1) }}
            className="group bg-[var(--bg-primary)]/40 hover:bg-[var(--bg-primary)]/80 border border-[var(--border)] hover:border-[var(--accent)] p-2.5 rounded-xl transition-all cursor-pointer relative overflow-hidden shadow-sm"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex justify-between items-start mb-0.5">
              <h3 className="text-[var(--text-primary)] font-bold text-xs group-hover:text-[var(--accent)] transition-colors">{project.title}</h3>
              <ArrowUpRight size={10} className="text-[var(--text-secondary)] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-[var(--text-secondary)] text-[10px] line-clamp-2 leading-relaxed">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectList;

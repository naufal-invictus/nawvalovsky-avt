import { PROJECTS } from '../../data/personalData';
import { ExternalLink, Terminal, Globe, Cpu } from 'lucide-react';

const ProjectSection = () => {
  return (
    <section className="py-20 bg-[var(--bg-main)] border-t border-[var(--border-dim)]">
      <div className="container-safe">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-[var(--accent)] mb-3">
              <Terminal size={16} />
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Deployment_Logs</span>
            </div>
            <h2 className="text-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
              Selected <span className="text-sky-500/50">Projects</span>
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-sm font-mono opacity-60">
            TOTAL_STAGED: {PROJECTS.length}
          </p>
        </div>

        {/* Project Grid - No Overlap, Clean & Rich */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className="group relative flex flex-col bg-[var(--bg-surface)] border border-[var(--border-dim)] rounded-xl overflow-hidden hover:border-[var(--accent)] transition-all duration-500 shadow-2xl shadow-blue-900/10"
            >
              {/* Image Container with Cyber Overlay */}
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-950/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 grayscale-[50%] group-hover:grayscale-0"
                />

                {/* ID Tag */}
                <div className="absolute top-3 left-3 z-20 bg-[var(--bg-main)]/80 backdrop-blur-md px-2 py-1 rounded border border-[var(--border-dim)]">
                   <span className="text-[10px] font-mono text-[var(--accent)]">PRJ_0{project.id}</span>
                </div>
              </div>

              {/* Content Wrapper */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[var(--text-muted)] font-bold mb-1 block">
                      {project.category || 'Architecture'}
                    </span>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-grow line-clamp-3">
                  {project.desc}
                </p>

                {/* Tech Specs Simulation */}
                <div className="flex items-center gap-4 pt-4 border-t border-[var(--border-dim)] opacity-60">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono">
                    <Cpu size={12} className="text-[var(--accent)]" />
                    <span>STABLE</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono">
                    <Globe size={12} className="text-[var(--accent)]" />
                    <span>PUBLIC</span>
                  </div>
                </div>
              </div>

              {/* Hover Light Effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-transparent via-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* View More - Simple Call to Action */}
        <div className="mt-16 text-center">
           <p className="text-[var(--text-muted)] text-xs font-mono uppercase tracking-[0.2em] mb-4">
             Want to see the source code?
           </p>
           <a
            href="https://github.com/"
            className="inline-flex items-center gap-3 px-8 py-3 bg-transparent border border-[var(--accent)] text-[var(--accent)] text-xs font-bold uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--bg-main)] transition-all rounded-sm shadow-[0_0_15px_rgba(56,189,248,0.1)]"
           >
             Access GitHub Archive <ArrowRightIcon size={14} />
           </a>
        </div>
      </div>
    </section>
  );
};

// Helper Icon
const ArrowRightIcon = ({size}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

export default ProjectSection;

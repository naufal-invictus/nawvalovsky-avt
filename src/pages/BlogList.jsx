import { BookOpen, ArrowRight } from 'lucide-react';
import { FadeContent } from '../components/ui/FadeContent';
import { LEARNING_DATA as chapters } from '../data/chapters';
export const BlogList = ({ onSelectPost }) => {
  return (
    // FIX: Gunakan var(--bg-primary) dan text-primary agar dinamis mengikuti tema
    <div className="min-h-screen pt-32 px-6 pb-20 bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-500">
      <div className="max-w-4xl mx-auto">

        <FadeContent>
          <div className="text-center mb-16">
            <span className="text-[var(--accent)] font-bold tracking-widest text-xs uppercase px-4 py-2 bg-[var(--bg-secondary)] rounded-full border border-[var(--border)]">
              Pemikiran & Tulisan
            </span>
            <h1 className="font-serif text-5xl md:text-6xl mt-6 mb-4 leading-tight">Jurnal Digital</h1>
            <p className="text-[var(--text-secondary)] max-w-lg mx-auto">
              Kumpulan artikel seputar teknologi, keamanan siber, dan arsitektur sistem.
            </p>
          </div>
        </FadeContent>

        <div className="grid gap-6">
          {chapters.map((chapter, index) => (
            <FadeContent key={chapter.id} delay={index * 0.1}>
              <div
                onClick={() => onSelectPost(chapter)}
                className="group relative bg-[var(--bg-secondary)] rounded-[2.5rem] p-8 border border-[var(--border)] hover:border-[var(--accent)] transition-all cursor-pointer overflow-hidden shadow-lg hover:shadow-[var(--accent)]/10"
              >
                {/* Decorative Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/0 via-[var(--accent)]/5 to-[var(--accent)]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                       <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">Chapter 0{index + 1}</span>
                       <span className="w-1 h-1 bg-[var(--text-secondary)] rounded-full"></span>
                       <span className="text-xs text-[var(--text-secondary)]">{chapter.readTime || "5 min read"}</span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl mb-2 group-hover:text-[var(--accent)] transition-colors">
                      {chapter.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] line-clamp-2 text-sm max-w-xl">
                      {chapter.excerpt || "Klik untuk membaca artikel lengkap mengenai topik ini..."}
                    </p>
                  </div>

                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-secondary)] group-hover:bg-[var(--accent)] group-hover:text-[var(--bg-primary)] transition-all shrink-0">
                    <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </FadeContent>
          ))}
        </div>

      </div>
    </div>
  );
};

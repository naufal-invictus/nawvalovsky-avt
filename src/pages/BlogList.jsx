import { Link } from 'react-router-dom';
import { chapters } from '../data/chapters'; // <--- PASTIKAN IMPORT INI BENAR
import { FadeContent } from '../components/ui/FadeContent';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';

export const BlogList = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 w-full bg-[var(--bg-main)]">
      <div className="container-safe px-4 md:px-0">
        <FadeContent>
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
              The Archives
            </h1>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto font-serif italic">
              "Catatan perjalanan logika, teologi, dan teknologi."
            </p>
          </div>

          {/* Grid Blog */}
          <div className="grid gap-8 max-w-3xl mx-auto">
            {/* Loop menggunakan variabel 'chapters' yang sudah di-import */}
            {chapters.map((post, index) => (
              <Link
                key={post.id || index}
                to={`/blog/${post.id}`}
                className="group block bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--accent)] rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-3">
                      <span className="flex items-center gap-1.5 text-[var(--accent)]">
                        <BookOpen size={14} />
                        {post.category || 'Article'}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} /> 2024
                      </span>
                    </div>

                    <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-[var(--text-secondary)] line-clamp-2 font-serif leading-relaxed">
                      {post.excerpt || "Klik untuk membaca selengkapnya..."}
                    </p>
                  </div>

                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--bg-surface)] text-[var(--text-secondary)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300 shrink-0">
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </FadeContent>
      </div>
    </div>
  );
};

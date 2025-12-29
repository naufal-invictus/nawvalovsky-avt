import { Link } from 'react-router-dom';
import { chapters } from '../data/chapters'; // Pastikan data ini memuat properti 'image'
import { BookOpen, ArrowRight, Share2, Calendar } from 'lucide-react';

export const BlogList = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 w-full bg-[var(--bg-main)]">
      <div className="container-safe px-4">

        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12 space-y-3">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-[var(--text-primary)]">
            The Archives
          </h1>
          <p className="text-[var(--text-secondary)] text-sm md:text-lg max-w-2xl mx-auto font-serif italic opacity-80">
            "Kumpulan pemikiran logika, teologi, dan teknologi."
          </p>
        </div>

        {/* GRID LAYOUT SYSTEM
            - Default (HP): grid-cols-2 (2 kolom)
            - md (Tablet): grid-cols-3
            - lg (Laptop): grid-cols-4
            - xl (PC): grid-cols-5 (5 kolom)
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">

          {chapters.map((post, index) => (
            <div
              key={post.id || index}
              className="group flex flex-col h-full bg-[var(--bg-card)] border border-[var(--border-card)] rounded-xl overflow-hidden hover:shadow-lg hover:border-[var(--accent)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* 1. Thumbnail Rectangle (Aspect Ratio 16:9 / 16:10) */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-surface)]">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                ) : (
                  // Fallback jika json tidak punya gambar
                  <div className="w-full h-full flex items-center justify-center text-[var(--accent)] opacity-30">
                     <BookOpen size={32} />
                  </div>
                )}

                {/* Badge Category */}
                <div className="absolute top-2 left-2">
                   <span className="px-2 py-0.5 text-[9px] md:text-[10px] font-bold tracking-wider uppercase bg-[var(--bg-card)]/95 backdrop-blur-sm text-[var(--text-primary)] border border-[var(--border-dim)] rounded shadow-sm">
                      {post.category || 'Article'}
                   </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-3 md:p-4 flex flex-col flex-grow">

                {/* Meta Date (Optional) */}
                <div className="flex items-center gap-1.5 text-[10px] text-[var(--text-secondary)] mb-2 opacity-70">
                    <Calendar size={10} />
                    <span>2024</span>
                </div>

                {/* 2. Title */}
                <h3 className="font-display text-sm md:text-base font-bold text-[var(--text-primary)] leading-snug mb-2 line-clamp-2 group-hover:text-[var(--link-normal)] transition-colors">
                  <Link to={`/blog/${post.id}`}>
                      {post.title}
                  </Link>
                </h3>

                {/* 3. Description (Excerpt) */}
                <p className="text-[11px] md:text-xs text-[var(--text-secondary)] font-sans leading-relaxed line-clamp-3 mb-4 flex-grow opacity-90">
                  {post.excerpt || "Simak pembahasan lengkap mengenai topik ini di dalam artikel..."}
                </p>

                {/* 4. Two Buttons Action */}
                <div className="flex items-center gap-2 mt-auto pt-3 border-t border-[var(--border-dim)] border-dashed">

                  {/* Button 1: Read (Primary) */}
                  <Link
                    to={`/blog/${post.id}`}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 text-[11px] md:text-xs font-bold text-white bg-[var(--btn-primary-bg)] hover:bg-[var(--btn-primary-hover)] rounded-md transition-colors group/btn shadow-sm"
                  >
                    Baca
                    <ArrowRight size={10} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>

                  {/* Button 2: Share (Icon Only) */}
                  <button
                    className="p-1.5 md:p-2 text-[var(--text-secondary)] bg-[var(--bg-surface)] hover:bg-[var(--accent-highlight)] hover:text-[var(--link-normal)] rounded-md border border-transparent hover:border-[var(--accent-secondary)] transition-all"
                    title="Salin Link"
                    onClick={() => {
                      // Copy link saat ini + slug
                      const url = `${window.location.origin}/blog/${post.id}`;
                      navigator.clipboard.writeText(url);
                      alert('Link artikel tersalin!');
                    }}
                  >
                    <Share2 size={14} />
                  </button>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

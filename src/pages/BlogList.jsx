import { ArrowRight, ExternalLink, Clock, Tag } from 'lucide-react';
import { FadeContent } from '../components/ui/FadeContent';
import { LEARNING_DATA as articles } from '../data/chapters';

export const BlogList = ({ onSelectPost }) => {
  return (
    <div className="min-h-screen pt-32 px-6 pb-20 bg-[var(--bg-main)]">
      <div className="container-safe">

        {/* Header Section */}
        <FadeContent>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-10 h-[1px] bg-[var(--accent)]"></div>
               <span className="text-[var(--accent)] font-bold tracking-widest text-[10px] uppercase">
                 Knowledge_Base
               </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-[var(--text-primary)] font-bold leading-tight">
              Arsip Digital & <br/>
              <span className="text-[var(--link-normal)]">Catatan Teknis.</span>
            </h1>
          </div>
        </FadeContent>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((post, index) => (
            <FadeContent key={post.id || index} delay={index * 0.1}>
              <div
                onClick={() => onSelectPost(post)}
                className="group cursor-pointer bg-[var(--bg-card)] rounded-2xl border border-[var(--border-card)] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
              >

                {/* Thumbnail Image dengan Hover Zoom */}
                <div className="aspect-video w-full overflow-hidden bg-[var(--bg-surface)] relative">
                  <img
                    src={post.metadata?.thumbnail || post.thumbnail}
                    alt={post.metadata?.title || post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--text-primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Tag & Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider bg-[var(--badge-bg)] text-[var(--badge-text)] rounded-md border border-[var(--badge-border)]">
                      <Tag size={10} />
                      {post.metadata?.category || post.category || "Technology"}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-[var(--text-secondary)] font-mono">
                      <Clock size={12} />
                      {post.readTime || "5 Min"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-[var(--link-normal)] mb-3 leading-snug group-hover:text-[var(--link-hover)] transition-colors duration-300">
                    {post.metadata?.title || post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[var(--text-body)] text-xs md:text-sm line-clamp-3 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                    {post.metadata?.description || post.excerpt}
                  </p>

                  {/* Footer Card */}
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-[var(--border-dim)]">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--link-normal)] transition-colors">
                      Read Entry
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[var(--bg-surface)] flex items-center justify-center text-[var(--text-secondary)] group-hover:bg-[var(--link-normal)] group-hover:text-white transition-all duration-300">
                      <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                    </div>
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

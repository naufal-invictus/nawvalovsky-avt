import { useParams, useNavigate } from 'react-router-dom';
import { ChapterReader } from './ChapterReader';
import { chapters } from '../../data/chapters';
import { ArrowLeft } from 'lucide-react';

export const ChapterWrapper = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Cari chapter berdasarkan ID atau Slug
  const selectedChapter = chapters.find(
    (c) => c.id === slug || (c.title && c.title.toLowerCase().replace(/\s+/g, '-') === slug)
  );

  if (!selectedChapter) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20 bg-[var(--bg-main)]">
        <h1 className="text-4xl font-display font-bold text-[var(--text-primary)] mb-4">404</h1>
        <p className="text-[var(--text-secondary)] mb-6">Artikel yang kamu cari hilang ditelan bumi.</p>
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-[var(--accent)] hover:underline font-bold"
        >
          <ArrowLeft size={20} /> Kembali ke Blog
        </button>
      </div>
    );
  }

  // Render Reader
  return <ChapterReader chapter={selectedChapter} onBack={() => navigate('/blog')} />;
};

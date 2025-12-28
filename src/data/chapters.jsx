import chapterCysec from './json/Chapter-Cysec.json';
import chapterKekuasaan from './json/Chapter-Kekuasaan.json';
import chapterKerasulan from './json/Chapter-Kerasulan.json';
import chapterSunnah from './json/Chapter-Sunnah.json';
import chapterIman from './json/Chapter-Iman.json';

// Helper function buat ngerapihin data
const formatChapter = (chapter, readTime) => ({
  ...chapter,
  title: chapter.metadata.title,
  thumbnail: chapter.metadata.thumbnail,
  category: chapter.metadata.category,
  excerpt: chapter.metadata.description,
  readTime: readTime
});

export const LEARNING_DATA = [
  // Materi Kuliah (Gen Z Edition)
  formatChapter(chapterKekuasaan, "15 min read"),
  formatChapter(chapterKerasulan, "15 min read"),
  formatChapter(chapterSunnah, "20 min read"),

  // Materi Tambahan
  formatChapter(chapterIman, "12 min read"),

  // Chapter Original (Cysec)
  formatChapter(chapterCysec, "8 min read"),
];

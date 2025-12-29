import chapterCysec from './json/Chapter-Cysec.json';
import chapterKekuasaan from './json/Chapter-Kekuasaan.json';
import chapterKerasulan from './json/Chapter-Kerasulan.json';
import chapterSunnah from './json/Chapter-Sunnah.json';
import chapterIman from './json/Chapter-Iman.json';
import chapterSoceng from './json/Chapter-Soceng.json';
import chapterScamUpdate from './json/Chapter-Scam-Update.json';


const formatChapter = (chapter, readTime) => ({
  ...chapter,
  id: chapter.id, // Pastikan ID terbawa
  title: chapter.metadata.title,

  // PERBAIKAN DI SINI:
  // Ubah 'thumbnail' menjadi 'image' agar sesuai dengan BlogList.jsx
  image: chapter.metadata.thumbnail,

  category: chapter.metadata.category,
  excerpt: chapter.metadata.description,
  readTime: readTime
});

export const chapters = [
    formatChapter(chapterCysec, "8 min read"),
    formatChapter(chapterSoceng, "8 min read"),
    formatChapter(chapterScamUpdate, "12 min read"),

  formatChapter(chapterKekuasaan, "15 min read"),
  formatChapter(chapterKerasulan, "15 min read"),
  formatChapter(chapterSunnah, "20 min read"),
  formatChapter(chapterIman, "12 min read"),


];

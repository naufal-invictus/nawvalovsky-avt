import chapterCysec from './json/Chapter-Cysec.json';

export const LEARNING_DATA = [
  {
    ...chapterCysec,
    // Map metadata ke root object agar mudah diakses BlogList
    title: chapterCysec.metadata.title,
    thumbnail: chapterCysec.metadata.thumbnail,
    category: chapterCysec.metadata.category,
    excerpt: chapterCysec.metadata.description,
    readTime: "8 min read"
  },
];

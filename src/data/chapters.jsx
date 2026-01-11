// Core Chapters (Cysec & Sorting)
import chapterCysec from './json/Chapter-Cysec.json';
import chapterSoceng from './json/Chapter-Soceng.json';
import chapterScamUpdate from './json/Chapter-Scam-Update.json';
import chapterBubbleSort from './json/Chapter-BubbleSort.json';
import chapterSelectionSort from './json/Chapter-SelectionSort.json';
import chapterSpyware from './json/Chapter-Spyware.json';
import chapterAdware from './json/Chapter-Adware.json';

import chapterArtSkipping from './json/Chapter-Art-Skipping.json';
import chapterArrayFungsi from './json/Chapter-ArrayFungsi-Complete.json';

// AWS Cloud Chapters (AWS Re/Start)
import chapterAWSBasics from './json/Chapter-AWS-Basics.json';
import chapterAWSEC2 from './json/Chapter-AWS-EC2.json';
import chapterAWSPricing from './json/Chapter-AWS-Pricing.json';
import chapterAWSS3 from './json/Chapter-AWS-S3.json';

// Wisdom/History Chapters
import chapterKekuasaan from './json/Chapter-Kekuasaan.json';
import chapterKerasulan from './json/Chapter-Kerasulan.json';
import chapterSunnah from './json/Chapter-Sunnah.json';
import chapterIman from './json/Chapter-Iman.json';
import chapterZakat from './json/Chapter-Zakat.json';
import chapterEssay from './json/Chapter-Essay-Writing.json';
// Wisdom/History Chapters
import chapterEnneagram3 from './json/Chapter-Enneagram3.json';
/**
 * Helper untuk menyeragamkan struktur data JSON ke props yang
 * dibutuhkan oleh komponen BlogList.jsx dan ChapterReader.jsx
 */
const formatChapter = (chapter, readTime) => ({
  ...chapter,
  id: chapter.id,
  title: chapter.metadata.title,

  // Mapping thumbnail ke image agar konsisten dengan BlogList
  image: chapter.metadata.thumbnail,

  category: chapter.metadata.category,
  excerpt: chapter.metadata.description,
  readTime: readTime,
  tags: chapter.metadata.tags || []
});

export const chapters = [
  // --- CYBERSECURITY SERIES ---
  formatChapter(chapterCysec, "5 min read"),
  formatChapter(chapterSoceng, "5 min read"),
  formatChapter(chapterScamUpdate, "6 min read"),
  formatChapter(chapterSpyware, "12 min read"),
  formatChapter(chapterArtSkipping, "15 min read"),
    formatChapter(chapterArrayFungsi, "15 min read"),
    formatChapter(chapterAdware, "15 min read"),


  // --- AWS CLOUD PRACTITIONER (AWS RE/START) ---
  formatChapter(chapterAWSBasics, "10 min read"),
  formatChapter(chapterAWSEC2, "15 min read"),
  formatChapter(chapterAWSPricing, "10 min read"),
  formatChapter(chapterAWSS3, "12 min read"),

  // --- Personality ---
  formatChapter(chapterEnneagram3, "7 min read"),

  // --- PROGRAMMING & ALGORITHM ---
  formatChapter(chapterBubbleSort, "10 min read"),
  formatChapter(chapterSelectionSort, "10 min read"),
formatChapter(chapterZakat, "10 min read"),
  formatChapter(chapterEssay, "15 min read"),
  // --- WISDOM & PHILOSOPHY ---
  formatChapter(chapterKekuasaan, "15 min read"),
  formatChapter(chapterKerasulan, "15 min read"),
  formatChapter(chapterSunnah, "20 min read"),
  formatChapter(chapterIman, "12 min read"),
];

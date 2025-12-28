import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, ChevronLeft, Award, CheckCircle, Quote, Sparkles, Book, Image as ImageIcon, Camera, Share2, Bookmark } from 'lucide-react';
import { FadeContent } from '../ui/FadeContent';
import { MagnetButton } from '../ui/MagnetButton';
import { QuizInterface } from './QuizInterface';
import { Certificate } from './Certificate';
import { cn } from '../../lib/utils';

export const ChapterReader = ({ chapter, onBack }) => {
  // --- STATE MANAGEMENT ---
  const [activeSection, setActiveSection] = useState(0);
  const [direction, setDirection] = useState(0);
  const [viewState, setViewState] = useState('reading'); // 'reading', 'quiz', 'certificate'
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState('');
  const scrollRef = useRef(null);

  // Safety Check
  const content = chapter?.content || [];
  const totalSections = content.length;
  const isLastSection = activeSection === totalSections - 1;
  const progress = ((activeSection + 1) / totalSections) * 100;

  // Metadata Extraction
  const title = chapter?.metadata?.title || chapter?.title || "Untitled Chapter";
  const tags = chapter?.metadata?.tags || [];

  // --- UTILS ---
  const handleNext = () => {
    if (activeSection < totalSections - 1) {
      setDirection(1);
      setActiveSection((prev) => prev + 1);
    } else {
      setViewState('quiz');
    }
  };

  const handlePrev = () => {
    if (activeSection > 0) {
      setDirection(-1);
      setActiveSection((prev) => prev - 1);
    }
  };

  const handleQuizComplete = (finalScore) => {
    setScore(finalScore);
    setViewState('input-name');
  };

  // Auto scroll top on section change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection, viewState]);

  // Text Formatter
  const formatText = (text) => {
    if (!text) return "";
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[var(--text-primary)]">$1</strong>')
      .replace(/(?<!<[^>]*)\*(.*?)\*(?![^<]*>)/g, '<em class="italic text-[var(--link-normal)]">$1</em>');
  };

  // --- RENDERERS ---

  const renderBlock = (block, idx) => {
    // INFO: "overflow-hidden" menciptakan BFC (Block Formatting Context).
    // Ini memaksa elemen untuk duduk DI SAMPING float, bukan menyusup ke belakangnya.
    // Ini memperbaiki masalah border/background yang tertutup gambar.
    const bfcClass = "overflow-hidden";

    switch (block.type) {
      case 'heading':
        // Heading dibiarkan flow natural (tanpa clear) agar mengisi gap
        return (
          <h2 key={idx} className={cn("font-display text-2xl md:text-3xl font-bold text-[var(--text-primary)] mt-10 mb-6 leading-tight", bfcClass)}>
            {block.text}
          </h2>
        );

      case 'subheading':
        return (
          <h3 key={idx} className={cn("font-sans text-lg font-bold text-[var(--link-normal)] mt-8 mb-4 flex items-center gap-2 uppercase tracking-wide", bfcClass)}>
            <Sparkles size={16} className="text-[var(--accent)]"/> {block.text}
          </h3>
        );

      case 'paragraph':
        return (
          <p
            key={idx}
            className="text-[var(--text-body)] text-base md:text-lg leading-[1.8] mb-6 text-justify"
            dangerouslySetInnerHTML={{ __html: formatText(block.text) }}
          />
        );

      case 'image': {
        const isLeft = block.position === 'left';

        // --- LOGIKA KOMBINASI GAMBAR ---
        // 0 = Square (Float)
        // 1 = Portrait Rectangle (Float)
        // 2 = Cinema Wide (Center - Rectangle Panjang - CLEARS FLOAT)
        // 3 = Landscape Rectangle (Float)
        const layoutType = idx % 4;

        // TIPE: CINEMA (Rectangle Panjang di Tengah)
        // Ini satu-satunya yang pakai "clear-both" karena lebar penuh
        if (layoutType === 2) {
            return (
                <figure key={idx} className="w-full my-10 group clear-both">
                    <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden border border-[var(--border-card)] shadow-md bg-[var(--bg-surface)] relative">
                         <img
                           src={block.src}
                           alt={block.caption}
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                         />
                    </div>
                    {block.caption && (
                      <figcaption className="mt-3 text-center text-xs font-mono text-[var(--text-secondary)] flex items-center justify-center gap-1">
                        <Camera size={12}/> {block.caption}
                      </figcaption>
                    )}
                </figure>
            );
        }

        // TIPE: FLOATED (Square / Portrait / Landscape)
        let aspectClass = "aspect-square"; // Default: Square
        let widthClass = "md:w-72";        // Default Width

        if (layoutType === 1) {
             aspectClass = "aspect-[3/4]";
             widthClass = "md:w-64";
        } else if (layoutType === 3) {
             aspectClass = "aspect-[4/3]";
             widthClass = "md:w-80";
        }

        return (
          <figure key={idx} className={cn(
            "relative mb-4 w-full group z-10", // z-10 agar di atas border elemen lain jika overlap
            widthClass,
            isLeft ? "md:float-left md:mr-8 md:mb-4" : "md:float-right md:ml-8 md:mb-4"
          )}>
            <div className={cn("w-full rounded-2xl overflow-hidden border border-[var(--border-card)] shadow-sm bg-[var(--bg-surface)] relative", aspectClass)}>
               <img
                 src={block.src}
                 alt={block.caption}
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
            </div>
            {block.caption && (
              <figcaption className="mt-2 text-center text-xs font-mono text-[var(--text-secondary)] flex items-center justify-center gap-1">
                <Camera size={12}/> {block.caption}
              </figcaption>
            )}
          </figure>
        );
      }

      case 'quote':
        return (
          <blockquote key={idx} className={cn("relative my-8 pl-6 py-4 border-l-4 border-[var(--link-normal)] bg-[var(--bg-surface)]/50 rounded-r-xl p-6", bfcClass)}>
             <Quote className="absolute top-4 left-4 text-[var(--link-normal)] opacity-20" size={32} />
             <p className="relative z-10 text-xl font-medium text-[var(--text-primary)] italic mb-3 leading-relaxed">
               "{block.text}"
             </p>
             <footer className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest">
               — {block.author}
             </footer>
          </blockquote>
        );

      case 'list':
        return (
          <ul key={idx} className={cn("space-y-4 my-8 pl-2", bfcClass)}>
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                 <div className="mt-1.5 w-5 h-5 rounded-full bg-[var(--bg-surface)] border border-[var(--link-normal)] flex items-center justify-center text-[var(--link-normal)] shrink-0 shadow-sm">
                    <CheckCircle size={10} />
                 </div>
                 <span
                   className="text-[var(--text-body)] text-base md:text-lg leading-relaxed"
                   dangerouslySetInnerHTML={{ __html: formatText(item) }}
                 />
              </li>
            ))}
          </ul>
        );

      case 'analogy':
        return (
          <div key={idx} className={cn("my-8 p-6 md:p-8 rounded-2xl bg-[var(--badge-bg)] border border-[var(--badge-border)] flex gap-5", bfcClass)}>
             <div className="shrink-0 pt-1">
               <Sparkles className="text-[var(--link-normal)]" size={24} />
             </div>
             <div>
               <h4 className="font-bold text-[var(--text-primary)] text-xs uppercase tracking-wider mb-2">
                 Analogy: {block.title}
               </h4>
               <p className="text-[var(--text-primary)] text-base md:text-lg leading-relaxed opacity-90">
                 {block.text}
               </p>
             </div>
          </div>
        );

      case 'reflection':
        return (
           <div key={idx} className={cn("my-10 text-center px-8 py-10 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-dim)]", bfcClass)}>
               <Book className="mx-auto text-[var(--text-secondary)] mb-4" size={24} />
               <p className="text-lg md:text-xl font-medium text-[var(--text-primary)] leading-relaxed italic">
                  "{block.text}"
               </p>
               <div className="mt-4 text-xs font-bold text-[var(--accent)] uppercase tracking-widest">Renungan</div>
           </div>
        );

      default: return null;
    }
  };

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 30 : -30, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 30 : -30, opacity: 0 })
  };

  // --- VIEWS CONTROLLER ---

  // 1. QUIZ VIEW
  if (viewState === 'quiz') {
    return (
      <QuizInterface
        questions={chapter.quiz || []}
        quizData={chapter.quiz || []}
        onComplete={handleQuizComplete}
        onBack={() => setViewState('reading')}
        score={0}
      />
    );
  }

  // 2. INPUT NAME VIEW
  if (viewState === 'input-name') {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-[var(--bg-main)] text-center font-sans">
            <FadeContent>
                <div className="mb-8 inline-flex p-6 rounded-full bg-[var(--bg-surface)] text-[var(--link-normal)] border border-[var(--border-card)] shadow-lg shadow-blue-500/10">
                    <Award size={48} />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3">Materi Selesai!</h2>
                <p className="text-[var(--text-secondary)] mb-8 text-lg">Skor Akhir: <strong className="text-[var(--link-normal)]">{Math.round(score)}</strong></p>

                <div className="max-w-md mx-auto w-full bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-card)] shadow-sm">
                    <label className="block text-left text-xs font-bold uppercase text-[var(--text-secondary)] mb-2 tracking-widest">Nama di Sertifikat</label>
                    <input
                        type="text"
                        placeholder="Masukkan Nama Lengkap..."
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-dim)] text-[var(--text-primary)] focus:border-[var(--link-normal)] focus:ring-2 focus:ring-[var(--link-normal)]/20 outline-none mb-6 text-lg transition-all"
                        autoFocus
                    />

                    <MagnetButton
                        onClick={() => {
                            if(userName.trim()) setViewState('certificate');
                        }}
                        disabled={!userName.trim()}
                        className={cn("w-full py-4 justify-center bg-[var(--btn-primary-bg)] text-white hover:bg-[var(--btn-primary-hover)]", !userName.trim() && "opacity-50 cursor-not-allowed")}
                    >
                        Klaim Sertifikat
                    </MagnetButton>
                </div>
            </FadeContent>
        </div>
    )
  }

  // 3. CERTIFICATE VIEW
  if (viewState === 'certificate') {
      return (
          <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-[var(--bg-main)] font-sans py-12">
               <FadeContent>
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--badge-bg)] text-[var(--badge-text)] rounded-full text-xs font-bold uppercase tracking-wide mb-4">
                             <Camera size={14}/> Screenshot Ready
                        </div>
                        <h2 className="text-2xl font-bold text-[var(--text-primary)]">Sertifikat Kelulusan</h2>
                    </div>

                    <div className="transform transition-transform scale-95 md:scale-100 origin-top shadow-2xl rounded-xl overflow-hidden">
                        <Certificate
                            userName={userName}
                            courseTitle={title}
                            score={score}
                            date={new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                        />
                    </div>

                    <div className="mt-12 flex gap-4 justify-center">
                        <button onClick={onBack} className="px-8 py-3 rounded-full border border-[var(--border-dim)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)] text-sm font-bold transition-all">
                            Kembali ke Menu
                        </button>
                    </div>
               </FadeContent>
          </div>
      )
  }

  // 4. MAIN READING VIEW
  if (totalSections === 0) return <div className="min-h-screen flex items-center justify-center text-[var(--text-secondary)]">Konten tidak ditemukan.</div>;

  return (
    <div className="min-h-screen bg-[var(--bg-main)] flex flex-col font-sans text-[var(--text-body)] transition-colors duration-500">

      {/* HEADER FIXED */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-main)]/95 backdrop-blur-xl border-b border-[var(--border-dim)] h-16">
        <div className="h-full max-w-7xl mx-auto px-4 flex items-center justify-between">
            <button
              onClick={onBack}
              className="p-2 -ml-2 rounded-full text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)] transition-colors"
            >
               <ArrowLeft size={20} />
            </button>

            <div className="flex flex-col items-center">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] opacity-60">
                    Chapter 0{activeSection + 1}
                 </span>
                 <h1 className="text-sm font-bold text-[var(--text-primary)] truncate max-w-[200px]">
                    {title}
                 </h1>
            </div>

            <div className="flex items-center gap-2">
               <button className="p-2 rounded-full hover:bg-[var(--bg-surface)] text-[var(--text-secondary)] transition-colors">
                  <Bookmark size={18} />
               </button>
            </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-[var(--border-dim)] w-full">
            <motion.div
              className="h-full bg-[var(--link-normal)]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
        </div>
      </header>

      {/* CONTENT AREA */}
      <main className="flex-grow pt-28 pb-32 px-6">
        <div className="max-w-3xl mx-auto w-full">
            <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                    key={activeSection}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="w-full"
                >
                    {/* Chapter Title di Section Pertama */}
                    {activeSection === 0 && (
                        <div className="text-center mb-12">
                             <span className="inline-block px-4 py-1.5 mb-6 bg-[var(--badge-bg)] border border-[var(--badge-border)] rounded-full text-[var(--badge-text)] text-xs font-bold tracking-widest uppercase">
                                {chapter.metadata?.category || "Technical Archive"}
                            </span>
                            <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-[1.1] mb-4">
                                {content[activeSection].blocks.find(b => b.type === 'heading')?.text || title}
                            </h1>
                            <p className="text-[var(--text-secondary)] text-lg">
                                {chapter.metadata?.description || "Pelajari materi berikut dengan seksama."}
                            </p>
                        </div>
                    )}

                    {/* Blocks Rendering */}
                    <div className="flow-root">
                        {content[activeSection].blocks.map((block, idx) => {
                            // Skip heading utama jika sudah ditampilkan di atas (khusus section 0)
                            if (activeSection === 0 && block.type === 'heading' && idx === 0) return null;
                            return renderBlock(block, idx);
                        })}
                    </div>

                    {/* Referensi di Section Terakhir */}
                    {isLastSection && chapter.references && (
                         <div className="mt-16 pt-8 border-t border-[var(--border-dim)] clear-both">
                            <h4 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-4 flex items-center gap-2">
                                 <Book size={14}/> Referensi Materi
                            </h4>
                            <ul className="space-y-2">
                            {chapter.references.map((ref, idx) => (
                                <li key={idx} className="text-sm text-[var(--text-secondary)] italic pl-4 border-l-2 border-[var(--border-dim)]">
                                    {ref}
                                </li>
                            ))}
                            </ul>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
      </main>

      {/* NAVIGATION DOCK (FLOATING) */}
      <footer className="fixed bottom-8 left-0 right-0 z-50 pointer-events-none">
        <div className="container-safe flex justify-center pointer-events-auto">
            <div className="bg-[var(--bg-main)]/80 backdrop-blur-xl border border-[var(--border-dim)] p-2 rounded-2xl shadow-xl shadow-blue-900/5 flex items-center gap-4">

                <button
                    onClick={handlePrev}
                    disabled={activeSection === 0}
                    className={cn(
                        "w-12 h-12 flex items-center justify-center rounded-xl transition-all",
                        activeSection === 0
                            ? "opacity-20 cursor-not-allowed"
                            : "hover:bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    )}
                >
                    <ChevronLeft size={24} />
                </button>

                <div className="h-8 w-px bg-[var(--border-dim)]"></div>

                <div className="px-4 text-center">
                   <span className="block text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider">Halaman</span>
                   <span className="block text-sm font-bold text-[var(--text-primary)] font-mono">{activeSection + 1} / {totalSections}</span>
                </div>

                <div className="h-8 w-px bg-[var(--border-dim)]"></div>

                {isLastSection ? (
                     <MagnetButton
                        onClick={handleNext}
                        className="bg-[var(--link-normal)] text-white hover:bg-[var(--btn-primary-hover)] shadow-lg shadow-blue-400/20 px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2"
                     >
                        Kuis <Award size={18} />
                     </MagnetButton>
                ) : (
                    <MagnetButton
                        onClick={handleNext}
                        className="bg-[var(--text-primary)] text-[var(--bg-main)] hover:bg-[var(--link-normal)] hover:text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-colors"
                    >
                        Lanjut <ChevronRight size={18} />
                    </MagnetButton>
                )}

            </div>
        </div>
      </footer>
    </div>
  );
};

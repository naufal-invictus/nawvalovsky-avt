import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, ChevronLeft, Award, CheckCircle, Quote, Sparkles, Book, Image as ImageIcon, Camera } from 'lucide-react';
import { FadeContent } from '../ui/FadeContent';
import { MagnetButton } from '../ui/MagnetButton';
import { QuizInterface } from './QuizInterface';
import { Certificate } from './Certificate';
import { cn } from '../../lib/utils';

export const ChapterReader = ({ chapter, onBack }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [direction, setDirection] = useState(0);
  const [viewState, setViewState] = useState('reading');
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState('');

  // Fallback jika chapter.content kosong/undefined
  const content = chapter?.content || [];
  const totalSections = content.length;
  const isLastSection = activeSection === totalSections - 1;

  // FIX: Format text menggunakan variabel tema, bukan hardcoded color
  const formatText = (text) => {
    if (!text) return "";
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[var(--text-primary)]">$1</strong>')
      .replace(/(?<!<[^>]*)\*(.*?)\*(?![^<]*>)/g, '<em class="italic text-[var(--text-secondary)]">$1</em>');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection, viewState]);

  const handleNext = () => {
    if (activeSection < totalSections - 1) {
      setDirection(1);
      setActiveSection(prev => prev + 1);
    } else {
      setViewState('quiz');
    }
  };

  const handlePrev = () => {
    if (activeSection > 0) {
      setDirection(-1);
      setActiveSection(prev => prev - 1);
    }
  };

  const handleQuizComplete = (finalScore) => {
    setScore(finalScore);
    setViewState('input-name');
  };

  // --- RENDERERS BLOCK ---
  const renderBlock = (block, idx) => {
    const commonClasses = "mb-6";
    switch (block.type) {
      case 'heading':
        return <h2 key={idx} className={cn("font-serif text-3xl md:text-4xl text-[var(--text-primary)] mt-2 mb-6 font-bold leading-tight clear-both", commonClasses)}>{block.text}</h2>;

      case 'subheading':
        return <h3 key={idx} className={cn("font-serif text-xl text-[var(--accent)] mt-6 mb-4 font-semibold uppercase tracking-widest flex items-center gap-2", commonClasses)}><Sparkles size={16}/> {block.text}</h3>;

      case 'paragraph':
        return <p key={idx} className={cn("text-[var(--text-secondary)] leading-8 text-lg font-serif text-justify mb-6", commonClasses)} dangerouslySetInnerHTML={{ __html: formatText(block.text) }} />;

      case 'image': {
        const isLeft = block.position === 'left';
        return (
          <figure key={idx} className={cn("mb-6 flex flex-col w-full", isLeft ? "md:float-left md:mr-8 md:w-[45%]" : "md:float-right md:ml-8 md:w-[45%]", commonClasses)}>
            {/* Background image container diganti jadi secondary */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[var(--border)] relative group bg-[var(--bg-secondary)]">
              <div className="absolute inset-0 bg-[var(--bg-primary)] flex items-center justify-center -z-10"><ImageIcon className="text-[var(--border)]" size={40}/></div>
              <img src={block.src} alt={block.caption} className="w-full h-auto object-cover aspect-[4/3]" loading="eager" />
            </div>
            {block.caption && <figcaption className="text-center text-sm text-[var(--text-secondary)] mt-2 font-sans italic px-2" dangerouslySetInnerHTML={{ __html: formatText(block.caption) }} />}
          </figure>
        );
      }

      case 'quote':
        return (
          <div key={idx} className={cn("relative bg-[var(--bg-secondary)] p-6 rounded-2xl my-8 border border-[var(--border)] clear-both", commonClasses)}>
            <Quote className="absolute top-4 left-4 text-[var(--accent)]/20" size={32} />
            <p className="font-serif text-lg italic text-[var(--text-primary)] relative z-10 text-center mb-2" dangerouslySetInnerHTML={{ __html: `"${formatText(block.text)}"` }} />
            <p className="text-center text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">{block.author}</p>
          </div>
        );

      case 'list':
        return (
          <ul key={idx} className={cn("space-y-3 my-6 pl-2", commonClasses)}>
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)] font-sans text-lg">
                <div className="mt-1.5 min-w-[20px] h-[20px] rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] shrink-0"><CheckCircle size={12} /></div>
                <span className="leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: formatText(item) }} />
              </li>
            ))}
          </ul>
        );

      case 'analogy':
        return (
          <div key={idx} className={cn("bg-[var(--bg-secondary)] border border-[var(--border)] p-6 rounded-2xl shadow-sm my-8 relative overflow-hidden clear-both", commonClasses)}>
            <h3 className="text-md font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2 font-sans uppercase tracking-wider text-[var(--accent)]">💡 {block.title}</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: formatText(block.text) }} />
          </div>
        );

      case 'reflection':
        return (
            // Reflection box dibuat lebih gelap atau menonjol dengan border accent
            <div key={idx} className={cn("bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] p-8 rounded-xl shadow-lg my-10 text-center clear-both", commonClasses)}>
               <h3 className="text-xs font-bold text-[var(--accent)] mb-3 uppercase tracking-[0.2em] font-sans">Renungan</h3>
               <p className="italic font-serif text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: `"${formatText(block.text)}"` }} />
            </div>
          );
      default: return null;
    }
  };

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 50 : -50, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 50 : -50, opacity: 0 })
  };

  // --- VIEWS ---

  if (viewState === 'quiz') {
    return (
      <QuizInterface
        questions={chapter.quiz || []}
        onComplete={handleQuizComplete}
        onBack={() => setViewState('reading')}
        showResult={false}
        score={0}
        onReset={() => {}}
      />
    );
  }

  if (viewState === 'input-name') {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-[var(--bg-primary)] text-center text-[var(--text-primary)]">
            <FadeContent>
                <div className="mb-6 inline-block p-4 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                    <Award size={48} />
                </div>
                <h2 className="font-serif text-3xl text-[var(--text-primary)] mb-2">Materi Selesai!</h2>
                <p className="text-[var(--text-secondary)] mb-2 font-sans">Skor Kuis Anda: <strong className="text-[var(--accent)]">{Math.round(score)}</strong></p>
                <p className="text-sm text-[var(--text-secondary)] mb-8">Masukkan nama untuk klaim sertifikat.</p>

                <input
                    type="text"
                    placeholder="Nama Lengkap"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full max-w-xs px-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 outline-none mb-6 text-center font-serif text-lg"
                    autoFocus
                />

                <MagnetButton
                    onClick={() => {
                        if(userName.trim()) setViewState('certificate');
                    }}
                    disabled={!userName.trim()}
                    className={!userName.trim() ? "opacity-50 cursor-not-allowed" : ""}
                >
                    Lihat Sertifikat
                </MagnetButton>
            </FadeContent>
        </div>
    )
  }

  if (viewState === 'certificate') {
      return (
          <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-[var(--bg-primary)] relative overflow-y-auto py-10">
               <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, var(--text-secondary) 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>

               <FadeContent>
                    <div className="text-center text-[var(--text-secondary)] mb-6 font-sans text-sm">
                        <Camera className="inline-block mr-2 mb-1" size={16}/>
                        Silakan <strong>Screenshot</strong> sertifikat ini.
                    </div>

                    <div className="transform transition-transform scale-95 md:scale-100 origin-top">
                        <Certificate
                            userName={userName}
                            courseTitle={chapter.metadata?.title}
                            date={new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                        />
                    </div>

                    <div className="mt-10 flex gap-4 justify-center">
                        <button onClick={onBack} className="px-6 py-2 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] text-sm font-sans transition-all">
                            Kembali ke Menu Utama
                        </button>
                    </div>
               </FadeContent>
          </div>
      )
  }

  // READING VIEW
  if (totalSections === 0) return <div className="p-10 text-center text-[var(--text-secondary)]">Konten tidak ditemukan.</div>;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] flex flex-col text-[var(--text-primary)]">
      {/* HEADER FIXED */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[var(--bg-primary)]/95 backdrop-blur-sm border-b border-[var(--border)] h-16 flex items-center px-4 justify-between">
        <button onClick={onBack} className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-2 rounded-full hover:bg-[var(--bg-secondary)]">
           <ArrowLeft size={20} />
        </button>
        <div className="flex-1 mx-4 max-w-xl">
             <div className="flex justify-between text-[10px] uppercase tracking-widest text-[var(--text-secondary)] mb-1 font-sans font-bold">
                <span>Bagian {activeSection + 1}</span>
                <span>{totalSections}</span>
             </div>
             <div className="h-1 w-full bg-[var(--bg-secondary)] rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-[var(--accent)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${((activeSection + 1) / totalSections) * 100}%` }}
                    transition={{ duration: 0.5 }}
                />
             </div>
        </div>
        <div className="w-8"></div>
      </div>

      <div className="flex-grow pt-24 pb-32 px-6 max-w-5xl mx-auto w-full overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
            <motion.div
                key={activeSection}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                className="w-full"
            >
                {activeSection === 0 && (
                    <div className="text-center mb-8">
                         <span className="inline-block px-3 py-1 mb-4 border border-[var(--accent)]/30 bg-[var(--accent)]/5 rounded-full text-[var(--accent)] text-xs font-bold tracking-widest uppercase font-sans">
                            {chapter.metadata?.title}
                        </span>
                        <h1 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)] mb-2 leading-tight">
                            {content[activeSection].blocks.find(b => b.type === 'heading')?.text}
                        </h1>
                    </div>
                )}

                <div className="flow-root min-h-[50vh]">
                    {content[activeSection].blocks.map((block, idx) => {
                        if (activeSection === 0 && block.type === 'heading') return null;
                        return renderBlock(block, idx);
                    })}
                </div>

                {isLastSection && chapter.references && (
                     <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6 relative mt-12 clear-both">
                        <div className="absolute -top-3 left-6 bg-[var(--bg-secondary)] px-2 text-[var(--accent)] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                             <Book size={14}/> Referensi
                        </div>
                        <ul className="space-y-2">
                        {chapter.references.map((ref, idx) => (
                            <li key={idx} className="text-sm text-[var(--text-secondary)] font-sans italic flex items-start gap-2">
                                <span className="text-[var(--accent)] mt-1">•</span>
                                {ref}
                            </li>
                        ))}
                        </ul>
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
      </div>

      {/* FOOTER FIXED */}
      <div className="fixed bottom-0 left-0 w-full bg-[var(--bg-primary)] border-t border-[var(--border)] p-4 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
            <button onClick={handlePrev} disabled={activeSection === 0} className={cn("flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-sm transition-all font-sans", activeSection === 0 ? "opacity-0 pointer-events-none" : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]")}>
                <ChevronLeft size={18} />
            </button>
            {isLastSection ? (
                 <MagnetButton onClick={handleNext} variant="primary" className="shadow-xl shadow-[var(--accent)]/20 px-8">
                    Mulai Kuis <Award size={18} />
                 </MagnetButton>
            ) : (
                <MagnetButton onClick={handleNext} variant="secondary" className="px-8">
                    Lanjut <ChevronRight size={18} />
                </MagnetButton>
            )}
        </div>
      </div>
    </div>
  );
};

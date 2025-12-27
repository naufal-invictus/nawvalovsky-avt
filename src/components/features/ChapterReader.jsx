import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
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

  const formatText = (text) => {
    if (!text) return "";
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-[#333]">$1</strong>')
      .replace(/(?<!<[^>]*)\*(.*?)\*(?![^<]*>)/g, '<em class="italic text-[#555]">$1</em>');
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
        return <h2 key={idx} className={cn("font-serif text-3xl md:text-4xl text-[#333] mt-2 mb-6 font-bold leading-tight clear-both", commonClasses)}>{block.text}</h2>;

      case 'subheading':
        return <h3 key={idx} className={cn("font-serif text-xl text-[#D4AF37] mt-6 mb-4 font-semibold uppercase tracking-widest flex items-center gap-2", commonClasses)}><Sparkles size={16}/> {block.text}</h3>;

      case 'paragraph':
        return <p key={idx} className={cn("text-[#4A4A4A] leading-8 text-lg font-serif text-justify mb-6", commonClasses)} dangerouslySetInnerHTML={{ __html: formatText(block.text) }} />;

      case 'image': {  // <--- Tambahkan kurung kurawal pembuka
        const isLeft = block.position === 'left';
        return (
          <figure key={idx} className={cn("mb-6 flex flex-col w-full", isLeft ? "md:float-left md:mr-8 md:w-[45%]" : "md:float-right md:ml-8 md:w-[45%]", commonClasses)}>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#EAE0D5] relative group bg-white">
              {/* Pastikan ImageIcon di bawah ini sudah sesuai import Anda (Image as ImageIcon) */}
              <div className="absolute inset-0 bg-[#FAF9F6] flex items-center justify-center -z-10"><ImageIcon className="text-[#EAE0D5]" size={40}/></div>
              <img src={block.src} alt={block.caption} className="w-full h-auto object-cover aspect-[4/3]" loading="eager" />
            </div>
            {block.caption && <figcaption className="text-center text-sm text-[#8A8A8A] mt-2 font-sans italic px-2" dangerouslySetInnerHTML={{ __html: formatText(block.caption) }} />}
          </figure>
        );
      } // <--- Tambahkan kurung kurawal penutup

      case 'quote':
        return (
          <div key={idx} className={cn("relative bg-[#FAF9F6] p-6 rounded-2xl my-8 border border-[#EAE0D5] clear-both", commonClasses)}>
            <Quote className="absolute top-4 left-4 text-[#D4AF37]/20" size={32} />
            <p className="font-serif text-lg italic text-[#333] relative z-10 text-center mb-2" dangerouslySetInnerHTML={{ __html: `"${formatText(block.text)}"` }} />
            <p className="text-center text-xs font-bold uppercase tracking-widest text-[#8A8A8A]">{block.author}</p>
          </div>
        );

      case 'list':
        return (
          <ul key={idx} className={cn("space-y-3 my-6 pl-2", commonClasses)}>
            {block.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[#4A4A4A] font-sans text-lg">
                <div className="mt-1.5 min-w-[20px] h-[20px] rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0"><CheckCircle size={12} /></div>
                <span className="leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: formatText(item) }} />
              </li>
            ))}
          </ul>
        );

      case 'analogy':
        return (
          <div key={idx} className={cn("bg-white border border-[#EAE0D5] p-6 rounded-2xl shadow-sm my-8 relative overflow-hidden clear-both", commonClasses)}>
            <h3 className="text-md font-bold text-[#333] mb-2 flex items-center gap-2 font-sans uppercase tracking-wider text-[#D4AF37]">💡 {block.title}</h3>
            <p className="text-[#4A4A4A] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: formatText(block.text) }} />
          </div>
        );

      case 'reflection':
        return (
            <div key={idx} className={cn("bg-[#333] text-[#FAF9F6] p-8 rounded-xl shadow-lg my-10 text-center clear-both", commonClasses)}>
               <h3 className="text-xs font-bold text-[#D4AF37] mb-3 uppercase tracking-[0.2em] font-sans">Renungan</h3>
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
        <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#FAF9F6] text-center">
            <FadeContent>
                <div className="mb-6 inline-block p-4 rounded-full bg-green-50 text-green-600 border border-green-100">
                    <Award size={48} />
                </div>
                <h2 className="font-serif text-3xl text-[#333] mb-2">Materi Selesai!</h2>
                <p className="text-[#6B6B6B] mb-2 font-sans">Skor Kuis Anda: <strong className="text-[#D4AF37]">{Math.round(score)}</strong></p>
                <p className="text-sm text-[#8A8A8A] mb-8">Masukkan nama untuk klaim sertifikat.</p>

                <input
                    type="text"
                    placeholder="Nama Lengkap"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full max-w-xs px-4 py-3 rounded-xl border border-[#D4AF37]/50 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none mb-6 text-center font-serif text-lg"
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
          <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-[#1a1a1a] relative overflow-y-auto py-10">
               <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>

               <FadeContent>
                    <div className="text-center text-white/80 mb-6 font-sans text-sm">
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
                        <button onClick={onBack} className="px-6 py-2 rounded-full border border-white/20 text-white/80 hover:bg-white/10 text-sm font-sans transition-all">
                            Kembali ke Menu Utama
                        </button>
                    </div>
               </FadeContent>
          </div>
      )
  }

  // READING VIEW
  if (totalSections === 0) return <div className="p-10 text-center">Konten tidak ditemukan.</div>;

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50 bg-[#FAF9F6]/95 backdrop-blur-sm border-b border-[#EAE0D5] h-16 flex items-center px-4 justify-between">
        <button onClick={onBack} className="text-[#8A8A8A] hover:text-[#333] transition-colors p-2 rounded-full hover:bg-black/5">
           <ArrowLeft size={20} />
        </button>
        <div className="flex-1 mx-4 max-w-xl">
             <div className="flex justify-between text-[10px] uppercase tracking-widest text-[#8A8A8A] mb-1 font-sans font-bold">
                <span>Bagian {activeSection + 1}</span>
                <span>{totalSections}</span>
             </div>
             <div className="h-1 w-full bg-[#EAE0D5] rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-[#D4AF37]"
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
                         <span className="inline-block px-3 py-1 mb-4 border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-full text-[#D4AF37] text-xs font-bold tracking-widest uppercase font-sans">
                            {chapter.metadata?.title}
                        </span>
                        <h1 className="font-serif text-2xl md:text-3xl text-[#333] mb-2 leading-tight">
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
                     <div className="bg-[#FAF9F6] border border-[#E5E5E5] rounded-xl p-6 relative mt-12 clear-both">
                        <div className="absolute -top-3 left-6 bg-[#FAF9F6] px-2 text-[#D4AF37] font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                             <Book size={14}/> Referensi
                        </div>
                        <ul className="space-y-2">
                        {chapter.references.map((ref, idx) => (
                            <li key={idx} className="text-sm text-[#6B6B6B] font-sans italic flex items-start gap-2">
                                <span className="text-[#D4AF37] mt-1">•</span>
                                {ref}
                            </li>
                        ))}
                        </ul>
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#EAE0D5] p-4 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
            <button onClick={handlePrev} disabled={activeSection === 0} className={cn("flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-sm transition-all font-sans", activeSection === 0 ? "opacity-0 pointer-events-none" : "text-[#6B6B6B] hover:bg-[#FAF9F6] hover:text-[#333]")}>
                <ChevronLeft size={18} />
            </button>
            {isLastSection ? (
                 <MagnetButton onClick={handleNext} variant="primary" className="shadow-xl shadow-[#D4AF37]/20 px-8">
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

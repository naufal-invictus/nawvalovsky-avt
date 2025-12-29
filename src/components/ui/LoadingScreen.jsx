import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Coffee, GitMerge, AlertCircle, Terminal } from 'lucide-react';

// Kumpulan "Sad Quotes" ala Single Fighter Developer
const SAD_QUOTES = [
  { text: "Merge ke main tanpa code review... sensasi kesepian yang memacu adrenalin.", icon: GitMerge },
  { text: "Jadwal tidur? Itu fitur yang belum sempat di-deploy.", icon: Coffee },
  { text: "Membangun kerajaan digital, tapi rajanya tidak punya rakyat.", icon: Terminal },
  { text: "Berbicara dengan bebek karet lebih sering daripada dengan manusia.", icon: Code2 },
  { text: "Di laptopku jalan... tapi di sini aku sendirian.", icon: AlertCircle },
  { text: "Refactoring kode 6 bulan lalu: 'Siapa orang bodoh yang nulis ini? Oh, aku.'", icon: Code2 },
  { text: "Single Fighter: CEO, Senior Dev, dan CS dalam satu tubuh yang lelah.", icon: Terminal },
  { text: "Tidak ada konflik tim jika kamu satu-satunya anggota tim.", icon: GitMerge },
];

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [quote, setQuote] = useState(SAD_QUOTES[0]);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 1. Pilih Quote Acak saat mount
    setQuote(SAD_QUOTES[Math.floor(Math.random() * SAD_QUOTES.length)]);

    // 2. Logika Durasi Random (2 - 5 detik)
    const randomDuration = Math.floor(Math.random() * 3000) + 2000;
    const intervalTime = 50;
    const totalSteps = randomDuration / intervalTime;
    const increment = 100 / totalSteps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          // Mulai animasi keluar internal sebelum memanggil onComplete
          setIsExiting(true);

          setTimeout(() => {
            onComplete();
          }, 800); // Tunggu animasi exit selesai
          return 100;
        }
        // Tambahkan variasi random kecil agar loading terasa organik
        const jitter = Math.random() * 2;
        return Math.min(prev + increment + jitter, 100);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  // Icon Komponen untuk Quote
  const QuoteIcon = quote.icon;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FDFBF7] text-[#1E293B] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* --- BACKGROUND DECORATION (Subtle & Performant) --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Lingkaran Bias Biru di Pojok */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#60A5FA]/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#93C5FD]/10 rounded-full blur-[100px]" />

        {/* Grid Pattern Halus */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#1E293B 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-2xl px-6 flex flex-col items-center text-center">

        {/* --- TOP LABEL: GAME STYLE --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.5, y: 0 }}
          className="mb-8 flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#475569]"
        >
          <span className="w-2 h-2 bg-[#60A5FA] rounded-full animate-pulse" />
          System_Initialization // Solo_Mode
        </motion.div>

        {/* --- CENTER: SAD QUOTE --- */}
        <div className="min-h-[160px] flex flex-col items-center justify-center">
          <AnimatePresence mode='wait'>
            <motion.div
              key={quote.text}
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#F0F4F8] text-[#60A5FA] border border-[#CBD5E1] shadow-sm mb-2 mx-auto">
                <QuoteIcon size={24} strokeWidth={1.5} />
              </div>

              <h2 className="text-2xl md:text-3xl font-display font-bold leading-tight max-w-lg mx-auto text-[#1E293B]">
                "{quote.text}"
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* --- BOTTOM: PROGRESS BAR & STATS --- */}
        <div className="w-full max-w-sm mt-12 space-y-3">
          {/* Progress Bar Container */}
          <div className="h-1.5 w-full bg-[#E2E8F0] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#60A5FA] shadow-[0_0_15px_rgba(96,165,250,0.6)]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.1 }} // Smooth update
            />
          </div>

          {/* Stats Text */}
          <div className="flex justify-between items-center text-[10px] font-mono font-medium text-[#475569] uppercase tracking-wider">
            <span>Loading Assets...</span>
            <span className="font-bold text-[#1E293B]">{Math.round(progress)}%</span>
          </div>
        </div>

      </div>

      {/* --- FOOTER VERSION --- */}
      <div className="absolute bottom-6 text-[9px] font-mono text-[#475569]/40 tracking-widest">
        NAWVALOVSKY VER 2.5 // BUILD 2025
      </div>

    </motion.div>
  );
};

export default LoadingScreen;

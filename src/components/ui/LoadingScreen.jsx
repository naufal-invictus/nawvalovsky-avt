import { useState, useEffect } from 'react';
import { Cloud, Code2, Coffee, Moon } from 'lucide-react';

// Kumpulan Quotes "Sad Single Fighter"
const sadQuotes = [
  "Refactoring kode 6 bulan lalu: 'Siapa orang bodoh yang nulis ini? Oh, aku.",
];

const LoadingScreen = ({ onComplete }) => {
  const [quote, setQuote] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    // 1. Pilih Quote Acak
    const randomQuote = sadQuotes[Math.floor(Math.random() * sadQuotes.length)];
    setQuote(randomQuote);

    // 2. Durasi random 3-6 detik
    const duration = Math.floor(Math.random() * 3000) + 3000;

    // 3. Timer
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 500);
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center p-8 transition-opacity duration-500 ease-out
        ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
      style={{ backgroundColor: '#FFFDF7' }} // Warna Cream Lembut
    >
      <div className="max-w-md w-full text-center space-y-8 relative">

        {/* Decorative Blur Background (Aura Biru) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl -z-10 animate-pulse" />

        {/* Icon Animasi */}
        <div className="flex justify-center mb-6">
           <div className="relative">
             <Cloud className="w-12 h-12 text-blue-400 absolute -top-4 -right-6 animate-bounce delay-100 opacity-80" />
             <Moon className="w-8 h-8 text-blue-300 absolute top-4 -left-6 animate-pulse delay-700" />
             <div className="bg-white p-4 rounded-2xl shadow-sm border border-blue-100 relative z-10">
                <Code2 className="w-10 h-10 text-blue-600 animate-spin-slow" strokeWidth={1.5} />
             </div>
           </div>
        </div>

        {/* Quote Section (CONTRAST FIX) */}
        <div className="space-y-3">
          {/* Perbaikan: text-slate-600 -> text-slate-800 (Lebih Gelap) */}
          <p className="font-serif text-xl md:text-2xl text-slate-800 leading-relaxed italic animate-in slide-in-from-bottom-4 fade-in duration-1000">
            "{quote}"
          </p>
          {/* Perbaikan: text-blue-400 + opacity -> text-blue-600 (Tanpa Opacity) */}
          <p className="text-xs font-sans font-bold tracking-widest text-blue-600 uppercase">
            ~ Dev Journal
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-full max-w-[200px] mx-auto pt-6">
           <div className="h-1 w-full bg-blue-100 rounded-full overflow-hidden">
             <div className="h-full bg-blue-500 w-full origin-left animate-progress-indeterminate rounded-full"></div>
           </div>
        </div>

      </div>

      {/* Footer Version (CONTRAST FIX) */}
      {/* Perbaikan: text-slate-400 opacity-60 -> text-slate-500 opacity-100 */}
      <div className="absolute bottom-8 text-[10px] text-slate-500 font-bold font-sans tracking-widest">
        NAWVALOVSKY V.2.5
      </div>

      <style>{`
        @keyframes progress-indeterminate {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
        .animate-progress-indeterminate {
          animation: progress-indeterminate 2s infinite linear;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;

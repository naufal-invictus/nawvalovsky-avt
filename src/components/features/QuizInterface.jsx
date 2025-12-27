import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award } from 'lucide-react';
import { FadeContent } from '../ui/FadeContent';
import { MagnetButton } from '../ui/MagnetButton';
import { cn } from '../../lib/utils';

export const QuizInterface = ({ questions, onComplete, onBack, showResult, score, onReset }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [localScore, setLocalScore] = useState(0);

  const handleAnswer = (index) => {
    if (selected !== null) return;
    setSelected(index);
    const correct = index === questions[currentQ].correct;
    setIsCorrect(correct);
    if (correct) setLocalScore(s => s + 100 / questions.length);
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(prev => prev + 1);
      setSelected(null);
      setIsCorrect(null);
    } else {
      onComplete(localScore + (isCorrect ? 100/questions.length : 0));
    }
  };

  if (showResult) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center px-6 text-center pt-20">
        <FadeContent>
            <div className="mb-6 inline-block p-4 rounded-full bg-green-50 text-green-600 border border-green-100">
                <Award size={48} />
            </div>
            <h2 className="font-serif text-3xl text-[#333] mb-2">Bab Selesai</h2>
            <p className="text-[#6B6B6B] mb-6 font-sans">Skor Pemahaman Anda</p>
            <div className="text-8xl font-serif text-[#D4AF37] mb-8">{Math.round(score)}</div>
            <MagnetButton onClick={onReset}>Kembali ke Daftar</MagnetButton>
        </FadeContent>
      </div>
    );
  }

  if (!questions || questions.length === 0) {
      // Auto complete jika tidak ada kuis
      setTimeout(() => onComplete(100), 100);
      return null;
  }

  const q = questions[currentQ];

  return (
    <div className="pt-24 px-6 max-w-2xl mx-auto min-h-screen font-sans">
      <div className="flex justify-between items-center mb-8">
         <button onClick={onBack} className="text-sm text-[#8A8A8A] hover:text-[#333]">Keluar</button>
         <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">Soal {currentQ + 1} / {questions.length}</div>
      </div>

      <FadeContent key={currentQ}>
        <h3 className="font-serif text-2xl text-[#333] mb-8 leading-snug">{q.question}</h3>

        <div className="space-y-4">
          {q.options.map((opt, idx) => (
            <motion.button
              key={idx}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnswer(idx)}
              className={cn(
                "w-full text-left p-5 rounded-xl border transition-all duration-300 flex justify-between items-center",
                selected === null
                  ? "border-[#E5E5E5] bg-white hover:border-[#D4AF37] hover:bg-[#FAF9F6]"
                  : idx === q.correct
                    ? "border-green-500 bg-green-50 text-green-800"
                    : selected === idx
                        ? "border-red-300 bg-red-50 text-red-800"
                        : "opacity-50 border-[#E5E5E5]"
              )}
            >
              <span>{opt}</span>
              {selected !== null && idx === q.correct && <CheckCircle size={18} className="text-green-600"/>}
            </motion.button>
          ))}
        </div>

        {selected !== null && (
          <div className="mt-8">
             <div className={cn("p-4 rounded-lg mb-6 text-sm border", isCorrect ? "bg-green-100 border-green-200 text-green-900" : "bg-red-50 border-red-200 text-red-900")}>
                <strong>{isCorrect ? "Benar!" : "Kurang Tepat."}</strong> {q.feedback}
            </div>
            <MagnetButton onClick={nextQuestion} className="w-full">
              {currentQ === questions.length - 1 ? "Lihat Hasil" : "Lanjut"}
            </MagnetButton>
          </div>
        )}
      </FadeContent>
    </div>
  );
};

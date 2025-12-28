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
            <div className="mb-6 inline-block p-4 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                <Award size={48} />
            </div>
            <h2 className="font-serif text-3xl text-[var(--text-primary)] mb-2">Bab Selesai</h2>
            <p className="text-[var(--text-secondary)] mb-6 font-sans">Skor Pemahaman Anda</p>
            <div className="text-8xl font-serif text-[var(--accent)] mb-8">{Math.round(score)}</div>
            <MagnetButton onClick={onReset}>Kembali ke Daftar</MagnetButton>
        </FadeContent>
      </div>
    );
  }

  if (!questions || questions.length === 0) {
      setTimeout(() => onComplete(100), 100);
      return null;
  }

  const q = questions[currentQ];

  return (
    <div className="pt-24 px-6 max-w-2xl mx-auto min-h-screen font-sans text-[var(--text-primary)]">
      <div className="flex justify-between items-center mb-8">
         <button onClick={onBack} className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Keluar</button>
         <div className="text-xs font-bold text-[var(--accent)] uppercase tracking-widest">Soal {currentQ + 1} / {questions.length}</div>
      </div>

      <FadeContent key={currentQ}>
        <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-8 leading-snug">{q.question}</h3>

        <div className="space-y-4">
          {q.options.map((opt, idx) => (
            <motion.button
              key={idx}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnswer(idx)}
              className={cn(
                "w-full text-left p-5 rounded-xl border transition-all duration-300 flex justify-between items-center",
                selected === null
                  ? "border-[var(--border)] bg-[var(--bg-secondary)] hover:border-[var(--accent)] hover:bg-[var(--bg-primary)]"
                  : idx === q.correct
                    ? "border-green-500/50 bg-green-500/10 text-green-500"
                    : selected === idx
                        ? "border-red-500/50 bg-red-500/10 text-red-500"
                        : "opacity-50 border-[var(--border)]"
              )}
            >
              <span>{opt}</span>
              {selected !== null && idx === q.correct && <CheckCircle size={18} className="text-green-500"/>}
            </motion.button>
          ))}
        </div>

        {selected !== null && (
          <div className="mt-8">
             <div className={cn("p-4 rounded-lg mb-6 text-sm border", isCorrect ? "bg-green-500/10 border-green-500/20 text-green-500" : "bg-red-500/10 border-red-500/20 text-red-500")}>
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

import { useState, useEffect } from 'react';
import Groq from 'groq-sdk';
import { Send, AlertCircle, RefreshCw, Cpu, ShieldCheck, Hourglass, X } from 'lucide-react';
import { FadeContent } from '../ui/FadeContent';

// Inisialisasi Groq
const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true
});

export const TobatkanTypology = ({ onBack }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState('');

  // State Captcha
  const [captcha, setCaptcha] = useState({ a: 0, b: 0, ans: 0 });
  const [captchaInput, setCaptchaInput] = useState('');

  // Initial Loading Effect 5 Detik
  useEffect(() => {
    generateCaptcha();
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    setCaptcha({ a, b, ans: a + b });
    setCaptchaInput('');
  };

  const validateInput = (text) => {
    const typologyRegex = /\b([EI][NS][TF][JP]|[1-9]w[1-9]|[VFEL]{4}|Sanguine|Choleric|Melancholic|Phlegmatic)\b/i;
    if (!text || text.trim().length < 3) return "Tulis dulu typology-nya, kosong melompong gitu kayak hati lu.";
    if (!typologyRegex.test(text)) return "Format Typology salah! Contoh: 'INFP 4w5 Melancholic'.";
    return null;
  };

  const handleRoast = async () => {
    if (parseInt(captchaInput) !== captcha.ans) {
      setError("Captcha salah! Hitung yang bener.");
      generateCaptcha();
      return;
    }

    const validationError = validateInput(input);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');
    setLoading(true); // Trigger Loading State
    setResult('');

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "Anda adalah Roastinger bergaya Gen Z yang sangat savage, menyakitkan, jujur, on point, dan 'blak-blakan'. Tugas Anda adalah me-roasting user berdasarkan input personality typology mereka (MBTI, Enneagram, dll). Gunakan bahasa gaul Indonesia gaul, on point, ngetawain, tanpa metafora atau kiasan, tanpa perbandingan contoh (kamu kayak, kamu ibarat), ibarat musuh yang punya dendam pribadi, kasar sedikit boleh untuk penekanan. Output HARUS tepat 2 paragraf. Jangan berikan saran bijak, murni roasting mental agar mereka 'tobat'. MAX 2 Paragraf Brutal."
          },
          {
            role: "user",
            content: `Roast typology ini sekeras mungkin: ${input}`
          }
        ],
        model: "openai/gpt-oss-120b",
        temperature: 0.75,
        max_tokens: 2000,
         top_p: 1,
  stream: true,
  reasoning_effort: "medium",
      });

      let fullResponse = "";
      for await (const chunk of chatCompletion) {
        const content = chunk.choices[0]?.delta?.content || "";
        fullResponse += content;
        setResult((prev) => prev + content);
      }
    } catch (err) {
      setError("Server error. Coba lagi nanti.");
      console.error(err);
    } finally {
      setLoading(false);
      generateCaptcha();
    }
  };

  if (initialLoading) {
    return (
      <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[var(--bg-main)]">
        <Hourglass className="animate-spin text-[var(--accent)] mb-4" size={48} />
        <h2 className="font-display text-xl animate-pulse text-[var(--text-primary)]">
          Sebentar ya, developer lagi pura-pura paham errornya.
        </h2>
        <p className="text-sm text-[var(--text-secondary)] mt-2 font-mono">Validating...</p>
      </div>
    );
  }

  return (
    // FIX: Container Full Screen, Centered, Padding Aman (pt-32)
    <div className="min-h-screen pt-32 pb-12 w-full flex flex-col items-center justify-center px-4">
      <FadeContent>
        <div className="w-full max-w-3xl relative">

          {/* Main Card */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-card)] p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-500">

            {/* Tombol Close Pengganti 'Kembali ke Waras' */}
            <button
              onClick={onBack}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-red-500 transition-colors"
              title="Tutup Aplikasi"
            >
              <X size={24} />
            </button>

            {/* Header Content */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] mb-4">
                <Cpu size={32} />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">
                Tobatkan Typology
              </h1>
              <p className="text-[var(--text-secondary)] text-sm md:text-base">
                System Expires: <span className="text-red-500 font-mono font-bold">27 JAN 2026</span>
              </p>
            </div>

            {/* Input Form */}
            <div className="space-y-5">
              <div>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ex: INFP 4w5 LEFV Melancholic"
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border-dim)] rounded-xl px-5 py-4 text-lg text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition-all"
                />
              </div>

              {/* Captcha & Action */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute left-4 top-3.5 text-[var(--text-secondary)] font-mono select-none">
                    {captcha.a} + {captcha.b} = ?
                  </div>
                  <input
                    type="number"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    className="w-full bg-[var(--bg-surface)] border border-[var(--border-dim)] rounded-xl pl-24 pr-4 py-3.5 font-mono focus:outline-none focus:border-[var(--accent)]"
                  />
                </div>

                <button
                  onClick={handleRoast}
                  disabled={loading || !input || !captchaInput}
                  className="bg-[var(--accent)] hover:bg-[var(--link-hover)] text-white px-8 py-3.5 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95 min-w-[140px]"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="animate-spin" size={20} />
                      <span>Cooking...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>ROAST</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mt-6 flex items-center gap-3 text-red-600 bg-red-50 p-4 rounded-xl border border-red-100 animate-in fade-in">
                <AlertCircle size={20} />
                <span className="font-medium text-sm">{error}</span>
              </div>
            )}

          </div>

          {/* Result Section (Outside Card for effect) */}
          {result && (
            <div className="mt-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="bg-[var(--bg-surface)] p-8 shadow-sm">
                <h3 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-4">
                  Diagnosis Hasil Rujak:
                </h3>
                <div className="prose prose-lg text-[var(--text-body)] font-serif leading-relaxed whitespace-pre-line">
                  {result}
                </div>
              </div>
            </div>
          )}

        </div>
      </FadeContent>
    </div>
  );
};

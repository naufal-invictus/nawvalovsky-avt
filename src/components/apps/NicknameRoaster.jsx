import { useState, useEffect } from 'react';
import Groq from 'groq-sdk';
import { Send, AlertCircle, RefreshCw, Hash, X, Hourglass } from 'lucide-react'; // Ganti icon Cpu jadi Hash/Tag
import { FadeContent } from '../ui/FadeContent';

// Inisialisasi Groq (Menggunakan ENV yang sama)
const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true
});

export const NicknameRoaster = ({ onBack }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState('');

  // State Captcha
  const [captcha, setCaptcha] = useState({ a: 0, b: 0, ans: 0 });
  const [captchaInput, setCaptchaInput] = useState('');

  // Initial Loading Effect 3 Detik (sedikit lebih cepat dari Typology biar variasi)
  useEffect(() => {
    generateCaptcha();
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    setCaptcha({ a, b, ans: a + b });
    setCaptchaInput('');
  };

  const validateInput = (text) => {
    if (!text || text.trim().length < 3) return "Nickname kependekan, minimal 3 huruf lah biar enak nge-roastnya.";
    if (text.trim().length > 30) return "Nickname apa cerpen? Kepanjangan woi.";
    return null;
  };

  const handleRoast = async () => {
    if (parseInt(captchaInput) !== captcha.ans) {
      setError("Captcha salah! Lu robot atau wibu?");
      generateCaptcha();
      return;
    }

    const validationError = validateInput(input);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError('');
    setLoading(true);
    setResult('');

    try {
      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "Anda adalah Roastinger bergaya Gen Z yang sangat savage, menyakitkan, dan 'blak-blakan'. Tugas Anda adalah me-roasting NICKNAME (Username Game/Sosmed) user. Analisis dari segi: ke-alay-an, sok edgy, wibu bau bawang, atau sok keras. Gunakan bahasa gaul Indonesia, tanpa perbandingan, tanpa 'kayak', tanpa 'Wifi/Wi-Fi', kasar sedikit boleh buat bumbu, tanpa banyak kata sambung tak perlu. Output HARUS tepat 2 paragraf. Jangan kasih saran nama bagus, murni hina pilihan nama mereka yang cringe. MAX 2 Paragraf Brutal."
          },
          {
            role: "user",
            content: `Roast nickname ini sekeras mungkin: ${input}`
          }
        ],
        model: "openai/gpt-oss-120b", // Atau model lain yang tersedia di akun Groq kamu
        temperature: 0.8,
        max_tokens: 2000,
        top_p: 1,
        stream: true,
      });

      for await (const chunk of chatCompletion) {
        const content = chunk.choices[0]?.delta?.content || "";
        setResult((prev) => prev + content);
      }
    } catch (err) {
      setError("Server error. AI-nya lelah liat nickname lu.");
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
          Menganalisis tingkat cringe nickname...
        </h2>
        <p className="text-sm text-[var(--text-secondary)] mt-2 font-mono">Loading Database Alay...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-12 w-full flex flex-col items-center justify-center px-4">
      <FadeContent>
        <div className="w-full max-w-3xl relative">

          {/* Main Card */}
          <div className="bg-[var(--bg-card)] border border-[var(--border-card)] p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden animate-in zoom-in-95 duration-500">

            <button
              onClick={onBack}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-red-500 transition-colors"
              title="Tutup Aplikasi"
            >
              <X size={24} />
            </button>

            {/* Header Content */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-500 mb-4">
                <Hash size={32} />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-2">
                Nickname Roaster
              </h1>
              <p className="text-[var(--text-secondary)] text-sm md:text-base">
                Cek seberapa <span className="text-orange-500 font-bold">cringe</span> username kebanggaan lu.
              </p>
            </div>

            {/* Input Form */}
            <div className="space-y-5">
              <div>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ex: xX_DarkSlayer_Xx, ProGamer69, CantikGemoy"
                  className="w-full bg-[var(--bg-surface)] border border-[var(--border-dim)] rounded-xl px-5 py-4 text-lg text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
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
                    className="w-full bg-[var(--bg-surface)] border border-[var(--border-dim)] rounded-xl pl-24 pr-4 py-3.5 font-mono focus:outline-none focus:border-orange-500"
                  />
                </div>

                <button
                  onClick={handleRoast}
                  disabled={loading || !input || !captchaInput}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3.5 rounded-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 active:scale-95 min-w-[140px]"
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

          {/* Result Section */}
          {result && (
            <div className="mt-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="bg-[var(--bg-surface)] p-8 shadow-sm border-l-4 border-orange-500">
                <h3 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-4">
                  Hasil Rujak Username:
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

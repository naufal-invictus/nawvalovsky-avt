import { useState, useEffect } from 'react';
import { Terminal, Cpu, CheckCircle2 } from 'lucide-react';

const LoadingScreen = ({ onComplete }) => {
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Sequence boot yang lebih ringkas agar tidak lama menunggu
    const bootSteps = [
      { msg: "INITIALIZING KERNEL...", delay: 100 },
      { msg: "MOUNTING VIRTUAL FILESYSTEM...", delay: 300 },
      { msg: "LOADING ASSETS & MODULES...", delay: 600 },
      { msg: "ESTABLISHING SECURE CONNECTION...", delay: 800 },
      { msg: "RENDERING INTERFACE...", delay: 1100 },
    ];

    let currentStep = 0;

    // Timer untuk Logs
    const logInterval = setInterval(() => {
      if (currentStep < bootSteps.length) {
        setLogs(prev => [...prev, bootSteps[currentStep].msg]);
        currentStep++;
      }
    }, 250);

    // Timer untuk Progress Bar (Selesai dalam ~1.5 detik)
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(logInterval);
          setTimeout(onComplete, 400); // Delay dikit biar smooth
          return 100;
        }
        // Random increment biar terasa organik
        return Math.min(prev + Math.floor(Math.random() * 10) + 2, 100);
      });
    }, 50);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0f172a] text-emerald-400 font-mono flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm relative">

        {/* Decorative Glow */}
        <div className="absolute -inset-4 bg-emerald-500/10 blur-xl rounded-full opacity-50 animate-pulse" />

        {/* Main Terminal Box */}
        <div className="relative bg-[#020617] border border-[#1e293b] rounded-lg p-6 shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#1e293b] pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Terminal size={16} className="text-emerald-500" />
              <span className="text-xs font-bold tracking-widest text-emerald-100">SYSTEM_BOOT</span>
            </div>
            <Cpu size={16} className="text-emerald-500 animate-spin-slow" />
          </div>

          {/* Logs Area */}
          <div className="h-28 flex flex-col justify-end space-y-1.5 mb-6 font-mono text-[10px] md:text-xs">
            {logs.map((log, i) => (
              <div key={i} className="flex items-center gap-2 animate-in slide-in-from-left-2 fade-in duration-300">
                <span className="text-emerald-600">{'>'}</span>
                <span className="text-emerald-300/90">{log}</span>
                <CheckCircle2 size={10} className="text-emerald-500 ml-auto" />
              </div>
            ))}
            <div className="flex items-center gap-2 opacity-50">
              <span className="text-emerald-600">{'>'}</span>
              <span className="animate-pulse">_</span>
            </div>
          </div>

          {/* Progress Bar High Tech */}
          <div className="relative">
             <div className="flex justify-between text-[9px] font-bold text-emerald-600 mb-1 uppercase tracking-wider">
               <span>Loading Modules</span>
               <span>{progress}%</span>
             </div>
             <div className="h-1 w-full bg-[#1e293b] rounded-full overflow-hidden">
               <div
                 className="h-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-100 ease-out"
                 style={{ width: `${progress}%` }}
               />
             </div>
          </div>

        </div>

        <p className="text-center text-[10px] text-[#475569] mt-4 font-sans tracking-widest uppercase">
          Nawvalovsky Environment v2.5
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;

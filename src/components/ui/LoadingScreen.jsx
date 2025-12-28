import { useState, useEffect } from 'react';
import { Terminal, CheckCircle2 } from 'lucide-react';

const LoadingScreen = ({ onComplete }) => {
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const bootSteps = [
      "BIOS CHECK... OK",
      "LOADING KERNEL...",
      "MOUNTING VOLUMES...",
      "BYPASSING FIREWALL...",
      "OPTIMIZING GRAPHICS...",
      "SYSTEM READY"
    ];

    let stepIndex = 0;

    // Animasi Progress Bar Cepat
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 40); // 2 detik total loading bar

    // Animasi Log
    const logTimer = setInterval(() => {
      if (stepIndex < bootSteps.length) {
        setLogs(prev => [...prev, bootSteps[stepIndex]]);
        stepIndex++;
      } else {
        clearInterval(logTimer);
        setTimeout(onComplete, 800); // Delay sedikit setelah selesai
      }
    }, 400);

    return () => {
      clearInterval(progressTimer);
      clearInterval(logTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#000000] text-[#00ff41] font-mono flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md border border-[#1a1a1a] p-6 bg-[#050505] shadow-[0_0_20px_rgba(0,255,65,0.1)]">

        {/* Header */}
        <div className="flex items-center gap-2 mb-6 border-b border-[#1a1a1a] pb-2">
          <Terminal size={18} className="animate-pulse" />
          <span className="text-sm tracking-widest uppercase font-bold">System Boot</span>
        </div>

        {/* Logs */}
        <div className="h-32 flex flex-col justify-end mb-4 text-xs space-y-1">
          {logs.map((log, i) => (
            <div key={i} className="flex items-center gap-2">
              <span>{'>'}</span>
              <span>{log}</span>
              {i < logs.length - 1 && <CheckCircle2 size={10} />}
            </div>
          ))}
          <div className="animate-pulse">_</div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-[#1a1a1a] mb-2">
          <div
            className="h-full bg-[#00ff41] transition-all duration-75 ease-out shadow-[0_0_10px_#00ff41]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-gray-500 uppercase">
          <span>Memory: 64KB OK</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

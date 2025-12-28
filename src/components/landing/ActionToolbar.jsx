import { Mail, FileText, ExternalLink } from 'lucide-react';

const ActionToolbar = () => {
  return (
    <div className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-3 flex items-center justify-between gap-2 shadow-sm">

      {/* Email Button */}
      <button
        className="flex-1 flex items-center justify-center gap-2 bg-[#151515] hover:bg-[#00ff41] hover:text-black text-gray-400 py-2 rounded-lg text-xs font-mono font-bold transition-colors border border-[#2a2a2a]"
        onClick={() => window.location.href = 'mailto:nawvalovsky@proton.me'}
      >
        <Mail size={14} />
        <span>EMAIL</span>
      </button>

      {/* Resume Button */}
      <button
        className="flex-1 flex items-center justify-center gap-2 bg-[#151515] hover:bg-[#00ff41] hover:text-black text-gray-400 py-2 rounded-lg text-xs font-mono font-bold transition-colors border border-[#2a2a2a]"
      >
        <FileText size={14} />
        <span>CV_V1.0</span>
      </button>

      {/* Status Indicator (Purely Visual/Design) */}
      <div className="hidden sm:flex px-3 flex-col items-end border-l border-[#2a2a2a]">
        <span className="text-[10px] text-gray-600 font-mono uppercase">Status</span>
        <span className="text-[10px] text-[#00ff41] font-mono font-bold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff41] animate-pulse"></span>
          OPEN
        </span>
      </div>

    </div>
  );
};

export default ActionToolbar;

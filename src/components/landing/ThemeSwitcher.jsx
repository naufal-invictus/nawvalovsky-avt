import { Wifi, Activity, Battery } from 'lucide-react';

const ThemeSwitcher = () => {
  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full font-mono text-xs text-[#808080] select-none">
      {/* Network Status */}
      <div className="flex items-center gap-2">
        <Wifi size={14} className="text-[#00ff41]" />
        <span className="hidden md:inline">NET: ONLINE</span>
      </div>

      <div className="w-[1px] h-4 bg-[#1a1a1a]"></div>

      {/* Latency / Ping */}
      <div className="flex items-center gap-2">
        <Activity size={14} className="text-[#00ff41]" />
        <span>24ms</span>
      </div>

      <div className="w-[1px] h-4 bg-[#1a1a1a]"></div>

      {/* System Status */}
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse shadow-[0_0_5px_#00ff41]"></span>
        <span className="text-[#00ff41] font-bold tracking-widest">STABLE</span>
      </div>
    </div>
  );
};

export default ThemeSwitcher;

import { useState, useEffect } from 'react';
import { Home, Book, Users, Mail, Wifi, BatteryMedium, Volume2, Palette, ChevronDown, Bluetooth, Bell, Settings } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = ({ activeTab, setActiveTab, currentTheme, setTheme }) => {
  const [time, setTime] = useState(new Date());
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  const themes = [
    { id: 'blue', label: 'Arch Blue', color: 'bg-blue-500' },
    { id: 'green', label: 'Matrix', color: 'bg-green-500' },
    { id: 'red', label: 'Sith Red', color: 'bg-red-500' },
    { id: 'purple', label: 'Amethyst', color: 'bg-purple-500' },
    { id: 'anime', label: 'Day Mode', color: 'bg-pink-400' },
  ];

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'blog', label: 'Journal', icon: Book },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5, type: 'spring' }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-3 font-sans"
    >
      <div className="max-w-7xl mx-auto bg-[var(--glass)] backdrop-blur-xl border border-[var(--border)] rounded-2xl px-4 py-2 flex items-center justify-between shadow-2xl shadow-black/10 transition-all duration-500">

        {/* KIRI: Logo Branding */}
        <div className="flex items-center gap-3 w-[25%]">
           <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-[var(--accent)] to-blue-600 rounded-lg text-[var(--bg-primary)] shadow-lg shadow-[var(--accent)]/20">
             <span className="font-bold font-mono text-lg">{`>_`}</span>
          </div>
          <div className="hidden lg:flex flex-col leading-none">
             <span className="font-bold text-xs text-[var(--text-primary)] tracking-widest uppercase">Nawvalovsky</span>
             <span className="text-[9px] text-[var(--text-secondary)]">System Ready</span>
          </div>
        </div>

        {/* TENGAH: Menu Navigasi */}
        <div className="flex items-center justify-center gap-1 flex-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "relative px-3 py-2 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 group",
                activeTab === item.id
                  ? "text-[var(--bg-primary)] bg-[var(--accent)] shadow-lg shadow-[var(--accent)]/20"
                  : "text-[var(--text-secondary)] hover:bg-[var(--text-primary)]/5 hover:text-[var(--text-primary)]"
              )}
            >
              <item.icon size={14} />
              <span className="hidden md:inline">{item.label}</span>
            </button>
          ))}
        </div>

        {/* KANAN: Status Bar (UPGRADED) */}
        <div className="flex items-center justify-end gap-3 w-[25%]">

          {/* Theme Dropdown */}
          <div className="relative">
            <button
                onClick={() => setIsThemeOpen(!isThemeOpen)}
                className="flex items-center gap-2 px-2 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--bg-secondary)]/50 hover:bg-[var(--bg-secondary)] hover:border-[var(--accent)] transition-all"
                title="Change Theme"
            >
                <Palette size={14} className="text-[var(--accent)]"/>
                <ChevronDown size={12} className={`text-[var(--text-secondary)] transition-transform ${isThemeOpen ? 'rotate-180' : ''}`}/>
            </button>

            <AnimatePresence>
                {isThemeOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full right-0 mt-2 w-36 bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl shadow-2xl overflow-hidden py-1 z-50"
                    >
                        <div className="px-3 py-1 text-[9px] font-bold text-[var(--text-secondary)] uppercase tracking-wider opacity-50">Select Scheme</div>
                        {themes.map(t => (
                            <button
                                key={t.id}
                                onClick={() => { setTheme(t.id); setIsThemeOpen(false); }}
                                className="w-full text-left px-3 py-2 text-[10px] uppercase font-bold text-[var(--text-secondary)] hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] flex items-center gap-2 transition-colors"
                            >
                                <div className={`w-2 h-2 rounded-full ${t.color} ring-1 ring-white/20`} />
                                {t.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
          </div>

          {/* System Icons Group */}
          <div className="hidden sm:flex items-center gap-3 px-3 py-1.5 bg-[var(--bg-secondary)]/30 rounded-lg border border-[var(--border)] text-[var(--text-secondary)]">
             <Bluetooth size={14} className="hover:text-blue-400 transition-colors cursor-pointer" />
             <Wifi size={14} className="hover:text-[var(--accent)] transition-colors cursor-pointer" />
             <div className="relative group">
                 <Bell size={14} className="hover:text-yellow-400 transition-colors cursor-pointer" />
                 <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full border border-[var(--bg-primary)]"></span>
             </div>
             <div className="w-px h-3 bg-[var(--border)] mx-1" />
             <Settings size={14} className="hover:text-[var(--text-primary)] transition-colors cursor-pointer animate-spin-slow" />
          </div>

          {/* Time */}
          <div className="text-right leading-tight hidden md:block">
            <div className="font-bold text-xs text-[var(--text-primary)] font-mono">
                {time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>

        </div>
      </div>
    </motion.nav>
  );
};

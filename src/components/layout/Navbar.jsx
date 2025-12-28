import { useState, useEffect } from 'react';
import { Home, Book, Users, Mail, Wifi, Bluetooth, Bell, Settings } from 'lucide-react';
import { cn } from '../../lib/utils';
// Hapus framer-motion yang berat di navbar jika masih lag, tapi keep simple transition
import { motion } from 'framer-motion';

export const Navbar = ({ activeTab, setActiveTab }) => {
  const [time, setTime] = useState(new Date());

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
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 font-sans">
      <div className="max-w-7xl mx-auto bg-[var(--glass)] backdrop-blur-md border border-[var(--border)] rounded-2xl px-4 py-2 flex items-center justify-between shadow-2xl shadow-black/10">

        {/* KIRI: Logo */}
        <div className="flex items-center gap-3 w-[25%]">
           <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-[var(--accent)] to-blue-600 rounded-lg text-[var(--bg-primary)] shadow-lg shadow-[var(--accent)]/20">
             <span className="font-bold font-mono text-lg">{`>_`}</span>
          </div>
          <div className="hidden lg:flex flex-col leading-none">
             <span className="font-bold text-xs text-[var(--text-primary)] tracking-widest uppercase">Nawvalovsky</span>
             <span className="text-[9px] text-[var(--text-secondary)]">System Ready</span>
          </div>
        </div>

        {/* TENGAH: Menu */}
        <div className="flex items-center justify-center gap-1 flex-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "relative px-3 py-2 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2",
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

        {/* KANAN: Status (Tanpa Theme Switcher) */}
        <div className="flex items-center justify-end gap-3 w-[25%]">
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

          <div className="text-right leading-tight hidden md:block">
            <div className="font-bold text-xs text-[var(--text-primary)] font-mono">
                {time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

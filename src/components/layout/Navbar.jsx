import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { Home, FolderGit2, BookOpen, Mail } from 'lucide-react';

export const Navbar = ({ activeTab, setActiveTab }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Overview', icon: Home },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'blog', label: 'Journal', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-[var(--bg-nav)]/90 backdrop-blur-md border-[var(--border-dim)] py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container-safe flex items-center justify-between">

        {/* Brand Accent: Menggunakan warna aksen baru */}
        <div className="flex items-center gap-3">
           <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_rgba(200,155,123,0.6)]" />
           <span className="font-display font-bold text-lg tracking-wide text-[var(--text-nav)]">
             NAWVALOVSKY<span className="text-[var(--text-secondary)] text-sm font-normal ml-2 hidden md:inline">/ CLOUD_ARCH</span>
           </span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-1 bg-[var(--bg-surface)] p-1 rounded-lg border border-[var(--border-dim)]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "px-4 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-2",
                activeTab === item.id
                  ? "bg-[var(--nav-active)] text-white shadow-md" // Active state
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-card)]"
              )}
            >
              <item.icon size={14} />
              <span className="hidden md:inline">{item.label}</span>
            </button>
          ))}
        </nav>

      </div>
    </header>
  );
};

import { Home, BookOpen, Mail } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Navbar = ({ activeTab, setActiveTab }) => (
  <nav className="fixed bottom-6 md:top-6 md:bottom-auto left-1/2 -translate-x-1/2 w-auto z-50">
    <div className="bg-[#FAF9F6]/90 backdrop-blur-md border border-[#D4AF37]/30 rounded-full shadow-2xl shadow-[#D4AF37]/10 px-2 py-2 flex items-center gap-1">

      {[
        { id: 'home', icon: Home, label: 'Profile' },
        { id: 'blog', icon: BookOpen, label: 'Blog' },
        { id: 'contact', icon: Mail, label: 'Contact' }
      ].map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={cn(
            "relative flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 overflow-hidden",
            activeTab === item.id
              ? "text-[#FAF9F6]"
              : "text-[#8A8A8A] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10"
          )}
        >
          {activeTab === item.id && (
            <div className="absolute inset-0 bg-[#D4AF37] -z-10" />
          )}
          <item.icon size={18} strokeWidth={activeTab === item.id ? 2.5 : 2} />
          <span className={cn("text-xs font-bold uppercase tracking-wider", activeTab === item.id ? "inline-block" : "hidden md:inline-block")}>
              {item.label}
          </span>
        </button>
      ))}

    </div>
  </nav>
);

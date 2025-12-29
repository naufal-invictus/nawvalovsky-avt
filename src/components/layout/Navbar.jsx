import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClass = (path) => {
    const isActive = location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
    return `relative text-sm font-medium transition-colors duration-300 ${
      isActive ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
    }`;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Apps', path: '/apps' },
    { name: 'Blog', path: '/blog' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[var(--bg-main)]/80 backdrop-blur-md border-b border-[var(--border-dim)] py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-xl font-display font-bold text-[var(--text-primary)] tracking-tight">
          Nawvalovsky<span className="text-[var(--accent)]">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className={getLinkClass(link.path)}>
              {link.name}
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[var(--accent)] rounded-full animate-in fade-in slide-in-from-left-2" />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[var(--text-primary)]"
            // ACCESSIBILITY FIX
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--bg-main)] border-b border-[var(--border-dim)] py-4 px-6 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium ${location.pathname === link.path ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)]'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { LandingPage } from './pages/LandingPage';
import { BlogList } from './pages/BlogList';
import { ChapterReader } from './components/features/ChapterReader';
import { FadeContent } from './components/ui/FadeContent';
import { Mail, Users } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);
  const [theme, setTheme] = useState('blue'); // Default theme

  // Inject theme ke atribut HTML root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const renderContent = () => {
    if (selectedPost) {
        return <ChapterReader chapter={selectedPost} onBack={() => setSelectedPost(null)} />;
    }

    switch (activeTab) {
      case 'home': return <LandingPage />;
      case 'blog': return <BlogList onSelectPost={setSelectedPost} />;
      case 'team':
        return (
            <div className="min-h-screen flex items-center justify-center px-6 text-center pt-20">
                <FadeContent>
                    <div className="w-16 h-16 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--accent)] backdrop-blur-md">
                        <Users size={32} />
                    </div>
                    <h2 className="font-serif text-3xl mb-4 text-[var(--text-primary)]">Meet the Team</h2>
                    <p className="text-[var(--text-secondary)] max-w-md mx-auto mb-8">
                        The brilliant minds behind the code.
                    </p>
                </FadeContent>
            </div>
        );
      case 'contact': return (
        <div className="min-h-screen flex items-center justify-center px-6 text-center pt-20">
            <FadeContent>
                <div className="w-16 h-16 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--accent)] backdrop-blur-md">
                    <Mail size={32} />
                </div>
                <h2 className="font-serif text-3xl mb-4 text-[var(--text-primary)]">Hubungi Saya</h2>
                <p className="text-xl font-serif text-[var(--accent)]">nawvalovsky@proton.me</p>
            </FadeContent>
        </div>
      );
      default: return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen text-[var(--text-primary)] overflow-hidden font-sans">
      {!selectedPost && (
        <Navbar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            currentTheme={theme}
            setTheme={setTheme}
        />
      )}
      <AnimatePresence mode="wait">
        <div key={activeTab} className="w-full h-full">
            {renderContent()}
        </div>
      </AnimatePresence>
    </div>
  );
}

export default App;

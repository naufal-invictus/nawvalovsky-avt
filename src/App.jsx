import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { LandingPage } from './pages/LandingPage';
import { BlogList } from './pages/BlogList';
import { ChapterReader } from './components/features/ChapterReader';
import { FadeContent } from './components/ui/FadeContent';
import { Mail, Users } from 'lucide-react';
import { useTheme } from './context/ThemeContext'; // Import Context

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);

  // HAPUS state lokal theme, gunakan context
  const { theme, setTheme } = useTheme();

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
                    {/* Update class ke glass-panel untuk keterbacaan */}
                    <div className="glass-panel p-8 rounded-2xl max-w-lg mx-auto">
                        <div className="w-16 h-16 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--accent)]">
                            <Users size={32} />
                        </div>
                        <h2 className="font-serif text-3xl mb-4 text-[var(--text-primary)]">Meet the Team</h2>
                        <p className="text-[var(--text-secondary)]">
                            The brilliant minds behind the code.
                        </p>
                    </div>
                </FadeContent>
            </div>
        );
      case 'contact': return (
        <div className="min-h-screen flex items-center justify-center px-6 text-center pt-20">
            <FadeContent>
                {/* Update class ke glass-panel */}
                <div className="glass-panel p-8 rounded-2xl max-w-lg mx-auto">
                    <div className="w-16 h-16 bg-[var(--bg-secondary)] border border-[var(--border)] rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--accent)]">
                        <Mail size={32} />
                    </div>
                    <h2 className="font-serif text-3xl mb-4 text-[var(--text-primary)]">Hubungi Saya</h2>
                    <p className="text-xl font-serif text-[var(--accent)]">nawvalovsky@proton.me</p>
                </div>
            </FadeContent>
        </div>
      );
      default: return <LandingPage />;
    }
  };

  return (
    // Hapus bg-[var(--bg-primary)] di sini karena sudah di-handle oleh body di index.css
   <div className="min-h-screen text-[var(--text-primary)] overflow-hidden font-sans bg-transparent transition-colors duration-500">
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

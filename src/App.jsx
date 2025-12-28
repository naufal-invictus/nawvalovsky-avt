import { useState } from 'react';
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

  const renderContent = () => {
    if (selectedPost) {
        return <ChapterReader chapter={selectedPost} onBack={() => setSelectedPost(null)} />;
    }

    switch (activeTab) {
      case 'home': return <LandingPage />;
      case 'blog': return <BlogList onSelectPost={setSelectedPost} />;
      case 'team':
        return (
            <div className="min-h-screen flex items-center justify-center px-6 text-center pt-20 bg-[var(--bg-primary)]">
                <FadeContent>
                    <div className="bg-[var(--bg-secondary)] border border-[var(--border)] p-12 rounded-2xl max-w-lg mx-auto">
                        <div className="w-16 h-16 bg-[var(--bg-primary)] border border-[var(--border)] rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--accent)]">
                            <Users size={32} />
                        </div>
                        <h2 className="font-display text-3xl mb-4 text-[var(--text-primary)]">Meet the Team</h2>
                        <p className="text-[var(--text-secondary)]">
                            Single Fighter for now.
                        </p>
                    </div>
                </FadeContent>
            </div>
        );
      case 'contact': return (
        <div className="min-h-screen flex items-center justify-center px-6 text-center pt-20 bg-[var(--bg-primary)]">
            <FadeContent>
                <div className="bg-[var(--bg-secondary)] border border-[var(--border)] p-12 rounded-2xl max-w-lg mx-auto">
                    <div className="w-16 h-16 bg-[var(--bg-primary)] border border-[var(--border)] rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--accent)]">
                        <Mail size={32} />
                    </div>
                    <h2 className="font-display text-3xl mb-4 text-[var(--text-primary)]">Hubungi Saya</h2>
                    <p className="text-xl font-serif text-[var(--accent)]">nawvalovsky@proton.me</p>
                </div>
            </FadeContent>
        </div>
      );
      default: return <LandingPage />;
    }
  };

  return (
   <div className="min-h-screen text-[var(--text-primary)] bg-[var(--bg-primary)] font-sans transition-colors duration-500">
      {!selectedPost && (
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      )}
      <AnimatePresence mode="wait">
        <div key={activeTab} className="w-full">
            {renderContent()}
        </div>
      </AnimatePresence>
    </div>
  );
}

export default App;

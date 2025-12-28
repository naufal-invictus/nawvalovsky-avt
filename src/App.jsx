import { useState, Suspense, lazy } from 'react'; // Import Suspense & Lazy
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LandingPage } from './pages/LandingPage';
import { BlogList } from './pages/BlogList';
import { ChapterReader } from './components/features/ChapterReader';
import { FadeContent } from './components/ui/FadeContent';
import { Mail, Users, Loader2 } from 'lucide-react'; // Tambah Loader icon
import { BottomSection } from './components/layout/BottomSection';

// Lazy Load halaman Apps
const AppList = lazy(() => import('./pages/AppList'));

// Komponen Loading sederhana saat transisi lazy load
const LoadingFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <Loader2 className="animate-spin text-[var(--accent)]" size={32} />
  </div>
);

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);

  const renderContent = () => {
    if (selectedPost) {
        return <ChapterReader chapter={selectedPost} onBack={() => setSelectedPost(null)} />;
    }

    switch (activeTab) {
      case 'home': return <LandingPage />;

      // Case baru untuk Apps dengan Suspense
      case 'apps': return (
        <Suspense fallback={<LoadingFallback />}>
          <AppList />
        </Suspense>
      );

      case 'blog': return <BlogList onSelectPost={setSelectedPost} />;
      case 'team': return (
          <div className="min-h-[60vh] flex items-center justify-center px-6 text-center pt-20">
              <FadeContent>
                  <div className="bg-[var(--bg-card)] border border-[var(--border-card)] p-12 rounded-2xl max-w-lg mx-auto shadow-sm">
                      <div className="w-16 h-16 bg-[var(--bg-surface)] border border-[var(--border-dim)] rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--accent)]">
                          <Users size={32} />
                      </div>
                      <h2 className="font-display text-3xl mb-4 text-[var(--text-primary)] font-bold">Meet the Team</h2>
                      <p className="text-[var(--text-secondary)]">Single Fighter for now.</p>
                  </div>
              </FadeContent>
          </div>
      );
      case 'contact': return (
        <div className="min-h-[60vh] flex items-center justify-center px-6 text-center pt-20">
            <FadeContent>
                <div className="bg-[var(--bg-card)] border border-[var(--border-card)] p-12 rounded-2xl max-w-lg mx-auto shadow-sm">
                    <div className="w-16 h-16 bg-[var(--bg-surface)] border border-[var(--border-dim)] rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--accent)]">
                        <Mail size={32} />
                    </div>
                    <h2 className="font-display text-3xl mb-4 text-[var(--text-primary)] font-bold">Hubungi Saya</h2>
                    <p className="text-xl font-serif text-[var(--link-normal)]">nawvalovsky@proton.me</p>
                </div>
            </FadeContent>
        </div>
      );
      default: return <LandingPage />;
    }
  };

  return (
   <div className="min-h-screen flex flex-col text-[var(--text-body)] bg-[var(--bg-main)] font-sans transition-colors duration-500">
      {!selectedPost && (
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      )}

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <div key={activeTab} className="w-full">
              {renderContent()}
          </div>
        </AnimatePresence>
      </main>

      {!selectedPost && activeTab === 'home' && <BottomSection />}
      {!selectedPost && <Footer />}
    </div>
  );
}

export default App;

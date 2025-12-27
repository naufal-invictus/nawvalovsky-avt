import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { LandingPage } from './pages/LandingPage';
import { BlogList } from './pages/BlogList';
import { ChapterReader } from './components/features/ChapterReader';
import { FadeContent } from './components/ui/FadeContent';
import { Mail } from 'lucide-react';

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

      case 'contact': return (
        <div className="min-h-screen flex items-center justify-center px-6 text-center bg-[#1A1918]">
            <FadeContent>
                <div className="w-16 h-16 bg-[#252422] border border-[#3A3936] rounded-full flex items-center justify-center mx-auto mb-6 text-[#D4AF37]">
                    <Mail size={32} />
                </div>
                <h2 className="font-serif text-3xl mb-4 text-[#F7F2E8]">Hubungi Saya</h2>
                <p className="text-[#A8A29E] max-w-md mx-auto mb-8">
                    Silakan kirim email untuk kerjasama atau pertanyaan.
                </p>
                <div className="space-y-2">
                    <p className="text-xl font-serif text-[#D4AF37]">nawvalovsky@proton.me</p>
                    <p className="text-sm text-[#666]">Bandung, Indonesia</p>
                </div>
            </FadeContent>
        </div>
      );

      default: return <LandingPage />;
    }
  };

  return (
    <div className="bg-[#1A1918] min-h-screen text-[#F7F2E8] selection:bg-[#D4AF37] selection:text-[#1A1918]">
      {renderContent()}

      {!selectedPost && (
        <>
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
            <footer className="py-8 text-center bg-[#1A1918] border-t border-[#3A3936] mb-20 md:mb-0">
                <p className="text-[#666] text-[10px] uppercase tracking-[0.2em]">
                    © 2025 Nawvalovsky[]. All Rights Reserved.
                </p>
            </footer>
        </>
      )}
    </div>
  );
}

export default App;

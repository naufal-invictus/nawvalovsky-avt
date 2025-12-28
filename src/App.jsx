import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { LandingPage } from './pages/LandingPage';
import { BlogList } from './pages/BlogList';
import { ChapterReader } from './components/features/ChapterReader';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './components/ui/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);

  const renderContent = () => {
    if (selectedPost) {
        return <ChapterReader chapter={selectedPost} onBack={() => setSelectedPost(null)} />;
    }

    switch (activeTab) {
      case 'home': return <LandingPage />;
      case 'blog': return <BlogList onSelectPost={setSelectedPost} />;
      case 'team': return <div className="p-20 text-center font-mono text-[#00ff41]">DATA REDACTED // TEAM INFO HIDDEN</div>;
      case 'contact': return <div className="p-20 text-center font-mono text-[#00ff41]">SECURE CONNECTION ESTABLISHED<br/>nawvalovsky@proton.me</div>;
      default: return <LandingPage />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-[#00ff41] selection:text-black">

        {loading ? (
          <LoadingScreen onComplete={() => setLoading(false)} />
        ) : (
          <>
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
            <main className="w-full h-full">
              {renderContent()}
            </main>
          </>
        )}

      </div>
    </ThemeProvider>
  );
}

export default App;

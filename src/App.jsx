import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LandingPage } from './pages/LandingPage';
import { BlogList } from './pages/BlogList';
import { ChapterWrapper } from './components/features/ChapterWrapper';
import AppList from './pages/AppList';
import { BottomSection } from './components/layout/BottomSection';

// Import Applikasi Kamu
import { TobatkanTypology } from './components/apps/TobatkanTypology';
import { NicknameRoaster } from './components/apps/NicknameRoaster';
import { Mail, Users } from 'lucide-react';

function AppContent() {
  const location = useLocation();

  // Sembunyikan Footer/BottomSection jika sedang di dalam mode baca/aplikasi penuh
  const isHideBottom = location.pathname.startsWith('/blog/') || location.pathname.startsWith('/apps/');

  return (
    <div className="min-h-screen flex flex-col text-[var(--text-body)] bg-[var(--bg-main)] font-sans transition-colors duration-500">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          {/* Halaman Utama */}
          <Route path="/" element={<LandingPage />} />

          {/* Halaman List Apps */}
          <Route path="/apps" element={<AppList />} />

          {/* Routing Spesifik untuk Apps */}
          <Route
            path="/apps/tobatkan-typology"
            element={<TobatkanTypology onBack={() => window.location.href = '/apps'} />}
          />
          <Route
            path="/apps/nickname-roaster"
            element={<NicknameRoaster onBack={() => window.location.href = '/apps'} />}
          />

          {/* Halaman Blog */}
          <Route path="/blog" element={<BlogList />} />

          {/* Routing Dinamis untuk Blog */}
          <Route path="/blog/:slug" element={<ChapterWrapper />} />

          {/* Halaman Statis Lainnya (Tanpa FadeContent) */}
          <Route path="/team" element={
             <div className="min-h-[60vh] flex items-center justify-center px-6 text-center pt-20">
                  <div className="bg-[var(--bg-card)] border border-[var(--border-card)] p-12 rounded-2xl max-w-lg mx-auto shadow-sm">
                      <div className="w-16 h-16 bg-[var(--bg-surface)] border border-[var(--border-dim)] rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--accent)]">
                          <Users size={32} />
                      </div>
                      <h2 className="font-display text-3xl mb-4 text-[var(--text-primary)] font-bold">Meet the Team</h2>
                      <p className="text-[var(--text-secondary)]">Single Fighter for now.</p>
                  </div>
          </div>
          } />

          <Route path="/contact" element={
            <div className="min-h-[60vh] flex items-center justify-center px-6 text-center pt-20">
                <div className="bg-[var(--bg-card)] border border-[var(--border-card)] p-12 rounded-2xl max-w-lg mx-auto shadow-sm">
                    <div className="w-16 h-16 bg-[var(--bg-surface)] border border-[var(--border-dim)] rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--accent)]">
                        <Mail size={32} />
                    </div>
                    <h2 className="font-display text-3xl mb-4 text-[var(--text-primary)] font-bold">Hubungi Saya</h2>
                    <p className="text-xl font-serif text-[var(--link-normal)]">nawvalovsky@proton.me</p>
                </div>
        </div>
          } />
        </Routes>
      </main>

      {!isHideBottom && location.pathname === '/' && <BottomSection />}
      {!isHideBottom && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

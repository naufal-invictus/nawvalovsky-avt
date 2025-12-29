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
import { FadeContent } from './components/ui/FadeContent';
import { Mail, Users } from 'lucide-react';

function AppContent() {
  const location = useLocation();

  // Sembunyikan Footer/BottomSection jika sedang di dalam mode baca/aplikasi penuh
  // Note: Karena menggunakan HashRouter, pathname mungkin perlu penyesuaian di beberapa kasus logic manual,
  // tapi useLocation() dari react-router-dom otomatis menanganinya dengan benar.
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
          {/* Untuk navigasi manual window.location.href, kita ganti ke navigate hook atau sesuaikan linknya */}
          <Route
            path="/apps/tobatkan-typology"
            element={<TobatkanTypology onBack={() => window.location.href = '#/apps'} />}
          />
          <Route
            path="/apps/nickname-roaster"
            element={<NicknameRoaster onBack={() => window.location.href = '#/apps'} />}
          />

          {/* Halaman Blog */}
          <Route path="/blog" element={<BlogList />} />

          {/* Routing Dinamis untuk Blog (Contoh: /#/blog/cysec-101) */}
          <Route path="/blog/:slug" element={<ChapterWrapper />} />

          {/* Halaman Statis Lainnya */}
          <Route path="/team" element={
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
          } />

          <Route path="/contact" element={
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
          } />
        </Routes>
      </main>

      {/* Logic tampilan BottomSection disesuaikan agar hanya muncul di Home */}
      {!isHideBottom && location.pathname === '/' && <BottomSection />}
      {!isHideBottom && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    // Menggunakan HashRouter memperbaiki masalah 404 saat refresh di semua static hosting
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

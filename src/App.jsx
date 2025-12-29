import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react'; // IMPORT INI PENTING

// Layout tetap di-load di awal (Eager Loading)
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BottomSection } from './components/layout/BottomSection';

// Ikon
import { Mail, Users } from 'lucide-react';

// LAZY LOADING: Import halaman hanya saat dibutuhkan
// Catatan: Pastikan komponen di file aslinya menggunakan "export default" atau sesuaikan importnya
const LandingPage = lazy(() => import('./pages/LandingPage').then(module => ({ default: module.LandingPage })));
const BlogList = lazy(() => import('./pages/BlogList').then(module => ({ default: module.BlogList })));
const AppList = lazy(() => import('./pages/AppList')); // Asumsi ini export default karena "import AppList" di kode lama tidak pakai {}
const ChapterWrapper = lazy(() => import('./components/features/ChapterWrapper').then(module => ({ default: module.ChapterWrapper })));

// Apps
const TobatkanTypology = lazy(() => import('./components/apps/TobatkanTypology').then(module => ({ default: module.TobatkanTypology })));
const NicknameRoaster = lazy(() => import('./components/apps/NicknameRoaster').then(module => ({ default: module.NicknameRoaster })));

function AppContent() {
  const location = useLocation();
  const isHideBottom = location.pathname.startsWith('/blog/') || location.pathname.startsWith('/apps/');

  return (
    <div className="min-h-screen flex flex-col text-[var(--text-body)] bg-[var(--bg-main)] font-sans transition-colors duration-500">
      <Navbar />

      <main className="flex-grow">
        {/* Suspense akan menampilkan LoadingScreen saat pindah halaman */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/apps" element={<AppList />} />

            <Route
              path="/apps/tobatkan-typology"
              element={<TobatkanTypology onBack={() => window.location.href = '/apps'} />}
            />
            <Route
              path="/apps/nickname-roaster"
              element={<NicknameRoaster onBack={() => window.location.href = '/apps'} />}
            />

            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<ChapterWrapper />} />

            {/* Halaman Statis Ringan tidak perlu di-lazy load jika kodenya sedikit, tapi dirapikan lebih baik */}
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

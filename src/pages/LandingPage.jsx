import { Suspense, lazy } from 'react';

// EAGER LOAD (Muat Langsung): Hanya HeroSection karena ini LCP (yang pertama dilihat user)
import HeroSection from '../components/landing/HeroSection';
// Skeleton/Loading kecil untuk komponen lazy
const SectionLoader = () => <div className="w-full h-48 animate-pulse bg-gray-100/50 rounded-lg my-12" />;

// LAZY LOAD (Muat Nanti): Komponen di bawah layar
// Ini akan mengurangi beban download awal secara drastis
const PersonaSection = lazy(() => import('../components/landing/PersonaSection').then(module => ({ default: module.PersonaSection })));
const BioSection = lazy(() => import('../components/landing/BioSection'));
const ProjectSection = lazy(() => import('../components/landing/ProjectSection'));
const LinuxSection = lazy(() => import('../components/landing/LinuxSection'));
const InterestSection = lazy(() => import('../components/landing/InterestSection'));

export const LandingPage = () => {
  return (
    <div className="w-full">
        {/* Render langsung agar LCP cepat */}
        <HeroSection />

        {/* Load komponen bawah hanya saat dibutuhkan browser */}
        <Suspense fallback={<SectionLoader />}>
            <PersonaSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
            <BioSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
            <ProjectSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
            <LinuxSection />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
            <InterestSection />
        </Suspense>
    </div>
  );
};

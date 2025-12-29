import HeroSection from '../components/landing/HeroSection';
import {PersonaSection} from '../components/landing/PersonaSection'; // <--- IMPORT INI
import BioSection from '../components/landing/BioSection';
import ProjectSection from '../components/landing/ProjectSection';
import LinuxSection from '../components/landing/LinuxSection';
import InterestSection from '../components/landing/InterestSection';

export const LandingPage = () => {
  return (
    <div className="w-full">

        <HeroSection />

        {/* SISIPKAN SECTION BARU DI SINI */}
        <PersonaSection />

        <BioSection />
        <ProjectSection />
        <LinuxSection />
        <InterestSection />

    </div>
  );
};

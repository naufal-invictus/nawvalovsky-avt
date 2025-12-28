import HeroSection from '../components/landing/HeroSection';
import BioSection from '../components/landing/BioSection';
import ProjectSection from '../components/landing/ProjectSection';
import LinuxSection from '../components/landing/LinuxSection'; // Ganti GallerySection
import InterestSection from '../components/landing/InterestSection';

export const LandingPage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <BioSection />
      <ProjectSection />
      <LinuxSection /> {/* Section Linux Environments */}
      <InterestSection />
    </div>
  );
};

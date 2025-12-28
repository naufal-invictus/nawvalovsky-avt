import HeroSection from '../components/landing/HeroSection';
import BioSection from '../components/landing/BioSection';
import FooterRich from '../components/landing/FooterRich';
import ProjectSection from '../components/landing/ProjectSection';
export const LandingPage = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <BioSection />
      <ProjectSection />
      {/* FooterRich sudah ada dari langkah sebelumnya, pastikan filenya ada */}
      <FooterRich />
    </div>
  );
};

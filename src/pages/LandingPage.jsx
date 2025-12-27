import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Import Components
import ProfileCard from '../components/landing/ProfileCard';
import ProjectList from '../components/landing/ProjectList';
import WelcomeMarquee from '../components/landing/WelcomeMarquee';
import TerminalSection from '../components/landing/TerminalSection';
import ActionToolbar from '../components/landing/ActionToolbar';
import MusicPlayer from '../components/landing/MusicPlayer';
import SystemMonitor from '../components/landing/SystemMonitor';
import ThemeSwitcher from '../components/landing/ThemeSwitcher';
import SocialLinks from '../components/landing/SocialLinks';
import FooterSection from '../components/landing/FooterSection';

export const LandingPage = () => {
  // Global Monitoring State
  // Disimpan disini agar angka sinkron antara Terminal, Monitor Widget, dan Footer
  const [sysStats, setSysStats] = useState({ cpu: 14, ram: 4.2, ping: 24 });

  useEffect(() => {
    const interval = setInterval(() => {
      setSysStats({
        cpu: Math.floor(Math.random() * (35 - 12) + 12),
        ram: (Math.random() * (6.5 - 3.8) + 3.8).toFixed(1),
        ping: Math.floor(Math.random() * (45 - 18) + 18)
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="h-screen w-full overflow-hidden p-3 pt-24 font-sans text-sm"
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        @keyframes music-beat {
          0%, 100% { height: 4px; }
          50% { height: 16px; }
        }
        .animate-music-beat {
          animation: music-beat 0.8s ease-in-out infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}</style>

      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[var(--bg-primary)]/60 backdrop-blur-[1px] -z-10 transition-colors duration-700" />

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 h-full max-w-[1800px] mx-auto pb-1 min-h-0">

        {/* COLUMN 1: Profile & Projects */}
        <div className="lg:col-span-3 flex flex-col gap-3 h-full overflow-hidden min-h-0">
          <ProfileCard />
          <ProjectList />
        </div>

        {/* COLUMN 2: Center (Marquee, Terminal, CTA) */}
        <div className="lg:col-span-6 flex flex-col gap-3 h-full min-h-0">
          <WelcomeMarquee />
          {/* Pass stats to terminal for dynamic Neofetch */}
          <TerminalSection stats={sysStats} />
          <ActionToolbar />
        </div>

        {/* COLUMN 3: Right (Tools & Footer) */}
        <div className="lg:col-span-3 flex flex-col gap-3 h-full min-h-0">
          <MusicPlayer />
          <SystemMonitor stats={sysStats} />
          <ThemeSwitcher />
          <SocialLinks />
          <FooterSection stats={sysStats} />
        </div>

      </div>
    </motion.div>
  );
};

// FIX: Menggunakan Default Import (tanpa kurung kurawal)
import TerminalSection from '../components/landing/TerminalSection';
import SystemMonitor from '../components/landing/SystemMonitor';
import ProjectList from '../components/landing/ProjectList';
import ProfileCard from '../components/landing/ProfileCard';
import MusicPlayer from '../components/landing/MusicPlayer';
import ActionToolbar from '../components/landing/ActionToolbar';

export const LandingPage = () => {
  return (
    <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT COLUMN */}
        <div className="space-y-6">
          <div className="border border-[var(--border)] bg-[var(--bg-secondary)] rounded-xl overflow-hidden shadow-lg">
            <ProfileCard />
          </div>

          <ActionToolbar />

          <div className="border border-[var(--border)] bg-[var(--bg-secondary)] rounded-xl overflow-hidden shadow-lg relative z-10">
            <MusicPlayer />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-2 space-y-6">
          {/* Terminal Section */}
          <div className="border border-[var(--border)] bg-[var(--bg-secondary)]/50 rounded-xl p-1 overflow-hidden">
             <TerminalSection stats={{ cpu: 12, ram: 8.4, ping: 24 }} />
          </div>

          {/* Monitor Section */}
          <div className="border border-[var(--border)] bg-[var(--bg-secondary)]/30 rounded-xl p-4">
             <SystemMonitor stats={{ cpu: 12, ram: 8.4, ping: 24 }} />
          </div>

          {/* Projects Section */}
          <div className="border border-[var(--border)] bg-[var(--bg-secondary)]/30 rounded-xl p-4">
            <h3 className="font-mono text-[var(--accent)] text-xs mb-4 border-b border-[var(--border)] pb-2 uppercase tracking-widest">
              // ACTIVE_DEPLOYMENTS
            </h3>
            <ProjectList />
          </div>
        </div>

      </div>
    </div>
  );
};

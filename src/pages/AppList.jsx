import { useState } from 'react';
import { TobatkanTypology } from '../components/apps/TobatkanTypology';
import { FadeContent } from '../components/ui/FadeContent';
import { Cpu, ArrowRight, Sparkles, AppWindow } from 'lucide-react';

export default function AppList() {
  const [activeApp, setActiveApp] = useState(null);

  // Jika ada app yang dipilih, render app tersebut
  if (activeApp === 'tobatkan-typology') {
    return <TobatkanTypology onBack={() => setActiveApp(null)} />;
  }

  const apps = [
    {
      id: 'tobatkan-typology',
      title: 'Tobatkan Typology',
      desc: 'Roasting machine buat lu yang kebanyakan ngomongin MBTI tapi lupa napak tanah.',
      icon: Cpu,
      status: 'Live',
      color: 'bg-blue-500' // Warna ikon spesifik
    },
    // Placeholder untuk aplikasi masa depan
  ];

  return (
    // FIX:
    // 1. min-h-screen & flex-center: Agar konten tepat di tengah layar (vertikal & horizontal)
    // 2. pt-32: Memberi jarak aman dari Navbar agar tidak overlap
    <div className="min-h-screen w-full bg-[var(--bg-main)] flex flex-col justify-center pt-32 pb-12">

      <div className="container-safe">
        <FadeContent>

          {/* Header Section - Mengikuti gaya BlogList */}
          <div className="text-center mb-16 space-y-4">


            <h1 className="font-display text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
              Web Applications
            </h1>

            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto leading-relaxed font-serif">
              Kumpulan tools eksperimental dan micro-apps yang dibangun untuk menguji batas kewarasan teknologi.
            </p>
          </div>

          {/* Grid App List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app) => (
              <div
                key={app.id}
                onClick={() => setActiveApp(app.id)}
                className="group relative bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[var(--accent)] p-8 rounded-2xl transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col h-full"
              >
                {/* Background Decoration on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--bg-surface)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${app.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <app.icon size={28} />
                    </div>

                    {/* Status Badge */}
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold border border-emerald-200 uppercase tracking-wide">
                      {app.status}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {app.title}
                  </h3>

                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8 flex-grow">
                    {app.desc}
                  </p>

                  <div className="flex items-center text-[var(--text-primary)] font-bold text-xs uppercase tracking-widest group-hover:text-[var(--accent)] transition-colors pt-4 border-t border-[var(--border-dim)] border-dashed">
                    Buka Aplikasi <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}

            {/* Empty State / Coming Soon Placeholder (Optional aesthetic) */}
            <div className="bg-[var(--bg-surface)]/50 border border-dashed border-[var(--border-dim)] p-8 rounded-2xl flex flex-col items-center justify-center text-center opacity-60 hover:opacity-100 transition-opacity">
               <div className="w-12 h-12 bg-[var(--border-dim)]/20 rounded-full flex items-center justify-center mb-4 text-[var(--text-secondary)]">
                  <AppWindow size={24} />
               </div>
               <p className="text-sm font-bold text-[var(--text-secondary)]">More coming soon...</p>
            </div>

          </div>
        </FadeContent>
      </div>
    </div>
  );
}

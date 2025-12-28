import React from 'react';
import { Award, Star, CheckCircle } from 'lucide-react';

export const Certificate = ({ userName, courseTitle, date }) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-[var(--bg-primary)] p-1 rounded-none md:rounded-xl shadow-2xl overflow-hidden relative selection:bg-none">
      {/* Decorative Border Layer - Menggunakan border var(--accent) */}
      <div className="border-[8px] border-double border-[var(--accent)] h-full p-6 relative bg-[var(--bg-secondary)]">

        {/* Corner Decorations */}
        <div className="absolute top-2 left-2 text-[var(--accent)] opacity-50"><Star size={24} /></div>
        <div className="absolute top-2 right-2 text-[var(--accent)] opacity-50"><Star size={24} /></div>
        <div className="absolute bottom-2 left-2 text-[var(--accent)] opacity-50"><Star size={24} /></div>
        <div className="absolute bottom-2 right-2 text-[var(--accent)] opacity-50"><Star size={24} /></div>

        {/* Content */}
        <div className="text-center flex flex-col items-center justify-center h-full py-8 space-y-6">

            {/* Header / Logo Area */}
            <div className="mb-2">
                <div className="w-16 h-16 bg-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg text-[var(--bg-primary)]">
                    <Award size={32} />
                </div>
                <h3 className="text-[var(--accent)] font-bold tracking-[0.3em] text-xs uppercase font-sans">
                    Nawvalovsky Academy
                </h3>
            </div>

            {/* Title */}
            <div>
                <h1 className="font-serif text-3xl text-[var(--text-primary)] mb-1">Sertifikat Apresiasi</h1>
                <div className="h-1 w-20 bg-[var(--accent)] mx-auto rounded-full"></div>
            </div>

            {/* User Name */}
            <div className="w-full">
                <p className="text-[var(--text-secondary)] text-xs font-sans italic mb-2">Diberikan kepada:</p>
                <h2 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)] font-bold border-b border-dashed border-[var(--border)] pb-2 px-2 break-words">
                    {userName}
                </h2>
            </div>

            {/* Course Info */}
            <div className="w-full">
                <p className="text-[var(--text-secondary)] text-xs font-sans italic mb-1">Telah membaca jurnal:</p>
                <p className="text-[var(--accent)] font-bold text-lg leading-tight">
                    {courseTitle}
                </p>
            </div>

            {/* Footer / Validation */}
            <div className="mt-8 flex justify-between items-end w-full border-t border-[var(--border)] pt-4">
                <div className="text-left">
                    <p className="text-[10px] text-[var(--text-secondary)] uppercase tracking-widest">Tanggal</p>
                    <p className="text-xs font-bold text-[var(--text-primary)]">{date}</p>
                </div>
                <div className="text-right">
                    <div className="flex items-center gap-1 justify-end text-[var(--accent)]">
                        <CheckCircle size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Verified</span>
                    </div>
                    <p className="text-[10px] text-[var(--text-secondary)]">Nawvalovsky Web</p>
                </div>
            </div>
        </div>

        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-0"
            style={{
                backgroundImage: `radial-gradient(circle, var(--text-primary) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
            }}>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Mail, Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { PROFILE } from '../../data/personalData';

export const BottomSection = () => {
  return (
    <section className="py-20 bg-[var(--bg-main)] border-t border-[var(--border-dim)]">
      <div className="container-safe px-6 md:px-8 text-center">

        {/* --- CTA SECTION --- */}
        <div className="max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6 leading-tight">
            I am currently open for new projects and <span className="text-[var(--link-normal)]">technical consultations.</span>
          </h2>
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[var(--btn-primary-bg)] text-white rounded-full font-bold hover:bg-[var(--btn-primary-hover)] transition-all shadow-lg shadow-blue-200 group text-sm"
          >
            Start a Conversation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* --- SOCIAL LINKS SECTION --- */}
        <div className="flex flex-col items-center gap-6">
          <div className="h-px w-12 bg-[var(--border-dim)]"></div>
          <div className="flex items-center gap-8">
            <a
              href="https://facebook.com/arpharazons"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--link-normal)] transition-colors flex flex-col items-center gap-2 group"
            >
              <Facebook size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Facebook</span>
            </a>
            <a
              href="https://www.linkedin.com/in/naufalhafizh4657/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--link-normal)] transition-colors flex flex-col items-center gap-2 group"
            >
              <Linkedin size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="text-[var(--text-secondary)] hover:text-[var(--link-normal)] transition-colors flex flex-col items-center gap-2 group"
            >
              <Mail size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BottomSection;

import React from 'react';
import { Book, Heart, Activity, Target } from 'lucide-react';

const InterestSection = () => {
  const interests = {
    books: ["The Pragmatic Programmer", "Digital Fortress", "Clean Architecture", "Ghost in the Wires", "Zero to One"],
    topics: ["Cybersecurity", "Cloud Computing", "AI/ML Integration", "Linux Kernel", "Network Protocols"],
    hobbies: ["Photography", "IEM Auditing", "Mountain Biking", "Mechanical Keyboards", "Retro Gaming"],
    focus: ["OSCP Certification", "Cloud Security Automation", "Open Source Contribution"]
  };

  return (
    <section className="py-16 bg-[var(--bg-surface)] border-t border-[var(--border-dim)]">
      <div className="container-safe px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Focus Utama (Highlighted) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <Target size={18} className="text-[var(--link-normal)]" />
              <h4 className="font-display font-bold text-sm uppercase tracking-wider">Current_Focus</h4>
            </div>
            <ul className="space-y-2">
              {interests.focus.map((item, i) => (
                <li key={i} className="text-[13px] font-semibold text-[var(--link-normal)] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--link-normal)] opacity-60"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Favorit Buku */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <Book size={18} className="text-[var(--accent)]" />
              <h4 className="font-display font-bold text-sm uppercase tracking-wider">Reading_List</h4>
            </div>
            <ul className="space-y-2">
              {interests.books.map((item, i) => (
                <li key={i} className="text-[12px] text-[var(--text-secondary)] border-l border-[var(--border-dim)] pl-3 hover:border-[var(--accent)] transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Minat */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <Heart size={18} className="text-[var(--accent)]" />
              <h4 className="font-display font-bold text-sm uppercase tracking-wider">Core_Interests</h4>
            </div>
            <ul className="space-y-2">
              {interests.topics.map((item, i) => (
                <li key={i} className="text-[12px] text-[var(--text-secondary)] flex items-center gap-2">
                  <span className="text-[10px] opacity-40 font-mono">[{i+1}]</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Hobi */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <Activity size={18} className="text-[var(--accent)]" />
              <h4 className="font-display font-bold text-sm uppercase tracking-wider">Off_Duty</h4>
            </div>
            <ul className="space-y-2">
              {interests.hobbies.map((item, i) => (
                <li key={i} className="text-[12px] text-[var(--text-secondary)] italic">
                  # {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InterestSection;

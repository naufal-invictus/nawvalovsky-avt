import React from 'react';
import { Book, Heart, Activity, Target } from 'lucide-react';

const InterestSection = () => {
  const interests = {
    books: ["Overthinking", "Insecure", "Super Advice", "WW2 Plans That Never Happened", "Stoicism"],
    topics: ["IT Support", "Cloud Computing", "Geopolitics", "Linux", "Network"],
    hobbies: ["HEMA", "Reading", "Mountain Biking", "Mechanical Engineering CAD", "Strategy Gaming"],
    focus: ["OSCP Certification", "CASN", "CPNS"]
  };

  return (
    <section className="py-16 bg-[var(--bg-surface)] border-t border-[var(--border-dim)]">
      <div className="container-safe px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Focus Utama */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <Target size={18} className="text-[var(--link-normal)]" />
              <h4 className="font-display font-bold text-sm uppercase tracking-wider">Current_Focus</h4>
            </div>
            <ul className="space-y-2">
              {interests.focus.map((item, i) => (
                <li key={i} className="text-[13px] font-semibold text-[var(--link-normal)] flex items-center gap-2">
                  {/* CONTRAST FIX: Opacity increased to 100 */}
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--link-normal)]"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Favorit Buku */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[var(--text-primary)]">
              <Book size={18} className="text-[var(--accent)]" />
              <h4 className="font-display font-bold text-sm uppercase tracking-wider">Favourite Books</h4>
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
                   {/* CONTRAST FIX: Opacity increased to 70 */}
                  <span className="text-[10px] opacity-70 font-mono">[{i+1}]</span>
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

// HAPUS: import { useRef } from 'react'; (Karena tidak dipakai)
// PERTAHANKAN: motion (Karena dipakai di <motion.div> bawah)
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Terminal, Mail } from 'lucide-react';
import { FadeContent } from '../components/ui/FadeContent';
import { MagnetButton } from '../components/ui/MagnetButton';
import { PROFILE, PROJECTS, HOBBIES } from '../data/personalData';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#1A1918] text-[#F7F2E8] overflow-x-hidden font-sans selection:bg-[#D4AF37] selection:text-[#1A1918]">

      {/* SECTION 1: HEADER & PROFILE */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20">
         <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-20 bg-gradient-to-br from-[#D4AF37] via-[#E6C2BF] to-[#C9D6DF]" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none opacity-10 bg-gradient-to-tr from-[#B5C99A] via-[#F2E2CE] to-[#D4AF37]" />

         <div className="max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24 relative z-10">
            <div className="flex-1 text-center md:text-left space-y-6">
                <FadeContent>
                    <div className="inline-block px-3 py-1 mb-4 rounded-full border border-[#D4AF37]/30 text-[#F2E2CE] text-[10px] font-bold tracking-[0.2em] uppercase bg-[#252422]/50 backdrop-blur-sm">
                        System Online
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-[#F7F2E8] via-[#E6C2BF] to-[#D4AF37]">
                        {PROFILE.name}
                    </h1>

                    <p className="text-xl text-[#CCC5B9] font-light max-w-lg mx-auto md:mx-0">
                        {PROFILE.role}
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-4">
                        {PROFILE.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1.5 bg-[#252422] border border-[#3A3936] text-[#CCC5B9] text-xs font-bold uppercase tracking-wider rounded-md hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-default">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="pt-8 flex justify-center md:justify-start gap-4">
                         <MagnetButton onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})}>
                            Explore Profile
                         </MagnetButton>
                    </div>
                </FadeContent>
            </div>

            <div className="w-full max-w-[350px] md:max-w-[400px] relative group">
                <FadeContent delay={0.2}>
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden border-[2px] border-[#3A3936] shadow-2xl shadow-[#000]/50 relative z-10 bg-[#252422]">
                         <img
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
                            alt="Profile"
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                         />
                    </div>
                    <div className="absolute -inset-4 border border-[#D4AF37]/20 rounded-3xl -z-10 scale-95 group-hover:scale-100 transition-transform duration-500" />
                </FadeContent>
            </div>
         </div>
      </section>

      {/* SECTION 2: ABOUT & SKILLS */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
         <FadeContent>
             <div className="grid md:grid-cols-2 gap-16">
                 <div>
                     <h2 className="font-serif text-3xl mb-6 text-[#D4AF37]">01. About Me</h2>
                     <p className="text-[#CCC5B9] leading-relaxed text-lg mb-8">
                         {PROFILE.about}
                     </p>

                     <div className="space-y-4">
                        <h3 className="font-bold text-sm uppercase tracking-widest text-[#F7F2E8]">Certifications</h3>
                        {PROFILE.certs.map((cert, i) => (
                             <div key={i} className="flex items-center gap-3 text-[#A8A29E]">
                                 <div className="w-1.5 h-1.5 bg-[#B5C99A] rounded-full"/>
                                 {cert}
                             </div>
                         ))}
                     </div>
                 </div>

                 <div className="bg-[#252422] p-8 rounded-2xl shadow-lg border border-[#3A3936]">
                     <h3 className="font-serif text-2xl mb-6 text-[#F7F2E8]">Technical Arsenal</h3>
                     <div className="flex flex-wrap gap-2">
                         {PROFILE.skills.map((skill, i) => (
                             <span key={i} className="px-3 py-2 bg-[#1A1918] text-[#CCC5B9] text-sm border border-[#3A3936] rounded hover:bg-[#D4AF37] hover:text-[#1A1918] hover:border-[#D4AF37] transition-all cursor-default">
                                 {skill}
                             </span>
                         ))}
                     </div>
                 </div>
             </div>
         </FadeContent>
      </section>

      {/* SECTION 3: PROJECTS CAROUSEL */}
      <section className="py-24 bg-[#1F1E1D] border-y border-[#3A3936] overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 mb-10 flex items-end justify-between">
             <div>
                 <span className="text-[#E6C2BF] font-bold tracking-widest text-xs uppercase">Selected Works</span>
                 <h2 className="font-serif text-4xl mt-2 text-[#F7F2E8]">My Projects</h2>
             </div>
             <div className="hidden md:flex gap-2 text-[#8A8A8A] text-xs uppercase tracking-wider items-center">
                 Scroll Horizontal <ArrowUpRight size={14}/>
             </div>
         </div>

         <div className="flex gap-6 overflow-x-auto pb-12 px-6 md:px-[max(2rem,calc((100vw-80rem)/2))] snap-x snap-mandatory scroll-smooth" style={{ scrollbarWidth: 'none' }}>
             {PROJECTS.map((project) => (
                 <motion.div
                    key={project.id}
                    className="min-w-[85vw] md:min-w-[400px] snap-center bg-[#252422] p-4 rounded-2xl border border-[#3A3936] group hover:border-[#D4AF37]/50 transition-colors"
                    whileHover={{ y: -5 }}
                 >
                     <div className="aspect-video overflow-hidden rounded-xl mb-4 relative">
                         <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"/>
                         <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"/>
                     </div>

                     <div className="flex gap-2 mb-3 flex-wrap">
                        {project.tags.map(t => (
                            <span key={t} className="text-[10px] uppercase font-bold text-[#1A1918] bg-[#F2E2CE] px-2 py-1 rounded">{t}</span>
                        ))}
                     </div>
                     <h3 className="font-serif text-2xl mb-2 text-[#F7F2E8]">{project.title}</h3>
                     <p className="text-[#A8A29E] text-sm leading-relaxed mb-4">{project.desc}</p>
                 </motion.div>
             ))}
         </div>
      </section>

      {/* SECTION 4: HOBBY & FOCUS */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
         <FadeContent>
             <div className="text-center mb-16">
                <h2 className="font-serif text-3xl mb-2 text-[#F7F2E8]">Personal Interests</h2>
                <p className="text-[#8A8A8A]">Beyond the code.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                 {HOBBIES.map((hobby, i) => (
                     <div key={i} className="p-6 rounded-xl bg-[#252422] border border-[#3A3936] text-center hover:shadow-lg hover:shadow-[#D4AF37]/5 transition-all group">
                         <div className="text-3xl mb-3 grayscale group-hover:grayscale-0 transition-all">{hobby.icon}</div>
                         <h4 className="font-bold text-[#F7F2E8] text-sm mb-1">{hobby.title}</h4>
                         <p className="text-xs text-[#A8A29E]">{hobby.desc}</p>
                     </div>
                 ))}
             </div>

             <div className="bg-gradient-to-r from-[#252422] to-[#1F1E1D] text-[#F7F2E8] p-8 md:p-10 rounded-2xl relative overflow-hidden flex items-center justify-between border border-[#3A3936]">
                 <div className="relative z-10">
                     <h3 className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs mb-3">Current Focus</h3>
                     <p className="font-serif text-xl italic opacity-90 max-w-lg">
                         "Mendedikasikan waktu untuk eksplorasi Cloud Architecture dan membaca buku-buku self-development."
                     </p>
                 </div>
                 <Terminal className="text-[#D4AF37]/10 absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-32 h-32" />
             </div>
         </FadeContent>
      </section>

      {/* SECTION 5: CALL TO ACTION */}
      <section className="py-20 px-6 bg-[#252422]/50 border-t border-[#3A3936]">
         <div className="max-w-2xl mx-auto text-center">
             <FadeContent>
                 <h2 className="font-serif text-4xl mb-6 text-[#F7F2E8]">Let's Connect</h2>
                 <p className="text-[#A8A29E] mb-8">
                     Terbuka untuk kolaborasi, diskusi teknologi, atau sekadar menyapa.
                 </p>

                 <div className="flex flex-col gap-3 items-center">
                     {PROFILE.emails.map((email) => (
                         <div key={email} className="flex items-center gap-3 px-5 py-3 bg-[#1A1918] rounded-lg border border-[#3A3936] shadow-sm w-full md:w-auto justify-center group cursor-pointer hover:bg-[#D4AF37] hover:text-[#1A1918] transition-colors"
                              onClick={() => navigator.clipboard.writeText(email)}>
                            <Mail size={16} />
                            <span className="font-mono text-sm">{email}</span>
                            <Copy size={14} className="opacity-0 group-hover:opacity-100 transition-opacity ml-2"/>
                         </div>
                     ))}
                 </div>
             </FadeContent>
         </div>
      </section>
    </div>
  );
};

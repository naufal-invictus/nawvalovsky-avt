import { Code2, Terminal, Cpu, Globe, Coffee, Book, Music, Camera } from 'lucide-react';

export const PROFILE = {
  name: "Nawvalovsky[]",
  role: "Founder of TypologyID | CEO & Founder of Aeviathan Sentinel",
  about: "Saya adalah arsitek di balik layar digital. Sebagai Founder TypologyID dan Aeviathan Sentinel, saya menggabungkan visi kepemimpinan dengan ketajaman teknis. Fokus saya adalah membangun sistem yang aman, elegan, dan berdampak besar.",
  tags: ["Founder", "CEO", "Fullstack", "Cybersec", "Cloud Arch", "Visionary"],
  emails: ["nawvalovsky@proton.me", "ceo@aeviathan.com"],
  certs: ["CEH Master", "AWS Solutions Architect", "Google Cloud Pro"],
  skills: ["React", "Node.js", "Python", "Rust", "Kubernetes", "Ethical Hacking", "System Design"]
};

export const PROJECTS = [
  {
    id: 1,
    title: "Aeviathan Core",
    desc: "Sistem keamanan siber berbasis AI yang memprediksi ancaman sebelum terjadi. Digunakan oleh perusahaan enterprise.",
    tags: ["AI", "Security", "Python"],
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "Typology Dashboard",
    desc: "Platform analitik kepribadian dan manajemen tim yang intuitif dengan visualisasi data real-time.",
    tags: ["React", "D3.js", "Firebase"],
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "Neural Nexus",
    desc: "Eksplorasi jaringan saraf tiruan untuk pemrosesan bahasa alami (NLP) Bahasa Indonesia.",
    tags: ["Machine Learning", "NLP"],
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000"
  }
];

export const HOBBIES = [
  { title: "Kopi & Kode", icon: <Coffee />, desc: "Mencari kafein terbaik." },
  { title: "Membaca", icon: <Book />, desc: "Filosofi & Tech." },
  { title: "Fotografi", icon: <Camera />, desc: "Street photography." },
  { title: "Musik Lo-Fi", icon: <Music />, desc: "Teman coding." },
];

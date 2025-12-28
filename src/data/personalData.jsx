import { Coffee, Book, Camera, Shield, Cpu, Terminal, Globe } from 'lucide-react';

export const PROFILE = {
  name: "Nawvalovsky",
  role: "Cybersecurity & Cloud Architect",
  bio: "Mahasiswa Teknik Informatika yang berfokus pada OS dan Cloud. Berpengalaman dalam menangani berbagai problem teknis sistem operasi dan jaringan.",
  tags: ["Cloud Practitioner", "NetSec", "Network Administration", "Linux"],
  email: "nawvalovsky@proton.me",

  // --- LIST PENGALAMAN TEKNIKAL ---
  experience: [
    { technical_case: "Instalasi dan optimasi sistem operasi Windows (XP/7/10/11) serta GNU Linux (Mint/Arch/Ubuntu/Debian 8/11)" },
    { technical_case: "Instalasi driver dan software esensial untuk berbagai komponen hardware pada PC klien" },
    { technical_case: "Konfigurasi perangkat jaringan Router Mercusys, TP-Link, dan Mikrotik" },
    { technical_case: "Instalasi dan manajemen perangkat cetak Printer (Canon, Epson, HP) serta Fotocopy Konica Minolta BIZ 250" },
    { technical_case: "Konfigurasi sistem Printer Jaringan, Jaringan LAN, dan akses Internet" },
    { technical_case: "Setup dan manajemen File Server berbasis protokol FTP" },
    { technical_case: "Diagnosis dan perbaikan masalah bootloader serta konfigurasi BIOS pada PC klien" },
    { technical_case: "Diagnosis dan optimasi masalah resolusi monitor pada PC instan kelurahan" },
    { technical_case: "Penanganan masalah koneksi fisik dan pemulihan kerusakan partisi pada media penyimpanan" },
    { technical_case: "Troubleshooting koneksi printer jaringan dan restorasi status online perangkat" },
    { technical_case: "Penanganan crash aplikasi kritikal seperti Microsoft Office pada PC instansi LPM" },
    { technical_case: "Optimalisasi performa laptop/PC melalui pembersihan software dan identifikasi bottleneck hardware" },
    { technical_case: "Diagnosis infrastruktur jaringan mulai dari kabel LAN, konfigurasi IP, hingga gangguan router" },
    { technical_case: "Peningkatan performa multitasking melalui upgrade kapasitas RAM pada laptop klien" },
    { technical_case: "Optimasi waktu booting sistem melalui manajemen startup program yang efisien" },
    { technical_case: "Implementasi prosedur backup data penting secara berkala untuk mencegah kehilangan data klien" }
  ],

  // Daftar Skill
  skills: [
    "Maintenance",
    "Network Administration",
    "Linux Administration",
    "AWS Cloud Practitioner",
    "OS Instalation & Configuration",
    "Disk Partitioning & File Systems",
    "Help Desk Support",
  ],

  // --- SERTIFIKASI TERBARU ---
  certs: [
    { name: "Mikrotik Certified Network Associate (MTCNA)", org: "MikroTik Academy" },
    { name: "AI Upskilling Program with RSA", org: "AVPN, InfraDigital, Google.org & ADB" },
    { name: "IT Infrastructure Services and Systems Administration", org: "Google IT Support & InfraDigital" },
    { name: "Mechanical Engineer CAD ASEAN", org: "BNSP" },
    { name: "Bootcamp Quality Assurance", org: "GITS.ID" },
    { name: "The Ins and Outs of Computer Networking", org: "Google" },
    { name: "Foundations of Cybersecurity", org: "Google" }
  ],

  // Data Buku & Hobi (Untuk Footer)
  reading: {
    title: "Ghost in the Wires",
    author: "Kevin Mitnick",
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=200",
    quote: "People are the weakest link in security."
  },
  interests: [
    { title: "Reading", icon: <Camera size={18}/> },
    { title: "Philosophy", icon: <Book size={18}/> },
    { title: "Self-Dev", icon: <Coffee size={18}/> }
  ]
};

export const PROJECTS = [
  {
    id: 1,
    title: "Aeviathan Sentinel",
    category: "Security",
    desc: "Sistem monitoring berbasis Whatsapp & Javascript.",
    image: "https://i.ibb.co.com/XZJVfGSG/Aeviathan.png",
  },
    {
    id: 2,
    title: "Aeviathan Sovereign",
    category: "General",
    desc: "Sistem bot whatsapp serbaguna berbasis Baileys.",
    image: "https://i.ibb.co.com/rG7tbSDX/Sovereign.png",
  },
    {
    id: 3,
    title: "TypologyID",
    category: "General",
    desc: "Typology Card Generator berbasis React.js",
    image: "https://i.ibb.co.com/kV0W87zn/typologyid.png",
  }
];

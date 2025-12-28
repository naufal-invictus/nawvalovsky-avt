import { Coffee, Book, Camera, Shield, Cpu, Terminal, Globe } from 'lucide-react';

export const PROFILE = {
  name: "Nawvalovsky",
  role: "Cybersecurity & Cloud Architect",
  bio: "Mahasiswa Teknik Informatika yang berfokus pada keamanan infrastruktur dan arsitektur cloud. Berpengalaman dalam menangani berbagai problem teknis sistem operasi dan jaringan.",
  tags: ["Cloud Architecture", "NetSec", "Ethical Hacking", "DevSecOps", "Linux"],
  email: "nawvalovsky@proton.me",

  // List Pengalaman Teknikal (Hanya List Kasus)
  experience: [
    { technical_case: "Pernah menangani Bootloader not found pada lingkungan Dual-Boot Linux" },
    { technical_case: "Otomasi backup database PostgreSQL ke AWS S3 menggunakan Python Script" },
    { technical_case: "Konfigurasi Hardening SSH dan IPTables untuk mitigasi Brute Force" },
    { technical_case: "Troubleshooting Latency Network pada cluster Kubernetes di Google Cloud" },
    { technical_case: "Implementasi SSL/TLS Zero-Trust pada infrastruktur Nginx Reverse Proxy" }
  ],

  // Daftar Skill
  skills: [
    "Vulnerability Assessment",
    "AWS Cloud Infrastructure",
    "Docker & Kubernetes",
    "Python Automation",
    "Linux Administration"
  ],

  // Sertifikasi
  certs: [
    { name: "CEH Master (Ethical Hacker)", org: "EC-Council", id: "ECC-12345" },
    { name: "AWS Solutions Architect", org: "Amazon Web Services", id: "AWS-99887" },
    { name: "Google Cybersecurity Cert", org: "Google", id: "GCS-55443" }
  ],

  // Data Buku & Hobi (Untuk Footer)
  reading: {
    title: "Ghost in the Wires",
    author: "Kevin Mitnick",
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=200",
    quote: "People are the weakest link in security."
  },
  interests: [
    { title: "Photography", icon: <Camera size={18}/> },
    { title: "Philosophy", icon: <Book size={18}/> },
    { title: "Brewing", icon: <Coffee size={18}/> }
  ]
};

export const PROJECTS = [
  {
    id: 1,
    title: "Sentinel Grid",
    category: "Security",
    desc: "Sistem monitoring anomali jaringan berbasis Python.",
    image: "https://images.unsplash.com/photo-1558494949-ef526b01201b?q=80&w=1000",
  },
  // Tambahkan proyek lainnya di sini...
];

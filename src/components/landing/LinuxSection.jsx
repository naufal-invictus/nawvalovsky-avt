import { useRef } from 'react';
import { Terminal, ChevronLeft, ChevronRight } from 'lucide-react';

const LINUX_SETUPS = [
  {
    title: "My Box",
    year: "2024",
    distro: "Arch Linux",
    img: "/images/linux/Arch1.webp"
  },
  {
    title: "ST-AT Linux",
    year: "2023",
    distro: "Artic Linux 2",
    img: "/images/linux/Artic.webp"
  },
  {
    title: "ST-AT Linux",
    year: "2022",
    distro: "Artic Linux Arch",
    img: "/images/linux/Artic2.webp"
  },
  {
    title: "ST-GH Linux",
    year: "2022",
    distro: "Black Arch",
    img: "/images/linux/BlackArch.webp"
  },
  {
    title: "Debian Workspace",
    year: "2019",
    distro: "Debian",
    img: "/images/linux/Debian.webp"
  }
];

const LinuxSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 350;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 bg-[var(--bg-main)] border-t border-[var(--border-dim)]">
      <div className="container-safe px-6 md:px-8">

        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Terminal className="text-[var(--accent)]" size={18} />
            <h3 className="font-display text-base text-[var(--text-primary)] font-bold uppercase tracking-widest">
              My_Linux_Environments
            </h3>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full border border-[var(--border-dim)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--link-normal)] transition-all shadow-sm"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full border border-[var(--border-dim)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--link-normal)] transition-all shadow-sm"
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 hide-scroll snap-x snap-mandatory"
        >
          {LINUX_SETUPS.map((setup, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 md:w-80 group snap-center"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border-card)] shadow-sm mb-4 relative bg-[var(--bg-surface)]">
                {/* OPTIMASI GAMBAR DI SINI */}
                <img
                  src={setup.img}
                  alt={setup.title}
                  loading="lazy"        // Load hanya saat di-scroll dekat
                  decoding="async"      // Decode gambar di thread terpisah
                  width="320"           // Hint ukuran render (sesuai w-80)
                  height="240"          // Hint ukuran render (sesuai aspect 4/3)
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 px-3 py-1 bg-[var(--bg-main)]/80 backdrop-blur-md border border-[var(--border-dim)] rounded-full shadow-sm">
                  <span className="text-[10px] font-bold text-[var(--text-primary)] uppercase tracking-tight">
                    {setup.distro}
                  </span>
                </div>
              </div>

              <div className="px-1">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-display font-bold text-[var(--text-primary)] text-sm group-hover:text-[var(--link-normal)] transition-colors">
                    {setup.title}
                  </h4>
                  <span className="text-[11px] font-mono text-[var(--text-secondary)] opacity-60">
                    {setup.year}
                  </span>
                </div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)]">
                  LINUX_ // 0{index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinuxSection;

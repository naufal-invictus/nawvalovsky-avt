import { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { cn } from '../../lib/utils';

export const MagnetButton = ({ children, onClick, className, variant = "primary" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { type: "spring", stiffness: 150, damping: 15 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const xPos = (clientX - (left + width / 2)) * 0.3;
    const yPos = (clientY - (top + height / 2)) * 0.3;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variants = {
    primary: "bg-[var(--accent)] text-[var(--bg-primary)] hover:bg-[#C5B595]",
    secondary: "bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--border)]",
    outline: "border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] bg-transparent"
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className={cn("relative px-8 py-4 rounded-sm font-medium transition-colors duration-300 flex items-center justify-center gap-2 font-sans uppercase tracking-widest text-xs", variants[variant], className)}
    >
      {children}
    </motion.button>
  );
};

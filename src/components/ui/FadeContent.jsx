import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const FadeContent = ({ children, delay = 0, blur = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: blur ? 'blur(10px)' : 'blur(0px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.8, delay: delay, ease: [0.2, 0.65, 0.3, 0.9] }}
    >
      {children}
    </motion.div>
  );
};

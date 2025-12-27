import { motion } from 'framer-motion';
import { Linkedin, MessageCircleQuestion, Facebook, Instagram, AtSign, Send } from 'lucide-react';

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.45 }}
      className="shrink-0 grid grid-cols-6 gap-2"
    >
      {[
        { Icon: Linkedin, color: "text-blue-500", bg: "hover:bg-blue-500/10 hover:border-blue-500/30" },
        { Icon: MessageCircleQuestion, color: "text-red-500", bg: "hover:bg-red-500/10 hover:border-red-500/30" },
        { Icon: Facebook, color: "text-blue-600", bg: "hover:bg-blue-600/10 hover:border-blue-600/30" },
        { Icon: Instagram, color: "text-pink-500", bg: "hover:bg-pink-500/10 hover:border-pink-500/30" },
        { Icon: AtSign, color: "text-[var(--text-primary)]", bg: "hover:bg-white/10 hover:border-white/30" },
        { Icon: Send, color: "text-sky-500", bg: "hover:bg-sky-500/10 hover:border-sky-500/30" }
      ].map((Item, i) => (
        <div key={i} className={`aspect-square rounded-lg bg-[var(--bg-primary)]/40 border border-[var(--border)] flex items-center justify-center cursor-pointer transition-all group ${Item.bg}`}>
          <Item.Icon size={14} className={`${Item.color} group-hover:scale-110 transition-transform`} />
        </div>
      ))}
    </motion.div>
  );
};

export default SocialLinks;

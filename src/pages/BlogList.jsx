import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { FadeContent } from '../components/ui/FadeContent';
import { LEARNING_DATA } from '../data/chapters';
export const BlogList = ({ onSelectPost }) => {
  return (
    <div className="pt-32 pb-32 px-6 max-w-4xl mx-auto min-h-screen">
      <FadeContent>
        <div className="mb-16 border-b border-[#E5E5E5] pb-8">
            <h1 className="font-serif text-5xl text-[#333] mb-4">Journal</h1>
            <p className="text-[#8A8A8A] font-sans-modern text-lg">
                Thoughts on Code, Philosophy, and Life.
            </p>
        </div>
      </FadeContent>

      <div className="space-y-12">
        <AnimatePresence>
          {LEARNING_DATA.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => onSelectPost(post)}
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                  <div className="w-full md:w-48 aspect-video rounded-lg overflow-hidden bg-gray-100 shrink-0">
                      <img src={post.metadata.thumbnail} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>

                  <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                          <span>{post.metadata.category}</span>
                          <span className="w-1 h-1 rounded-full bg-[#ccc]"/>
                          <span className="text-[#8A8A8A] flex items-center gap-1"><Calendar size={10}/> 2025</span>
                      </div>

                      <h2 className="font-serif text-2xl md:text-3xl text-[#333] mb-3 group-hover:text-[#D4AF37] transition-colors leading-tight">
                          {post.metadata.title}
                      </h2>
                      <p className="text-[#6B6B6B] leading-relaxed mb-4 line-clamp-2">
                          {post.metadata.description}
                      </p>

                      <button className="text-sm font-bold text-[#333] flex items-center gap-2 border-b border-transparent group-hover:border-[#333] transition-all pb-0.5">
                          Read Article <ArrowRight size={14}/>
                      </button>
                  </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

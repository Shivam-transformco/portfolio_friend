import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  category: string;
  tags: string[];
  image: string;
  index: number;
}

export function ProjectCard({ title, category, tags, image, index,behanceProfile }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href={behanceProfile} target="_blank" rel="noopener noreferrer">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10"
      >
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#4F8CFF]/20 to-[#B47CFF]/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
          animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/50 to-transparent opacity-60" />
          
          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-br from-[#4F8CFF]/30 to-[#B47CFF]/30 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              className="w-16 h-16 rounded-full border-2 border-white/50 flex items-center justify-center backdrop-blur-sm"
            >
              <ArrowUpRight size={32} className="text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative p-6" style={{ transform: "translateZ(20px)" }}>
          {/* Category */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0.7, y: 0 }}
            className="text-sm text-[#4F8CFF] mb-2 block"
          >
            {category}
          </motion.span>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white mb-4"
          >
            {title}
          </motion.h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="px-3 py-1 rounded-full text-sm border border-white/10 bg-white/5 text-white/70"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* View Button */}
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-white/80 hover:text-[#4F8CFF] transition-colors group/btn"
          >
            View Case Study
            <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        {/* 3D Depth Layers */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4F8CFF]/5 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F8CFF]/50 to-transparent" />
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#B47CFF]/30 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#4F8CFF]/30 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    </motion.div>
    </a>
  );
}

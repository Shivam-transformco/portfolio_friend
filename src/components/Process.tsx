import { motion, useScroll, useTransform } from "motion/react";
import { Search, Pen, Palette, Zap } from "lucide-react";
import { useRef } from "react";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const processes = [
    {
      icon: Search,
      title: "Research",
      description: "Understanding user needs, market analysis, and competitor research",
      color: "#4F8CFF",
      step: "01",
    },
    {
      icon: Pen,
      title: "Wireframe",
      description: "Creating low-fidelity layouts and information architecture",
      color: "#B47CFF",
      step: "02",
    },
    {
      icon: Palette,
      title: "Design",
      description: "High-fidelity mockups with visual design and branding",
      color: "#4F8CFF",
      step: "03",
    },
    {
      icon: Zap,
      title: "Prototype",
      description: "Interactive prototypes for testing and validation",
      color: "#B47CFF",
      step: "04",
    },
  ];

  return (
    <section id="process" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0B]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 rounded-full border border-[#4F8CFF]/30 bg-[#4F8CFF]/5 backdrop-blur-sm text-[#4F8CFF]">
              My Process
            </span>
          </motion.div>

          <h2 className="mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            Design Process
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto">
            A systematic approach to creating exceptional user experiences
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />
          
          {/* Animated Progress Line */}
          <motion.div
            className="absolute top-32 left-0 h-0.5 bg-gradient-to-r from-[#4F8CFF] via-[#B47CFF] to-[#4F8CFF] hidden lg:block"
            style={{
              width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
            }}
          />

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {processes.map((process, index) => {
              const Icon = process.icon;
              return (
                <motion.div
                  key={process.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col items-center"
                >
                  {/* Step Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                    viewport={{ once: true }}
                    className="absolute -top-6 text-6xl opacity-5"
                    style={{ color: process.color }}
                  >
                    {process.step}
                  </motion.div>

                  {/* Icon Container */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotateY: 10,
                      rotateX: 10,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative mb-6 z-10"
                  >
                    {/* Outer Ring */}
                    <motion.div
                      className="w-32 h-32 rounded-full border-2 flex items-center justify-center relative"
                      style={{
                        borderColor: `${process.color}40`,
                        background: `radial-gradient(circle, ${process.color}10, transparent)`,
                      }}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {/* Inner Ring */}
                      <div
                        className="absolute inset-4 rounded-full border"
                        style={{ borderColor: `${process.color}30` }}
                      />

                      {/* Icon */}
                      <motion.div
                        className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-xl"
                        style={{
                          background: `${process.color}20`,
                          border: `2px solid ${process.color}40`,
                        }}
                        animate={{
                          rotate: -360,
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Icon size={32} style={{ color: process.color }} />
                      </motion.div>

                      {/* Glow Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ background: process.color }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>

                    {/* Neon Outline on Hover */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: `1px solid ${process.color}`,
                        boxShadow: `0 0 20px ${process.color}80`,
                      }}
                      initial={{ scale: 1, opacity: 0 }}
                      whileHover={{ scale: 1.2, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 text-center relative overflow-hidden group w-full"
                  >
                    {/* Hover Gradient */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: `linear-gradient(135deg, ${process.color}10, transparent)`,
                      }}
                    />

                    <div className="relative z-10">
                      <h3 className="text-white mb-3">{process.title}</h3>
                      <p className="text-white/60 text-sm">{process.description}</p>
                    </div>

                    {/* Bottom Accent */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ background: process.color }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>

                  {/* Connecting Arrow (for mobile/tablet) */}
                  {index < processes.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.6 }}
                      viewport={{ once: true }}
                      className="lg:hidden my-6"
                    >
                      <div
                        className="w-px h-12 mx-auto"
                        style={{
                          background: `linear-gradient(to bottom, ${process.color}, ${processes[index + 1].color})`,
                        }}
                      />
                    </motion.div>
                  )}

                  {/* Floating Particles */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        background: process.color,
                        top: `${20 + i * 15}%`,
                        left: `${30 + i * 10}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5 + i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <motion.div
        className="absolute top-1/2 right-20 w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(180, 124, 255, 0.06), transparent)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.4, 1],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}

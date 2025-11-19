import { motion } from "motion/react";
import { Palette, Layers, Grid, Layout, Sparkles, Box } from "lucide-react";

export function Skills() {
  const skills = [
    {
      icon: Palette,
      title: "UI Design",
      description: "Clean interfaces, color theory, visual hierarchy",
      color: "#4F8CFF",
    },
    {
      icon: Layers,
      title: "Prototyping",
      description: "Interactive prototypes in Figma",
      color: "#B47CFF",
    },
    {
      icon: Grid,
      title: "Wireframing",
      description: "Low-fi to high-fi wireframes",
      color: "#4F8CFF",
    },
    {
      icon: Layout,
      title: "UI Layout Design",
      description: "Responsive composition & spacing",
      color: "#B47CFF",
    },
    {
      icon: Sparkles,
      title: "Interaction Ideas",
      description: "User flows, micro-interactions",
      color: "#4F8CFF",
    },
    {
      icon: Box,
      title: "3D Elements (Learning)",
      description: "Beginner-level 3D product & interface elements",
      color: "#B47CFF",
      isNew: true,
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0F] via-[#0A0A0B] to-[#0D0D0F]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 rounded-full border border-[#B47CFF]/30 bg-[#B47CFF]/5 backdrop-blur-sm text-[#B47CFF]">
              Expertise
            </span>
          </motion.div>

          <h2 className="mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            Skills & Capabilities
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto">
            Growing my design toolkit with a focus on user-centered, modern interfaces
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.05,
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden">
                  {/* Hover Glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color}20, transparent)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative" style={{ transform: "translateZ(20px)" }}>
                    {/* Icon Container */}
                    <motion.div
                      className="relative mb-6 w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}05)`,
                        border: `1px solid ${skill.color}30`,
                      }}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon size={32} style={{ color: skill.color }} />
                      
                      {/* Icon Glow */}
                      <motion.div
                        className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ background: skill.color }}
                      />
                    </motion.div>

                    {/* Title */}
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-white">{skill.title}</h3>
                      {skill.isNew && (
                        <span className="px-2 py-0.5 rounded-full bg-[#B47CFF]/20 border border-[#B47CFF]/30 text-[#B47CFF] text-xs">
                          New
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-white/60 text-sm">{skill.description}</p>

                    {/* Bottom Border Accent */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 rounded-full"
                      style={{ background: skill.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  {/* 3D Depth Layers */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `linear-gradient(135deg, ${skill.color}10, transparent)`,
                      }}
                    />
                  </div>

                  {/* Corner Decorations */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 rounded-tr-2xl opacity-0 group-hover:opacity-30 transition-opacity"
                    style={{
                      borderTop: `2px solid ${skill.color}`,
                      borderRight: `2px solid ${skill.color}`,
                    }}
                  />

                  {/* Floating Particles on Hover */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        background: skill.color,
                        top: `${30 + i * 20}%`,
                        right: `${10 + i * 15}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                {/* External Glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}30, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Additional Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 inline-block">
            <h4 className="text-white mb-4">Primary Tools & Learning</h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { name: "Figma", isPrimary: true },
                { name: "Beginner CAD Tools", isNew: true },
                { name: "Basic Design Systems", isNew: false },
              ].map((tool, i) => (
                <motion.span
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className={`px-4 py-2 rounded-full border text-sm flex items-center gap-2 ${
                    tool.isPrimary
                      ? "border-[#4F8CFF]/50 bg-[#4F8CFF]/10 text-[#4F8CFF]"
                      : "border-white/20 bg-white/5 text-white/80"
                  }`}
                >
                  {tool.name}
                  {tool.isPrimary && (
                    <span className="text-xs opacity-70">★ Primary</span>
                  )}
                  {tool.isNew && (
                    <span className="px-1.5 py-0.5 rounded-full bg-[#B47CFF]/20 text-[#B47CFF] text-xs">
                      Learning
                    </span>
                  )}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(79, 140, 255, 0.08), transparent)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}

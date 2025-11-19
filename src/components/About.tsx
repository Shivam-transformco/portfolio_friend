import shruti from "../assets/shruti.jpg";
import { motion } from "motion/react";
import {
  Sparkles,
  BookOpen,
  Lightbulb,
  Briefcase,
} from "lucide-react";

export function About() {
  const stats = [
    {
      icon: BookOpen,
      label: "Learning Journey",
      value: "1 Year",
    },
    {
      icon: Lightbulb,
      label: "Design Approach",
      value: "Fresh",
    },
    {
      icon: Briefcase,
      label: "Current Role",
      value: "AI Eng.",
    },
    { icon: Sparkles, label: "Primary Tool", value: "Figma" },
  ];

  const skills = [
    { name: "Figma (Primary Tool)", level: 90 },
    { name: "Wireframing", level: 85 },
    { name: "Prototyping", level: 82 },
    { name: "UI Layout Design", level: 88 },
    { name: "Interaction Design", level: 80 },
    { name: "Basic Design Systems", level: 75 },
  ];

  return (
    <section
      id="about"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-10 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(79, 140, 255, 0.08), transparent)",
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

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
            <span className="px-6 py-2 rounded-full border border-[#4F8CFF]/30 bg-[#4F8CFF]/5 backdrop-blur-sm text-[#4F8CFF]">
              About Me
            </span>
          </motion.div>

          <h2 className="mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            My Journey & Approach
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image with 3D Ring */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Holographic Ring Animation */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="absolute inset-0 rounded-full border-2 border-[#4F8CFF]/30" />
                <div className="absolute inset-4 rounded-full border border-[#B47CFF]/30" />
                <div className="absolute inset-8 rounded-full border border-[#4F8CFF]/20" />
              </motion.div>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#4F8CFF]/20 to-[#B47CFF]/20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute inset-12 rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-sm"
              >
                <img
                  src={shruti}
                  alt="Shruti Kashyap"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-[#4F8CFF]"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4F8CFF]/5 to-[#B47CFF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <h3 className="mb-4 text-white">
                  Hey there! 👋
                </h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  I'm a fresh UI/UX designer with 1 year of
                  learning experience and a unique,
                  beginner-friendly creative perspective. With a
                  fresh mind, I think out of the box, experiment
                  boldly, and focus on creating clean,
                  user-centered interfaces.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Currently working as an AI Engineer where I
                  train actionable AI systems, I bring a strong
                  understanding of real product workflows, user
                  behavior, and how people interact with digital
                  tools — which deeply enhances my approach to
                  UI/UX design.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.1,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, rotateY: 5 }}
                    className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#4F8CFF]/10 to-[#B47CFF]/10 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.5 }}
                    />
                    <div className="relative">
                      <Icon
                        className="text-[#4F8CFF] mb-3"
                        size={24}
                      />
                      <div className="text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/60">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden"
            >
              <h3 className="mb-6 text-white">Core Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80">
                        {skill.name}
                      </span>
                      <span className="text-[#4F8CFF]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        transition={{
                          duration: 1,
                          delay: index * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-[#4F8CFF] to-[#B47CFF] rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import ride from "../assets/projects/ride.png";
import trip from "../assets/projects/trip.png";
import isro from "../assets/projects/isro.png";
import drivezy from "../assets/projects/drivezy.png";

const projects = [
  {
    title: "Ride with me - Travel App",
    category: "Mobile Application",
    tags: ["Dashboard", "Travel", "UI/UX"],
    image: ride,
  },
  {
    title: "Trip8.ai - AI Powered Travel Planning App",
    category: "Web UI Design",
    tags: ["Web UI", "AI", "Travel"],
    image: trip,
  },
  {
    title: "ISRO WEBSITE REDESIGN",
    category: "Web Design",
    tags: ["Space", "Web UI", "UX Case Study"],
    image: isro,
  },
  {
    title: "Drivezy - Landing Page",
    category: "Web UI Design",
    tags: ["Landing page", "UI Design"],
    image: drivezy,
  },
];

export function ProjectGallery() {
  return (
    <section
      id="work"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-[#0D0D0F] to-[#0A0A0B]" />

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
              Featured Work
            </span>
          </motion.div>

          <h2 className="mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            Case Studies & Projects
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto">
            Explore my latest design work spanning web
            interfaces, mobile apps, and immersive digital
            experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-xl backdrop-blur-xl border border-[#4F8CFF]/30 bg-[#4F8CFF]/5 text-white overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#4F8CFF]/20 to-[#B47CFF]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">
              View All Projects
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(180, 124, 255, 0.1), transparent)",
          filter: "blur(40px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
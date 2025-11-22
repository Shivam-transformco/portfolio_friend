import { motion, useScroll, useTransform } from "motion/react";
import { Download, ArrowRight } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0.8],
  );

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D Floating Shapes */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Large Sphere */}
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(79, 140, 255, 0.15), rgba(180, 124, 255, 0.05))",
            boxShadow:
              "0 0 100px rgba(79, 140, 255, 0.3), inset 0 0 60px rgba(79, 140, 255, 0.1)",
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Cube Wireframe */}
        <motion.div
          className="absolute w-[250px] h-[250px] border-2 border-[#B47CFF]/30"
          style={{
            transform: "rotateX(45deg) rotateY(45deg)",
            transformStyle: "preserve-3d",
            boxShadow: "0 0 60px rgba(180, 124, 255, 0.3)",
          }}
          animate={{
            rotateX: [45, 225, 45],
            rotateY: [45, 225, 45],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Holographic Rings */}
        <motion.div
          className="absolute w-[600px] h-[600px]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 rounded-full border border-[#4F8CFF]/20" />
          <div className="absolute inset-12 rounded-full border-2 border-[#B47CFF]/30" />
          <div className="absolute inset-24 rounded-full border border-[#4F8CFF]/20" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-2 rounded-full border border-[#4F8CFF]/30 bg-[#4F8CFF]/5 backdrop-blur-sm text-[#4F8CFF]">
            UI/UX Designer & AI Engineer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <span className="block mb-4">
            Hi, I'm{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#4F8CFF] via-[#B47CFF] to-[#4F8CFF] bg-clip-text text-transparent">
                Shruti Kashyap
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#4F8CFF] to-[#B47CFF] blur-2xl opacity-50"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </span>
          </span>
          <span className="text-white/90">UI/UX Designer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 text-white/60 max-w-2xl mx-auto"
        >
          A fresh designer with a bold perspective — I think
          outside the box, experiment fearlessly, and craft
          clean, user-centered interfaces. As an AI Engineer by
          day, I bring real product insights into my design
          approach.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* View My Work Button */}
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#4F8CFF] to-[#B47CFF]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#4F8CFF] to-[#B47CFF] opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
            <span className="relative z-10 flex items-center gap-2 text-white">
              View My Work
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </motion.a>

          {/* Download Resume Button */}
          <motion.a
            href="https://drive.google.com/uc?export=download&id=1U-GVKasEiS_SWljn_Fhyaaodwd25p5RV"
            target="_blank"
            rel="noopener noreferrer"
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-xl backdrop-blur-xl border border-[#4F8CFF]/30 bg-[#4F8CFF]/5 text-white overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#4F8CFF]/20 to-[#B47CFF]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-[#4F8CFF]/50 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF]"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
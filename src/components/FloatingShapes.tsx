import { motion } from "motion/react";

export function FloatingShapes() {
  const shapes = [
    { size: 300, x: "10%", y: "20%", duration: 20, delay: 0 },
    { size: 200, x: "80%", y: "10%", duration: 25, delay: 2 },
    { size: 250, x: "70%", y: "70%", duration: 22, delay: 4 },
    { size: 150, x: "20%", y: "80%", duration: 18, delay: 1 },
    { size: 180, x: "90%", y: "50%", duration: 24, delay: 3 },
  ];

  const particles = Array.from({ length: 30 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 10 + Math.random() * 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating 3D Shapes */}
      {shapes.map((shape, index) => (
        <motion.div
          key={`shape-${index}`}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: index % 2 === 0 
              ? "radial-gradient(circle, rgba(79, 140, 255, 0.1), transparent)"
              : "radial-gradient(circle, rgba(180, 124, 255, 0.1), transparent)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          <div 
            className="absolute inset-0 rounded-full border border-white/5 backdrop-blur-sm"
            style={{
              boxShadow: index % 2 === 0
                ? "0 0 60px rgba(79, 140, 255, 0.2)"
                : "0 0 60px rgba(180, 124, 255, 0.2)",
            }}
          />
        </motion.div>
      ))}

      {/* Floating Particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute w-1 h-1 rounded-full bg-white/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Holographic Rings */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#4F8CFF]/20" />
        <div className="absolute inset-8 rounded-full border border-[#B47CFF]/20" />
        <div className="absolute inset-16 rounded-full border border-[#4F8CFF]/10" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px]"
        animate={{
          rotate: -360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-[#B47CFF]/20" />
        <div className="absolute inset-12 rounded-full border border-[#4F8CFF]/20" />
      </motion.div>
    </div>
  );
}

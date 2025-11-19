import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Shruti's design work transformed our product completely. Her attention to detail and user-centric approach resulted in a 40% increase in user engagement.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, CloudSync",
    content: "Working with Shruti was an absolute pleasure. She delivered a stunning dashboard design that exceeded all expectations. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, DesignHub",
    content: "Shruti has an incredible eye for design and user experience. Her prototypes are always pixel-perfect and thoughtfully crafted. A true professional!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    name: "David Park",
    role: "CTO, InnovateLabs",
    content: "The UI/UX work Shruti delivered was exceptional. She understood our vision perfectly and created an interface that our users absolutely love.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0F] via-[#0A0A0B] to-[#0D0D0F]" />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(79, 140, 255, 0.08), transparent)",
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

      <div className="relative max-w-6xl mx-auto">
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
              Testimonials
            </span>
          </motion.div>

          <h2 className="mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            What Clients Say
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto">
            Trusted by leading companies and startups worldwide
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <div className="relative min-h-[400px] flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -50, rotateX: 20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-3xl"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden group"
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#4F8CFF]/10 to-[#B47CFF]/10 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />

                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute top-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-[#4F8CFF]/20 to-[#B47CFF]/20 flex items-center justify-center"
                >
                  <Quote size={32} className="text-[#4F8CFF]" />
                </motion.div>

                <div className="relative" style={{ transform: "translateZ(20px)" }}>
                  {/* Rating */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-1 mb-6"
                  >
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <Star size={20} className="fill-[#4F8CFF] text-[#4F8CFF]" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Content */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-white/90 mb-8 leading-relaxed"
                  >
                    "{testimonials[currentIndex].content}"
                  </motion.p>

                  {/* Author Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#4F8CFF]/30"
                    >
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4F8CFF]/20 to-transparent" />
                    </motion.div>
                    <div>
                      <h4 className="text-white mb-1">{testimonials[currentIndex].name}</h4>
                      <p className="text-white/60 text-sm">{testimonials[currentIndex].role}</p>
                    </div>
                  </motion.div>
                </div>

                {/* 3D Depth Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F8CFF]/50 to-transparent" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          {/* Previous Button */}
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-[#4F8CFF]/50 hover:bg-[#4F8CFF]/10 transition-all"
          >
            <ChevronLeft size={24} />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="relative"
              >
                <div
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-[#4F8CFF] to-[#B47CFF] w-8"
                      : "bg-white/30"
                  }`}
                />
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-full bg-[#4F8CFF]/50 blur-md"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:border-[#B47CFF]/50 hover:bg-[#B47CFF]/10 transition-all"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Thumbnail Preview */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`backdrop-blur-xl bg-white/5 border rounded-xl p-4 transition-all ${
                index === currentIndex
                  ? "border-[#4F8CFF]/50 bg-[#4F8CFF]/10"
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white/80 text-xs text-center">{testimonial.name}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

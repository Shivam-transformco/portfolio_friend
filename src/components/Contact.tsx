import { motion } from "motion/react";
import {
  Mail,
  Linkedin,
  Send,
  MapPin,
  Phone,
} from "lucide-react";
import { useState } from "react";

const profiles = [
  { name: "Behance", url: "https://www.behance.net/shrutikashyap8" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/shruti-kashyap-4566a61aa/" },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<
    string | null
  >(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kashyap.shruti12jan@gmail.com",
      href: "kashyap.shruti12jan@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value:
        "https://www.linkedin.com/in/shruti-kashyap-4566a61aa/",
      href: "https://www.linkedin.com/in/shruti-kashyap-4566a61aa/",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gurugram,Haryana",
      href: null,
    },
    // {
    //   icon: Phone,
    //   label: "Phone",
    //   value: "9521547509",
    //   href: "91-9521547509",
    // },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-[#0D0D0F] to-[#0A0A0B]" />

      {/* Glowing Background Elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-96 h-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(79, 140, 255, 0.12), transparent)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(180, 124, 255, 0.12), transparent)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

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
              Get In Touch
            </span>
          </motion.div>

          <h2 className="mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            Let's Work Together
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto">
            Have a project in mind? Let's create something
            amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 overflow-hidden group"
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#4F8CFF]/10 to-[#B47CFF]/10 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />

              <form
                onSubmit={handleSubmit}
                className="relative space-y-6"
              >
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white/80 mb-2"
                  >
                    Your Name
                  </label>
                  <motion.div
                    animate={{
                      boxShadow:
                        focusedField === "name"
                          ? "0 0 20px rgba(79, 140, 255, 0.3)"
                          : "none",
                    }}
                    className="relative"
                  >
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#4F8CFF]/50 text-white placeholder-white/40 outline-none transition-all backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                    {focusedField === "name" && (
                      <motion.div
                        layoutId="focus-ring"
                        className="absolute inset-0 rounded-xl border-2 border-[#4F8CFF]/50 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white/80 mb-2"
                  >
                    Your Email
                  </label>
                  <motion.div
                    animate={{
                      boxShadow:
                        focusedField === "email"
                          ? "0 0 20px rgba(79, 140, 255, 0.3)"
                          : "none",
                    }}
                    className="relative"
                  >
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#4F8CFF]/50 text-white placeholder-white/40 outline-none transition-all backdrop-blur-sm"
                      placeholder="john@example.com"
                    />
                    {focusedField === "email" && (
                      <motion.div
                        layoutId="focus-ring"
                        className="absolute inset-0 rounded-xl border-2 border-[#4F8CFF]/50 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-white/80 mb-2"
                  >
                    Your Message
                  </label>
                  <motion.div
                    animate={{
                      boxShadow:
                        focusedField === "message"
                          ? "0 0 20px rgba(79, 140, 255, 0.3)"
                          : "none",
                    }}
                    className="relative"
                  >
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#4F8CFF]/50 text-white placeholder-white/40 outline-none transition-all backdrop-blur-sm resize-none"
                      placeholder="Tell me about your project..."
                    />
                    {focusedField === "message" && (
                      <motion.div
                        layoutId="focus-ring"
                        className="absolute inset-0 rounded-xl border-2 border-[#4F8CFF]/50 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full group relative px-8 py-4 rounded-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4F8CFF] to-[#B47CFF]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4F8CFF] to-[#B47CFF] opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                  <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                    Send Message
                    <Send
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const Component = info.href
                    ? motion.a
                    : motion.div;
                  const props = info.href
                    ? {
                        href: info.href,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {};

                  return (
                    <Component
                      key={info.label}
                      {...props}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#4F8CFF]/30 transition-all group cursor-pointer"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4F8CFF]/20 to-[#B47CFF]/20 border border-[#4F8CFF]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon
                          size={24}
                          className="text-[#4F8CFF]"
                        />
                      </div>
                      <div>
                        <p className="text-white/60 text-sm">
                          {info.label}
                        </p>
                        <p className="text-white">
                          {info.value}
                        </p>
                      </div>
                    </Component>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-white mb-6">
                Find Me Online
              </h3>

              <div className="flex gap-4">
              {profiles.map(({ name, url }, index) => (
                  <motion.a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + index * 0.1,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, rotateZ: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex-1 aspect-square rounded-xl bg-gradient-to-br from-[#4F8CFF]/10 to-[#B47CFF]/10 border border-white/10 hover:border-[#4F8CFF]/50 flex items-center justify-center text-white/80 hover:text-white transition-all group"
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
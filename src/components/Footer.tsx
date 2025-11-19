import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shruti-kashyap-4566a61aa/",
    },
    {
      name: "Behance",
      href: "https://www.behance.net/shrutikashyap8",
    },
  ];

  return (
    <footer className="relative py-12 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0B]" />

      {/* Glowing Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4F8CFF]/50 to-transparent"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative inline-block mb-4"
            >
              <span className="bg-gradient-to-r from-[#4F8CFF] to-[#B47CFF] bg-clip-text text-transparent">
                Shruti.
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#4F8CFF] to-[#B47CFF] rounded-lg blur opacity-20" />
            </motion.div>
            <p className="text-white/60 text-sm">
              Designing futuristic, immersive digital
              experiences that blend aesthetics with
              functionality.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                "Home",
                "Work",
                "About",
                "Process",
                "Contact",
              ].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + index * 0.05,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, color: "#4F8CFF" }}
                  className="block text-white/60 hover:text-[#4F8CFF] transition-colors text-sm"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.05,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    rotateZ: 5,
                    y: -3,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="relative group"
                >
                  <div className="px-4 py-2 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:border-[#4F8CFF]/30 transition-all text-sm">
                    {social.name}
                  </div>

                  {/* Hover Glow */}
                  <motion.div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#4F8CFF]/20 to-[#B47CFF]/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity -z-10" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <motion.p
            className="text-white/40 text-sm flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Made with{" "}
            <Heart
              size={16}
              className="text-[#B47CFF] fill-[#B47CFF] animate-pulse"
            />{" "}
            by Shruti Kashyap
          </motion.p>

          <p className="text-white/40 text-sm">
            © {currentYear} All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(79, 140, 255, 0.05), transparent)",
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
    </footer>
  );
}
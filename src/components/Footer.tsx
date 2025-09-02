import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-black">
              <img src="/portfolio/images/logo_white.svg"></img>
            </h3>
            <p className="font-medium text-gray-300">
              Creating bold digital experiences that make an impact. Let's build
              something amazing together!
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-black text-yellow-400">QUICK LINKS</h4>
            <div className="space-y-2">
              {["Home", "About", "Skills", "Portfolio", "Contact"].map(
                (link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.querySelector(
                        `#${link.toLowerCase()}`
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="block font-bold text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    {link}
                  </button>
                )
              )}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-black text-pink-400">SERVICES</h4>
            <div className="space-y-2">
              {[
                "Web Design",
                "UI/UX Design",
                "Frontend Development",
                "Responsive Design",
                "Brand Identity",
              ].map((service) => (
                <div key={service} className="font-bold text-gray-300">
                  {service}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t-4 border-white pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 font-bold">
            <span>© {currentYear} Made with</span>
            <Heart className="w-5 h-5 text-red-500 fill-current" />
            <span>by Parth Thaker</span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="font-bold text-gray-300">All Rights Reserved</span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="bg-yellow-400 text-black p-3 border-3 border-white shadow-[4px_4px_0px_0px_#fff] hover:shadow-[6px_6px_0px_0px_#fff] transition-all duration-200"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;

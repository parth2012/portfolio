import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-black"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-black text-white mb-6"
            style={{ textShadow: "8px 8px 0px #000" }}
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="block"
            >
              PARTH
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="block text-yellow-400"
            >
              THAKER
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white border-4 border-black p-6 shadow-[12px_12px_0px_0px_#000] inline-block transform -rotate-2"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-2">
              WEB DESIGNER
            </h2>
            <p className="text-lg font-semibold text-gray-700">
              Creating Bold Digital Experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="bg-black text-white px-8 py-4 border-4 border-black font-bold text-lg shadow-[8px_8px_0px_0px_#fff] hover:shadow-[12px_12px_0px_0px_#fff] transition-all duration-200 flex items-center gap-2"
            >
              VIEW MY WORK
              <ArrowDown size={20} />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              href="images/parth_thaker_resume.pdf"
              download="parth_thaker_resume.pdf"
              className="bg-white text-black px-8 py-4 border-4 border-black font-bold text-lg shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-200 flex items-center gap-2"
            >
              DOWNLOAD CV
              <Download size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-4 border-black bg-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

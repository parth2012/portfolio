import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, label: "Magento" },
    { icon: Users, label: "Wordpress" },
    { icon: Zap, label: "Laravel" },
    { icon: Palette, label: "Figma" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-black mb-6 transform -rotate-1">
            ABOUT ME
          </h2>
          <div className="w-32 h-2 bg-yellow-400 mx-auto border-2 border-black"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-pink-400 border-4 border-black p-8 shadow-[12px_12px_0px_0px_#000] transform rotate-1">
              <h3 className="text-3xl font-bold text-black mb-4">
                Creative Web Designer
              </h3>
              <p className="text-lg font-medium text-black leading-relaxed mb-4">
                I'm Parth Thaker, a passionate web designer with 7+ years of
                experience creating bold, functional, and user-friendly digital
                experiences. I specialize in modern web design, UI/UX, and
                bringing creative visions to life through code.
              </p>
              <p className="text-lg font-medium text-black leading-relaxed">
                Implementing web accessibility standards and developing suitable
                web content for all browsers, platforms, and devices. Building
                reusable code that is scalable and optimized for performance.
              </p>
            </div>

            <div className="bg-yellow-400 border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] transform -rotate-1">
              <p className="text-lg font-bold text-black">
                "Design is not just what it looks like and feels like. Design is
                how it works." - Steve Jobs
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                className="bg-white border-4 border-black p-6 text-center shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-200"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <div className="text-3xl font-black text-black mb-2">
                  {stat.label}
                </div>
                {/* <div className="text-sm font-bold text-gray-700">
                  {stat.label}
                </div> */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Creative Lerning",
      category: "mobile",
      image: "/images/creative_learning.png",
      description: "Lerning Academy Website",
      tech: ["Wordpress", "HTML/CSS", "Elementor", "CMS"],
      liveUrl: "https://myclacademy.com/",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Lopez",
      category: "mobile",
      image: "/images/lopez.png",
      description:
        "Lopez Auto Insurance is an insurance company seeking to provide our valued customers with a variety of affordable insurance options.",
      tech: ["Wordpress", "HTML/CSS", "wpBakery", "CMS"],
      liveUrl: "https://lopezinsurance.com/",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "American Health Care Academy",
      category: "mobile",
      image: "/images/health_care.png",
      description:
        "American Health Care Academy (AHCA) comes in. It is our goal to provide comprehensive and effective online CPR and healthcare training courses to help save lives.",
      tech: ["Wordpress", "HTML/CSS", "Elementor", "JavaScript", "CMS"],
      liveUrl: "https://cpraedcourse.com/",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "LINEA | Paolo",
      category: "web",
      image: "/images/linea.png",
      description:
        "Experience the extraordinary comfort, quality, and style of LINEA Paolo – women's fashion footwear ",
      tech: ["Magento", "CMS", "HTML/Less"],
      liveUrl: "https://lineapaolo.com/",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "RC Mumbai",
      category: "web",
      image: "/images/rcmumbai.png",
      description:
        "Empower individuals and industries by providing top-quality drone components.",
      tech: ["Magento", "CMS", "HTML/Less"],
      liveUrl: "https://rcmumbai.com/",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Unsfarms",
      category: "web",
      image: "/images/unsfarms.png",
      description:
        "Unsfarms provide high-quality, farm-fresh produce grown in urban areas",
      tech: ["Magento", "HTML/Less", "Bootstrap", "PHP"],
      liveUrl: "https://unsfarms.com/",
      githubUrl: "#",
    },
    {
      id: 7,
      title: "Trymaintain",
      category: "web",
      image: "/images/trymaintain.png",
      description:
        "Trymaintain bring transparency to the aesthetic and wellness industry.",
      tech: ["Magento", "HTML/Less", "Bootstrap", "PHP"],
      liveUrl: "https://trymaintain.com/",
      githubUrl: "#",
    },
    {
      id: 8,
      title: "Restaurant Website Design",
      category: "design",
      image: "/images/restaurant_website_design.png",
      description:
        "This project showcases a modern, user-friendly restaurant website design.",
      tech: ["Figma", "typography", "Prototype"],
      liveUrl:
        "https://www.figma.com/proto/XtYWltJRQligcCisXmtVJE/Metta-Restaurant?node-id=2-2",
      githubUrl: "#",
    },
    {
      id: 9,
      title: "US Tax Deals Website Design",
      category: "design",
      image: "/images/ustax.png",
      description:
        "This project features a sleek and professional website design for a tax services company, US Tax Deals.",
      tech: ["Figma", "typography", "Prototype"],
      liveUrl:
        "https://www.figma.com/proto/2JIyCTt2LkiiYhrjlhIpss/US_Tax_Deals?node-id=141-853&t=pToRsB05181csANZ-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      githubUrl: "#",
    },
  ];

  const categories = [
    { id: "all", name: "ALL PROJECTS" },
    { id: "web", name: "Magento" },
    { id: "mobile", name: "Wordpress" },
    { id: "design", name: "UI/UX DESIGN" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-black mb-6 transform -rotate-1">
            MY PORTFOLIO
          </h2>
          <div className="w-32 h-2 bg-purple-400 mx-auto border-2 border-black"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 font-bold border-3 border-black shadow-[4px_4px_0px_0px_#000] transition-all duration-200 ${
                filter === category.id
                  ? "bg-yellow-400 text-black"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, rotate: Math.random() > 0.5 ? 1 : -1 }}
              className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[12px_12px_0px_0px_#000] transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-yellow-400 p-3 border-2 border-black shadow-[4px_4px_0px_0px_#000]"
                    target="_blank"
                  >
                    <Eye size={20} />
                  </motion.a>
                  {/* <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white p-3 border-2 border-black shadow-[4px_4px_0px_0px_#000]"
                  >
                    <Github size={20} />
                  </motion.a> */}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-black text-black mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 font-medium mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-black text-white text-xs font-bold border-2 border-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-yellow-400 text-black py-2 px-4 border-2 border-black font-bold text-center hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2"
                    target="_blank"
                  >
                    <ExternalLink size={16} />
                    LIVE
                  </motion.a>
                  {/* <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-black text-white py-2 px-4 border-2 border-black font-bold text-center hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <Github size={16} />
                    CODE
                  </motion.a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

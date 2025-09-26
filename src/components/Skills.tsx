import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "bg-yellow-400",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 60 },
      ],
    },
    {
      title: "Design Tools",
      color: "bg-pink-400",
      skills: [
        { name: "Figma", level: 70 },
        { name: "Adobe XD", level: 60 },
        { name: "Photoshop", level: 70 },
      ],
    },
    {
      title: "Backend & Tools",
      color: "bg-purple-400",
      skills: [
        { name: "ClickUp", level: 75 },
        { name: "Git/GitHub", level: 90 },
        { name: "Atlassian", level: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black text-black mb-6 transform rotate-1">
            MY SKILLS
          </h2>
          <div className="w-32 h-2 bg-pink-400 mx-auto border-2 border-black"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className={`${
                category.color
              } border-4 border-black p-6 shadow-[8px_8px_0px_0px_#000] transform ${
                categoryIndex % 2 === 0 ? "rotate-1" : "-rotate-1"
              }`}
            >
              <h3 className="text-2xl font-black text-black mb-6 text-center">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-black">{skill.name}</span>
                      <span className="font-bold text-black">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white border-2 border-black h-4">
                      <motion.div
                        className="h-full bg-black"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-black text-center mb-8">
            OTHER EXPERTISE
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Responsive Design",
              "Performance Optimization",
              "Cross-browser Testing",
              "Accessibility",
              "Version Control",
              "Agile Methodology",
              "Client Communication",
              "Project Management",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  rotate: Math.random() > 0.5 ? 2 : -2,
                }}
                className="bg-white border-3 border-black p-4 text-center font-bold text-sm shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#000] transition-all duration-200"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Zap } from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "⚡",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML5", level: 90, icon: "🔶" },
        { name: "CSS3", level: 60, icon: "🎨" },
        { name: "JavaScript", level: 70, icon: "⚡" },
        { name: "React", level: 60, icon: "⚛️" },
      ],
    },
    {
      category: "Backend Development",
      icon: "🛠️",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Node.js", level: 60, icon: "🟢" },
        { name: "Express.js", level: 60, icon: "🚂" },
        { name: "PostgreSQL", level: 50, icon: "🐘" },
      ],
    },
    {
      category: "Tools & Other Skills",
      icon: "🛠️",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git & GitHub", level: 75, icon: "🔀" },
        { name: "VS Code", level: 85, icon: "💻" },
      ],
    },
  ];

  // const additionalSkills = [
  //   { name: "REST APIs", icon: "🔌", color: "from-blue-500 to-cyan-500" },
  //   { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
  //   // { name: "Firebase", icon: "🔥", color: "from-yellow-500 to-orange-500" },
  //   // { name: "Redux", icon: "🔄", color: "from-purple-500 to-pink-500" },
  //   // { name: "Framer Motion", icon: "🎬", color: "from-pink-500 to-rose-500" },
  //   { name: "Responsive", icon: "📱", color: "from-green-500 to-emerald-500" },
  // ];

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-full mb-4"
          >
            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Technical Expertise
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent">
              Skills & Tools
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I've been learning and working with to create amazing
            web experiences
          </p>
        </motion.div>

        {/* Main Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300`}
              ></div>

              {/* Card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`p-3 bg-gradient-to-br ${category.color} rounded-xl text-white text-2xl`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Additional Technologies
          </h3> */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"> */}
          {/* {additionalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              > */}
          {/* Glow */}
          {/* <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-300`}
                ></div> */}

          {/* Card */}
          {/* <div className="relative bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 group-hover:border-transparent transition-all duration-300">
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </p>
                </div> */}
          {/* </motion.div>
            ))} */}
          {/* </div> */}
        </motion.div>

        {/* Learning More Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full">
            <span className="text-lg">🚀</span>
            <span className="font-medium">
              Constantly learning and exploring new technologies
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

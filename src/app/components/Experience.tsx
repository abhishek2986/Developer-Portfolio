import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { BookOpen, Award, Code2, GraduationCap } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Currently pursuing B.E. in Information Technology",
      description:
        "Building strong fundamentals in computer science, programming, and software engineering principles.",
      badge: "4th Year",
      color: "blue",
      badgeColor: "bg-blue-500/20 text-blue-400",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Learning modern web development with React",
      description:
        "Mastering component-based architecture, state management, and building responsive user interfaces.",
      badge: "Ongoing",
      color: "purple",
      badgeColor: "bg-purple-500/20 text-purple-400",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Building personal and academic projects",
      description:
        "Applying theoretical knowledge to practical applications and solving real-world problems.",
      badge: "2024-2026",
      color: "pink",
      badgeColor: "bg-pink-500/20 text-pink-400",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Exploring APIs and database systems",
      description:
        "Understanding backend technologies, RESTful APIs, and database design with SQL and PostgreSQL.",
      badge: "Ongoing",
      color: "indigo",
      badgeColor: "bg-indigo-500/20 text-indigo-400",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Continuously improving coding skills",
      description:
        "Regular practice through coding challenges, reading documentation, and following best practices.",
      badge: "Daily",
      color: "green",
      badgeColor: "bg-green-500/20 text-green-400",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Problem-solving and algorithm development",
      description:
        "Strengthening logical thinking and implementing efficient solutions to complex problems.",
      badge: "Ongoing",
      color: "orange",
      badgeColor: "bg-orange-500/20 text-orange-400",
    },
  ];

  const learningPath = [
    {
      title: "Current Focus & Learning",
      items: [
        "Building real-world projects to strengthen skills",
        "Learning TypeScript and Next.js",
        "Improving problem-solving through coding practice",
        "Exploring backend development (Node.js basics)",
        "Reading tech blogs and staying updated",
      ],
    },
  ];

  const colorMap = {
    blue: "from-blue-500 to-cyan-500",
    purple: "from-purple-500 to-pink-500",
    pink: "from-pink-500 to-red-500",
    indigo: "from-indigo-500 to-blue-500",
    green: "from-green-500 to-teal-500",
    orange: "from-orange-500 to-red-500",
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Learning
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuous learner, always growing and improving
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 w-full">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${colorMap[exp.color as keyof typeof colorMap]} text-white flex-shrink-0`}
                      >
                        {exp.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          {/* Title */}
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>

                          {/* Badge */}
                          <span
                            className={`text-xs font-semibold px-3 py-1 rounded-full shrink-0 ${exp.badgeColor}`}
                          >
                            {" "}
                            {exp.badge}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block flex-shrink-0">
                  <div
                    className={`w-4 h-4 rounded-full bg-gradient-to-br ${colorMap[exp.color as keyof typeof colorMap]} border-4 border-white dark:border-gray-900`}
                  ></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          {learningPath.map((path) => (
            <div
              key={path.title}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">🎯</span>
                {path.title}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {path.items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-blue-600 dark:text-blue-400 mt-1">
                      ✓
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

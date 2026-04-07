import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Lightbulb, Rocket, Target, User, Award } from "lucide-react";
import profile from "../assets/profile.png";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable and efficient code",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Creative solutions to complex challenges",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal Oriented",
      description: "Focused on delivering results",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const stats = [
    { number: "1+", label: "Years Learning", icon: "📚" },
    { number: "4+", label: "Projects Built", icon: "🚀" },
    { number: "6+", label: "Technologies", icon: "⚡" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-full mb-4"
          >
            <User className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              About Me
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 dark:from-white dark:via-indigo-400 dark:to-white bg-clip-text text-transparent">
              Passionate Developer
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image/Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20"></div>

              {/* Content */}
              <div className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-1">
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 h-full">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-4">
                      <span className="text-6xl">
                        {" "}
                        <img
                          src={profile}
                          alt="Abhishek Patil"
                          className="w-32 h-32 rounded-full object-fill"
                        />
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Abhishek Patil
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Full Stack Developer{" "}
                    </p>
                  </div>

                  {/* Mini Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl"
                      >
                        <div className="text-2xl mb-2">{stat.icon}</div>
                        <div className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {stat.number}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p className="text-lg">
                Hi! I'm a{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  passionate fresher software developer
                </span>{" "}
                with a strong foundation in modern web development. My journey
                into programming started with curiosity and has evolved into a
                deep passion for creating meaningful digital experiences.
              </p>

              <p>
                I specialize in{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  frontend development
                </span>{" "}
                with React and Tailwind CSS, focusing on building responsive,
                accessible, and user-friendly web applications. I love the
                challenge of turning complex problems into simple, beautiful
                solutions.
              </p>

              <p>
                Currently, I'm expanding my skill set by learning{" "}
                <span className="font-semibold text-pink-600 dark:text-pink-400">
                  TypeScript
                </span>
                ,
                <span className="font-semibold text-pink-600 dark:text-pink-400">
                  {" "}
                  Next.js
                </span>
                , and exploring backend development. My goal is to become a
                well-rounded full-stack developer.
              </p>
            </div>

            {/* CTA */}
            <div className="flex gap-4 pt-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                <span>Let's Talk</span>
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300"
              >
                <Award className="w-5 h-5" />
                <span>View Work</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            What I Bring to the Table
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="group relative"
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300`}
                ></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 h-full border border-gray-200 dark:border-gray-700 group-hover:border-transparent transition-all duration-300">
                  <div
                    className={`inline-flex p-3 bg-gradient-to-br ${feature.color} text-white rounded-xl mb-4`}
                  >
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

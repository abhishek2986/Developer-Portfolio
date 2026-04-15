import { motion, useMotionValue, useTransform } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Github, ExternalLink, Star } from "lucide-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "AI-Enabled Smart Restaurant Management System",
      description:
        "RestroFusion AI is an intelligent restaurant management system that digitizes menus using QR codes and streamlines ordering, billing, and reservations, while integrating an AI-powered call agent to automate table bookings and handle customer inquiries efficiently; it also provides order reports and analytics to improve decision-making, reduce manual effort, and enhance overall restaurant operations.",
      image: "🍽️",
      tags: ["React", "Node.js", "Express.js", "Postgresql", "Vapi.ai"],
      github: "https://github.com",
      demo: "https://example.com",
      gradient: "from-blue-500 via-blue-600 to-cyan-600",
      featured: true,
    },

    {
      title: "Smart-Todo-Manager",
      description:
        "Interactive todo list application with task management features like add, delete, and mark as completed. Built with a responsive UI and smooth user experience.",
      image: "✅",
      tags: ["React", "JavaScript", "HTML5", "CSS3"],
      github: "https://github.com",
      demo: "https://app.netlify.com/projects/smart-todo-manager/overview",
      gradient: "from-green-500 via-emerald-600 to-teal-600",
      featured: false,
    },
    {
      title: "Developer Portfolio",
      description:
        "Modern, responsive portfolio template with dark mode, smooth animations, and contact form. Built with latest web technologies.",
      image: "💼",
      tags: ["React", "Motion", "Tailwind"],
      github: "https://github.com",
      demo: "https://example.com",
      gradient: "from-orange-500 via-red-600 to-pink-600",
      featured: false,
    },
    {
      title: "AI Voice Agent for Restaurant Automation",
      description:
        "Developed an AI Voice Agent for restaurant automation to handle customer inquiries and table reservations through real-time voice interaction, reducing manual workload and improving response time.",
      image: "🤖",
      tags: ["Vapi.ai", "Node.js", "Express.js"],
      github: "https://github.com",
      demo: "https://example.com",
      gradient: "from-purple-500 via-pink-600 to-red-600",
      featured: true,
    },
  ];

  return (
    <section
      id="projects"
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-full mb-4"
          >
            <Star className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              Featured Work
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-400 dark:to-white bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: any;
  index: number;
  isInView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className="group relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
          <Star className="w-3 h-3 fill-white" />
          Featured
        </div>
      )}

      {/* Project Image/Icon */}
      <div
        className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
      >
        <motion.div
          animate={
            isHovered ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }
          }
          transition={{ duration: 0.3 }}
          className="text-8xl"
        >
          {project.image}
        </motion.div>

        {/* Overlay on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center gap-4"
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="w-6 h-6 text-gray-900 dark:text-white" />
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-6 h-6 text-gray-900 dark:text-white" />
          </motion.a>
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>

      {/* 3D Card Shadow */}
      <motion.div
        style={{
          transform: isHovered ? "translateZ(-50px)" : "translateZ(0px)",
        }}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"
      />
    </motion.div>
  );
}

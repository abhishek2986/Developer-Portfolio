import { motion, useMotionValue, useTransform } from "motion/react";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, Star, Video, Images } from "lucide-react";

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
      demo: "https://restrofusion-ai.netlify.app/",
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
      demo: "https://abhishek-patil-dev-portfolio.netlify.app/",
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
      video:
        "https://drive.google.com/file/d/1Fn-C-yz9Y3OQj3z6rq3_snSa8Um6T-LV/view?usp=sharing",
      gradient: "from-purple-500 via-pink-600 to-red-600",
      featured: true,
    },
    {
      title: "AI-powered Complaint & Feedback Management workflow",
      description: `I built an AI-powered Complaint & Feedback Management workflow to automate how user requests are processed and managed efficiently.

The workflow includes:

🔹 Capturing user form submissions
🔹 Processing and categorizing requests with AI
🔹 Storing records in Google Sheets for tracking
🔹 Sending real-time notifications to Slack channels
🔹 Triggering automated email acknowledgments to users`,
      image: "📋",
      tags: ["n8n", "Google Gemini AI ", "Google Sheets", "Slack", "Gmail"],
      images:
        "https://drive.google.com/file/d/17dKLTGkPZLwqfxhoIboH9OiohisPxeeU/view?usp=sharing",
      gradient: "from-purple-500 via-pink-600 to-red-600",
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
  const [open, setOpen] = useState(false);

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

  const limit = 165;
  const isLong = project.description.length > limit;
  const shortText = project.description.slice(0, limit);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
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
        className="group relative bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300"
      >
        {/* 🔥 IMAGE + HOVER OVERLAY */}
        <div
          className={`relative h-48 flex items-center justify-center bg-gradient-to-br ${project.gradient}`}
        >
          <motion.div
            animate={
              isHovered ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }
            }
            className="text-8xl"
          >
            {project.image}
          </motion.div>

          {/* 🔥 HOVER BUTTONS */}
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
              onClick={(e) => e.stopPropagation()}
              className="p-3 bg-white dark:bg-gray-800 rounded-full"
            >
              <Github className="w-6 h-6 text-gray-900 dark:text-white" />
            </motion.a>

            <motion.a
              href={project.video || project.demo || project.images}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="p-3 bg-white dark:bg-gray-800 rounded-full"
            >
              {project.video ? (
                <Video className="w-6 h-6 text-gray-900 dark:text-white" />
              ) : project.images ? (
                <Images className="w-6 h-6 text-gray-900 dark:text-white" />
              ) : (
                <ExternalLink className="w-6 h-6 text-gray-900 dark:text-white" />
              )}
            </motion.a>
          </motion.div>
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm leading-relaxed">
            {isLong ? (
              <>
                {shortText}...
                <button
                  onClick={() => setOpen(true)}
                  className="text-blue-500 ml-1 hover:underline"
                >
                  More
                </button>
              </>
            ) : (
              project.description
            )}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 🔥 MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-900 max-w-lg w-full mx-4 p-6 rounded-2xl"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4">{project.title}</h2>

            <p className="whitespace-pre-line text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
}

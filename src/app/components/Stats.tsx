import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Code, Coffee, Briefcase, Star } from "lucide-react";

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const stats = [
    {
      icon: <Code className="w-8 h-8" />,
      end: 4,
      label: "Projects Built",
      suffix: "+",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      end: 300,
      label: "Cups of Coffee",
      suffix: "+",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      end: 5,
      label: "Technologies",
      suffix: "+",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Star className="w-8 h-8" />,
      end: 1000,
      label: "Hours of Learning",
      suffix: "+",
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white mb-4 shadow-lg`}
              >
                {stat.icon}
              </div>
              <CountUpAnimation
                end={stat.end}
                suffix={stat.suffix}
                isInView={isInView}
              />
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUpAnimation({
  end,
  suffix,
  isInView,
}: {
  end: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, isInView]);

  return (
    <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
      {count}
      {suffix}
    </div>
  );
}

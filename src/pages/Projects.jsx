import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Clock } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    id: 1,
    image: '/assets/project1.jpg',
    title: 'Coming Soon',
    description: 'Exciting project in development. Stay tuned!',
    tech: ['React', 'JavaScript', 'CSS']
  },
  {
    id: 2,
    image: '/assets/project2.jpg',
    title: 'Coming Soon',
    description: 'Another amazing project coming your way.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript']
  },
  {
    id: 3,
    image: '/assets/project3.jpg',
    title: 'Coming Soon',
    description: 'Project under wraps. Check back later!',
    tech: ['Vite', 'React', 'CSS']
  },
  {
    id: 4,
    image: '/assets/project4.jpg',
    title: 'Coming Soon',
    description: 'Final placeholder for upcoming project.',
    tech: ['JavaScript', 'React', 'Tailwind']
  }
];

const Projects = () => {
  const { t } = useTranslation();

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) controls.start('visible');
    else controls.start('hidden');
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center" ref={ref}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          variants={cardVariants}
          initial="hidden"
          animate={controls}
        >
          {t('projects.title')}
        </motion.h2>

        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 mb-10" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md"
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'tween', duration: 0.2 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <Clock className="text-white w-10 h-10" />
                </div>
              </div>

              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-purple-700 text-white px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-sm text-purple-400">{t('projects.status')}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


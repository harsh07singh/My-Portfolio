import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { t } = useTranslation();

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillData = [
    {
      title: t('skills.frontend_title'),
      color: 'text-cyan-400',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Fetch API', 'Vite'],
    },
    {
      title: t('skills.version_control_title'),
      color: 'text-green-400',
      items: ['Git', 'GitHub'],
    },
    {
      title: t('skills.design_tools_title'),
      color: 'text-pink-400',
      items: ['Canva', 'Adobe', 'Photoshop'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center" ref={ref}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          variants={cardVariants}
          initial="hidden"
          animate={controls}
        >
          {t('skills.title')}
        </motion.h2>

        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 mb-10" />

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {skillData.map((group, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-lg shadow-md"
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'tween', duration: 0.2, delay: i * 0.1 }}
            >
              <h3 className={`text-xl font-semibold ${group.color} mb-3`}>
                {group.title}
              </h3>
              <ul className="list-disc list-inside text-gray-300">
                {group.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;




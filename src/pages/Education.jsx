import React from 'react';
import { useTranslation } from 'react-i18next';
import { GraduationCap, CalendarDays, MapPin } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const { t } = useTranslation();

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: 'spring', stiffness: 120 },
    },
  };

  return (
    <section id="education" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          variants={cardVariants}
          initial="hidden"
          animate={controls}
        >
          {t('education.title')}
        </motion.h2>

        <motion.div
          className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 mb-10"
          variants={cardVariants}
          initial="hidden"
          animate={controls}
        />

        <motion.div
          className="bg-gray-800 p-6 rounded-lg text-left shadow-lg"
          variants={cardVariants}
          initial="hidden"
          animate={controls}
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">
            {t('education.degree')}{' '}
            <span className="text-green-400 text-sm">● Ongoing</span>
          </h3>

          <p className="text-lg text-indigo-400 font-medium">
            {t('education.college')}
          </p>

          <div className="flex items-center gap-3 text-gray-400 mt-2 text-sm">
            <CalendarDays size={16} />
            <span>{t('education.years')}</span>
            <MapPin size={16} />
            <span>{t('education.location')}</span>
          </div>

          <p className="mt-4 text-gray-300">{t('education.description')}</p>

          <div className="mt-4 bg-blue-900 text-blue-300 px-4 py-2 rounded-md w-fit">
            {t('education.tagline')}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

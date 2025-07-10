import React from 'react';
import { useTranslation } from 'react-i18next';
import { Circle } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();

  const aboutItems = [
    {
      title: t('about.items.frontend.title'),
      description: t('about.items.frontend.description'),
    },
    {
      title: t('about.items.tech.title'),
      description: t('about.items.tech.description'),
    },
    {
      title: t('about.items.design.title'),
      description: t('about.items.design.description'),
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-[#0b1120] text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {t('about.title')}
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 mb-10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{ originX: 0 }}
        />

        {/* Description */}
        <motion.p
          className="text-gray-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {t('about.description')}
        </motion.p>

        {/* About Items */}
        <motion.div
          className="bg-[#111827] p-6 rounded-2xl shadow-xl space-y-6 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Circle className="text-purple-500 mt-1" size={10} fill="currentColor" />
              <div>
                <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;




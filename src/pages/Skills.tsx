import React from 'react';
import { motion } from 'framer-motion';
import { technicalSkills } from '../data/skills';
import ParticleBackground from '../components/ParticleBackground';

const SkillCard = ({ name, logo }: { name: string; logo: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center space-x-3 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-lg transition-all"
  >
    <img src={logo} alt={name} className="w-8 h-8" />
    <span className="font-medium">{name}</span>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Technical Skills
        </motion.h1>

        <div className="space-y-12">
          {technicalSkills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">{category.category}</h2>
                <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
              </div>
               Continuing with the Skills.tsx file content:

```tsx
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                  >
                    <SkillCard name={skill.name} logo={skill.logo} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;


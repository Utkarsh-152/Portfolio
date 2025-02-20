import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from '../components/ParticleBackground';

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 relative">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg p-8"
        >
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I am a passionate Data Scientist and Full Stack Developer with a strong foundation in data analysis, machine learning and deep learning
                and decent web development. My journey in technology has been driven by a curiosity to solve complex problems
                and create meaningful solutions.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                With expertise in machine learning, data analysis, and full-stack development, I bring a unique
                perspective to projects that require both analytical thinking and technical implementation.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I'm constantly learning and exploring new technologies to stay at the forefront of the rapidly
                evolving tech landscape.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Education</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium">Bachelor of Science</h3>
                    <p className="text-gray-600 dark:text-gray-300">Mathematics and Physics</p>
                    <p className="text-gray-500">2022 - 2025</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Masters Program in Data Science</h3>
                    <p className="text-gray-600 dark:text-gray-300">By SimpliLearn</p>
                    <p className="text-gray-500">2024-2025</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Interests</h2>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  <li>Machine Learning & AI</li>
                  <li>Data Analysis</li>
                  <li>AI Agents</li>
                  <li>LLMs</li>
                  <li>AI Agents</li>
                  <li>Web Development</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
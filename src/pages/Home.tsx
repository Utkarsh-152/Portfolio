import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Trophy, FolderGit2, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../components/ParticleBackground';

const StatCard = ({ icon: Icon, title, value, subtitle }: {
  icon: React.ElementType;
  title: string;
  value: string;
  subtitle: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg p-6"
  >
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
        <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
      </div>
      <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </div>
    </div>
    <div className="mt-4">
      <motion.div
        className="h-2 bg-blue-100 dark:bg-gray-700 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
          initial={{ width: 0 }}
          animate={{ width: "75%" }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        />
      </motion.div>
    </div>
  </motion.div>
);

const Home = () => {
  const stats = [
    {
      icon: Github,
      title: "GitHub Repositories",
      value: "25+",
      subtitle: "Active Open Source Projects"
    },
    {
      icon: Trophy,
      title: "Kaggle Competitions",
      value: "2",
      subtitle: "With 600/2500 Ranking in one"
    },
    {
      icon: FolderGit2,
      title: "Projects",
      value: "10+",
      subtitle: "Across Various Domains"
    },
    {
      icon: Brain,
      title: "ML Models",
      value: "9",
      subtitle: "From Datasets in various domains"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Utkarsh</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
              A passionate Data Scientist and Full Stack Developer with expertise in building modern web applications
              and analyzing complex data patterns.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors w-fit"
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <StatCard {...stat} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const Resume = () => {
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
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl font-bold">Utkarsh Tripathi</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">Data Analyst/Scientist</p>
              <div className="flex flex-wrap gap-4 mt-4 text-gray-600 dark:text-gray-300">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>shreytripathi2004@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>7905202121</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Prayagraj, UP</span>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="w-4 h-4" />
                  <Github className="w-4 h-4" />
                </div>
              </div>
            </div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <FileDown size={20} className="mr-2" />
              Download PDF
            </a>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">Programming</h3>
                  <p className="text-gray-600 dark:text-gray-300">Python, SQL, HTML, CSS, JS, ReactJS</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Database</h3>
                  <p className="text-gray-600 dark:text-gray-300">MySQL, MongoDB</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Machine Learning</h3>
                  <p className="text-gray-600 dark:text-gray-300">Regression, Classification, Clustering</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Web Frameworks</h3>
                  <p className="text-gray-600 dark:text-gray-300">Flask, ExpressJS, Streamlit</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Projects</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium">Revenue Insights In Hospitality Domain</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Prepared a Power BI Hospitality Revenue Analytics Dashboard, analyzing RevPAR, ADR, and occupancy rates</li>
                    <li>Designed interactive visualizations for week-over-week performance tracking</li>
                    <li>Automated cancellation analysis, improving forecasting accuracy by 15%</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Loan Approval Prediction Model</h3>
                  <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300 space-y-2">
                    <li>Created ML-based Loan Approval System using Flask, MySQL, achieving 97.4% accuracy</li>
                    <li>Built interactive web interface with GSAP animations and Bootstrap 5</li>
                    <li>Engineered scalable ML pipeline with 98% precision and recall</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium">B.Sc</h3>
                  <p className="text-gray-600 dark:text-gray-300">Maa Saraswati Sita Degree College</p>
                  <p className="text-gray-500">2022 - 2025</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium">Master's for Data Scientist</h3>
                  <p className="text-gray-600 dark:text-gray-300">Simplilearn, In collaboration with IBM</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600 dark:text-gray-300">
                <div>Python for Data Science - IBM</div>
                <div>SQL Certification Course - Simplilearn</div>
                <div>Data Science with Python - Simplilearn</div>
                <div>Machine Learning Using Python - Simplilearn</div>
                <div>PL-300 Microsoft Power BI - Simplilearn</div>
                <div>Deep Learning for Beginners - Simplilearn</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
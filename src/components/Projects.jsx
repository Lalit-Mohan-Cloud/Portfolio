import React, { useState } from 'react';
import image2 from '../assets/image7.png';
import image1 from '../assets/image6.png';
import image3 from '../assets/image4.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Tata Group GenAI Powered Data Analytics Job Simulation',
      description: 'Completed a virtual job simulation on AI-powered data analytics, predictive modeling for credit delinquency, and ethical AI solutions for financial services.',
      tech: ['GenAI tools (ChatGPT, Gemini)' , 'Predictive Modeling', 'AI Strategy'],
      image: image3,
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'HP LIFE Certificate - AI for Beginners',
      description: 'Successfully completed the HP LIFE online course "AI for Beginners," gaining an understanding of AI concepts, applications, data importance, and ethical implications.',
      tech: ['Artificial Intelligence', 'AI Concepts', 'Ethical AI'],
      image: image2,
      github: '#',
      demo: '#'
    },

    {
      id: 3,
      title: 'My Portfolio',
      description: 'Developed a modern, fully responsive portfolio website with modular React components, streamlined navigation, and mobile-first design for professional showcase.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Bash'],
      image: image1,  
      github: '#',
      demo: '#'
    },
     

  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-semibold italic">
            A showcase of my recent work and creative experiments in web development and AI integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0a10 10 0 00-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0110 4.84c.85.004 1.71.115 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0010 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

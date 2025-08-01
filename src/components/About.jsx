import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Lalit Maurya
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-semibold italic">
            A passionate developer learning AI/ML, focused on building responsive, real-world web solutions
            using modern frontend tools and thoughtful design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-4">
              <p className="text-gray-600 font-semibold">
                Welcome to my digital portfolio! I'm Lalit, a creative technologist currently diving deep 
                into web development and the world of artificial intelligence and machine learning.
              </p>
              <p className="text-gray-600 font-semibold">
                My journey began with a passion for building interactive websites using modern technologies 
                like React, JavaScript, and Tailwind CSS. Now, I'm expanding my skill set by exploring 
                AI/ML and how it can be integrated into real-world applications.
              </p>
              <p className="text-gray-600 font-semibold">
                I'm always eager to take on new challenges, learn emerging tools and frameworks, 
                and collaborate on meaningful tech projects that combine creativity and functionality.
              </p>
            </div>

            <div className="mt-3">
              <h4 className="text-lg font-bold text-gray-900 mb-4">What I Do</h4>
              <div className="flex flex-wrap gap-2">
                {['AI Integration', 'Web Development', 'UI/UX Design', 'Problem Solving'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative -mt-6">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Currently Available</h4>
              <p className="mb-6">
                Looking for internship opportunities and exciting projects to contribute to.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Open to remote work</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Available for freelance projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Seeking learning opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

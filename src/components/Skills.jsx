import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Tailwind CSS', level: 80 },
        { name: 'HTML/CSS', level: 95 }
      ]
    },
    {
      title: 'Backend & Tools',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'MongoDB', level: 65 },
        { name: 'Git', level: 80 }
      ]
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'OpenAI API', level: 75 },
        { name: 'Python', level: 70 },
        { name: 'Natural Language Processing', level: 60 },
        { name: 'Machine Learning Basics', level: 55 }
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSkills(skillCategories.flatMap(cat => cat.skills));
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-semibold italic">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: visibleSkills.includes(skill) ? `${skill.level}%` : '0%' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Lalit Maurya</h3>
                        <p className="text-gray-400 mb-4">
                            Creating innovative digital solutions with passion and precision.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/Lalit-Mohan-Cloud" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 0a10 10 0 00-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.58 9.58 0 0110 4.84c.85.004 1.71.115 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0010 0z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="https://linkedin.com/in/lalitmaurya1432" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                            <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
                            <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'JavaScript', 'Tailwind', 'Node.js', 'AI/ML'].map((tech) => (
                                <span key={tech} className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        © {currentYear} Lalit Maurya. Built with React & Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

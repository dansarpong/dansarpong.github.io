import React from 'react';
import { DownloadCloud, BadgeCheck, GithubIcon, Mail } from 'lucide-react';

const Hero: React.FC = () => {


  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fadeInUp">
            <div className="mb-12 mt-16">
              <img 
                src="/images/profile.png" 
                alt="Daniel Sarpong" 
                className="w-[300px] h-[300px] rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                loading="eager"
                decoding="async"
                width="300"
                height="300"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Daniel Sarpong
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              DevOps Engineer & Embedded Systems Enthusiast
            </h2>
            <p className="text-md text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Jack of All Trades.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </a>
            <a
              href="/Daniel_Sarpong_Resume.pdf"
              download="Daniel_Sarpong_Resume.pdf"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 hover:text-gray-900 transition-colors duration-200"
            >
              <DownloadCloud className="w-4 h-4 mr-2" />
              Download Resume
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/dansarpong"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.credly.com/users/dansarpong"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <BadgeCheck className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
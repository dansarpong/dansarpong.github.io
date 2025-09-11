import React, { useRef, useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Image, Play } from 'lucide-react';

const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const currentIdx = Math.round(scrollLeft / clientWidth);
      
      setCurrentIndex(currentIdx);
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < maxScroll - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.clientWidth;
      const targetIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
      const targetScroll = targetIndex * containerWidth;
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      
      setTimeout(checkScrollButtons, 300);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    
    const handleResize = () => {
      checkScrollButtons();
      if (scrollRef.current) {
        scrollRef.current.scrollLeft = 0;
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }
    
    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, []);

  const projects = [
    {
      title: "Task Management System",
      description: "Built serverless task management system achieving 99.9% uptime with automated workflows for field teams.",
      tech: ["AWS", "Serveless", "Python", "HTML", "RESTful API"],
      github: "https://github.com/dansarpong/task-management-system-project",
      category: "DevOps",
    },
    {
      title: "Event Planner Platform",
      description: "Delivered zero-downtime CI/CD pipeline with comprehensive monitoring, reducing deployment time by 75%.",
      tech: ["Jenkins", "Docker", "Ansible", "Prometheus", "Grafana"],
      github: "https://github.com/Amali-Tech/event-planner-infra",
      preview: "/images/epp-preview.png",
      category: "DevOps"
    },
    {
      title: "Smart Home Automation Hub",
      description: "Developed IoT automation system with web interface, controlling 10+ smart devices remotely.",
      tech: ["Raspberry Pi", "Python", "CSS", "Flask"],
      github: "https://github.com/JEST-HEAT/Smart-Home",
      category: "Embedded"
    },
    {
      title: "UCC-CoDe E-Learning LMS",
      description: "Architected scalable LMS serving 10,000+ users with personalized learning environments and secure authentication.",
      tech: ["PHP", "Terraform", "Linux", "AWS", "PostgreSQL"],
      demo: "https://mycodedigicampus.com",
      category: "Full-Stack"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in various fields.
            </p>
          </div>

          <div className="relative">
            {canScrollLeft && (
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
            )}
            
            {canScrollRight && (
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            )}

            <div 
              ref={scrollRef}
              className="flex overflow-x-auto scrollbar-hide gap-6"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                scrollSnapType: 'x mandatory'
              }}
              onScroll={checkScrollButtons}
            >
              {projects.map((project, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex-shrink-0 w-full px-4" style={{ scrollSnapAlign: 'start' }}>
                  <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${project.category === 'DevOps'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                      }`}>
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      <span className="text-sm">Code</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
                    {project.preview && (
                      <a
                        href={project.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-green-600 hover:text-green-800 transition-colors duration-200"
                      >
                        {project.preview.includes('youtube.com') || project.preview.includes('youtu.be') || project.preview.includes('.mp4') || project.preview.includes('.mov') ? (
                          <>
                            <Play className="w-4 h-4 mr-1" />
                            <span className="text-sm">Video</span>
                          </>
                        ) : (
                          <>
                            <Image className="w-4 h-4 mr-1" />
                            <span className="text-sm">Image</span>
                          </>
                        )}
                      </a>
                    )}
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
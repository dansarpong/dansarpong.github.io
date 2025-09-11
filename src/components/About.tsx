import React from 'react';

const About: React.FC = () => {
  const topSkills = [
    "Python", "Docker", "Kubernetes", "Raspberry Pi", "AWS", "Terraform", "Jenkins", "JavaScript", 
    "PostgreSQL", "Arduino", "GitHub Actions", "C/C++", "Prometheus", "Grafana", "Ansible", "MySQL"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              I'm passionate about automation, cloud infrastructure, and embedded systems.<br/>
              I build scalable solutions that bridge software and hardware.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Core Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {topSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-50 text-blue-700 font-medium rounded-full hover:bg-blue-100 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
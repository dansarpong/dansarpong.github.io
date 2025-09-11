import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Daniel Sarpong. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
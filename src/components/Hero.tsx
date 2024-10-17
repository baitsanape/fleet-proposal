import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Enhanced Fleet Management and Premises Solution</h1>
        <p className="text-xl mb-8">Addressing Key Business Challenges for Optimal Performance</p>
        <p className="text-lg mb-8">Powered by RainRock Fleet Management Technology</p>
        <a href="#features" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
          Explore Features
        </a>
      </div>
      <div className="mt-12">
        <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Fleet Operations" className="mx-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Hero;
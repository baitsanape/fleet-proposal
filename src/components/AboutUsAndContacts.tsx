import React from 'react';

const AboutUsAndContacts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="mb-4">
          Baitsanape IT Company (Pty) Ltd is a leading provider of innovative IT solutions, specializing in fleet management and technology integration. Our partnership with RainRock Fleet Management Technology allows us to offer cutting-edge solutions tailored to the unique needs of public sector organizations.
        </p>
        <p className="mb-4">
          With a focus on efficiency, cost-effectiveness, and sustainability, we help our clients optimize their operations and deliver better services to their communities. Our team of experts is dedicated to providing top-notch support and continuous innovation to meet the evolving needs of the public sector.
        </p>
        <p className="mb-4">
          At Baitsanape IT Company, we believe in the power of technology to transform public services and improve the lives of citizens. Our solutions are designed to enhance operational efficiency, reduce costs, and promote environmental sustainability.
        </p>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="mb-2"><strong>Baitsanape IT Company (Pty) Ltd</strong></p>
        <p>20 Ruikpeul Avenue</p>
        <p>Weltevredenpark</p>
        <p>Johannesburg, Gauteng, 1709</p>
        <p>South Africa</p>
        <p className="mt-4"><strong>Phone:</strong> +27 79 459 2659</p>
        <p><strong>Email:</strong> info@baitsanape.tech</p>
        <p><strong>Website:</strong> <a href="https://www.baitsanape.tech" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.baitsanape.tech</a></p>
        <p className="mt-4"><strong>DUNS Number:</strong> 652993679</p>
        <p><strong>VAT Number:</strong> 4690305067</p>
        <p><strong>Registration Number:</strong> 2015/141596/07</p>
      </div>
    </div>
  );
};

export default AboutUsAndContacts;
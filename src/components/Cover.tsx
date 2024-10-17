import React from 'react';

const Cover: React.FC = () => {
  return (
    <div className="text-center">
      <img 
        src="https://baitsanape.tech/wp-content/uploads/2024/10/rainrock-logo-hz.png" 
        alt="RainRock Logo" 
        className="w-64 mx-auto mb-8"
      />
      <h1 className="text-[1.25rem] font-bold mb-8 cover-h1 text-[#1F2937]">FLEET MANAGEMENT TECHNOLOGY</h1>
      
      <div className="relative mb-8">
        <img 
          src="https://images.pexels.com/photos/11973732/pexels-photo-11973732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Fleet Management" 
          className="w-full rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 rounded-lg p-6 text-white">
          <h2 className="text-3xl font-bold mb-4 text-white">Revolutionizing Fleet Management</h2>
          <p className="text-lg mb-4 max-w-3xl">
            Embark on a journey of unparalleled efficiency and cost-effectiveness with RainRock's cutting-edge fleet management solutions. Our comprehensive suite of tools is designed to transform your operations, optimize resource allocation, and drive sustainable growth in an ever-evolving industry landscape.
          </p>
          <p className="text-xl font-semibold mb-4">
            Powered by RainRock Fleet Management Technology
          </p>
          <div className="text-left">
            <p className="text-lg font-semibold mb-2">Our comprehensive suite of tools include:</p>
            <ul className="list-disc list-inside">
              <li>RainRock Track for GPS Telematics</li>
              <li>RainRock Vision for Video Telematics</li>
              <li>RainRock Eco Driving for Driver Behaviour</li>
              <li>RainRock Route Planner for Pick-Up and Delivery Logistics</li>
              <li>RainRock Scheduling for AI powered employee scheduling</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
        <div>
          <h3 className="text-xl font-bold mb-2">Prepared for:</h3>
          <div className="border p-4">
            <p className="font-semibold">King Sabata Dalindyebo Municipality (KSDM)</p>
            <p>Munitata Building</p>
            <p>Sutherland Street, Mthatha</p>
            <p>Eastern Cape</p>
            <p>South Africa</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Prepared by:</h3>
          <div className="border p-4">
            <p className="font-semibold">Baitsanape IT Company (Pty) Ltd</p>
            <p>20 Ruikpeul Avenue</p>
            <p>Weltevredenpark</p>
            <p>Johannesburg, Gauteng, 1709</p>
            <p>South Africa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
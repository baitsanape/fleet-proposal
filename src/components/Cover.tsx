import React from 'react';

const Cover: React.FC = () => {
  return (
    <div className="text-center">
      <img 
        src="https://i.ytimg.com/vi/5Uv7h9_jqBA/maxresdefault.jpg" 
        alt="RainRock Logo" 
        className="w-64 mx-auto mb-8"
      />
      <div className="relative mb-8">
        <img 
          src="https://images.pexels.com/photos/11973732/pexels-photo-11973732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Fleet Management" 
          className="w-full rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 rounded-lg p-6 text-white">
          <h2 className="text-3xl font-bold mb-4 text-white">Revolutionizing Fleet Management</h2>
          <p className="text-lg mb-4 max-w-3xl">
          Unlock new levels of efficiency and cost savings with our advanced fleet management solutions. Our comprehensive suite of services is crafted to optimize vehicle performance, reduce operational costs, and ensure timely maintenance—all contributing to the city’s mission to deliver reliable services for the community. With solutions that cover repairs and maintenance, onboard dashcams for surveillance, ad hoc vehicle rentals, licensing and fine management, and fuel management, RainRock empowers your fleet to operate at peak efficiency, supporting sustainable growth in an ever-evolving industry landscape.          </p>
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
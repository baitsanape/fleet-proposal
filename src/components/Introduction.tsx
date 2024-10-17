import React from 'react';

const Introduction: React.FC = () => {
  return (
    <div>
      <h2>Introduction</h2>
      <p className="mb-4">
        Welcome to our comprehensive fleet management solution. This proposal
        outlines how our cutting-edge technology can revolutionize your fleet
        operations, increase efficiency, and reduce costs.
      </p>
      <p className="mb-4">
        As a public service provider, ensuring the timely and efficient
        operation of your fleet is critical to maintaining service reliability,
        public safety, and cost-effectiveness. Our fleet management solution is
        specifically designed to address the unique challenges faced by public
        sector fleets, whether managing public transport, emergency response
        vehicles, waste collection trucks, or municipal maintenance fleets. With
        our platform, your organization can streamline operations, enhance
        safety, and reduce costs, all while improving service delivery to your
        community.
      </p>
      <div className="mt-8">
        <h3>Product Video</h3>
        <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          <iframe
            src="https://www.youtube.com/embed/wKvFu55ek0o"
            title="RainRock Fleet Management Solution"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          This video showcases our fleet management solution and its impact on businesses worldwide.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
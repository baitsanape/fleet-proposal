import React from 'react';
import SolutionTabs from './SolutionTabs';

const Proposal: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">The Proposal</h2>
      <div className="mb-8">
        <p className="mb-4">
          Our comprehensive fleet management solution includes the following key components:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>RainRock Track for GPS Telematics</li>
          <li>RainRock Vision for Video Telematics</li>
          <li>RainRock Eco Driving for Driver Behaviour</li>
          <li>RainRock Route Planner for Pick-Up and Delivery Logistics</li>
          <li>RainRock Scheduling for AI powered employee scheduling</li>
        </ul>
        <p className="mb-4">
          Each of these components is designed to address specific challenges and optimize different aspects of your fleet operations. Let's explore each solution in detail:
        </p>
      </div>
      <SolutionTabs />
    </div>
  );
};

export default Proposal;
import React, { useState } from 'react';
import { Truck, Shield, DollarSign, BarChart2, Calendar, Package, Wrench, Lock, Disc } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const solutions = [
  {
    icon: <Truck className="w-6 h-6 text-blue-600" />,
    title: "GPS Telematics",
    description: "Real-time tracking of vehicle locations, speeds, routes, and activity. Monitors fleet efficiency and controls unauthorized usage.",
    challenges: ["Vehicle inefficiency", "Lack of vehicle-related info", "Poor fleet performance", "High operating costs"],
    overview: "GPS tracking will be installed on all vehicles, enabling real-time location monitoring, route optimization, and geofencing capabilities. The system will alert the client to unauthorized vehicle use, monitor vehicle utilization, and provide insights on vehicle movement to reduce downtime.",
    keyFeatures: [
      "Real-time tracking",
      "Geofencing",
      "Vehicle utilization reports",
      "Trip history and playback"
    ],
    pricing: "R277.50 per vehicle/month"
  },
  {
    icon: <Shield className="w-6 h-6 text-green-600" />,
    title: "Video Telematics",
    description: "In-cab cameras for monitoring driver behavior and gathering accident footage. Improves driver accountability and provides evidence.",
    challenges: ["No visual control of staff", "No video evidence in accidents"],
    overview: "Dashcams with video telematics will be installed to monitor driver behavior, capture incidents (e.g., crashes, near-misses), and provide real-time footage for safety and compliance. This enhances driver accountability and assists in accident investigations.",
    keyFeatures: [
      "In-cab cameras with live streaming and recording",
      "Incident detection (harsh braking, speeding)",
      "Automated video uploads to cloud storage",
      "Integration with GPS for location-tagged footage"
    ],
    pricing: "R647.50 per vehicle/month"
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-purple-600" />,
    title: "Driver Behavior Monitoring",
    description: "Analyzes harsh braking, speeding, and other risky behaviors. Provides detailed driver reports and scorecards for preventive actions.",
    challenges: ["Driver violations", "Cargo/vehicle damage", "Inefficient driving"],
    overview: "Monitor driver performance through telematics data, including speed, braking, acceleration, and idling time. A driver scorecard system will provide regular feedback to drivers and managers, helping to reduce risky behaviors and improve fuel efficiency.",
    keyFeatures: [
      "Real-time driver scorecards",
      "Alerts for speeding, harsh braking, and idling",
      "Reporting on driver performance trends",
      "Driver training recommendations based on data"
    ],
    pricing: "R185 per driver/month"
  },
  {
    icon: <Package className="w-6 h-6 text-red-600" />,
    title: "Pick-Up & Delivery Logistics",
    description: "Optimizes routes, provides real-time delivery status, and manages electronic proof of deliveries for efficient logistics operations.",
    challenges: ["Insufficient route planning", "Lack of real-time visibility"],
    overview: "A logistics app will be provided for scheduling and managing pick-up and delivery operations. This app enables dispatchers to assign tasks, track drivers, and communicate with them in real-time. It streamlines workflows and ensures better service delivery for personnel transport.",
    keyFeatures: [
      "Driver dispatch and task assignment",
      "Route optimization for delivery/pick-up",
      "Proof of delivery and signature capture",
      "Real-time notifications to customers/recipients"
    ],
    pricing: "R370 per vehicle/month"
  },
  {
    icon: <Calendar className="w-6 h-6 text-indigo-600" />,
    title: "Staff Scheduling",
    description: "Automates shift scheduling for all drivers, preventing over-utilization and ensuring labor compliance.",
    challenges: ["Manual scheduling leads to overlaps", "Missed shifts", "Underutilized vehicles"],
    overview: "Staff scheduling software will enable better management of driver shifts, ensuring compliance with labor laws and maximizing fleet productivity. The software will automate shift creation, track attendance, and manage overtime.",
    keyFeatures: [
      "Shift scheduling and management",
      "Automated compliance checks for labor laws",
      "Attendance tracking and reporting",
      "Integration with payroll for overtime calculation"
    ],
    pricing: "R92.50 per staff member/month"
  },
  {
    icon: <DollarSign className="w-6 h-6 text-yellow-600" />,
    title: "Fuel Management",
    description: "Real-time monitoring of fuel consumption, generating reports on discrepancies, leakages, or overuse.",
    challenges: ["Uncontrolled fuel consumption", "High fuel costs", "Fuel fraud"],
    overview: "A fuel management system will track fuel consumption, optimize refueling schedules, and flag discrepancies. This will help identify fuel theft or misuse and improve overall fuel efficiency across the fleet.",
    keyFeatures: [
      "Real-time fuel consumption tracking",
      "Alerts for unusual fuel usage patterns",
      "Monthly fuel efficiency reports",
      "Integration with fuel cards and procurement systems"
    ],
    pricing: "R222 per vehicle/month"
  },
  {
    icon: <Wrench className="w-6 h-6 text-orange-600" />,
    title: "Fleet Maintenance Solution",
    description: "Predictive maintenance tracking with automated service alerts based on mileage, engine hours, and component wear.",
    challenges: ["High maintenance costs", "Downtime due to lack of automated maintenance schedules"],
    overview: "The maintenance solution will automate scheduling and tracking of vehicle maintenance, ensuring preventive maintenance is completed on time to avoid costly breakdowns. Integration with 3rd-party service providers and in-house workshops will streamline operations.",
    keyFeatures: [
      "Automated maintenance scheduling",
      "Maintenance history tracking",
      "Integration with suppliers for parts and services",
      "Real-time alerts for critical repairs or breakdowns"
    ],
    pricing: "R462.50 per vehicle/month"
  },
  {
    icon: <Lock className="w-6 h-6 text-teal-600" />,
    title: "Access Control & CCTV",
    description: "RFID-based access control and high-definition CCTV cameras for complete premises security and incident tracking.",
    challenges: ["Unauthorized access to premises", "Vehicle theft or misuse", "Lack of visual oversight"],
    pricing: "R2,000 per system/month"
  },
  {
    icon: <Disc className="w-6 h-6 text-pink-600" />,
    title: "Tyre Management",
    description: "Real-time tyre health monitoring for wear and pressure tracking, with automated alerts for timely replacements.",
    challenges: ["High costs due to frequent tyre damage", "Unsafe vehicle operations"],
    pricing: "R370 per vehicle/month"
  },
];

const SolutionTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3 mb-4 md:mb-0 md:pr-4">
        <div className="flex flex-col space-y-2 bg-gray-100 p-2 rounded-lg">
          {solutions.map((solution, index) => (
            <motion.button
              key={index}
              className={`px-4 py-3 rounded-lg transition-all duration-300 ease-in-out text-left flex items-center ${
                activeTab === index
                  ? 'bg-white text-blue-600 font-semibold shadow-md'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {solution.icon}
              <span className="ml-2">{solution.title}</span>
            </motion.button>
          ))}
        </div>
      </div>
      <div className="md:w-2/3">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-4">{solutions[activeTab].title}</h3>
            <p className="text-gray-600 mb-4">{solutions[activeTab].description}</p>
            {solutions[activeTab].overview && (
              <>
                <h4 className="text-lg font-semibold mb-2">Overview:</h4>
                <p className="text-gray-600 mb-4">{solutions[activeTab].overview}</p>
              </>
            )}
            {solutions[activeTab].keyFeatures && (
              <>
                <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc pl-5 mb-4">
                  {solutions[activeTab].keyFeatures.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </>
            )}
            <h4 className="text-lg font-semibold mb-2">Challenges Addressed:</h4>
            <ul className="list-disc pl-5 mb-4">
              {solutions[activeTab].challenges.map((challenge, index) => (
                <li key={index} className="text-gray-600">{challenge}</li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mb-2">Pricing:</h4>
            <p className="text-gray-600">{solutions[activeTab].pricing}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SolutionTabs;
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, DollarSign, Zap, Shield, BarChart2, Users, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b last:border-b-0">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <div className="mr-4 text-blue-600">{icon}</div>
          <span className="font-semibold text-lg">{title}</span>
        </div>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 bg-gray-50">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const KeyBenefits: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="mb-6">Key Benefits</h2>
      <div className="border rounded-lg shadow-lg overflow-hidden">
        <AccordionItem title="Cost Reduction and Budget Control" icon={<DollarSign size={24} />}>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Fuel Optimization:</strong> Intelligent route planning reduces unnecessary mileage and optimizes fuel consumption, resulting in significant savings for public service budgets.</li>
            <li><strong>Maintenance Scheduling:</strong> Proactive vehicle maintenance alerts help prevent costly breakdowns and extend vehicle lifespan, minimizing downtime and repair costs.</li>
            <li><strong>Asset Utilization:</strong> Maximize the utilization of your entire fleet by tracking vehicle usage, identifying underused assets, and reallocating resources for better efficiency.</li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Enhanced Operational Efficiency" icon={<Zap size={24} />}>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Real-Time Vehicle Tracking:</strong> Monitor your fleet in real time to ensure vehicles are where they need to be, improving service reliability for public transportation, emergency services, and other public operations.</li>
            <li><strong>Automated Route Planning and Dispatch:</strong> Optimize routes for waste collection, snow plowing, or public transport schedules, minimizing delays, fuel waste, and unnecessary trips.</li>
            <li><strong>Driver Scheduling and Shift Management:</strong> Manage driver shifts, ensuring the right personnel are deployed based on real-time needs, reducing administrative overhead.</li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Improved Public Safety and Compliance" icon={<Shield size={24} />}>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Driver Behavior Monitoring:</strong> Ensure your drivers adhere to safety standards through monitoring speeding, harsh braking, and other risky behaviors. Implement corrective actions and training to reduce accidents.</li>
            <li><strong>Compliance with Public Regulations:</strong> Automatically track and manage compliance with federal, state, and local regulations, such as hours-of-service (HOS) for public transit drivers, emission standards, and vehicle inspection protocols.</li>
            <li><strong>Incident and Emergency Management:</strong> Enable faster response times with integrated emergency alert systems that provide real-time location data to first responders or city managers.</li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Data-Driven Decision Making" icon={<BarChart2 size={24} />}>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Comprehensive Reporting and Analytics:</strong> Leverage detailed reports on fuel consumption, vehicle performance, and route efficiency to make informed decisions that improve fleet productivity.</li>
            <li><strong>Predictive Analytics for Maintenance:</strong> Use data-driven insights to predict vehicle failures before they occur, reducing unexpected downtimes and keeping public services operational.</li>
            <li><strong>Sustainability Tracking:</strong> Track your fleet's carbon emissions, optimize eco-friendly driving practices, and make the case for green initiatives such as transitioning to electric vehicles.</li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Community-Focused Service Reliability" icon={<Users size={24} />}>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Reduced Downtime:</strong> Our solution ensures your vehicles are always ready for public service, minimizing delays or disruptions in services such as public transport, waste collection, and emergency response.</li>
            <li><strong>Transparency and Accountability:</strong> Share fleet performance metrics with stakeholders and the public, demonstrating efficiency, responsiveness, and fiscal responsibility.</li>
            <li><strong>Optimized Citizen Experience:</strong> By improving fleet reliability, you ensure that your services—whether it's timely public transit or quick emergency response—meet or exceed citizen expectations.</li>
          </ul>
        </AccordionItem>
        <AccordionItem title="Scalability and Future-Readiness" icon={<Layers size={24} />}>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Modular and Scalable:</strong> Our solution grows with your needs, whether you're expanding your fleet or integrating new services. Whether you're managing hundreds or thousands of vehicles, our platform can scale to meet your requirements.</li>
            <li><strong>IoT and Electric Vehicle Integration:</strong> Future-proof your fleet with integration options for electric vehicles and IoT-enabled smart infrastructure, ensuring long-term sustainability and alignment with evolving environmental goals.</li>
          </ul>
        </AccordionItem>
      </div>
    </div>
  );
};

export default KeyBenefits;
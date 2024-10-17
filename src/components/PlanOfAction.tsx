import React from 'react';
import { motion } from 'framer-motion';
import { Clipboard, Wrench, Users, PlayCircle, BarChart, Headphones } from 'lucide-react';

const steps = [
  {
    icon: <Clipboard className="w-8 h-8 text-blue-500" />,
    title: "Initial Consultation and Needs Assessment",
    description: "We'll meet with your team to understand your specific requirements and challenges."
  },
  {
    icon: <Wrench className="w-8 h-8 text-green-500" />,
    title: "Customized Solution Design",
    description: "Our experts will tailor a fleet management solution to address your unique needs."
  },
  {
    icon: <Users className="w-8 h-8 text-purple-500" />,
    title: "Staff Training and Onboarding",
    description: "We'll provide comprehensive training to ensure your team can effectively use the new system."
  },
  {
    icon: <PlayCircle className="w-8 h-8 text-red-500" />,
    title: "Go-Live and Initial Monitoring",
    description: "We'll oversee the system launch and closely monitor its performance in the first few weeks."
  },
  {
    icon: <BarChart className="w-8 h-8 text-yellow-500" />,
    title: "Performance Review and Optimization",
    description: "After the initial period, we'll review the system's performance and make necessary adjustments."
  },
  {
    icon: <Headphones className="w-8 h-8 text-indigo-500" />,
    title: "Ongoing Support and Continuous Improvement",
    description: "Our team will provide ongoing support and regularly update the system to ensure optimal performance."
  }
];

const PlanOfAction: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="mb-8">Plan of Action</h2>
      <div className="relative">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="mb-12 flex items-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
              {step.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-300" style={{ height: 'calc(100% - 3rem)' }} />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PlanOfAction;
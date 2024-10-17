import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRight, FileDown } from 'lucide-react';
import { motion } from 'framer-motion';

const links = [
  { to: '/', label: 'Cover' },
  { to: '/introduction', label: 'Introduction' },
  { to: '/key-benefits', label: 'Key Benefits' },
  { to: '/proposal', label: 'The Proposal' },
  { to: '/plan-of-action', label: 'Plan of Action' },
  { to: '/investment', label: 'Investment' },
  { to: '/about-us', label: 'About Us' },
  { to: '/closing', label: 'Closing' },
];

interface SidebarProps {
  onPrintPDF: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onPrintPDF }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-64 bg-gray-800 text-white h-screen shadow-lg fixed left-0 top-0 overflow-y-auto flex flex-col"
    >
      <div className="p-4">
        <img 
          src="https://baitsanape.tech/wp-content/uploads/2024/10/rainrock-logo-hz.png" 
          alt="RainRock Logo" 
          className="w-full max-w-[200px] mx-auto"
        />
      </div>
      <div className="p-4 text-sm text-gray-400">
        {formatDate(currentDateTime)}
      </div>
      <nav className="mt-4 flex-grow">
        <ul>
          {links.map((link, index) => (
            <motion.li
              key={link.to}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center py-2 px-4 ${
                    isActive ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } transition-colors duration-200`
                }
              >
                <ChevronRight className="w-4 h-4 mr-2" />
                {link.label}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </nav>
      <div className="p-4 text-xs text-gray-400 mt-auto">
        <button onClick={onPrintPDF} className="flex items-center hover:text-white transition-colors duration-200">
          <FileDown className="w-4 h-4 mr-2" />
          Download Proposal (PDF)
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
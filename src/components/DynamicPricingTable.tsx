import React, { useState, useEffect } from 'react';

interface PricingItem {
  system: string;
  category: string;
  costPerUnit: number | string;
  units: number;
  rateType: 'Monthly Fee' | 'Once-off' | 'Percentage' | 'Hourly Rate';
  onceOff?: number;
  markup?: number;
}

interface DynamicPricingTableProps {
  setTotalMonthlyCost: (total: number) => void;
  setTotalInitialCost: (total: number) => void;
  setSelectedItems: (items: { system: string; units: number }[]) => void;
}

const initialPricingData: PricingItem[] = [
  { system: 'Initial Consultation and Needs Assessment', category: 'Set-Up, Installation & Configuration', costPerUnit: 5000, units: 1, rateType: 'Once-off' },
  { system: 'Customized Solution Design', category: 'Set-Up, Installation & Configuration', costPerUnit: 10000, units: 1, rateType: 'Once-off' },
  { system: 'Project Establishment & Setup', category: 'Set-Up, Installation & Configuration', costPerUnit: 7500, units: 1, rateType: 'Once-off' },
  { system: 'System Setup and Configurations', category: 'Set-Up, Installation & Configuration', costPerUnit: 15000, units: 1, rateType: 'Once-off' },
  { system: 'Users Setup', category: 'Set-Up, Installation & Configuration', costPerUnit: 500, units: 10, rateType: 'Once-off' },
  { system: 'Control Systems Implementation', category: 'Set-Up, Installation & Configuration', costPerUnit: 10000, units: 1, rateType: 'Once-off' },
  { system: 'Staff Training and Onboarding', category: 'Set-Up, Installation & Configuration', costPerUnit: 2000, units: 10, rateType: 'Once-off' },
  { system: 'Go-Live and Initial Monitoring', category: 'Set-Up, Installation & Configuration', costPerUnit: 5000, units: 1, rateType: 'Once-off' },
  { system: 'Performance Review and Optimization', category: 'Set-Up, Installation & Configuration', costPerUnit: 3000, units: 1, rateType: 'Once-off' },
  { system: 'Ongoing Support Setup', category: 'Set-Up, Installation & Configuration', costPerUnit: 2000, units: 1, rateType: 'Once-off' },
  { system: 'GPS Telematics', category: 'Monitoring', costPerUnit: 277.50, units: 150, rateType: 'Monthly Fee' },
  { system: 'Video Telematics', category: 'Monitoring', costPerUnit: 647.50, units: 150, rateType: 'Monthly Fee' },
  { system: 'Driver Behavior Monitoring', category: 'Monitoring', costPerUnit: 185, units: 150, rateType: 'Monthly Fee' },
  { system: 'Pick-Up & Delivery Logistics Apps', category: 'Management', costPerUnit: 370, units: 150, rateType: 'Monthly Fee' },
  { system: 'Staff Scheduling', category: 'Management', costPerUnit: 92.50, units: 150, rateType: 'Monthly Fee' },
  { system: 'Licensing and Fines', category: 'Management', costPerUnit: 50, units: 150, rateType: 'Monthly Fee' },
  { system: 'Fuel Management', category: 'Management', costPerUnit: 222, units: 150, rateType: 'Monthly Fee' },
  { system: 'Artisan: Diesel Mechanic', category: 'Repairs & Maintenance Digital Platform', costPerUnit: 750, units: 1, rateType: 'Hourly Rate' },
  { system: 'Artisan: Auto Electrician', category: 'Repairs & Maintenance Digital Platform', costPerUnit: 850, units: 1, rateType: 'Hourly Rate' },
  { system: 'Artisan: Vehicle Body Builder', category: 'Repairs & Maintenance Digital Platform', costPerUnit: 700, units: 1, rateType: 'Hourly Rate' },
  { system: 'Maintenance Assistant: Support Staff', category: 'Repairs & Maintenance Digital Platform', costPerUnit: 500, units: 1, rateType: 'Hourly Rate' },
  { system: 'Markup on outsourced repair & maintenance services', category: 'Repairs & Maintenance Digital Platform', costPerUnit: '20%', units: 1, rateType: 'Percentage' },
  { system: 'Markup on Parts & Consumables', category: 'Repairs & Maintenance Digital Platform', costPerUnit: '20%', units: 1, rateType: 'Percentage' },
  { system: 'Inspection Application (Per Vehicle)', category: 'Monitoring', costPerUnit: 99, units: 150, rateType: 'Monthly Fee' },
  { system: 'Yearly Vehicle Conditional Assessment & Audit All Vehicles With Reports', category: 'Repairs & Maintenance Digital Platform', costPerUnit: 1150000, units: 1, rateType: 'Once-off' },
  { system: 'COT Platform Module License (Ticketing Platform) Per vehicle & Report', category: 'Repairs & Maintenance Digital Platform', costPerUnit: 299, units: 150, rateType: 'Monthly Fee' },
  { system: 'Fleet Maintenance Solution', category: 'Maintenance', costPerUnit: 462.50, units: 150, rateType: 'Monthly Fee' },
  { system: 'Access Control & CCTV Monitoring', category: 'Set-Up, Installation & Configuration', costPerUnit: 6000, units: 10, rateType: 'Monthly Fee' },
  { system: 'Access Control & CCTV Monitoring', category: 'Monitoring', costPerUnit: 200, units: 100, rateType: 'Monthly Fee' },
  { system: 'Tyre Management', category: 'Management', costPerUnit: 170, units: 150, rateType: 'Monthly Fee' },
  { system: 'Roadside Assistance', category: 'Other Value Added Services', costPerUnit: 100, units: 150, rateType: 'Monthly Fee' },
  { system: 'Vehicle Rentals', category: 'Other Value Added Services', costPerUnit: 500, units: 10, rateType: 'Monthly Fee' },
  { system: 'Installation of Vehicle Sensors', category: 'Set-Up, Installation & Configuration', costPerUnit: 1000, units: 150, rateType: 'Monthly Fee' },
  { system: 'GPS Trackers', category: 'Set-Up, Installation & Configuration', costPerUnit: 3500, units: 150, rateType: 'Once-off' },
  { system: 'Dual A.I. Dashcam', category: 'Set-Up, Installation & Configuration', costPerUnit: 14500, units: 150, rateType: 'Once-off' },
  { system: 'Fuel Sensors', category: 'Set-Up, Installation & Configuration', costPerUnit: 4500, units: 150, rateType: 'Once-off' },
  { system: 'Tyre Sensors', category: 'Set-Up, Installation & Configuration', costPerUnit: 1800, units: 150, rateType: 'Once-off' },
  { system: 'Vehicle Branding', category: 'Other Value Added Services', costPerUnit: 1000, units: 150, rateType: 'Once-off' },
];

const categories = ['Set-Up, Installation & Configuration', 'Monitoring', 'Management', 'Repairs & Maintenance Digital Platform', 'Maintenance', 'Other Value Added Services'];

const DynamicPricingTable: React.FC<DynamicPricingTableProps> = ({ setTotalMonthlyCost, setTotalInitialCost, setSelectedItems }) => {
  const [pricingData, setPricingData] = useState<PricingItem[]>(initialPricingData);

  useEffect(() => {
    calculateTotals();
  }, [pricingData]);

  const calculateTotals = () => {
    let monthlyTotal = 0;
    let initialTotal = 0;
    const selectedItems: { system: string; units: number }[] = [];

    pricingData.forEach(item => {
      const cost = typeof item.costPerUnit === 'number' ? item.costPerUnit : 0;
      if (item.rateType === 'Monthly Fee') {
        monthlyTotal += cost * item.units;
      } else if (item.rateType === 'Once-off') {
        initialTotal += cost * item.units;
      }
      selectedItems.push({ system: item.system, units: item.units });
    });

    setTotalMonthlyCost(monthlyTotal);
    setTotalInitialCost(initialTotal);
    setSelectedItems(selectedItems);
  };

  const handleUnitChange = (index: number, value: number) => {
    const newPricingData = [...pricingData];
    newPricingData[index].units = Math.max(0, value);
    setPricingData(newPricingData);
  };

  const handleCostChange = (index: number, value: string) => {
    const newPricingData = [...pricingData];
    newPricingData[index].costPerUnit = value.endsWith('%') ? value : parseFloat(value) || 0;
    setPricingData(newPricingData);
  };

  const renderCategoryRows = (category: string) => {
    return pricingData
      .filter(item => item.category === category)
      .map((item, index) => (
        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
          <td className="p-2 border w-16">
            <input
              type="number"
              min="0"
              value={item.units}
              onChange={(e) => handleUnitChange(pricingData.indexOf(item), parseInt(e.target.value) || 0)}
              className="w-full p-1 border rounded text-xs units-input"
            />
          </td>
          <td className="p-2 border text-xs">{item.system}</td>
          <td className="p-2 border text-xs w-32">
            <input
              type="text"
              value={item.costPerUnit}
              onChange={(e) => handleCostChange(pricingData.indexOf(item), e.target.value)}
              className="w-full p-1 border rounded text-xs"
            />
          </td>
          <td className="p-2 border text-xs w-24">{item.rateType}</td>
          <td className="p-2 border text-xs w-40">
            {item.rateType === 'Monthly Fee' ? 
              `R ${(typeof item.costPerUnit === 'number' ? item.costPerUnit * item.units : 0).toFixed(2)}` : 
              (item.rateType === 'Percentage' ? `${item.costPerUnit}` : 'N/A')}
          </td>
          <td className="p-2 border text-xs w-32">
            {item.rateType === 'Once-off' ? 
              `R ${(typeof item.costPerUnit === 'number' ? item.costPerUnit * item.units : 0).toFixed(2)}` : 
              'N/A'}
          </td>
        </tr>
      ));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Pricing Calculator</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border text-xs w-16">Units</th>
              <th className="p-2 border text-xs">System</th>
              <th className="p-2 border text-xs w-32">Rate/Monthly Fee</th>
              <th className="p-2 border text-xs w-24">Rate Type</th>
              <th className="p-2 border text-xs w-40">Estimated Monthly Subtotal</th>
              <th className="p-2 border text-xs w-32">Initial Cost</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <React.Fragment key={index}>
                <tr className="bg-blue-100">
                  <td colSpan={6} className="p-2 border font-bold text-xs">{category}</td>
                </tr>
                {renderCategoryRows(category)}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DynamicPricingTable;
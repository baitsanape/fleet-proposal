import React from 'react';

const pricingData = [
  { system: 'GPS Telematics', costPerUnit: 30, totalCost: 4500 },
  { system: 'Video Telematics', costPerUnit: 45, totalCost: 6750 },
  { system: 'Driver Behavior Monitoring', costPerUnit: 15, totalCost: 2250 },
  { system: 'Pick-Up & Delivery Logistics Apps', costPerUnit: 20, totalCost: 3000 },
  { system: 'Staff Scheduling', costPerUnit: 500, totalCost: 500 },
  { system: 'Fuel Management', costPerUnit: 25, totalCost: 3750 },
  { system: 'Maintenance Solution', costPerUnit: 30, totalCost: 4500 },
  { system: 'Access Control & CCTV Monitoring', costPerUnit: 2000, totalCost: 2000 },
  { system: 'Tyre Management', costPerUnit: 20, totalCost: 3000 },
];

const PricingTable: React.FC = () => {
  const totalMonthlyCost = pricingData.reduce((acc, item) => acc + item.totalCost, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md" id="pricing">
      <h2 className="text-3xl font-bold mb-6 text-center">Pricing Overview</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border">System</th>
              <th className="p-3 border">Cost Per Unit/Month</th>
              <th className="p-3 border">Total Estimated Cost/Month</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="p-3 border">{item.system}</td>
                <td className="p-3 border">${item.costPerUnit.toFixed(2)}</td>
                <td className="p-3 border">${item.totalCost.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-blue-100 font-bold">
              <td className="p-3 border" colSpan={2}>Total Monthly Estimate</td>
              <td className="p-3 border">${totalMonthlyCost.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default PricingTable;
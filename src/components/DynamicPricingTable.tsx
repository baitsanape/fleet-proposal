import React, { useState, useEffect } from 'react';

interface PricingItem {
  system: string;
  category: string;
  costPerUnit: number;
  units: number;
  selected: boolean;
  hardwareOptions?: { name: string; cost: number; installationCost: number }[];
}

interface DynamicPricingTableProps {
  setTotalMonthlyCost: (total: number) => void;
  setTotalInitialCost: (total: number) => void;
  setSelectedItems: (items: { system: string; units: number; hardware?: string }[]) => void;
}

const initialPricingData: PricingItem[] = [
  { system: 'Initial Consultation and Needs Assessment', category: 'Set-Up', costPerUnit: 5000, units: 1, selected: true },
  { system: 'Customized Solution Design', category: 'Set-Up', costPerUnit: 10000, units: 1, selected: true },
  { system: 'Project Establishment & Setup', category: 'Set-Up', costPerUnit: 7500, units: 1, selected: true },
  { system: 'System Setup and Configurations', category: 'Set-Up', costPerUnit: 15000, units: 1, selected: true },
  { system: 'User Setups', category: 'Set-Up', costPerUnit: 500, units: 10, selected: true },
  { system: 'Control Systems Implementation', category: 'Set-Up', costPerUnit: 10000, units: 1, selected: true },
  { system: 'Staff Training and Onboarding', category: 'Set-Up', costPerUnit: 2000, units: 10, selected: true },
  { system: 'Go-Live and Initial Monitoring', category: 'Set-Up', costPerUnit: 5000, units: 1, selected: true },
  { system: 'Performance Review and Optimization', category: 'Set-Up', costPerUnit: 3000, units: 1, selected: true },
  { system: 'Ongoing Support Setup', category: 'Set-Up', costPerUnit: 2000, units: 1, selected: true },
  { system: 'GPS Telematics', category: 'Monitoring', costPerUnit: 277.50, units: 150, selected: true, hardwareOptions: [
    { name: 'Teltonika FMB920 GNSS/GSM Terminal', cost: 1562.50, installationCost: 1000 },
    { name: 'Teltonika FMC001 GNSS/GSM Terminal', cost: 1875.00, installationCost: 1000 },
    { name: 'Teltonika FMM001 GNSS/GSM Terminal', cost: 2187.50, installationCost: 1000 }
  ]},
  { system: 'Video Telematics', category: 'Monitoring', costPerUnit: 647.50, units: 150, selected: true, hardwareOptions: [
    { name: 'Streamax AD Plus', cost: 12500, installationCost: 1000 }
  ]},
  { system: 'Driver Behavior Monitoring', category: 'Monitoring', costPerUnit: 185, units: 150, selected: true },
  { system: 'Pick-Up & Delivery Logistics Apps', category: 'Management', costPerUnit: 370, units: 150, selected: true },
  { system: 'Staff Scheduling', category: 'Management', costPerUnit: 92.50, units: 150, selected: true },
  { system: 'Licensing and Fines', category: 'Management', costPerUnit: 50, units: 150, selected: true },
  { system: 'Fuel Management', category: 'Management', costPerUnit: 222, units: 150, selected: true, hardwareOptions: [
    { name: 'Fuel Level Sensor', cost: 1500, installationCost: 1000 }
  ]},
  { system: 'Fleet Maintenance Solution', category: 'Maintenance', costPerUnit: 462.50, units: 150, selected: true },
  { system: 'Access Control & CCTV Monitoring', category: 'Maintenance', costPerUnit: 2000, units: 150, selected: true },
  { system: 'Tyre Management', category: 'Maintenance', costPerUnit: 370, units: 150, selected: true, hardwareOptions: [
    { name: 'Tyre Pressure Sensor', cost: 400, installationCost: 1000 },
    { name: 'Tyre Branding', cost: 200, installationCost: 100 }
  ]},
  { system: 'Roadside Assistance', category: 'Other Value Added Services', costPerUnit: 100, units: 150, selected: true },
  { system: 'Vehicle Rentals', category: 'Other Value Added Services', costPerUnit: 500, units: 10, selected: true },
  { system: 'Vehicle Branding', category: 'Other Value Added Services', costPerUnit: 1000, units: 150, selected: true },
];

const categories = ['Set-Up', 'Monitoring', 'Management', 'Maintenance', 'Other Value Added Services'];

const DynamicPricingTable: React.FC<DynamicPricingTableProps> = ({ setTotalMonthlyCost, setTotalInitialCost, setSelectedItems }) => {
  const [pricingData, setPricingData] = useState<PricingItem[]>(initialPricingData);
  const [selectedHardware, setSelectedHardware] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    let monthlyTotal = 0;
    let initialTotal = 0;
    const selectedItems: { system: string; units: number; hardware?: string }[] = [];

    pricingData.forEach(item => {
      if (item.selected) {
        monthlyTotal += item.costPerUnit * item.units;
        initialTotal += item.costPerUnit * item.units;

        const selectedItem = { system: item.system, units: item.units };

        if (item.hardwareOptions && selectedHardware[item.system]) {
          const hardware = item.hardwareOptions.find(h => h.name === selectedHardware[item.system]);
          if (hardware) {
            initialTotal += (hardware.cost + hardware.installationCost) * item.units;
            selectedItem.hardware = hardware.name;
          }
        }

        selectedItems.push(selectedItem);
      }
    });

    setTotalMonthlyCost(monthlyTotal);
    setTotalInitialCost(initialTotal);
    setSelectedItems(selectedItems);
  }, [pricingData, selectedHardware, setTotalMonthlyCost, setTotalInitialCost, setSelectedItems]);

  const handleUnitChange = (index: number, value: number) => {
    const newPricingData = [...pricingData];
    newPricingData[index].units = Math.max(0, value);
    setPricingData(newPricingData);
  };

  const handleSelectionChange = (index: number, checked: boolean) => {
    const newPricingData = [...pricingData];
    newPricingData[index].selected = checked;
    if (checked && newPricingData[index].units === 0) {
      newPricingData[index].units = 1;
    }
    setPricingData(newPricingData);
  };

  const handleHardwareChange = (system: string, hardware: string) => {
    setSelectedHardware(prev => ({ ...prev, [system]: hardware }));
  };

  const renderCategoryRows = (category: string) => {
    return pricingData
      .filter(item => item.category === category)
      .map((item, index) => (
        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
          <td className="p-2 border">
            <input
              type="checkbox"
              checked={item.selected}
              onChange={(e) => handleSelectionChange(index, e.target.checked)}
              className="form-checkbox h-4 w-4 text-blue-600 select-checkbox"
            />
          </td>
          <td className="p-2 border text-xs">{item.system}</td>
          <td className="p-2 border text-xs">R {item.costPerUnit.toFixed(2)}</td>
          <td className="p-2 border">
            <input
              type="number"
              min="0"
              value={item.units}
              onChange={(e) => handleUnitChange(index, parseInt(e.target.value) || 0)}
              className="w-full p-1 border rounded text-xs units-input"
              disabled={!item.selected}
            />
          </td>
          <td className="p-2 border">
            {item.hardwareOptions && (
              <select
                value={selectedHardware[item.system] || ''}
                onChange={(e) => handleHardwareChange(item.system, e.target.value)}
                className="w-full p-1 border rounded text-xxs hardware-select"
                disabled={!item.selected}
              >
                <option value="">No hardware</option>
                {item.hardwareOptions.map((option, idx) => (
                  <option key={idx} value={option.name}>
                    {option.name} (R {option.cost.toFixed(2)} + R {option.installationCost.toFixed(2)} installation)
                  </option>
                ))}
              </select>
            )}
          </td>
          <td className="p-2 border text-xs">
            R {item.selected ? (item.costPerUnit * item.units).toFixed(2) : '0.00'}
          </td>
          <td className="p-2 border text-xs">
            R {item.selected ? (
              (item.costPerUnit * item.units +
              (item.hardwareOptions && selectedHardware[item.system]
                ? (item.hardwareOptions.find(h => h.name === selectedHardware[item.system])?.cost || 0) * item.units +
                  (item.hardwareOptions.find(h => h.name === selectedHardware[item.system])?.installationCost || 0) * item.units
                : 0))
            ).toFixed(2) : '0.00'}
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
              <th className="p-2 border text-xs">Select</th>
              <th className="p-2 border text-xs">System</th>
              <th className="p-2 border text-xs w-28">Monthly Cost Per Unit</th>
              <th className="p-2 border text-xs w-20">Units</th>
              <th className="p-2 border text-xs w-44">Hardware Options</th>
              <th className="p-2 border text-xs w-32">Monthly Subtotal</th>
              <th className="p-2 border text-xs w-32">Initial Cost</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <React.Fragment key={index}>
                <tr className="bg-blue-100">
                  <td colSpan={7} className="p-2 border font-bold text-xs">{category}</td>
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
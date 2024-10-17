import React, { useState, useEffect } from 'react';
// Note: react-joyride is causing a findDOMNode deprecation warning.
// This is a known issue with the library and doesn't affect functionality.
// Consider replacing with an alternative library if this warning becomes problematic.
import Joyride, { Step } from 'react-joyride';
import DynamicPricingTable from './DynamicPricingTable';

interface SelectedItem {
  system: string;
  units: number;
  hardware?: string;
}

const Investment: React.FC = () => {
  const [totalMonthlyCost, setTotalMonthlyCost] = useState(0);
  const [totalInitialCost, setTotalInitialCost] = useState(0);
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
  const [runTour, setRunTour] = useState(true);

  const steps: Step[] = [
    {
      target: '.pricing-calculator',
      content: 'Welcome to our pricing calculator. Let\'s walk through how to use it.',
      placement: 'center',
    },
    {
      target: '.select-checkbox',
      content: 'First, select the items you want to include in your solution.',
      placement: 'bottom',
    },
    {
      target: '.units-input',
      content: 'Then, choose the number of units you need for each selected item.',
      placement: 'bottom',
    },
    {
      target: '.hardware-select',
      content: 'If applicable, select the hardware option for the item.',
      placement: 'bottom',
    },
    {
      target: '.cost-breakdown',
      content: 'Finally, view the cost breakdown here to see your total investment.',
      placement: 'top',
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Investment</h2>
      <p className="mb-4">
        Our pricing structure is designed to provide maximum value for your investment. Use the interactive table below to calculate the costs based on your specific needs:
      </p>
      <p className="mb-4 text-sm font-semibold text-red-600">
        Note: All prices shown below exclude VAT.
      </p>
      <Joyride
        steps={steps}
        run={runTour}
        continuous
        showSkipButton
        styles={{
          options: {
            primaryColor: '#3b82f6',
          },
        }}
        callback={(data) => {
          if (data.status === 'finished' || data.status === 'skipped') {
            setRunTour(false);
          }
        }}
      />
      <div className="pricing-calculator">
        <DynamicPricingTable 
          setTotalMonthlyCost={setTotalMonthlyCost} 
          setTotalInitialCost={setTotalInitialCost}
          setSelectedItems={setSelectedItems}
        />
      </div>
      <div className="mt-8 bg-gray-100 p-6 rounded-lg cost-breakdown">
        <h3 className="text-2xl font-bold mb-4">Cost Breakdown (Excluding VAT)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Initial Costs</h4>
            <p className="mb-2 text-sm"><strong>Hardware and Installation:</strong> R {(totalInitialCost - totalMonthlyCost).toFixed(2)}</p>
            <p className="mb-2 text-sm"><strong>First Month Service:</strong> R {totalMonthlyCost.toFixed(2)}</p>
            <p className="text-xs text-gray-600">This includes one-time costs for equipment, setup, and the first month of service.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Monthly Recurring Costs</h4>
            <p className="mb-2 text-sm"><strong>Total Monthly Cost:</strong> R {totalMonthlyCost.toFixed(2)}</p>
            <p className="text-xs text-gray-600">This includes software subscriptions and ongoing services.</p>
          </div>
        </div>
        <div className="mt-6">
          <h4 className="text-xl font-semibold mb-2">Total Initial Investment</h4>
          <p className="text-2xl font-bold">R {totalInitialCost.toFixed(2)}</p>
          <p className="text-xs text-gray-600">
            This includes the initial hardware and installation costs, plus the first month of service.
          </p>
        </div>
        <div className="mt-6">
          <h4 className="text-xl font-semibold mb-2">Selected Items Summary</h4>
          <ul className="list-disc pl-5">
            {selectedItems.map((item, index) => (
              <li key={index} className="text-sm">
                <strong>{item.system}:</strong> {item.units} unit(s)
                {item.hardware && <span> with {item.hardware}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-4 text-xs text-gray-600">
        Note: Hardware costs and installation fees are one-time purchases. Monthly costs include software subscriptions and ongoing services. Prices are subject to change based on specific requirements and customizations. All prices are exclusive of VAT.
      </p>
    </div>
  );
};

export default Investment;
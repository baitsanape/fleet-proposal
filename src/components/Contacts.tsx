import React from 'react';

const Contacts: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Contacts</h2>
      <div className="space-y-4">
        <p>
          <strong>Sales Department:</strong> sales@fleetmasterpro.com | +1 (555) 123-4567
        </p>
        <p>
          <strong>Support Team:</strong> support@fleetmasterpro.com | +1 (555) 987-6543
        </p>
        <p>
          <strong>Main Office:</strong> 123 Fleet Street, Cityville, State 12345
        </p>
      </div>
    </div>
  );
};

export default Contacts;
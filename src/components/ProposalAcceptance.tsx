import React, { useState } from 'react';

interface ProposalAcceptanceProps {
  onClose: () => void;
}

const ProposalAcceptance: React.FC<ProposalAcceptanceProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'sales@baitsanape.tech',
          subject: 'New Proposal Acceptance',
          text: `A new proposal has been accepted:
            Name: ${name}
            Email: ${email}
            Company: ${company}`,
        }),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        setAccepted(true);
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  // ... rest of the component remains the same
};

export default ProposalAcceptance;
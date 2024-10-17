import React, { useState } from 'react';

const Closing: React.FC = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowThankYou(true);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Closing</h2>
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Impression</h3>
        <p className="mb-4">
          We hope this proposal has given you a comprehensive overview of our fleet management solution. Our goal is to provide you with a tailored system that addresses your specific needs and challenges, ultimately improving your fleet's efficiency and reducing operational costs.
        </p>
        <p className="mb-4">
          We're confident that our solution, powered by RainRock Fleet Management Technology, will significantly enhance your fleet operations and contribute to your company's success.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Final Thoughts</h3>
        <p className="mb-4">
          Thank you for considering our fleet management solution. We believe that this proposal addresses your key challenges and offers a comprehensive solution to optimize your fleet operations.
        </p>
        <p className="mb-4">
          We look forward to the opportunity to work with you and contribute to your company's success. Should you have any questions or require further information, please don't hesitate to contact us.
        </p>
      </div>

      {!showThankYou ? (
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Accept Proposal</h3>
          <form 
            name="proposal-acceptance" 
            method="POST" 
            data-netlify="true" 
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="proposal-acceptance" />
            <p hidden>
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" id="name" name="name" required className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="block mb-2">Company</label>
              <input type="text" id="company" name="company" required className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">Additional Comments</label>
              <textarea id="message" name="message" rows={4} className="w-full p-2 border rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Accept Proposal
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-green-100 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
          <p>Your acceptance of the proposal has been received. We'll be in touch with you shortly to discuss the next steps.</p>
        </div>
      )}
    </div>
  );
};

export default Closing;
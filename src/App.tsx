import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import Sidebar from './components/Sidebar';
import Cover from './components/Cover';
import Introduction from './components/Introduction';
import KeyBenefits from './components/KeyBenefits';
import Proposal from './components/Proposal';
import PlanOfAction from './components/PlanOfAction';
import Investment from './components/Investment';
import AboutUs from './components/AboutUs';
import Closing from './components/Closing';
import Footer from './components/Footer';
import PrintableContent from './components/PrintableContent';

const App: React.FC = () => {
  const printableRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => printableRef.current,
    documentTitle: 'Fleet_Management_Proposal',
  });

  return (
    <Router>
      <div className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
        <Sidebar onPrintPDF={handlePrint} />
        <div className="flex-1 ml-64">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 my-8">
            <Routes>
              <Route path="/" element={<Cover />} />
              <Route path="/introduction" element={<Introduction />} />
              <Route path="/key-benefits" element={<KeyBenefits />} />
              <Route path="/proposal" element={<Proposal />} />
              <Route path="/plan-of-action" element={<PlanOfAction />} />
              <Route path="/investment" element={<Investment />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/closing" element={<Closing />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
      <div style={{ display: 'none' }}>
        <PrintableContent ref={printableRef} />
      </div>
    </Router>
  );
};

export default App;
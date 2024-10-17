import jsPDF from 'jspdf';

export const generatePDF = () => {
  const doc = new jsPDF();
  let yOffset = 20;

  const addSection = (title: string, content: string) => {
    doc.setFontSize(16);
    doc.text(title, 20, yOffset);
    yOffset += 10;
    doc.setFontSize(12);
    const splitContent = doc.splitTextToSize(content, 170);
    doc.text(splitContent, 20, yOffset);
    yOffset += splitContent.length * 7 + 10;

    if (yOffset > 280) {
      doc.addPage();
      yOffset = 20;
    }
  };

  // Cover
  doc.setFontSize(24);
  doc.text('Fleet Management Proposal', 20, yOffset);
  yOffset += 20;
  doc.setFontSize(14);
  doc.text('Prepared for: King Sabata Dalindyebo Municipality (KSDM)', 20, yOffset);
  yOffset += 10;
  doc.text('Prepared by: Baitsanape IT Company (Pty) Ltd', 20, yOffset);
  yOffset += 20;

  // Introduction
  addSection('1. Introduction', 'This proposal outlines our comprehensive fleet management solution designed to revolutionize your fleet operations, increase efficiency, and reduce costs. As a public service provider, ensuring the timely and efficient operation of your fleet is critical to maintaining service reliability, public safety, and cost-effectiveness.');

  // Key Benefits
  addSection('2. Key Benefits', 'Our solution offers numerous benefits including cost reduction, enhanced operational efficiency, improved public safety and compliance, data-driven decision making, community-focused service reliability, and scalability for future needs.');

  // The Proposal
  addSection('3. The Proposal', 'Our comprehensive fleet management solution includes RainRock Track for GPS Telematics, RainRock Vision for Video Telematics, RainRock Eco Driving for Driver Behaviour, RainRock Route Planner for Pick-Up and Delivery Logistics, and RainRock Scheduling for AI-powered employee scheduling.');

  // Plan of Action
  addSection('4. Plan of Action', 'Our implementation plan includes initial consultation, customized solution design, staff training, system launch, performance review, and ongoing support to ensure optimal performance and results.');

  // Investment
  addSection('5. Investment', 'Our pricing structure is designed to provide maximum value for your investment. The total cost will depend on the specific components and scale of implementation chosen.');

  // About Us
  addSection('6. About Us', 'Baitsanape IT Company (Pty) Ltd is a leading provider of innovative IT solutions, specializing in fleet management and technology integration. We are dedicated to enhancing operational efficiency, reducing costs, and promoting environmental sustainability in the public sector.');

  // Save the PDF
  doc.save('Fleet_Management_Proposal.pdf');
};
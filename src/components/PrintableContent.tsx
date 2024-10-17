import React, { forwardRef } from 'react';
import Cover from './Cover';
import Introduction from './Introduction';
import KeyBenefits from './KeyBenefits';
import Proposal from './Proposal';
import PlanOfAction from './PlanOfAction';
import Investment from './Investment';
import AboutUs from './AboutUs';

const PrintableContent = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="print-content">
      <Cover />
      <Introduction />
      <KeyBenefits />
      <Proposal />
      <PlanOfAction />
      <Investment />
      <AboutUs />
    </div>
  );
});

PrintableContent.displayName = 'PrintableContent';

export default PrintableContent;
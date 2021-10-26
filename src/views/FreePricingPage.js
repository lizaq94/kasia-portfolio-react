import React from 'react';
import ViewWrapper from 'components/molecues/ViewWrapper/ViewWrapper';
import HeaderSection from 'components/organism/HeaderSection/HeaderSection';
import FreePricingForm from 'components/organism/FreePricingForm/FreePricingForm';

const FreePricingPage = () => {
  return (
    <ViewWrapper>
      <HeaderSection title={'Otrzymaj darmową wycenę w 48h'} />
      <FreePricingForm />
    </ViewWrapper>
  );
};

export default FreePricingPage;

import { createContext, useState } from 'react';

export const AppContext = createContext({
  packageSelection: '',
  setPackageSelection: () => {},
  numberOfCampaignsSelection: '',
  setNumberOfCampaignsSelection: () => {},
  campaignBudgetSelection: '',
  setCampaignBudgetSelection: () => {},
});

export const AppContextProvider = ({ children }) => {
  const [packageSelection, setPackageSelection] = useState('test');
  const [numberOfCampaignsSelection, setNumberOfCampaignsSelection] = useState('1-2');
  const [campaignBudgetSelection, setCampaignBudgetSelection] = useState('100-500');

  return (
    <AppContext.Provider
      value={{
        packageSelection,
        setPackageSelection,
        numberOfCampaignsSelection,
        setNumberOfCampaignsSelection,
        campaignBudgetSelection,
        setCampaignBudgetSelection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

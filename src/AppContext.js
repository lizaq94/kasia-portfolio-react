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
  const [packageSelection, setPackageSelection] = useState('');
  const [numberOfCampaignsSelection, setNumberOfCampaignsSelection] = useState('');
  const [campaignBudgetSelection, setCampaignBudgetSelection] = useState('');
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

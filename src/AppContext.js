import { createContext, useState } from 'react';

export const AppContext = createContext({
  packageSelection: 0,
  setPackageSelection: () => {},
  numberOfCampaignsSelection: 0,
  setNumberOfCampaignsSelection: () => {},
  campaignBudgetSelection: 0,
  setCampaignBudgetSelection: () => {},
});

export const AppContextProvider = ({ children }) => {
  const [packageSelection, setPackageSelection] = useState({ selected: '0', value: 'test' });
  const [numberOfCampaignsSelection, setNumberOfCampaignsSelection] = useState({ selected: '0', value: '1-2' });
  const [campaignBudgetSelection, setCampaignBudgetSelection] = useState({ selected: '0', value: '100-500' });

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

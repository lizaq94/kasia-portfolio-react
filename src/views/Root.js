import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import OfferPage from './OfferPage';
import PriceListPage from './PriceListPage';
import ContactPage from './ContactPage';
import FreePricingPage from './FreePricingPage';
import { AppContextProvider } from '../AppContext';
import PrivacyPolicy from './PrivacyPolicy';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <AppContextProvider>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/offer">
                <OfferPage />
              </Route>
              <Route path="/price">
                <PriceListPage />
              </Route>
              <Route path="/contact">
                <ContactPage />
              </Route>
              <Route path="/free-pricing">
                <FreePricingPage />
              </Route>
              <Route path="/privacy-policy">
                <PrivacyPolicy />
              </Route>
            </Switch>
          </AppContextProvider>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;

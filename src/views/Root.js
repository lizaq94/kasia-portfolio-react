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

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
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
          </Switch>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;

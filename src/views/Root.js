import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Switch>
            <Route path="/">
              <HomePage></HomePage>
            </Route>
          </Switch>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import Router from './Router';
import { theme } from './Theme';
import React from 'react';

function App() {
  console.log('app');

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;

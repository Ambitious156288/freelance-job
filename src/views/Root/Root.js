import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';

import Home from './Home';
import About from './About';
import Services from './Services';
import Price from './Price';
import Find from './Find';
import Contact from './Contact';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Home />
        <About />
        <Services />
        <Price />
        <Find />
        <Contact />
      </>
    </ThemeProvider>
  </div>
);

export default Root;

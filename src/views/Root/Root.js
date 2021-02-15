import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';

import Home from './Home';
import Services from './Services';
import Price from './Price';
import Find from './Find';
import Contact from './Contact';
import About from './About';

const StyledView = styled.div`
  height: 100vh;
  max-width: 100vw;
`;

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <StyledView>
          <Home />
        </StyledView>

        <StyledView>
          <About />
        </StyledView>

        <StyledView>
          <Services />
        </StyledView>

        <StyledView>
          <Price />
        </StyledView>

        <StyledView>
          <Find />
        </StyledView>

        <StyledView>
          <Contact />
        </StyledView>
      </>
    </ThemeProvider>
  </div>
);

export default Root;

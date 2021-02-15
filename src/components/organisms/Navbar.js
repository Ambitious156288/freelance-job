import React from 'react';
import styled from 'styled-components';
import Fonts from 'components/atoms/Fonts/Fonts';
import Navigation from '../molecules/Navigation/Navigation';

const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: ${({ theme }) => theme.black};
  color: white;
  padding: 0 50px;
`;

const StyledFonts = styled(Fonts)`
  font-size: 55px;
  font-weight: bold;
`;

const Navbar = () => (
  <NavDiv>
    <StyledFonts Playfair>Bnk</StyledFonts>
    <Navigation />
  </NavDiv>
);

export default Navbar;

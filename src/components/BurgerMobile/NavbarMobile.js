import React from 'react';
import styled from 'styled-components';
import Fonts from 'components/atoms/Fonts/Fonts';
import Burger from './Burger';

const StyledFonts = styled(Fonts)`
  font-size: 35px;
  font-weight: bold;
  z-index: 20;
`;

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.black};
`;

const NavbarMobile = () => {
  return (
    <Nav>
      <StyledFonts Playfair>Bnk</StyledFonts>
      <Burger />
    </Nav>
  );
};

export default NavbarMobile;

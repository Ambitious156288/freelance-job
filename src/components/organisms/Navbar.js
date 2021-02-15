import React from 'react';
import styled from 'styled-components';

const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  /* width: 100%; */
  background-color: ${({ theme }) => theme.black};

  color: white;
`;

const Navbar = () => (
  <NavDiv>
    <div>logo</div>
    <div>nav</div>
  </NavDiv>
);

export default Navbar;

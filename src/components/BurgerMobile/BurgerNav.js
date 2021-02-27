/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

const StyledTab = styled(Tab)`
  font-family: 'Titillium Web', sans-serif !important;
  font-size: 28px !important;
  background-color: ${({ theme }) => theme.black} !important;

  ${({ theme }) => theme.mq.smallSmartphone} {
    font-size: 15px !important;
    margin: 15px 0px 15px 130px !important;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 10;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${({ theme }) => theme.black};
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 110vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Ul open={open}>
      <Tabs
        value={value}
        indicatorColor="secondary"
        textColor="secondary"
        onChange={handleChange}
        orientation="vertical"
      >
        <StyledTab label="O nas" href="#about" />
        <StyledTab label="USŁUGI" href="#services" />
        <StyledTab label="CENNIK" href="#price" />
        <StyledTab label="ZNAJDŹ NAS" href="#find" />
        <StyledTab label="KONTAKT" href="#contact" />
      </Tabs>
    </Ul>
  );
};

export default RightNav;

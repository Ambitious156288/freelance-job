import React from 'react';
import styled from 'styled-components';
import Fonts from 'components/atoms/Fonts/Fonts';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const StyledFonts = styled(Fonts)`
  font-size: 55px;
  font-weight: bold;

  ${({ theme }) => theme.mq.smallSmartphone} {
    font-size: 35px;
  }
`;

const StyledTab = styled(Tab)`
  font-family: 'Titillium Web', sans-serif !important;
  font-size: 28px !important;
  background-color: ${({ theme }) => theme.black} !important;

  ${({ theme }) => theme.mq.smallSmartphone} {
    font-size: 15px !important;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.black};
  padding: 0 50px 0 50px;

  ${({ theme }) => theme.mq.smallSmartphone} {
    padding: 0 20px 0 20px;
  }
`;

const Navbar = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <StyledDiv>
        <StyledFonts Playfair>Bnk</StyledFonts>

        <Paper square>
          <Fonts>
            <Tabs
              value={value}
              indicatorColor="secondary"
              textColor="secondary"
              onChange={handleChange}
            >
              <StyledTab label="O nas" href="#about" />
              <StyledTab label="USŁUGI" href="#services" />
              <StyledTab label="CENNIK" href="#price" />
              <StyledTab label="ZNAJDŹ NAS" href="#find" />
              <StyledTab label="KONTAKT" href="#contact" />
            </Tabs>
          </Fonts>
        </Paper>
      </StyledDiv>
    </>
  );
};

export default Navbar;

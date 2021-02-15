import React from 'react';
import styled from 'styled-components';
import Fonts from 'components/atoms/Fonts/Fonts';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Navigation from '../molecules/Navigation/Navigation';

// const NavDiv = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//
//   background-color: ${({ theme }) => theme.black};
//   color: white;
//
// `;

// .MuiTab-textColorSecondary.Mui-selected {
//   color: #f50057;
// }

const StyledFonts = styled(Fonts)`
  font-size: 55px;
  font-weight: bold;
`;

const StyledTab = styled(Tab)`
  font-family: 'Titillium Web', sans-serif !important;
  font-size: 28px !important;
  background-color: ${({ theme }) => theme.black} !important;
  /* color: ${({ theme }) => theme.white} !important; */
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.black};
  padding: 0 50px 0 50px;
  /* height: 70px; */
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
              // orientation="vertical"
            >
              <StyledTab label="O nas" />
              <StyledTab label="USŁUGI" />
              <StyledTab label="CENNIK" />
              <StyledTab label="ZNAJDŹ NAS" />
              <StyledTab label="KONTAKT" href="#kontakt" />
            </Tabs>
          </Fonts>
        </Paper>
        {/* <div>
          <a href="#kontakt">aa</a>
        </div> */}
      </StyledDiv>
    </>
  );
};

export default Navbar;

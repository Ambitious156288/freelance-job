import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Fonts from 'components/atoms/Fonts/Fonts';

const StyledTab = styled(Tab)`
  font-family: 'Titillium Web', sans-serif !important;
  font-size: 28px !important;
  background-color: ${({ theme }) => theme.black} !important;
  /* color: ${({ theme }) => theme.white} !important; */
`;

const Navigation = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <p>aaa</p>
      <div>
        <Paper square>
          <Fonts black>
            <Tabs
              value={value}
              indicatorColor="secondary"
              textColor="secondary"
              onChange={handleChange}
            >
              <StyledTab label="fdds" />
              <StyledTab label="Actfsdfdsive" />
            </Tabs>
          </Fonts>
        </Paper>
      </div>
    </>
  );
};

export default Navigation;

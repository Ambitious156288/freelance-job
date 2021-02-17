import React from 'react';
import styled from 'styled-components';
import Fonts from 'components/atoms/Fonts/Fonts';
import AppMap from '../../data/AppMap';

const StyledTitle = styled(Fonts)`
  font-size: 70px;
  font-weight: bold;
`;

const StyledDiv = styled(Fonts)`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.red};
`;

const Find = () => {
  return (
    <>
      <div id="find">
        <StyledDiv>
          <StyledTitle Playfair>Zapraszamy do punktów przyjęć</StyledTitle>
        </StyledDiv>

        <AppMap />
      </div>
    </>
  );
};

export default Find;

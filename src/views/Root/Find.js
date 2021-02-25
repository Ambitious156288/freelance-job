import React from 'react';
import styled from 'styled-components';
import Fonts from 'components/atoms/Fonts/Fonts';
import AppMap from '../../data/AppMap';

const StyledTitle = styled(Fonts)`
  font-size: 70px;
  font-weight: bold;

  ${({ theme }) => theme.mq.Desktop} {
    font-size: 67px;
  }

  ${({ theme }) => theme.mq.laptops} {
    font-size: 60px;
  }

  ${({ theme }) => theme.mq.bigTablet} {
    font-size: 50px;
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: 37px;
  }

  ${({ theme }) => theme.mq.smallTablet} {
    font-size: 38px;
  }

  ${({ theme }) => theme.mq.smartphone} {
    font-size: 30px;
  }
`;

const StyledDiv = styled(Fonts)`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.red};

  ${({ theme }) => theme.mq.smallTablet} {
    text-align: center;
    padding: 0 20px;
  }
`;

const Find = () => {
  return (
    <div id="find">
      <StyledDiv>
        <StyledTitle Playfair>Zapraszamy do punktów przyjęć</StyledTitle>
      </StyledDiv>

      <AppMap />
    </div>
  );
};

export default Find;

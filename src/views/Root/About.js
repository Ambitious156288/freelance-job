import React from 'react';
import styled from 'styled-components';
import shoemaker from 'assets/icons/shoemaker.jpg';

const StyledView = styled.div`
  position: relative;
`;

const StyledBgc = styled.div`
  position: absolute;
  right: 0;
  height: 100vh;
  z-index: -1;
`;

const StyledDiv = styled.div`
  position: absolute;
  left: 0;
  height: 100vh;
  width: 50vw;
  background-color: ${({ theme }) => theme.black};
`;

const About = () => (
  <StyledView>
    <StyledBgc id="about">
      <img src={shoemaker} width="1624px" height="100%" alt="shoemaker" />
    </StyledBgc>

    <StyledDiv>
      <title>Kim jesteśmy?</title>
      <p>
        Jako firma specjalizujemy się przede wszystkim w naprawie obuwia. Naprawiamy obuwie
        wizytowe, sportowe oraz luksusowe !! Doświadczenie zawodowe pozwala nam na wykonanie wielu
        usług na najwyższym poziomie estetycznym w sposób bardzo tradycyjny i profesjonalny !!
      </p>
    </StyledDiv>
  </StyledView>
);

export default About;

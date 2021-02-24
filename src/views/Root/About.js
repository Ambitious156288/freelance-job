import React from 'react';
import styled from 'styled-components';
import shoemaker from 'assets/icons/shoemaker.jpg';
import Fonts from 'components/atoms/Fonts/Fonts';

const StyledView = styled.div`
  position: relative;
`;

const StyledBgc = styled.div`
  position: absolute;
  right: 0;
  height: 100vh;
  z-index: -1;

  /* ${({ theme }) => theme.mq.smallSmartphone} {
    left: -210vw;
    overflow: hidden;
  } */
`;

const StyledDiv = styled.div`
  position: absolute;
  text-align: center;
  left: 0;
  height: 100vh;
  width: 50vw;
  background-color: ${({ theme }) => theme.black};

  /* ${({ theme }) => theme.mq.smallSmartphone} {
    opacity: 0.85;
    width: 100vw;
  } */
`;

const StyledFirst = styled(Fonts)`
  font-size: 89px;
  font-weight: bold;
  font-style: italic;
  color: ${({ theme }) => theme.orange};
  margin-left: -100px;

  /* ${({ theme }) => theme.mq.smallSmartphone} {
    font-size: 40px;
    margin-left: -10px;
  } */
`;

const StyledSecond = styled(Fonts)`
  font-size: 28px;
  font-weight: 300;
  text-align: left;
  margin: 70px 0 0 150px;

  /* ${({ theme }) => theme.mq.smallSmartphone} {
    font-size: 17px;
    margin: 80px 0 0 65px;
  } */
`;

const StyledCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 50px;

  /* ${({ theme }) => theme.mq.smallSmartphone} {
    margin: 50px 20px;
  } */
`;

const About = () => (
  <StyledView id="about">
    <StyledBgc>
      <img src={shoemaker} width="1624px" height="100%" alt="shoemaker" />
    </StyledBgc>

    <StyledDiv>
      <StyledCenter>
        <StyledFirst Playfair>Kim jesteśmy?</StyledFirst>
        <StyledSecond>
          Jako firma specjalizujemy się przede wszystkim w naprawie obuwia. Naprawiamy obuwie
          wizytowe, sportowe oraz luksusowe !!
          <br /> Doświadczenie zawodowe pozwala nam na wykonanie wielu usług na najwyższym poziomie
          estetycznym w sposób bardzo tradycyjny i profesjonalny !!
        </StyledSecond>
      </StyledCenter>
    </StyledDiv>
  </StyledView>
);

export default About;

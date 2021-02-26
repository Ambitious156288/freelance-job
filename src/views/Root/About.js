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
`;

const StyledDiv = styled.div`
  position: absolute;
  text-align: center;
  left: 0;
  height: 100vh;
  width: 50vw;
  background-color: ${({ theme }) => theme.black};

  ${({ theme }) => theme.mq.smartphone} {
    width: 100vw;
    opacity: 0.9;
  }
`;

const StyledFirst = styled(Fonts)`
  font-size: 89px;
  font-weight: bold;
  font-style: italic;
  color: ${({ theme }) => theme.orange};
  margin-left: -100px;

  ${({ theme }) => theme.mq.Desktop} {
    margin-left: -10px;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    margin-left: -10px;
  }

  ${({ theme }) => theme.mq.bigTablet} {
    font-size: 60px;
  }

  ${({ theme }) => theme.mq.smartphone} {
    font-size: 50px;
  }

  ${({ theme }) => theme.mq.smallSmartphone} {
    font-size: 30px;
  }
`;

const StyledSecond = styled(Fonts)`
  font-size: 28px;
  font-weight: 300;
  text-align: left;
  margin: 70px 0 0 150px;

  ${({ theme }) => theme.mq.laptops} {
    font-size: 25px;
    margin: 40px 0 0 40px;
  }

  ${({ theme }) => theme.mq.bigTablet} {
    font-size: 20px;
    margin: 50px 0 0 10px;
  }

  ${({ theme }) => theme.mq.smallSmartphone} {
    font-size: 18px;
    margin: 30px 0 0 20px;
  }
`;

const StyledCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 50px;
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

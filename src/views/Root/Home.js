import React from 'react';
import styled from 'styled-components';
import Navbar from 'components/organisms/Navbar/Navbar';
import shoes1 from 'assets/icons/shoes1.png';
import shoes2 from 'assets/icons/shoes2.png';
import Fonts from 'components/atoms/Fonts/Fonts';
import Btn from 'components/atoms/Button/Btn';

const StyledView = styled.div`
  max-width: 100vw;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledFirstParagraph = styled(Fonts)`
  font-size: 70px;
  text-decoration: underline;
  text-align: center;

  ${({ theme }) => theme.mq.Desktop} {
    font-size: 60px;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    font-size: 30px;
  }
`;

const StyledSecondParagraph = styled(Fonts)`
  font-size: 34px;
  font-weight: 300;
  margin: 25px 0 150px 0;

  /* ${({ theme }) => theme.mq.smallSmartphone} {
    font-size: 20px;
  } */
`;

const StyledCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25vh;
`;

const BlackShoe = styled.img`
  margin-top: 10vh;
  z-index: -1;



  ${({ theme }) => theme.mq.Desktop} {
    width: 425px;
    height: 1130px;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    width: 52px;
    height: 120px;
  }

   /* ${({ theme }) => theme.mq.smallSmartphone} {
    width: 250px;
    height: 500px;
  }  */
`;

const StyledRotateShoe = styled.img`
  transform: rotate(180deg);
  margin-top: -50vh;
  z-index: -1;

  ${({ theme }) => theme.mq.Desktop} {
    width: 425px;
    height: 1130px;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    width: 52px;
    height: 120px;
  }

  /* ${({ theme }) => theme.mq.smallSmartphone} {
    width: 250px;
    height: 500px;
  } */
`;

const StyledButton = styled(Btn)`
  cursor: pointer;

  /* ${({ theme }) => theme.mq.smallSmartphone} {
    font-size: 18px;
    height: 50px;
    width: 240px;
  } */
`;

const Home = () => (
  <StyledView>
    <Navbar id="home" />

    <StyledDiv>
      <BlackShoe src={shoes1} width="602" height="1287" />

      <StyledCenter>
        <StyledFirstParagraph Playfair black>
          BnK Usługi Szewskie
        </StyledFirstParagraph>
        <StyledSecondParagraph black>Profesjonalna Naprawa Obuwia</StyledSecondParagraph>
        <StyledButton big>Skontaktuj się z nami</StyledButton>
      </StyledCenter>

      <StyledRotateShoe src={shoes2} width="623" height="1330" />
    </StyledDiv>
  </StyledView>
);

export default Home;

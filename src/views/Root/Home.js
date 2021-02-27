import React from 'react';
import styled from 'styled-components';
import Navbar from 'components/organisms/Navbar/Navbar';
import shoes1 from 'assets/icons/shoes1.png';
import shoes2 from 'assets/icons/shoes2.png';
import Fonts from 'components/atoms/Fonts/Fonts';
import Btn from 'components/atoms/Button/Btn';

import NavbarMobile from 'components/BurgerMobile/NavbarMobile';

const StyledView = styled.div`
  max-width: 100vw;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
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

  ${({ theme }) => theme.mq.smartphone} {
    font-size: 37px;
  }
`;

const StyledSecondParagraph = styled(Fonts)`
  font-size: 34px;
  font-weight: 300;
  margin: 25px 0 150px 0;

  ${({ theme }) => theme.mq.smartphone} {
    font-size: 18px;
    margin: 25px 0 95px 0;
  }
`;

const StyledCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25vh;

  ${({ theme }) => theme.mq.smartphone} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-top: 10vh;
  }
`;

const BlackShoe = styled.img`
  margin-top: 10vh;
  z-index: -1;

  ${({ theme }) => theme.mq.Desktop} {
    width: 425px;
    height: 1130px;
  }

  ${({ theme }) => theme.mq.bigTablet} {
    margin-top: 50vh;
    width: 450px;
    height: 800px;
  }

  ${({ theme }) => theme.mq.smartphone} {
    display: none;
  }
`;

const StyledRotateShoe = styled.img`
  transform: rotate(180deg);
  margin-top: -50vh;
  z-index: -1;

  ${({ theme }) => theme.mq.Desktop} {
    width: 425px;
    height: 1130px;
  }

  ${({ theme }) => theme.mq.smartphone} {
    display: none;
  }
`;

const StyledButton = styled(Btn)`
  cursor: pointer;

  ${({ theme }) => theme.mq.smartphone} {
    font-size: 18px;
    height: 50px;
    width: 240px;
  }
`;
const StyledDesktopNavbar = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }
`;

const StyledMobileNavbar = styled.div`
  ${`@media (max-width: 1920px) and (min-width: 801px)`} {
    display: none;
  }

  ${`@media (max-width: 801px) and (min-width: 320px)`} {
    display: block;
  }
`;

const Home = () => (
  <StyledView>
    <StyledDesktopNavbar>
      <Navbar id="home" />
    </StyledDesktopNavbar>

    <StyledMobileNavbar>
      <NavbarMobile id="home" />
    </StyledMobileNavbar>

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

import React from 'react';
import styled from 'styled-components';
import footwear from 'assets/icons/footwear.jpg';
import Fonts from 'components/atoms/Fonts/Fonts';

const StyledView = styled.div`
  position: relative;
`;

const StyledBgc = styled.div`
  position: absolute;
  left: -22vw;
  height: 100vh;
  z-index: -1;

  ${({ theme }) => theme.mq.smallSmartphone} {
    left: -220vw;
    width: 100vw;
    /* overflow: hidden; */
  }
`;

const StyledDiv = styled.div`
  position: absolute;
  text-align: center;
  right: 0;
  height: 100vh;
  width: 50vw;
  background-color: ${({ theme }) => theme.black};

  ${({ theme }) => theme.mq.smallSmartphone} {
    opacity: 0.85;
    width: 100vw;
    /* overflow: hidden; */
  }
`;

const StyledFirst = styled(Fonts)`
  font-size: 89px;
  font-weight: bold;
  font-style: italic;
  color: ${({ theme }) => theme.orange};
  margin-right: 20vw;

  ${({ theme }) => theme.mq.smallSmartphone} {
    font-size: 50px;
  }
`;

const StyledSecond = styled(Fonts)`
  font-size: 28px;
  font-weight: 300;
  text-align: left;
  margin: 50px;

  ${({ theme }) => theme.mq.smallSmartphone} {
    font-size: 17px;
    margin: 35px 0;
  }
`;

const StyledCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 50px;

  ${({ theme }) => theme.mq.smallSmartphone} {
    margin: 20px 0;
  }
`;

const Price = () => (
  <StyledView>
    <StyledBgc id="price">
      <img src={footwear} width="1624px" height="100%" alt="footwear" />
    </StyledBgc>

    <StyledDiv>
      <StyledCenter>
        <StyledFirst Playfair>Cennik:</StyledFirst>
        <StyledSecond>
          – Fleki damskie 20 zł
          <br />
          – Fleki męskie 25 zł
          <br />
          – Zelówki damskie 26 zł <br />
          – Zelówki męskie 30zł <br />
          – Spody od 50 zł <br />
          – Wymiana stalki 22 zł <br />
          – Klejenie podeszwy damskiej 15 zł <br />
          – Klejenie podeszwy męskiej 15 zł <br />
          – Klejenie drobne od 10 zł <br />
          – Dorabianie czubków damskich 14 zł <br />
          – Dorabianie czubków męskich 16 zł <br />
          – Mocowanie obcasa 15 zł <br />
          – Wyrównanie obcasów od 5 zł <br />– Cera od 20 zł
        </StyledSecond>
      </StyledCenter>
    </StyledDiv>
  </StyledView>
);

export default Price;

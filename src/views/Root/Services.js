/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import tlo from 'assets/icons/tlo.png';

import shop from 'assets/icons/shop.png';
import car from 'assets/icons/car.png';
import group from 'assets/icons/group.png';

const StyledVisible = styled.div`
  height: 100vh;
  position: relative;
`;

const StyledImg = styled.img`
  position: absolute;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  opacity: 0.2;
  z-index: -1;
`;

const StyledDiv = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  background-color: ${({ theme }) => theme.black};
`;

const Services = () => (
  <>
    <StyledVisible id="services">
      <title>Nasze Usługi</title>
      <StyledDiv>
        <div>
          <img src={shop} alt="" />
          <p>PUNKT ZBIORCZY</p>
          <p>
            Możliwość pozostawienia obuwia w punktach zbiorczych do naprawy, które znajdziesz w
            "Znajdź nas" !!!
          </p>
        </div>

        <div>
          <img src={car} alt="" />
          <p>DOOR TO DOOR</p>
          <p>
            Nie masz możliwości lub czasu aby odwiedzić naszą pracownie? Jako jedyny zakład w
            Krakowie oferujemy możliwość dojazdu do klienta w systemie door-to-door, obuwie zostanie
            odebrane naprawione i odwiezione we wcześniej ustalone miejsce!
          </p>
        </div>

        <div>
          <img src={group} alt="" />
          <p>WYSYŁKA</p>
          <p>
            Jeśli nie możesz nas odwiedzić ani nie możesz skorzystać z usługi door-to-door,
            naprawiamy obuwie również wysyłkowo! Masz uszkodzone obuwie? napisz do nas i najlepiej
            wyślij nam zdjęcia!
          </p>
        </div>
      </StyledDiv>

      <StyledImg src={tlo} width="100%" height="100%" alt="tlo" />
    </StyledVisible>
  </>
);

export default Services;

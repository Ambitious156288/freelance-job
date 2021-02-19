/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import tlo from 'assets/icons/tlo.png';
import shop from 'assets/icons/shop.png';
import car from 'assets/icons/car.png';
import group from 'assets/icons/group.png';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Fonts from 'components/atoms/Fonts/Fonts';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const StyledVisible = styled.div`
  position: relative;
  height: 100vh;

  ${({ theme }) => theme.mq.smallSmartphone} {
    /* display: grid; */
    /* height: 150vh; */
  }
`;

const StyledImg = styled.img`
  position: absolute;
  opacity: 0.2;
  z-index: -1;
`;

const StyledDiv = styled.div`
  position: absolute;
  top: 25%;
  left: 0;
  padding: 65px 0;
  background-color: ${({ theme }) => theme.black};
  opacity: 0.9;
`;

const StyledTitle = styled(Fonts)`
  position: absolute;
  top: 13%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 100px;
  color: ${({ theme }) => theme.red};

  ${({ theme }) => theme.mq.smallSmartphone} {
    font-size: 50px;
  }
`;

const StyledFirstP = styled(Fonts)`
  font-size: 40px;
  font-weight: bold;
  margin: 35px 0;
  color: ${({ theme }) => theme.red};

  ${({ theme }) => theme.mq.smallSmartphone} {
    font-size: 30px;
  }
`;

const StyledSecondP = styled(Fonts)`
  font-size: 20px;
  font-weight: 400;

  ${({ theme }) => theme.mq.smallSmartphone} {
    font-size: 15px;
    margin: 0 30px;
  }
`;

const StyledIcon = styled.img`
  ${({ theme }) => theme.mq.smallSmartphone} {
    width: 151px;
    height: 94px;
  }
`;

const Services = () => {
  const classes = useStyles();

  return (
    <div>
      <StyledVisible id="services">
        <StyledTitle Playfair>Nasze Usługi</StyledTitle>

        <StyledDiv>
          <div className={classes.root}>
            <Grid container spacing={0}>
              <Grid item xs>
                <div className={classes.paper}>
                  <StyledIcon src={shop} width="221.51px" height="164px" alt="" />
                  <StyledFirstP>PUNKT ZBIORCZY</StyledFirstP>
                  <StyledSecondP>
                    Możliwość pozostawienia obuwia w punktach zbiorczych do naprawy, które
                    znajdziesz w "Znajdź nas" !!!
                  </StyledSecondP>
                </div>
              </Grid>

              <Grid item xs>
                <div className={classes.paper}>
                  <StyledIcon src={car} width="221.51px" height="164px" alt="" />
                  <StyledFirstP>DOOR TO DOOR</StyledFirstP>
                  <StyledSecondP>
                    Nie masz możliwości lub czasu aby odwiedzić naszą pracownie? Jako jedyny zakład
                    w Krakowie oferujemy możliwość dojazdu do klienta w systemie door-to-door,
                    obuwie zostanie odebrane naprawione i odwiezione we wcześniej ustalone miejsce!
                  </StyledSecondP>
                </div>
              </Grid>

              <Grid item xs>
                <div className={classes.paper}>
                  <StyledIcon src={group} width="221.51px" height="164px" alt="" />
                  <StyledFirstP>WYSYŁKA</StyledFirstP>
                  <StyledSecondP>
                    Jeśli nie możesz nas odwiedzić ani nie możesz skorzystać z usługi door-to-door,
                    naprawiamy obuwie również wysyłkowo! Masz uszkodzone obuwie? napisz do nas i
                    najlepiej wyślij nam zdjęcia!
                  </StyledSecondP>
                </div>
              </Grid>
            </Grid>
          </div>
        </StyledDiv>

        <StyledImg src={tlo} width="100%" height="100%" alt="tlo" />
      </StyledVisible>
    </div>
  );
};

export default Services;

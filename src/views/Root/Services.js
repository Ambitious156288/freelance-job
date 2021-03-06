/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
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

import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  rootMobile: {
    marginLeft: 30,
    marginRight: 30,
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

  ${({ theme }) => theme.mq.tablet} {
    width: 100vw;
  }

  ${({ theme }) => theme.mq.smartphone} {
    padding: 15px 0;
  }
`;

const StyledTitle = styled(Fonts)`
  position: absolute;
  top: 13%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 100px;
  color: ${({ theme }) => theme.red};

  ${({ theme }) => theme.mq.laptops} {
    font-size: 80px;
  }

  ${({ theme }) => theme.mq.bigTablet} {
    font-size: 60px;
  }

  ${({ theme }) => theme.mq.smartphone} {
    width: 100%;
    font-size: 45px;
    text-align: center;
  }
`;

const StyledFirstP = styled(Fonts)`
  font-size: 40px;
  font-weight: bold;
  margin: 35px 0;
  color: ${({ theme }) => theme.red};

  ${({ theme }) => theme.mq.smartphone} {
    font-size: 20px;
    margin: 15px 0;
  }
`;

const StyledSecondP = styled(Fonts)`
  font-size: 20px;
  font-weight: 400;

  ${({ theme }) => theme.mq.smartphone} {
    font-size: 14px;
  }
`;

const StyledIcon = styled.img`
  ${({ theme }) => theme.mq.smartphone} {
    width: 121px;
    height: 84px;
  }

  ${({ theme }) => theme.mq.smallSmartphone} {
    width: 151px;
    height: 94px;
  }
`;

function Item({ image, name, description }) {
  const classes = useStyles();

  return (
    <Grid item xs>
      <div className={classes.paper}>
        <StyledIcon src={image} width="221.51px" height="164px" alt="" />
        <StyledFirstP>{name}</StyledFirstP>
        <StyledSecondP>{description}</StyledSecondP>
      </div>
    </Grid>
  );
}

function CarouselMobile() {
  const items = [
    {
      image: shop,
      name: 'PUNKT ZBIORCZY',
      description:
        ' Możliwość pozostawienia obuwia w punktach zbiorczych do naprawy, które znajdziesz w "Znajdź nas" !!!',
    },
    {
      image: car,
      name: 'DOOR TO DOOR',
      description:
        ' Nie masz możliwości lub czasu aby odwiedzić naszą pracownie? Jako jedyny  zakład w Krakowie oferujemy możliwość dojazdu do klienta w systemie       door-to-door, obuwie zostanie odebrane naprawione i odwiezione we wcześniej ustalone miejsce!',
    },
    {
      image: group,
      name: 'WYSYŁKA',
      description:
        'Jeśli nie możesz nas odwiedzić ani nie możesz skorzystać z usługi door-to-door, naprawiamy obuwie również wysyłkowo! Masz uszkodzone obuwie? napisz do nas i najlepiej wyślij nam zdjęcia!',
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item
          key={item.index}
          item={item}
          image={items[i].image}
          name={items[i].name}
          description={items[i].description}
        />
      ))}
    </Carousel>
  );
}

const StyledCarouseDesktop = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }
`;

const StyledCarouselMobile = styled.div`
  ${`@media (max-width: 1920px) and (min-width: 801px)`} {
    display: none;
  }

  ${`@media (max-width: 801px) and (min-width: 320px)`} {
    display: block;
  }
`;
const Services = () => {
  const classes = useStyles();

  return (
    <StyledVisible id="services">
      <StyledTitle Playfair>Nasze Usługi</StyledTitle>

      <StyledDiv>
        <div className={classes.root}>
          <Grid container spacing={0}>
            <StyledCarouselMobile>
              <div className={classes.rootMobile}>
                <Grid container spacing={0}>
                  <CarouselMobile />
                </Grid>
              </div>
            </StyledCarouselMobile>

            <StyledCarouseDesktop>
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
                        Nie masz możliwości lub czasu aby odwiedzić naszą pracownie? Jako jedyny
                        zakład w Krakowie oferujemy możliwość dojazdu do klienta w systemie
                        door-to-door, obuwie zostanie odebrane naprawione i odwiezione we wcześniej
                        ustalone miejsce!
                      </StyledSecondP>
                    </div>
                  </Grid>

                  <Grid item xs>
                    <div className={classes.paper}>
                      <StyledIcon src={group} width="221.51px" height="164px" alt="" />
                      <StyledFirstP>WYSYŁKA</StyledFirstP>
                      <StyledSecondP>
                        Jeśli nie możesz nas odwiedzić ani nie możesz skorzystać z usługi
                        door-to-door, naprawiamy obuwie również wysyłkowo! Masz uszkodzone obuwie?
                        napisz do nas i najlepiej wyślij nam zdjęcia!
                      </StyledSecondP>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </StyledCarouseDesktop>
          </Grid>
        </div>
      </StyledDiv>

      <StyledImg src={tlo} width="100%" height="100%" alt="tlo" />
    </StyledVisible>
  );
};

export default Services;

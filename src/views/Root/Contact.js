/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fonts from 'components/atoms/Fonts/Fonts';

import tel from 'assets/icons/tel.png';
import email from 'assets/icons/email.png';
import fb from 'assets/icons/fb.png';

import ContactForm from 'components/organisms/ContactForm/ContactForm';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 700,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(6),
  },
}));

const StyledContact = styled.div`
  height: 95vh;
  background-color: ${({ theme }) => theme.red};
`;

const StyledFirstP = styled(Fonts)`
  font-size: 55px;
  font-weight: bold;
  font-style: italic;
`;

const StyledSecondP = styled(Fonts)`
  font-size: 40px;
  font-weight: bold;
`;

const StyledFrom = styled.div`
  border-radius: 20px;
  background-color: ${({ theme }) => theme.white};
`;

const StyledFooter = styled.div`
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.footerColor};
`;

const StyledFontFooter = styled(Fonts)`
  font-size: 23px;
  font-weight: 300;
  opacity: 0.3;
  letter-spacing: 1px;
`;

const Contact = () => {
  const classes = useStyles();

  const FormRow = () => {
    return (
      <>
        <Grid item xs={6}>
          <div className={classes.paper}>
            <StyledFirstP Playfair>Skontaktuj się z nami</StyledFirstP>
          </div>

          <div className={classes.paper}>
            <Grid container wrap="nowrap" spacing={7}>
              <Grid item>
                <a href="tel:+48503572044">
                  <img src={tel} width="89.59" height="79.59" alt="tel" />
                </a>
              </Grid>
              <Grid item xs>
                <Typography>
                  <StyledSecondP>503 572 044</StyledSecondP>
                </Typography>
              </Grid>
            </Grid>
          </div>

          <div className={classes.paper}>
            <Grid container wrap="nowrap" spacing={7}>
              <Grid item>
                <a href="mailto:bnk@szewckrakow.com">
                  <img src={email} width="89.59" height="68.24" alt="email" />
                </a>
              </Grid>
              <Grid item xs>
                <Typography>
                  <StyledSecondP>bnk@szewckrakow.com</StyledSecondP>
                </Typography>
              </Grid>
            </Grid>
          </div>

          <div className={classes.paper}>
            <Grid container wrap="nowrap" spacing={7}>
              <Grid item>
                <a href="https://m.me/100002883323264">
                  <img src={fb} width="89.59" height="89.59" alt="fb" />
                </a>
              </Grid>
              <Grid item xs>
                <Typography>
                  <StyledSecondP>Napisz na Facebook'u</StyledSecondP>
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item xs={6}>
          <StyledFrom className={classes.paper}>
            <ContactForm />
          </StyledFrom>
        </Grid>
      </>
    );
  };

  return (
    <>
      <StyledContact id="contact">
        <Grid container spacing={0}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </StyledContact>

      <StyledFooter>
        <StyledFontFooter>© 2020 BnK Usługi Krawieckie</StyledFontFooter>
      </StyledFooter>
    </>
  );
};

export default Contact;

/* eslint-disable no-undef */
/* eslint-disable no-alert */
import React from 'react';
import styled from 'styled-components';
import Fonts from 'components/atoms/Fonts/Fonts';
import Btn from 'components/atoms/Button/Btn';
import { useFormik } from 'formik';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  topic: yup
    .string('Enter your password')
    .min(6, 'topic should be of minimum 6 characters length')
    .required('topic is required'),
  content: yup
    .string('Enter your content')
    .min(15, 'content should be of minimum 15 characters length')
    .required('content is required'),
  fullName: yup
    .string('Enter your fullName')
    .min(7, 'fullName should be of minimum 7 characters length')
    .required('fullName is required'),
});

const StyledTitle = styled(Fonts)`
  font-size: 55px;
  font-weight: bold;
  font-style: italic;
`;

const useStyles = makeStyles(() => ({
  root: { color: 'black', fontSize: '24px' },
  textField: {
    color: 'black',
    fontSize: 24,
  },
}));

const StyledBtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledBtn = styled(Btn)`
  cursor: pointer;
`;

const ContactForm = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: '',
      topic: '',
      content: '',
      fullName: '',
    },
    validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <StyledTitle Playfair black>
            Napisz do nas
          </StyledTitle>
          <TextField
            fullWidth
            id="fullName"
            name="fullName"
            label="Imię i nazwisko:"
            className={classes.textField}
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />
          <br />
          <br />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Twój email:"
            className={classes.textField}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <br />
          <br />
          <TextField
            fullWidth
            id="topic"
            name="topic"
            label="Temat:"
            value={formik.values.topic}
            onChange={formik.handleChange}
            error={formik.touched.topic && Boolean(formik.errors.topic)}
            helperText={formik.touched.topic && formik.errors.topic}
          />
          <br />
          <br />

          <TextField
            fullWidth
            id="content"
            name="content"
            label="Treść wiadomości:"
            multiline
            rows={10}
            value={formik.values.content}
            onChange={formik.handleChange}
            error={formik.touched.content && Boolean(formik.errors.content)}
            helperText={formik.touched.content && formik.errors.content}
          />
          <br />
          <br />

          <div>
            <input type="file" className="inputFile" data-testid="inputFile" />
            <div className="container">
              <div className="fileName" data-testid="fileName"></div>
            </div>
          </div>
          <br />
          <br />

          <StyledBtnDiv>
            <StyledBtn color="primary" variant="contained" type="submit">
              Wyślij
            </StyledBtn>
          </StyledBtnDiv>
        </form>
      </div>
    </>
  );
};

export default ContactForm;

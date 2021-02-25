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
  text-align: center;
  font-size: 55px;
  font-weight: bold;
  font-style: italic;
  padding-bottom: 25px;

  ${({ theme }) => theme.mq.laptops} {
    font-size: 40px;
  }

  ${({ theme }) => theme.mq.bigTablet} {
    font-size: 36px;
  }
`;

const useStyles = makeStyles(() => ({
  root: { fontSize: 24 },

  formTextInput: {
    marginTop: 8,
    fontSize: 24,
  },
  formTextLabel: {
    fontSize: 24,
  },
}));

const StyledBtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledBtn = styled(Btn)`
  cursor: pointer;

  ${({ theme }) => theme.mq.laptops} {
    font-size: 25px;
    width: 150px;
    height: 70px;
  }

  ${({ theme }) => theme.mq.smartphone} {
    font-size: 15px;
    width: 80px;
    height: 35px;
  }
`;

const StyledChooseFile = styled.div`
  display: flex;
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
      <form onSubmit={formik.handleSubmit}>
        <StyledTitle Playfair black>
          Napisz do nas
        </StyledTitle>
        <TextField
          InputProps={{
            classes: {
              input: classes.formTextInput,
            },
          }}
          InputLabelProps={{
            classes: {
              root: classes.formTextLabel,
            },
          }}
          fullWidth
          id="fullName"
          name="fullName"
          label="Imię i nazwisko:"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={formik.touched.fullName && formik.errors.fullName}
        />
        <br />
        <br />
        <TextField
          InputProps={{
            classes: {
              input: classes.formTextInput,
            },
          }}
          InputLabelProps={{
            classes: {
              root: classes.formTextLabel,
            },
          }}
          fullWidth
          id="email"
          name="email"
          label="Twój email:"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <br />
        <br />
        <TextField
          InputProps={{
            classes: {
              input: classes.formTextInput,
            },
          }}
          InputLabelProps={{
            classes: {
              root: classes.formTextLabel,
            },
          }}
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
          InputProps={{
            classes: {
              input: classes.formTextInput,
            },
          }}
          InputLabelProps={{
            classes: {
              root: classes.formTextLabel,
            },
          }}
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
        <br />

        <StyledChooseFile>
          <input type="file" className="inputFile" data-testid="inputFile" />
          <div className="container">
            <div className="fileName" data-testid="fileName"></div>
          </div>
        </StyledChooseFile>
        <br />
        <br />

        <StyledBtnDiv>
          <StyledBtn color="primary" variant="contained" type="submit">
            Wyślij
          </StyledBtn>
        </StyledBtnDiv>
      </form>
    </>
  );
};

export default ContactForm;

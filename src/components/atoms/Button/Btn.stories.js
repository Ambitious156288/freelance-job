import React from 'react';
import { storiesOf } from '@storybook/react';
import Btn from './Btn';

storiesOf('Button', module)
  .add('Home page button', () => <Btn big>Skontaktuj się z nami</Btn>)
  .add('Form sumbit button', () => <Btn>Wyślij</Btn>);

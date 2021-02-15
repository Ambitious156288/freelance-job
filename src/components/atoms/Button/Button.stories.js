import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Home page button', () => <Button big>Skontaktuj się z nami</Button>)
  .add('Form sumbit button', () => <Button>Wyślij</Button>);

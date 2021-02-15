import React from 'react';
import { storiesOf } from '@storybook/react';
import Fonts from './Fonts';

storiesOf('Fonts', module)
  .add('Playfair Display', () => (
    <Fonts Playfair black>
      Playfair Display
    </Fonts>
  ))
  .add('Titillium Web', () => <Fonts black>Titillium Web</Fonts>);

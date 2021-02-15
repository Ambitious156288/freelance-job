import React from 'react';
import { storiesOf } from '@storybook/react';
import Fonts from './Fonts';

storiesOf('Fonts', module)
  .add('Playfair Display', () => <Fonts Playfair>Hello Roman</Fonts>)
  .add('Playfair Display bold', () => (
    <Fonts Playfair bold>
      Hello Roman
    </Fonts>
  ))
  .add('Titillium Web', () => <Fonts>Hello Roman</Fonts>);

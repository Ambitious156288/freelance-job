import React from 'react';
import { storiesOf } from '@storybook/react';
import Fonts from './Fonts';

storiesOf('Fonts', module)
  .add('1', () => <Fonts Playfair>Hello Roman</Fonts>)
  .add('2', () => (
    <Fonts Playfair bold>
      Hello Roman
    </Fonts>
  ))
  .add('3', () => <Fonts>Hello Roman</Fonts>);

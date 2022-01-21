import React from 'react';
import { Description } from './';
import { storiesOf } from '@storybook/react';

export { Description };
const description = 'This game is great!';

storiesOf(
  'legacy-js/components/Accordion/Tabs/Description',
  module
).add('render with props', () => <Description description={description} />);

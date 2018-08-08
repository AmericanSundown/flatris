// @flow

import { createFixture } from 'react-cosmos';
import Multiplayer from '../../Multiplayer';

export default createFixture({
  component: Multiplayer,

  props: {
    onNext: () => console.log('Next')
  },

  container: {
    width: 10,
    backgroundColor: 'rgba(236, 240, 241, 0.85)'
  }
});

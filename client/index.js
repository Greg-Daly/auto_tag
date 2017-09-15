import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import MainContainer from './src/containers/MainContainer';

const store= configureStore();

render(
  <Provider store={store}
    <MainContainer/>
  </Provider>,
  document.getElementById('root')
);

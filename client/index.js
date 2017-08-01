import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainContainer from './src/containers/MainContainer';


render(
  <MainContainer/>,
  document.getElementById('root')
);

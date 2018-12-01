import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Root from './root';

render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);
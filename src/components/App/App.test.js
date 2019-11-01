import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import initStore from '../../store';

import { Provider } from 'react-redux'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={initStore()}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

import { Paper } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ContextProvider } from './Context';

import './styles.css';

ReactDOM.render(
  <ContextProvider>
    <Paper elevation={3} >
      <App />
    </Paper>
  </ContextProvider>,
  document.getElementById('root'),
);

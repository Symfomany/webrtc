import { Paper } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './styles.css';

ReactDOM.render(
    <Paper elevation={3} >
      <App />
    </Paper>
  ,
  document.getElementById('root'),
);

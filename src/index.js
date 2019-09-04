import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import participants from './Participants';

// console.log(participants);
ReactDOM.render(<App participants={participants}/>, document.getElementById('root'));
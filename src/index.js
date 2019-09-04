import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import STORE from './Store';

// console.log(participants);
ReactDOM.render(<App participants={STORE.participants} chatEvents={STORE.chatEvents}/>, document.getElementById('root'));
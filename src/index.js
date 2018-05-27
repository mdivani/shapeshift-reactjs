import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/Header';
import './styles/main.scss';

ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();

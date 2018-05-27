import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.css';

ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();

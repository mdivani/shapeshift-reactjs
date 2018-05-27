import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import CoinTrader from './components/CoinTrader';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.css';

ReactDOM.render(<CoinTrader />, document.getElementById('root'));
registerServiceWorker();

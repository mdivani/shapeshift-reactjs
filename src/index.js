import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import CoinTrader from './components/CoinTrader';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.css';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <CoinTrader />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();

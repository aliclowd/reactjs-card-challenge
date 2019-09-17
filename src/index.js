import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { store } from './redux/store';

// credit
console.log("%c hey ! \n you can't find anything here for sure \n but nice try :) \n %c credit: Ali clowd \u00A9 2019 \n contact with me: aliclowd13@gmail.com",
    "color:#da0808;font-size:30px",
    "color:#1a7bc1;font-size:18px;")

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

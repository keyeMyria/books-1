import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import books from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose,
    store = createStore( books, composeEnhancers(applyMiddleware()) );


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

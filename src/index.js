import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// import firebase from 'firebase';
import thunk from 'redux-thunk';

import App from './App';
import './index.scss';

import rootReducer from './reducers';

// const config = {
//     apiKey: 'AIzaSyBwW-jLArbQAFaAzo5QJrp8VHYv5gBhhkY',
//     authDomain: 'bookshelf-70ffb.firebaseapp.com',
//     databaseURL: 'https://bookshelf-70ffb.firebaseio.com',
//     storageBucket: 'bookshelf-70ffb.appspot.com',
//     messagingSenderId: '447971054390',
// };
// firebase.initializeApp(config);

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

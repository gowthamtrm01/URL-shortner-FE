import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'

import Router from './components/router';
import reducers from './reducers';
import './index.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>, document.getElementById('root'));
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { UIProvider } from './Context';
import App from './App';
import * as serviceWorker from './serviceWorker';

interface AppProps{}
interface AppState {
    name: string;
}

ReactDOM.render(
    <UIProvider>
        <App/>
    </UIProvider>,
    
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

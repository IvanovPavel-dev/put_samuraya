import React from 'react';
import './index.css';
import store from "./Redux/Redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
                </Provider>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root'))

reportWebVitals();

reportWebVitals();

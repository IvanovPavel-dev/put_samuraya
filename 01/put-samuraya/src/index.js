import React from 'react';
import './index.css';
import store from "./Redux/Redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {BrowserRouter} from "react-router-dom";

let rerenderEntireTrie = (state)=> {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')

    );
}
reportWebVitals();


rerenderEntireTrie(store.getState());

store.subscribe(rerenderEntireTrie);

reportWebVitals();

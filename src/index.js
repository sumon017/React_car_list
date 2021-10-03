import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import Store from "./Store/Store";
import App from './App';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={Store}>
              <App />
          </Provider>
      </BrowserRouter>


  </React.StrictMode>,
  document.getElementById('root')
);



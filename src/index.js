import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { Provider } from 'react-redux';
// import store from './redux';
import Provider from './context/Provider';
import carContext from './context';

ReactDOM.render(
  <React.StrictMode>
    <Provider value={carContext}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

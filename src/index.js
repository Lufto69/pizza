import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';


import App from './components/App/app';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <React.StrictMode>
      <Provider store={store}>
        <App></App>
      </Provider>
    </React.StrictMode>
  
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers'; //export default used so any name can be given

const store=createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  store={store}/>
  </React.StrictMode>
);



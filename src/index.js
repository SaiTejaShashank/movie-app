import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore,applyMiddleware} from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers'; //export default used so any name can be given


const logger=(obj)=>(next)=>(action)=>{
      console.log('ACTION_TYPE=',action.type)
      next(action); //calls next middlewares if available or dispatches action if not there
    }
  
const store=createStore(rootReducer,applyMiddleware(logger));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  store={store}/>
  </React.StrictMode>
);



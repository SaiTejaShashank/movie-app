import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import rootReducer from './reducers'; //export default used so any name can be given


const logger=(obj)=>(next)=>(action)=>{

      if(typeof action !== 'function')
      {
      console.log('ACTION_TYPE=',action.type)
      }
      next(action); //calls next middlewares if available or dispatches action if not there
      
    }

/*const thunk=({dispatch,getState})=>(next)=>(action)=>{
      
      if(typeof action=='function'){
        action(dispatch);
        return;
      }
      next(action); //calls next middlewares if available or dispatches action if not there
    }*/
  
const store=createStore(rootReducer,applyMiddleware(logger,thunk));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App  store={store}/>
  </React.StrictMode>
);



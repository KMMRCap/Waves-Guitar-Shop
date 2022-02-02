import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/styles.css'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import './assets/responsive.css'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise'
import reduxThunk from 'redux-thunk'

const store = applyMiddleware(reduxPromise, reduxThunk)(createStore)

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={store(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      )}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

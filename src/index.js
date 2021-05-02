import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import gamesReducer from './reducers/gamesReducer'

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers({
  games:gamesReducer
})
const store = createStore(rootReducer, composeEnhances(applyMiddleware(thunk)))


const app = (
  <Provider store={store}>
    <App />
  </Provider>
)


ReactDOM.render(
  app,
  document.getElementById('root')
);



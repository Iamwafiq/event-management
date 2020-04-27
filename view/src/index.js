import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes';
// import './App.css';
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import mySaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga)



ReactDOM.render(
	<Provider store={store}>
		<App /> 
	</Provider>,

document.getElementById('root'));
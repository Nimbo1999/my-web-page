import { createStore, applyMiddleware } from 'redux'
import rootReducer from './root-reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const MIDDLEWARES = [thunk];

if (process.env.NODE_ENV === 'development') MIDDLEWARES.push(logger)

const store = createStore(rootReducer, applyMiddleware(...MIDDLEWARES));

export default store;
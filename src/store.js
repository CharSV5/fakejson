import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-react';
import rootReducer from './reducers'

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;

import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';

const reducer = combineReducers({ missionsReducer });

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

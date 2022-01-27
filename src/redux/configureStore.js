import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rocketsReducer';

const reducer = combineReducers({ missionsReducer, rocketsReducer });

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;

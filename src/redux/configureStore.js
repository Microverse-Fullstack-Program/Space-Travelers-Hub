import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rockets';
import dragonsReducer from './dragons/dragons';
import missionsReducer from './missions/missions';

const MyMiddlewares = [thunk, logger];
const rootReducer = combineReducers({
  rockets: rocketsReducer,
  dragons: dragonsReducer,
  missions: missionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
}, applyMiddleware(...MyMiddlewares));

export default store;

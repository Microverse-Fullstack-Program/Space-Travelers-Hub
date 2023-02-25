import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rockets';
import dragonsReducer from './dragons/dragons';
import missionsReducer from './missions/missions';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    dragons: dragonsReducer,
    missions: missionsReducer,
  },
});

export default store;

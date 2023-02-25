import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API URL
const APIURL = 'https://api.spacexdata.com/v3/missions';

// Actions
const FETCH_MISSSIONS = 'missions/FETCH_MISSSIONS';
// const RESERVE_MISSSIONS = 'missions/RESERVE_ISSSIONS';
// const CANCEL_MISSSIONS = 'missions/CANCEL_ISSSIONS';

// Action creators
export const FetchMissions = createAsyncThunk(FETCH_MISSSIONS, async () => {
  const missionsFetchResult = await fetch(APIURL);
  const missionsData = await missionsFetchResult.json();
  const Missions = [];
  missionsData.forEach((rocket) => {
    Missions.push({
      id: rocket.id,
      mission_name: rocket.name,
      description: rocket.description,
      flickr_images: rocket.flickr_images[0],
      active: rocket.active,
    });
  });
  return Missions;
});

// Reducer
const missionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    FetchMissions: (state, action) => (
      {
        ...state,
        missions: [...action.payload],
      }),
  },
});

export default missionsSlice.reducer;

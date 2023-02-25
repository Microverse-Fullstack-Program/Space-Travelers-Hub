import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API URL
const APIURL = 'https://api.spacexdata.com/v3/missions';

// Actions
const FETCH_MISSIONS = 'missions/FETCH_MISSIONS';
const SUBSCRIBE_MISSION = 'missions/SUBSCRIBE_MISSION';
const UNSUBSCRIBE_MISSIONS = 'missions/UNSUBSCRIBE_MISSION';

// Action creators
const FetchMissions = createAsyncThunk(FETCH_MISSIONS, async () => {
  const missionsFetchResult = await fetch(APIURL);
  const missionsData = await missionsFetchResult.json();
  const Missions = [];
  missionsData.forEach((mission) => {
    Missions.push({
      id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
      active: true,
    });
  });
  return Missions;
});

const SubscribeMission = createAsyncThunk(SUBSCRIBE_MISSION, async (id) => (
  {
    payload: id,
  }
));

const UnSubscribeMission = createAsyncThunk(UNSUBSCRIBE_MISSIONS, async (id) => (
  {
    payload: id,
  }
));

// Reducer
const MissionsReducer = createSlice({
  name: 'missions/fetch',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchMissions.fulfilled, (state, action) => (
        {
          missions: [...action.payload],
        }))
      .addCase(SubscribeMission.fulfilled, ((state, action) => state.map((Mission) => (
        Mission.id === action.payload ? { ...Mission, active: true } : Mission
      ))))
      .addCase(UnSubscribeMission.fulfilled, ((state, action) => state.map((Mission) => (
        Mission.id === action.payload ? { ...Mission, active: false } : Mission
      ))))
      .addDefaultCase((state) => state);
  },
});

export { FetchMissions, SubscribeMission, UnSubscribeMission };
export default MissionsReducer.reducer;

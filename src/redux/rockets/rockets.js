import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API URL
const APIURL = 'https://api.spacexdata.com/v4/rockets';

// Actions
const FETCH_ROCKETS = 'rockets/FETCH_ROCKETS';
const RESERVE_ROCKET = 'rockets/RESERVE_ROCKET';
const UNRESERVE_ROCKET = 'rockets/UNRESERVE_ROCKET';

// Action creators
const FetchRockets = createAsyncThunk(FETCH_ROCKETS, async () => {
  const rocketsFetchResult = await fetch(APIURL);
  const rocketsData = await rocketsFetchResult.json();
  const Rockets = [];
  rocketsData.forEach((rocket) => {
    Rockets.push({
      id: rocket.id,
      rocket_name: rocket.name,
      description: rocket.description,
      image: rocket.flickr_images[0],
      active: rocket.active,
    });
  });
  return Rockets;
});

const ReserveRocket = createAsyncThunk(RESERVE_ROCKET, async (id) => (
  {
    payload: id,
  }
));

const UnreserveRocket = createAsyncThunk(UNRESERVE_ROCKET, async (id) => (
  {
    payload: id,
  }
));

// Reducer
const rocketsReducer = createSlice({
  name: 'rockets/fetch',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchRockets.fulfilled, (state, action) => (
        {
          rockets: [...action.payload],
        }))
      .addCase(ReserveRocket.fulfilled, ((state, action) => state.map((rocket) => (
        rocket.id === action.payload ? { ...rocket, active: true } : rocket
      ))))
      .addCase(UnreserveRocket.fulfilled, ((state, action) => state.map((rocket) => (
        rocket.id === action.payload ? { ...rocket, active: false } : rocket
      ))))
      .addDefaultCase((state) => state);
  },
});

export { FetchRockets, ReserveRocket, UnreserveRocket };
export default rocketsReducer.reducer;

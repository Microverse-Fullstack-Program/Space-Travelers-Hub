import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API URL
const APIURL = 'https://api.spacexdata.com/v4/dragons';

// Actions
const FETCH_DRAGONS = 'dragons/FETCH_DRAGONS';
// const RESERVE_DRAGONS = 'dragons/RESERVE_DRAGONS';
// const CANCEL_DRAGONS = 'dragons/CANCEL_DRAGONS';

// Action creators
export const FetchDragons = createAsyncThunk(FETCH_DRAGONS, async () => {
  const dragonsFetchResult = await fetch(APIURL);
  const dragonsData = await dragonsFetchResult.json();
  const Dragons = [];
  dragonsData.forEach((dragon) => {
    Dragons.push({
      id: dragon.id,
      dragons_name: dragon.name,
      description: dragon.description,
      flickr_images: dragon.flickr_images[0],
      active: dragon.active,
    });
  });
  return Dragons;
});

// Reducer
const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: [],
  reducers: {
    FetchDragons: (state, action) => (
      {
        ...state,
        dragons: [...action.payload],
      }),
  },
});

export default dragonsSlice.reducer;

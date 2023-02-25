import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions
const FETCH_DRAGONS = 'dragons/FETCH_DRAGONS';
const RESERVE_DRAGON = 'dragons/RESERVE_DRAGON';
const UNRESERVE_DRAGON = 'dragons/UNRESERVE_DRAGON';

// Action creators
const FetchDragons = createAsyncThunk(FETCH_DRAGONS, async () => {
  const dragonsFetchResult = await fetch('https://api.spacexdata.com/v4/dragons');
  const dragonsData = await dragonsFetchResult.json();
  const Dragons = [];
  dragonsData.forEach((dragon) => {
    Dragons.push({
      id: dragon.id,
      dragon_name: dragon.name,
      type: dragon.type,
      description: dragon.description,
      image: dragon.flickr_images[0],
      active: dragon.active,
    });
  });
  return Dragons;
});

const Reservedragon = createAsyncThunk(RESERVE_DRAGON, async (id) => (
  {
    payload: id,
  }
));

const Unreservedragon = createAsyncThunk(UNRESERVE_DRAGON, async (id) => (
  {
    payload: id,
  }
));

// Reducer
const dragonsReducer = createSlice({
  name: 'dragons/fetch',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchDragons.fulfilled, (state, action) => (
        {
          dragons: [...action.payload],
        }))
      .addCase(Reservedragon.fulfilled, ((state, action) => state.map((dragon) => (
        dragon.id === action.payload ? { ...dragon, active: true } : dragon
      ))))
      .addCase(Unreservedragon.fulfilled, ((state, action) => state.map((dragon) => (
        dragon.id === action.payload ? { ...dragon, active: false } : dragon
      ))))
      .addDefaultCase((state) => state);
  },
});

export { FetchDragons, Reservedragon, Unreservedragon };
export default dragonsReducer.reducer;

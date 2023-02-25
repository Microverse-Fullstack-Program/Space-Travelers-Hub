// Base API URL
const APIURL = 'https://api.spacexdata.com/v4/dragons';

// Actions
const FETCH_DRAGONS = 'dragons/FETCH_DRAGONS';
const RESERVE_DRAGON = 'dragons/RESERVE_DRAGON';
const UNRESERVE_DRAGON = 'dragons/UNRESERVE_DRAGON';

// Action creators
const FetchDragons = async (dispatch) => {
  try {
    const response = await fetch(APIURL).then((res) => res.json());
    const DragonsData = [];
    response.forEach((dragon) => {
      DragonsData.push({
        id: dragon.id,
        dragon_name: dragon.name,
        type: dragon.type,
        description: dragon.description,
        image: dragon.flickr_images[0],
        reserve: dragon.active,
      });
    });
    dispatch({ type: FETCH_DRAGONS, payload: DragonsData });
  } catch (error) {
    console.log(error); // eslint-disable-line 
  }
  return [];
};

const ReserveDragon = (id) => ({
  type: RESERVE_DRAGON,
  payload: id,
});

const UnreserveDragon = (id) => ({
  type: UNRESERVE_DRAGON,
  payload: id,
});

// Reducer
const dragonsReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case FETCH_DRAGONS:
      return action.payload;
    case RESERVE_DRAGON:
      newState = state.map((dragon) => {
        if (dragon.id === action.payload) {
          return { ...dragon, reserve: true };
        }
        return dragon;
      });
      return newState;
    case UNRESERVE_DRAGON:
      newState = state.map((dragon) => {
        if (dragon.id === action.payload) {
          return { ...dragon, reserve: false };
        }
        return dragon;
      });
      return newState;
    default:
      return state;
  }
};

export { FetchDragons, ReserveDragon, UnreserveDragon };
export default dragonsReducer;

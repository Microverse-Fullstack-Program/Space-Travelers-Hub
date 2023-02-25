// API URL
const APIURL = 'https://api.spacexdata.com/v4/rockets';

// Actions
const FETCH_ROCKETS = 'rockets/FETCH_ROCKETS';
const RESERVE_ROCKET = 'rockets/RESERVE_ROCKET';
const UNRESERVE_ROCKET = 'rockets/UNRESERVE_ROCKET';

// Action creators
const FetchRockets = async (dispatch) => {
  try {
    const response = await fetch(APIURL).then((res) => res.json());
    const RocketsData = [];
    response.forEach((rocket) => {
      RocketsData.push({
        id: rocket.id,
        rocket_name: rocket.name,
        description: rocket.description,
        image: rocket.flickr_images[0],
        reserve: rocket.active,
      });
    });
    dispatch({ type: FETCH_ROCKETS, payload: RocketsData });
  } catch (error) {
    console.log(error); // eslint-disable-line 
  }
  return [];
};

const ReserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: id,
});

const UnreserveRocket = (id) => ({
  type: UNRESERVE_ROCKET,
  payload: id,
});

// Reducer
const rocketsReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    case RESERVE_ROCKET:
      newState = state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserve: true };
        }
        return rocket;
      });
      return newState;
    case UNRESERVE_ROCKET:
      newState = state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserve: false };
        }
        return rocket;
      });
      return newState;
    default:
      return state;
  }
};

export { FetchRockets, ReserveRocket, UnreserveRocket };
export default rocketsReducer;

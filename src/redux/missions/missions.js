// API URL
const APIURL = 'https://api.spacexdata.com/v3/missions';

// Actions
const FETCH_MISSIONS = 'missions/FETCH_MISSIONS';
const SUBSCRIBE_MISSION = 'missions/SUBSCRIBE_MISSION';
const UNSUBSCRIBE_MISSIONS = 'missions/UNSUBSCRIBE_MISSION';

// Action creators
const FetchMissions = async (dispatch) => {
  try {
    const response = await fetch(APIURL).then((res) => res.json());
    const MissionsData = [];
    response.forEach((mission) => {
      MissionsData.push({
        id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        wikipedia: mission.wikipedia,
        reserve: true,
      });
    });
    dispatch({ type: FETCH_MISSIONS, payload: MissionsData });
  } catch (error) {
    console.log(error); // eslint-disable-line 
  }
  return [];
};

const SubscribeMission = (id) => ({
  type: SUBSCRIBE_MISSION,
  payload: id,
});

const UnSubscribeMission = (id) => ({
  type: UNSUBSCRIBE_MISSIONS,
  payload: id,
});

// Reducer
const MissionsReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload;
    case SUBSCRIBE_MISSION:
      newState = state.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, reserve: true };
        }
        return mission;
      });
      return newState;
    case UNSUBSCRIBE_MISSIONS:
      newState = state.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, reserve: false };
        }
        return mission;
      });
      return newState;
    default:
      return state;
  }
};

export { FetchMissions, SubscribeMission, UnSubscribeMission };
export default MissionsReducer;

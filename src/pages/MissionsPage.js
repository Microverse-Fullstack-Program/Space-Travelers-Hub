import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { SubscribeMission, UnSubscribeMission } from '../redux/missions/missions';

const MissionsPage = ({ mission }) => {
  const dispatch = useDispatch();

  const handleJoining = (id) => {
    dispatch(SubscribeMission(id));
  };

  const handleLeaving = (id) => {
    dispatch(UnSubscribeMission(id));
  };

  return (
    <tr>
      <td className="title">
        {' '}
        {mission.mission_name}
        {' '}
      </td>
      <td className="desc">
        {' '}
        {mission.description}
        {' '}
      </td>
      <td className="status">
        {(mission.reserve ? <p className="active">Active Member</p> : <p className="inactive">Not A Member</p>)}
      </td>
      <td>
        {(mission.reserve ? (
          <button type="button" className="leave" onClick={() => handleLeaving(mission.id)}>
            Leave Mission
          </button>
        ) : (
          <button type="button" className="join" onClick={() => handleJoining(mission.id)}>
            Join mission
          </button>
        ))}
      </td>
    </tr>
  );
};

MissionsPage.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string,
    mission_name: PropTypes.string,
    description: PropTypes.string,
    reserve: PropTypes.bool,
  }).isRequired,
};

export default MissionsPage;

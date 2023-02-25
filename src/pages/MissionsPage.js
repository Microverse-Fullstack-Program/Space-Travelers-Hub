import PropTypes from 'prop-types';

const MissionsPage = ({ mission }) => (
  <tr>
    <td>
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
      <div>Not A Member</div>
    </td>
    <td>
      <button type="button" className="reserveMsnBtn">
        Join Mission
      </button>
    </td>
  </tr>
);

MissionsPage.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.string,
    mission_name: PropTypes.string,
    description: PropTypes.string,
    active: PropTypes.bool,
  }).isRequired,
};

export default MissionsPage;

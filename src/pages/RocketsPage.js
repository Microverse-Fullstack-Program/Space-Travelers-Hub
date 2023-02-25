import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ReserveRocket, UnreserveRocket } from '../redux/rockets/rockets';

const RocketsPage = ({ rocket }) => {
  const dispatch = useDispatch();

  const handleReserve = (id) => {
    dispatch(ReserveRocket(id));
  };

  const handleCancel = (id) => {
    dispatch(UnreserveRocket(id));
  };

  return (
    <>
      <img src={rocket.image} alt="rocket" />
      <div className="rkt-detail">
        <h2 className="rkt-title">
          {' '}
          {rocket.rocket_name}
          {' '}
          <span className="reserve-badge">{(rocket.reserve ? '(Reserved)' : '')}</span>
        </h2>
        <p className="rkt-desc">
          {' '}
          {rocket.description}
          {' '}
        </p>
        <button
          type="button"
          className={`rocket-btn ${rocket.reserve ? 'hide' : ''}`}
          onClick={() => handleReserve(rocket.id)}
        >
          Reserve Rocket
        </button>
        <button
          type="button"
          className={`rocket-btn close ${rocket.reserve ? '' : 'hide'}`}
          onClick={() => handleCancel(rocket.id)}
        >
          Cancel Rocket
        </button>
      </div>
    </>
  );
};

RocketsPage.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    reserve: PropTypes.bool,
  }).isRequired,
};

export default RocketsPage;

import PropTypes from 'prop-types';

const RocketsPage = ({ rocket }) => (
  <>
    <img src={rocket.image} alt="rocket" />
    <div className="rkt-detail">
      <h2 className="rkt-title">
        {' '}
        {rocket.rocket_name}
        {' '}
      </h2>
      <p className="rkt-desc">
        {' '}
        {rocket.description}
        {' '}
      </p>
      <button type="button" className="reserveRktBtn">
        Reserve Rocket
      </button>
    </div>
  </>
);

RocketsPage.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    active: PropTypes.bool,
  }).isRequired,
};

export default RocketsPage;

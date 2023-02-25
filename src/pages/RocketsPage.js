import PropTypes from 'prop-types';

const RocketsPage = ({ rocket }) => (
  <div className="roockets-detail">
    <img className="rocket-img" src={rocket.image} alt="rocket" />
    <p className="rocket-title">
      {' '}
      {rocket.rocket_name}
      {' '}
    </p>
    <h2 className="rocket-desc">
      {' '}
      {rocket.description}
      {' '}
    </h2>
  </div>
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

import PropTypes from 'prop-types';

const DragonsPage = ({ dragon }) => (
  <>
    <img src={dragon.image} alt="dragon" />
    <div className="drg-detail">
      <h2 className="drg-title">
        {' '}
        {dragon.dragon_name}
        {' '}
        (
        {dragon.type}
        )
      </h2>
      <p className="drg-desc">
        {' '}
        {dragon.description}
        {' '}
      </p>
      <button type="button" className="reserveDrgBtn">
        Reserve Dragon
      </button>
    </div>
  </>
);

DragonsPage.propTypes = {
  dragon: PropTypes.shape({
    id: PropTypes.string,
    dragon_name: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    active: PropTypes.bool,
  }).isRequired,
};

export default DragonsPage;

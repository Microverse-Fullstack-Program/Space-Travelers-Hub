import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ReserveDragon, UnreserveDragon } from '../redux/dragons/dragons';

const DragonsPage = ({ dragon }) => {
  const dispatch = useDispatch();

  const handleReserve = (id) => {
    dispatch(ReserveDragon(id));
  };

  const handleCancel = (id) => {
    dispatch(UnreserveDragon(id));
  };

  return (
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
        <p>
          <span className="reserve-badge">{(dragon.reserve ? '(Reserved)' : '')}</span>
        </p>
        <p className="drg-desc">
          {' '}
          {dragon.description}
          {' '}
        </p>
        <button
          type="button"
          className={`rocket-btn ${dragon.reserve ? 'hide' : ''}`}
          onClick={() => handleReserve(dragon.id)}
        >
          Reserve Dragon
        </button>
        <button
          type="button"
          className={`rocket-btn close ${dragon.reserve ? '' : 'hide'}`}
          onClick={() => handleCancel(dragon.id)}
        >
          Cancel Dragon
        </button>
      </div>
    </>
  );
};

DragonsPage.propTypes = {
  dragon: PropTypes.shape({
    id: PropTypes.string,
    dragon_name: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    reserve: PropTypes.bool,
  }).isRequired,
};

export default DragonsPage;

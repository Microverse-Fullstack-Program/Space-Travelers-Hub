import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import RocketsPage from '../pages/RocketsPage';
import { FetchRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const rocketList = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rocketList.length) dispatch(FetchRockets);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="wrapper">
      {rocketList.map((rkt) => (
        <div key={rkt.id} className="rkt-wrapper">
          <RocketsPage rocket={rkt} />
        </div>
      ))}
    </div>
  );
};

export default Rockets;

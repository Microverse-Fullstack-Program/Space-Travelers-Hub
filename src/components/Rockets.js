import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useRef } from 'react';
import RocketsPage from '../pages/RocketsPage';
import { FetchRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const shouldFetchRockets = useRef(true);
  useEffect(() => {
    if (shouldFetchRockets.current) {
      shouldFetchRockets.current = false;
      dispatch(FetchRockets());
    }
  }, [dispatch]);

  let rocketList = useSelector((state) => state.rockets).rockets;
  if (rocketList === null || rocketList === undefined) {
    rocketList = [];
  } else {
    // eslint-disable-next-line no-console
    console.log(rocketList);
  }

  return (
    <>
      {rocketList.map((rkt) => (
        <div key={rkt.id}>
          <RocketsPage rocket={rkt} />
        </div>
      ))}
    </>
  );
};

export default Rockets;

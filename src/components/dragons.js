import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useRef } from 'react';
import DragonsPage from '../pages/DragonsPage';
import { FetchDragons } from '../redux/dragons/dragons';

const Dragons = () => {
  const dispatch = useDispatch();
  const shouldFetchDragons = useRef(true);
  useEffect(() => {
    if (shouldFetchDragons.current) {
      shouldFetchDragons.current = false;
      dispatch(FetchDragons());
    }
  }, [dispatch]);

  let dragonsList = useSelector((state) => state.dragons).dragons;
  if (dragonsList === null || dragonsList === undefined) {
    dragonsList = [];
  }

  return (
    <div className="wrapper">
      {dragonsList.map((drg) => (
        <div key={drg.id} className="drg-wrapper">
          <DragonsPage dragon={drg} />
        </div>
      ))}
    </div>
  );
};

export default Dragons;

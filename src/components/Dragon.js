import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import DragonsPage from '../pages/DragonsPage';
import { FetchDragons } from '../redux/dragons/dragons';

const Dragons = () => {
  const dragonsList = useSelector((state) => state.dragons);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dragonsList.length) dispatch(FetchDragons);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

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

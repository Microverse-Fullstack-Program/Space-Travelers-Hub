import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import MissionsPage from '../pages/MissionsPage';
import { FetchMissions } from '../redux/missions/missions';

const Missions = () => {
  const missionsList = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missionsList.length) dispatch(FetchMissions);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="wrapper">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th className="status">Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missionsList.map((msn) => (
            <MissionsPage key={msn.id} mission={msn} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;

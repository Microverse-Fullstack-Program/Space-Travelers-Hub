import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useRef } from 'react';
import MissionsPage from '../pages/MissionsPage';
import { FetchMissions } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const shouldFetchMissions = useRef(true);
  useEffect(() => {
    if (shouldFetchMissions.current) {
      shouldFetchMissions.current = false;
      dispatch(FetchMissions());
    }
  }, [dispatch]);

  let missionList = useSelector((state) => state.missions).missions;
  if (missionList === null || missionList === undefined) {
    missionList = [];
  }

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
          {missionList.map((msn) => (
            <MissionsPage key={msn.id} mission={msn} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;

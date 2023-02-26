import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReserveRocket, UnreserveRocket } from '../redux/rockets/rockets';
import { ReserveDragon, UnreserveDragon } from '../redux/dragons/dragons';
import { SubscribeMission, UnSubscribeMission } from '../redux/missions/missions';

function Profile() {
  const dispatch = useDispatch();

  const handleRocketReservation = (id) => dispatch(ReserveRocket(id));
  const handleRocketCancellation = (id) => dispatch(UnreserveRocket(id));

  const handleDragonsReservation = (id) => dispatch(ReserveDragon(id));
  const handleDragonsCancellation = (id) => dispatch(UnreserveDragon(id));

  const handleMissionJoining = (id) => dispatch(SubscribeMission(id));
  const handleMissionLeaving = (id) => dispatch(UnSubscribeMission(id));

  const reservedRockets = useSelector((state) => state.rockets.filter((rkt) => rkt.reserve));
  const reservedDragons = useSelector((state) => state.dragons.filter((drg) => drg.reserve));
  const JoinedMissions = useSelector((state) => state.missions.filter((msn) => msn.reserve));

  return (
    <div className="wrapper profile_section">
      <div className="profile-container">
        <h3>My Rockets</h3>
        <ul className="list-reservation">
          {reservedRockets.length ? reservedRockets.map((rocket) => (
            <div key={rocket.id} className="reserved-item">
              <li>
                {rocket.rocket_name}
                {' '}
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => (!rocket.reserve ? handleRocketReservation(rocket.id)
                    : handleRocketCancellation(rocket.id))}
                >
                  {rocket.reserve ? 'Cancel' : 'Reserve'}
                </button>
              </li>
              <li>
                <button type="button"><a href={rocket.wikipedia} rel="noreferrer" target="_blank">Read more</a></button>
              </li>
            </div>
          ))
            : <li className="no-reservation">No Reserved Rockets</li>}
        </ul>
      </div>
      <div className="profile-container">
        <h3>My Dragons</h3>
        <ul className="list-reservation">
          {reservedDragons.length ? reservedDragons.map((dragon) => (
            <div key={dragon.id} className="reserved-item">
              <li>
                {dragon.dragon_name}
                {' '}
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => (!dragon.reserve ? handleDragonsReservation(dragon.id)
                    : handleDragonsCancellation(dragon.id))}
                >
                  {dragon.reserve ? 'Cancel' : 'Reserve'}
                </button>
              </li>
              <li>
                <button type="button"><a href={dragon.wikipedia} rel="noreferrer" target="_blank">Read more</a></button>
              </li>
            </div>
          ))
            : <li className="no-reservation">No Reserved Dragons </li>}
        </ul>
      </div>
      <div className="profile-container">
        <h3>My Missions</h3>
        <ul className="list-reservation">
          {JoinedMissions.length ? JoinedMissions.map((mission) => (
            <div key={mission.id} className="reserved-item">
              <li>
                {mission.mission_name}
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => (!mission.reserve ? handleMissionJoining(mission.id)
                    : handleMissionLeaving(mission.id))}
                >
                  {mission.reserve ? 'Leave' : 'Join'}
                </button>
              </li>
              <li>
                <button type="button"><a href={mission.wikipedia} rel="noreferrer" target="_blank">Read more</a></button>
              </li>
            </div>
          ))
            : <li className="no-reservation">No Missions Joined</li>}
        </ul>
      </div>
    </div>
  );
}

export default Profile;

import { Outlet, NavLink } from 'react-router-dom';
import palent from '../assets/palent.png';

const Layout = () => {
  const navLinkStyle = ({ isActive }) => {
    const activeLinkStyle = {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: 'none',
      color: isActive ? '#a8a8a8' : '#d4d4d4',
    };
    return activeLinkStyle;
  };

  return (
    <div className="wrapper">
      <header className="header">
        <div className="nav-wrapper">
          <div class="logo">
            <img src={planet} alt="planet" id="planet-icon" />
            <h2>Space travelers&apos; Hub</h2>
          </div>
          <nav className="nav-bar">
            <NavLink to="/" style={navLinkStyle}>
              Rockets
            </NavLink>
            <NavLink to="/categories" style={navLinkStyle}>
              Dragons 
            </NavLink>
            <NavLink to="/categories" style={navLinkStyle}>
              Missions
            </NavLink>
            <NavLink to="/categories" style={navLinkStyle}>
              My Profile 
            </NavLink>
          </nav>
        </div>
        <BsPersonFill className="personIcon" />
      </header>
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

import { Outlet, NavLink } from 'react-router-dom';
import planet1 from '../assets/planet.png';

const Layout = () => {
  const navLinkStyle = ({ isActive }) => {
    const activeLinkStyle = {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'underline' : 'none',
    };
    return activeLinkStyle;
  };

  return (
    <div className="wrapper">
      <header className="header">
        <div className="logo">
          <img src={planet1} alt="planet" id="planet-icon" />
          <h2>Space Travelers&apos; Hub</h2>
        </div>
        <nav className="nav-bar">
          <NavLink to="/" className="navLink" style={navLinkStyle}>
            Rockets
          </NavLink>
          <NavLink to="/dragons" className="navLink" style={navLinkStyle}>
            Dragons
          </NavLink>
          <NavLink to="/missions" className="navLink" style={navLinkStyle}>
            Missions
          </NavLink>
          <NavLink to="/profile" className="navLink" style={navLinkStyle}>
            My Profile
          </NavLink>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

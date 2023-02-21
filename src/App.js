import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Profile from './pages/Profile';
import Dragons from './pages/Dragons';
import Missions from './pages/Missions';
import Rockets from './pages/Rockets';

function App() {
  return (
    <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/dragons" element={<Dragons />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

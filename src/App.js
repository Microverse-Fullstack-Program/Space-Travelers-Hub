import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import Dragons from './components/Dragons';
import Missions from './components/Missions';

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

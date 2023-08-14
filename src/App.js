import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './About/About';
import Home from './Home/Home';
import Settings from './Settings/Settings';
import Table from './Table/Table';
import NavBar from './NavBar/Navbar';
import Empty from './Empty-Page/Empty';

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Empty />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/About" element={<About />} />
        <Route path="/Table" element={<Table />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

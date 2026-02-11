import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Araras from './pages/Araras';
import Uberlandia from './pages/Uberlandia';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uberlandia" element={<Uberlandia />} />
        <Route path="/araras" element={<Araras />} />
      </Routes>
    </Router>
  );
}

export default App;

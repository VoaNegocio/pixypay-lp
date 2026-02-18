import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Araras from './pages/Araras';
import Uberlandia from './pages/Uberlandia';
import Indaiatuba from './pages/Indaiatuba';
import GTMTracker from './components/GTMTracker';

function App() {
  return (
    <Router>
      <GTMTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uberlandia" element={<Uberlandia />} />
        <Route path="/araras" element={<Araras />} />
        <Route path="/indaiatuba" element={<Indaiatuba />} />
      </Routes>
    </Router>
  );
}

export default App;

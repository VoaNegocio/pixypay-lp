import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HomeB from './pages/HomeB';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teste-b" element={<HomeB />} />
      </Routes>
    </Router>
  );
}

export default App;

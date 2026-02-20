import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Araras from './pages/Araras';
import Uberlandia from './pages/Uberlandia';
import Indaiatuba from './pages/Indaiatuba';
import RibeiraoPreto from './pages/RibeiraoPreto';
import Leme from './pages/Leme';
import NovaOdessa from './pages/NovaOdessa';
import Itamarandiba from './pages/Itamarandiba';
import Uberaba from './pages/Uberaba';
import Salto from './pages/Salto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uberlandia" element={<Uberlandia />} />
        <Route path="/araras" element={<Araras />} />
        <Route path="/indaiatuba" element={<Indaiatuba />} />
        <Route path="/ribeirao-preto" element={<RibeiraoPreto />} />
        <Route path="/leme" element={<Leme />} />
        <Route path="/nova-odessa" element={<NovaOdessa />} />
        <Route path="/itamarandiba" element={<Itamarandiba />} />
        <Route path="/uberaba" element={<Uberaba />} />
        <Route path="/salto" element={<Salto />} />
      </Routes>
    </Router>
  );
}

export default App;

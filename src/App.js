import Home from './components/pages/home/home';
import Poems from './components/pages/poems/poems';
import Musics from './components/pages/musics/musics';
import Histories from './components/pages/histories/histories';
import Declaration from './components/pages/declaration/declaration';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/love-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/histories" element={<Histories />} />
        <Route path="/poems" element={<Poems />} />
        <Route path="/musics" element={<Musics />} />
        <Route path="/declaration" element={<Declaration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

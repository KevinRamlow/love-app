import Home from './components/pages/home/home';
import Poems from './components/pages/poems/poems';
import Musics from './components/pages/musics/musics';
import Stories from './components/pages/stories/stories';
import Declaration from './components/pages/declaration/declaration';
import FooterBar from './components/FooterBar';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/love-app">
      <div style={{ minHeight: '100vh', paddingBottom: '60px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/poems" element={<Poems />} />
          <Route path="/musics" element={<Musics />} />
          <Route path="/declaration" element={<Declaration />} />
        </Routes>
      </div>
      <FooterBar />
    </BrowserRouter>
  );
}

export default App;

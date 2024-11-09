// App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/home';
import Musics from './components/pages/musics/musics';

function App() {
  return (
    <BrowserRouter basename="/love-app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/musics" element={<Musics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

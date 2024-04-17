import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ShopPage } from './pages/shopPage';
import { HomePage } from './pages/homePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  );
}

export default App;

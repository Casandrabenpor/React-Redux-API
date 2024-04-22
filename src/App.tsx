import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ShopPage } from './pages/shopPage';
import { HomePage } from './pages/homePage';
import { CreatePage } from './pages/createPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/create" element={<CreatePage />} />
    </Routes>
  );
}

export default App;

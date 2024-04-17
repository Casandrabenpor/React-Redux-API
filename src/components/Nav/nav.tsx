import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li key="home" className="heartbeat">
          <Link to="/"> 🏠 HOME</Link>
        </li>
        <li key="shop" className="heartbeat">
          <Link to="/shop"> SHOP</Link>
        </li>
      </ul>
    </nav>
  );
};

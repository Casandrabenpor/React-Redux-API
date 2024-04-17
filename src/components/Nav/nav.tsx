import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNav } from '../../styles/navStyled/navStyled';

export const Nav = () => {
  return (
    <StyledNav>
      <ul>
        <li key="home" className="heartbeat">
          <Link to="/"> 🏠 HOME</Link>
        </li>
        <li key="shop" className="heartbeat">
          <Link to="/shop"> SHOP</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import useTheme from '../hooks/useTheme';
import './Navbar.css';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">Shop.ma</Link>
        <nav className="nav">
          <NavLink to="/" >
            Accueil
          </NavLink>
          <NavLink to="/products" >
            Produits
          </NavLink>
          <NavLink to="/cart" >
            Panier
          </NavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? 'dark' : 'night'}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

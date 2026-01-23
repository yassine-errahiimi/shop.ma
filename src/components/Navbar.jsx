import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">Shop.ma</Link>
        <nav className="nav">
          <NavLink to="/" className="nav-link" >
            Accueil
          </NavLink>
          <NavLink to="/products" className="nav-link" >
            Produits
          </NavLink>
          <NavLink to="/cart" className="nav-link" >
            Panier
          </NavLink>
          <NavLink to="/contact" className="nav-link" >
            Contact
          </NavLink>
         
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

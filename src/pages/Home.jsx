import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenue sur Shop.ma</h1>
      
      <Link to="/products" className="btn btn-primary">Voir nos produits</Link>
    </div>
  );
}

export default Home;

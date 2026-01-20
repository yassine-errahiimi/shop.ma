import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Not found</p>
      <Link to="/" className="btn-primary">Retour à l'accueil</Link>
    </div>
  );
}

export default NotFound;

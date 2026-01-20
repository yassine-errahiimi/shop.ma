import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div className="cart-container">
      <h2>Votre Panier</h2>
      <p>Votre panier est vide.</p>
      <Link to="/products" className="btn-secondary">Continuer vos achats</Link>
    </div>
  );
}

export default Cart;

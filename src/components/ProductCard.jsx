import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
 
  const { id, title, price, image, category } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <Link to={`/products/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className="product-info">
        <span className="category">{category}</span>
        <h3>{title}</h3>
        <div className="product-footer">
          <span className="price">{price} MAD</span>
          <div className="actions">
            <Link to={`/products/${id}`} className="btn-details">
              Voir détails
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import CheckoutModal from '../components/CheckoutModal';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) return <div className="loading">Chargement du produit...</div>;
  if (error) return <div className="error">Erreur: {error}</div>;
  if (!product) return <div className="error">Produit non trouvé</div>;

  return (
    <div className="product-detail-container">
      <button onClick={() => navigate(-1)} className="btn-back">← Retour</button>
      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-detail-info">
          <h2>{product.title}</h2>
          <span className="category-tag">{product.category}</span>
          <p className="price-tag">{product.price} MAD</p>
          <div className="rating">
            Note: {product.rating?.rate} / 5 ({product.rating?.count} avis)
          </div>
          <p className="description">{product.description}</p>
          <div className="action-buttons">
            <button className="btn-add-cart" onClick={() => alert('Ajouté au panier !')}>Ajouter au panier</button>
            <button className="btn-primary btn-buy" onClick={() => setIsModalOpen(true)}>Acheter maintenant</button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <CheckoutModal 
          product={product} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </div>
  );
}

export default ProductDetail;

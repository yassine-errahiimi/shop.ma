import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);

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
          <button className="btn-add-cart">Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import useFetch from '../hooks/useFetch';

function Products() {
  const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products');
  const [searchTerm, setSearchTerm] = useState('');

  if (loading) return <div className="loading">Chargement des produits...</div>;
  if (error) return <div className="error">Erreur: {error}</div>;

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-page">
      <h2>Nos Produits</h2>
      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span>{filteredProducts.length} résultats</span>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;

// src/App.jsx

import { Header, ProductCard, Footer } from './components';
import products from './data/products';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <div className="container">
          <h1 className="page-title">Nos Produits</h1>
          <p className="page-subtitle">Découvrez notre sélection de produits de qualité</p>
          
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                inStock={product.inStock}
                description={product.description}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
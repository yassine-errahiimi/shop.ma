import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import products from "./data/products";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productId) => {
    setCartItems((previous) => [...previous, productId]);
  };

  return (
    <>
      <Header cartCount={cartItems.length} />

      <main className="main">
        <section className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              inStock={product.inStock}
              onAddToCart={() => handleAddToCart(product.id)}
            />
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;

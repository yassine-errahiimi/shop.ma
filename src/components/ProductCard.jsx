function ProductCard({id,title,price,image,category,inStock,onAddToCart,}) {
  return (
    <div className="product-card" data-id={id}>
      <img src={image} alt={title} />
      <div className="product-info">
        <span className="category">{category}</span>
        <h3>{title}</h3>
        <p className="price">{price.toFixed(2)} MAD</p>
        <button
          className="add-to-cart"
          onClick={onAddToCart}
          disabled={!inStock}
        >
          {inStock ? "Ajouter au panier" : "Rupture de stock"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

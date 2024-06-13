import React from 'react';


const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} />
            <h3 className = "product-title">{product.title}</h3>
            <p className = "product-description">{product.description}</p>
            <p>{product.price} $</p>
            <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
    );
};

export default ProductCard;

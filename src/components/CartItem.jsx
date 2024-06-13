import React from 'react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.price} $</p>
            <input type="number" value={item.quantity} onChange={(e) => updateQuantity(item, e.target.value)} />
            <button onClick={() => removeFromCart(item)}>Удалить</button>
        </div>
    );
};

export default CartItem;

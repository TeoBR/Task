import React from 'react';

const Cart = ({ cartItems, removeFromCart, updateQuantity, purchaseItems, toggleCart }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <div className="cart-header">
                <h2>Корзина</h2>
                <button className="close-cart" onClick={toggleCart}>×</button>
            </div>
            <div className="overflow">
            {cartItems.length === 0 ? (
                <p>Ваша корзина пуста</p>
            ) : (
                cartItems.map(item => (
                    
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.title} />
                        <h3>{item.title}</h3>
                        <p>${item.price}</p>
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item, e.target.value)}
                        />
                        <button onClick={() => removeFromCart(item)}>Удалить</button>
                    </div>
                    
                ))
            )}
            </div>
            <div className="total">
                <span>Итого: ${totalPrice.toFixed(2)}</span>
                <button onClick={purchaseItems}>Купить</button>
            </div>
        </div>
    );
};

export default Cart;
import React from 'react';
import './CartDrawer.css';

const CartDrawer = ({ isOpen, onClose, cartItems, onCheckout, onRemove }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose}></div>}
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart ({cartItems.length})</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                {item.image === '🎂' ? (
                  <div className="cart-item-image emoji-image">🎂</div>
                ) : (
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                )}
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <div className="cart-item-actions">
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                    <button
                      className="remove-btn"
                      aria-label="Remove from cart"
                      onClick={() => onRemove && onRemove(index)}
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            className="checkout-btn"
            disabled={cartItems.length === 0}
            onClick={() => {
              if (cartItems.length === 0) return;
              if (onCheckout) onCheckout();
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;

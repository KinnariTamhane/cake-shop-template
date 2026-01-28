import React, { useEffect, useState, useMemo } from 'react';

const DELIVERY_CHARGE = 5;

const randomAddress = () => {
  const streets = ['Bakery Lane', 'Sweet Avenue', 'Cocoa Street', 'Vanilla Road', 'Sugar Blvd'];
  const cities = ['Sweet City', 'Caketown', 'Pastryville', 'Fondant Falls', 'Ganache Grove'];
  const states = ['CA', 'NY', 'TX', 'FL', 'WA'];
  const streetNumber = Math.floor(100 + Math.random() * 900);
  const street = streets[Math.floor(Math.random() * streets.length)];
  const city = cities[Math.floor(Math.random() * cities.length)];
  const state = states[Math.floor(Math.random() * states.length)];
  const zip = Math.floor(10000 + Math.random() * 89999);
  return `${streetNumber} ${street}, ${city}, ${state} ${zip}`;
};

const Checkout = ({ cartItems, onClose }) => {
  const [address, setAddress] = useState('');
  const [isAddingAddress, setIsAddingAddress] = useState(false);
  const [newAddress, setNewAddress] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [phone, setPhone] = useState('');
  const isPhoneValid = /^[0-9]{7,15}$/.test(phone);
  const [phoneErrorActive, setPhoneErrorActive] = useState(false);

  useEffect(() => {
    setAddress(randomAddress());
  }, []);

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + (item.price || 0), 0),
    [cartItems]
  );
  const total = useMemo(() => subtotal + DELIVERY_CHARGE, [subtotal]);

  return (
    <div className="checkout-overlay" onClick={onClose}>
      <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close">×</button>
        <h2 className="section-title">Order Summary</h2>
        <div className="checkout-details">
          <div className="checkout-section">
            <h3 className="checkout-heading">Delivery Address</h3>
            <p className="checkout-address">{address}</p>
            {!isAddingAddress && (
              <button
                className="add-address-btn"
                onClick={() => setIsAddingAddress(true)}
              >
                Add New Address
              </button>
            )}
            {isAddingAddress && (
              <div className="address-add-area">
                <textarea
                  className="address-input"
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  placeholder="Enter full delivery address"
                  rows={3}
                />
                <div className="address-actions">
                  <button
                    className="save-address-btn"
                    onClick={() => {
                      const v = newAddress.trim();
                      if (!v) return;
                      setAddress(v);
                      setIsAddingAddress(false);
                      setNewAddress('');
                    }}
                  >
                    Save Address
                  </button>
                  <button
                    className="cancel-add-btn"
                    onClick={() => {
                      setIsAddingAddress(false);
                      setNewAddress('');
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className={`checkout-section ${!isPhoneValid && phoneErrorActive ? 'phone-section-invalid' : ''}`}>
            <label className="phone-label" htmlFor="phone">Mention a  phone number for confirmation call<span>*</span></label>
            <input
              id="phone"
              type="tel"
              className="phone-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter phone number"
              maxLength='10'
              required
            />
            {phoneErrorActive && !isPhoneValid && (
              <div className="phone-error">Enter a valid phone number</div>
            )}
          </div>
          <div className="checkout-section">
            <h3 className="checkout-heading">Bill Summary</h3>
            <div className="checkout-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="checkout-row">
              <span>Delivery</span>
              <span>${DELIVERY_CHARGE.toFixed(2)}</span>
            </div>
            <div className="checkout-total-row">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <button
          className="place-order-btn"
          onClick={() => {
            if (!isPhoneValid) {
              setPhoneErrorActive(true);
              const el = document.getElementById('phone');
              if (el && el.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              if (el && el.focus) el.focus();
              return;
            }
            setShowSuccess(true);
          }}
        >
          Place Order
        </button>
        {showSuccess && (
          <div className="success-overlay" onClick={() => setShowSuccess(false)}>
            <div className="success-modal" onClick={(e) => e.stopPropagation()}>
              <h3 className="success-title">Order Placed.. Thank You!</h3>
              <button
                className="success-ok-btn"
                onClick={() => {
                  setShowSuccess(false);
                  onClose();
                }}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;

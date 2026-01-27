import React, { useState } from 'react';
import './CustomOrder.css';

const CustomOrder = ({ addToCart }) => {
  const [formData, setFormData] = useState({
    cakeType: '',
    flavor: '',
    frosting: '',
    toppings: '',
    size: '',
    message: '',
    pickupDate: '',
    specialInstructions: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInitialSubmit = (e) => {
    e.preventDefault();
    
    let minPrice = 40;
    let maxPrice = 60;

    switch (formData.cakeType) {
      case 'round':
      case 'square': // Was bundt
        minPrice = 40;
        maxPrice = 50;
        break;
      case 'rectangle': // Was sheet
        minPrice = 50;
        maxPrice = 60;
        break;
      case 'tiered':
        minPrice = 60;
        maxPrice = 70;
        break;
      case 'cupcakes':
        minPrice = 10;
        maxPrice = 20;
        break;
      default:
        minPrice = 40;
        maxPrice = 60;
    }

    // Calculate random price between minPrice and maxPrice
    const price = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
    setCalculatedPrice(price);
    setShowModal(true);
  };

  const confirmAddToCart = () => {
    const customCake = {
      id: Date.now(), // Unique ID
      name: `Custom ${formData.cakeType} Cake`,
      price: calculatedPrice,
      image: '🎂', // Custom cake emoji image
      description: `${formData.flavor} flavor with ${formData.frosting} frosting`,
      details: formData // Store full details if needed
    };
    
    addToCart(customCake);
    setShowModal(false);
    // Optional: Reset form
    setFormData({
      cakeType: '',
      flavor: '',
      frosting: '',
      toppings: '',
      size: '',
      message: '',
      pickupDate: '',
      specialInstructions: ''
    });
  };

  return (
    <section id="custom-order" className="custom-order">
      <div className="container">
        <h2 className="section-title">Custom Order</h2>
        <form className="order-form" onSubmit={handleInitialSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="cakeType">Cake Type</label>
              <select
                id="cakeType"
                name="cakeType"
                value={formData.cakeType}
                onChange={handleChange}
                required
              >
                <option value="">Select Cake Type</option>
                <option value="round">Round Cake</option>
                <option value="square">Square Cake</option>
                <option value="rectangle">Rectangle Cake</option>
                <option value="tiered">Tiered Cake</option>
                <option value="cupcakes">Cupcakes</option>

              </select>
            </div>

            <div className="form-group">
              <label htmlFor="flavor">Flavor</label>
              <select
                id="flavor"
                name="flavor"
                value={formData.flavor}
                onChange={handleChange}
                required
              >
                <option value="">Select Flavor</option>
                <option value="vanilla">Vanilla</option>
                <option value="chocolate">Chocolate</option>
                <option value="strawberry">Strawberry</option>
                <option value="red-velvet">Red Velvet</option>
                <option value="lemon">Lemon</option>
                <option value="carrot">Carrot</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="frosting">Frosting</label>
              <select
                id="frosting"
                name="frosting"
                value={formData.frosting}
                onChange={handleChange}
                required
              >
                <option value="">Select Frosting</option>
                <option value="buttercream">Buttercream</option>
                <option value="cream-cheese">Cream Cheese</option>
                <option value="chocolate-ganache">Chocolate Ganache</option>
                <option value="whipped-cream">Whipped Cream</option>
                <option value="fondant">Fondant</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="toppings">Toppings</label>
              <select
                id="toppings"
                name="toppings"
                value={formData.toppings}
                onChange={handleChange}
              >
                <option value="">Select Toppings</option>
                <option value="fresh-fruits">Fresh Fruits</option>
                <option value="chocolate-chips">Chocolate Chips</option>
                <option value="nuts">Nuts</option>
                <option value="sprinkles">Sprinkles</option>
                <option value="edible-flowers">Edible Flowers</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="size">Size</label>
              <select
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                required
              >
                <option value="">Select Size</option>
                <option value="small">Small (6 inches)</option>
                <option value="medium">Medium (8 inches)</option>
                <option value="large">Large (10 inches)</option>
                <option value="xlarge">Extra Large (12 inches)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="pickupDate">Pickup Date</label>
              <input
                type="date"
                id="pickupDate"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Custom Message (Optional)</label>
            <input
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your custom message"
            />
          </div>

          <div className="form-group">
            <label htmlFor="specialInstructions">Special Instructions</label>
            <textarea
              id="specialInstructions"
              name="specialInstructions"
              value={formData.specialInstructions}
              onChange={handleChange}
              rows="4"
              placeholder="Any special requests or dietary requirements..."
            />
          </div>

          {/* <div className="form-group">
            <label htmlFor="imageUpload">Upload Reference Image (Optional)</label>
            <div className="file-upload-wrapper">
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                className="file-input"
              />
              <label htmlFor="imageUpload" className="file-label upload-button">
                <span>Choose File</span>
              </label>
            </div>
          </div> */}

          <button type="submit" className="submit-button">
            Add to Cart
          </button>
        </form>

        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <h3>Review Your Custom Order</h3>
              <div className="order-summary">
                <p><strong>Cake Type:</strong> {formData.cakeType}</p>
                <p><strong>Flavor:</strong> {formData.flavor}</p>
                <p><strong>Frosting:</strong> {formData.frosting}</p>
                <p><strong>Toppings:</strong> {formData.toppings || 'None'}</p>
                <p><strong>Size:</strong> {formData.size}</p>
                <p><strong>Message:</strong> {formData.message || 'None'}</p>
                <p><strong>Pickup Date:</strong> {formData.pickupDate}</p>
                <p><strong>Instructions:</strong> {formData.specialInstructions || 'None'}</p>
                <div className="price-display">
                  <strong>Estimated Price:</strong> ${calculatedPrice.toFixed(2)}
                </div>
              </div>
              <div className="modal-actions">
                <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
                <button className="confirm-btn" onClick={confirmAddToCart}>Confirm & Add to Cart</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomOrder;

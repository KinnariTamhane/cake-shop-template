import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCakes from './components/FeaturedCakes';
import CustomOrder from './components/CustomOrder';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addToCart = (cake) => {
    setCartItems([...cartItems, cake]);
    setIsCartOpen(true); // Open cart when item added
  };

  const removeFromCart = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  
  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="App">
      <Header cartCount={cartItems.length} toggleCart={toggleCart} />
      <Hero />
      <FeaturedCakes addToCart={addToCart} />
      <CustomOrder addToCart={addToCart} />
      <Testimonials />
      <About />
      <Footer />
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onCheckout={handleCheckout}
        onRemove={removeFromCart}
      />
      {isCheckoutOpen && (
        <Checkout
          cartItems={cartItems}
          onClose={() => setIsCheckoutOpen(false)}
        />
      )}
    </div>
  );
}

export default App;

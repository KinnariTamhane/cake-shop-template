import React from 'react';
import './FeaturedCakes.css';

const FeaturedCakes = ({ addToCart }) => {
  const featuredCakes = [
    {
      id: 1,
      name: 'Chocolate Delight',
      price: 35.00,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
      description: 'Rich chocolate cake with ganache'
    },
    {
      id: 2,
      name: 'Strawberry Dream',
      price: 32.00,
      image: 'https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?q=80&w=1233&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Vanilla cake with fresh strawberries'
    },
    {
      id: 3,
      name: 'Berry Bliss',
      price: 38.00,
      image:'https://images.unsplash.com/photo-1598360483676-8f53df56ab6b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      // image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=400&h=400&fit=crop',
      description: 'Mixed berry cake with cream'
    },
    {
      id: 4,
      name: 'Classic Vanilla',
      price: 28.00,
      image:'https://images.unsplash.com/photo-1745243998722-5243a38ba389?auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      // image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=400&fit=crop',
      description: 'Traditional vanilla with buttercream'
    },
    {
      id: 5,
      name: 'Red Velvet',
      price: 36.00,
      image : 'https://images.unsplash.com/photo-1602630209855-dceac223adfe?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      // image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=400&fit=crop',
      description: 'Classic red velvet with cream cheese'
    },
    {
      id: 6,
      name: 'Caramel Swirl',
      price: 34.00,
      image: 'https://images.unsplash.com/photo-1597061286894-5100bd5be656?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Caramel drizzle with vanilla base'
    },
    {
      id: 7,
      name: 'Mocha Magic',
      price: 37.00,
      image: 'https://images.unsplash.com/photo-1655411880489-2f0d18785863?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Coffee-infused chocolate delight'
    },
    {
      id: 8,
      name: 'Velvet Royale',
      price: 39.00,
      image: 'https://images.unsplash.com/photo-1707274860760-b6359f4b8557?q=80&w=657&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Luxurious red velvet with cream cheese'
    },
    {
      id: 9,
      name: 'Citrus Zest',
      price: 31.00,
      image: 'https://images.unsplash.com/photo-1668175582147-e0426409c125?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Refreshing lemon with buttercream'
    }
  ];

  return (
    <section id="menu" className="featured-cakes">
      <div className="container">
        <h2 className="section-title">Featured Cakes</h2>
        <div className="cakes-scroller">
          {featuredCakes.map((cake) => (
            <div key={cake.id} className="cake-card">
              <div className="cake-image-wrapper">
                <img src={cake.image} alt={cake.name} className="cake-image" />
              </div>
              <div className="cake-info">
                <h3 className="cake-name">{cake.name}</h3>
                <p className="cake-description">{cake.description}</p>
                <div className="cake-price">${cake.price.toFixed(2)}</div>
                <button className="add-to-cart-btn" onClick={() => addToCart(cake)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCakes;

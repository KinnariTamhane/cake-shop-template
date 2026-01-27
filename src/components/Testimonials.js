import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      quote: 'The most delicious cakes I\'ve ever tasted! The custom order was exactly what I envisioned.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      quote: 'Perfect for our wedding! Beautiful presentation and amazing taste. Highly recommend!',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      quote: 'The best bakery in town! Every cake is a masterpiece. My kids love their birthday cakes!',
      rating: 5
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-image-wrapper">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="testimonial-image"
                />
              </div>
              <div className="testimonial-content">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <p className="testimonial-name">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

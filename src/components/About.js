import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Welcome to Sweet Delights, where we transform your sweetest dreams into reality. 
              With over a decade of experience in the art of baking, we specialize in creating 
              custom cakes that are as beautiful as they are delicious.
            </p>
            <p className="about-description">
              Our team of skilled bakers and decorators work tirelessly to ensure every cake 
              is a masterpiece. From intimate birthday celebrations to grand wedding receptions, 
              we've been part of countless special moments, making them even sweeter.
            </p>
            <p className="about-description">
              We use only the finest ingredients, sourced locally whenever possible, to create 
              cakes that not only look stunning but taste absolutely divine. Every order is 
              crafted with love, attention to detail, and a commitment to excellence.
            </p>
          </div>
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1678225178126-c2dbd865f207?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Professional bakery kitchen" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

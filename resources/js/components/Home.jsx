import React from 'react';
import './Home.css'; // Ensure the CSS path is correct

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to My Website</h1>
        <p>Your one-stop solution for all your needs.</p>
      </header>
      
      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Feature One</h3>
            <p>Discover the amazing benefits of our first feature.</p>
          </div>
          <div className="feature-item">
            <h3>Feature Two</h3>
            <p>Experience the seamless integration of our second feature.</p>
          </div>
          <div className="feature-item">
            <h3>Feature Three</h3>
            <p>Learn more about the innovative solutions we offer.</p>
          </div>
        </div>
      </section>
      
      <section className="about-us">
        <h2>About Us</h2>
        <p>We are dedicated to providing the best service to our customers. Our team of experts works tirelessly to ensure customer satisfaction.</p>
      </section>
    </div>
  );
};

export default Home;

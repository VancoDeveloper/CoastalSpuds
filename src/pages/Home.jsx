import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Coastal Spuds</h1>
          <p>Delicious Gourmet Potato Dishes for Your Special Events</p>
          <Link to="/menu" className="btn btn-secondary">
            Explore Our Menu
          </Link>
        </div>
        <div className="hero-image">🥔🚚</div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <h2 className="section-title">Why Choose Coastal Spuds?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🍴</div>
              <h3>Quality Food</h3>
              <p>Fresh ingredients and gourmet preparation for every dish</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📍</div>
              <h3>Mobile Service</h3>
              <p>We come to you! Perfect for events anywhere on the coast</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Professional</h3>
              <p>Experienced team dedicated to making your event memorable</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎉</div>
              <h3>Customizable</h3>
              <p>Tailored menus and services to fit your event needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="menu-preview section">
        <div className="container">
          <h2 className="section-title">Popular Dishes</h2>
          <div className="menu-preview-grid">
            <div className="menu-item">
              <h3>Loaded Nachos</h3>
              <p>Crispy chips with sour cream, cheese & jalapeños</p>
              <span className="price">$8</span>
            </div>
            <div className="menu-item">
              <h3>Spud Burger</h3>
              <p>Gourmet potato patty with fresh toppings</p>
              <span className="price">$12</span>
            </div>
            <div className="menu-item">
              <h3>Seasoned Fries</h3>
              <p>Golden fries with special spice blend</p>
              <span className="price">$6</span>
            </div>
            <div className="menu-item">
              <h3>Truffle Mash</h3>
              <p>Creamy mashed potatoes with truffle oil</p>
              <span className="price">$10</span>
            </div>
          </div>
          <Link to="/menu" className="btn btn-primary" style={{ marginTop: '2rem' }}>
            See Full Menu
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2>Ready to Book Coastal Spuds for Your Event?</h2>
          <p>Contact us today to discuss your catering needs</p>
          <div className="cta-buttons">
            <Link to="/services" className="btn btn-primary">
              View Services
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
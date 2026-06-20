import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img src={`${import.meta.env.BASE_URL}Images/CoastalBaySpudsLogo.jpg`} alt="Coastal Bay Spuds" className="footer-logo" />
              <span className="footer-brand-name">Coastal Bay Spuds</span>
            </Link>
            <p className="footer-tagline">Delicious gourmet potato dishes for your special events. Two trucks, one passion — great food.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Our Fleet */}
          <div className="footer-section">
            <h4>Our Fleet</h4>
            <ul>
              <li>Coastal Spuds</li>
              <li>Coastal Skewers</li>
            </ul>
            <h4 style={{ marginTop: '1.5rem' }}>Events We Cover</h4>
            <ul>
              <li>Birthdays & Weddings</li>
              <li>Corporate Events</li>
              <li>Festivals & Private Parties</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="footer-contact-icon">📍</span>
                Sydney, Australia
              </li>
              <li>
                <span className="footer-contact-icon">📞</span>
                0406 082 114
              </li>
              <li>
                <span className="footer-contact-icon">✉️</span>
                info@coastalbayspuds.com.au
              </li>
            </ul>
            <div className="footer-social">
              <a
                href="https://www.facebook.com/profile.php?id=61587128316349"
                className="social-btn footer-facebook"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {currentYear} Coastal Bay Spuds. All rights reserved.</p>
          <p>Made with ❤️ for great food events.</p>
        </div>
      </div>
    </footer>
  )
}

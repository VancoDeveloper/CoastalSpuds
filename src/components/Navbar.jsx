import { useState } from 'react'
import { Link } from 'react-router-dom'
import EnquireModal from './EnquireModal'
import './Navbar.css'

export default function Navbar({ isEnquireOpen, setIsEnquireOpen }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <span className="brand-coastal">Coastal Bay</span>
            <span className="brand-spuds">Spuds</span>
          </Link>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/menu" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Menu
            </Link>
            <Link to="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <button
              className="nav-link btn btn-secondary"
              onClick={() => {
                setIsEnquireOpen(true)
                setIsMenuOpen(false)
              }}
            >
              Enquire
            </button>
          </div>

          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {isEnquireOpen && (
        <EnquireModal isOpen={isEnquireOpen} onClose={() => setIsEnquireOpen(false)} />
      )}
    </>
  )
}
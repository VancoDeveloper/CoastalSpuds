import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const BASE = import.meta.env.BASE_URL

export default function Home() {
  const [currentPair, setCurrentPair] = useState(0)
  const totalPairs = 3

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Event Organizer',
      text: 'Coastal Bay Spuds was the undeniable highlight of our corporate event! The food was absolutely delicious, the presentation was impressive, and the service from start to finish was exceptional. Every single guest was raving about it. Highly recommend!',
      image: `${BASE}Images/Profile1.jpg`
    },
    {
      id: 2,
      name: 'Mike Chen',
      title: 'Wedding Planner',
      text: "Our wedding guests couldn't stop raving about the catering service! Fresh, creative, and absolutely delicious. The team was professional, punctual, and made the whole experience effortless. Without a doubt the best catering decision we made.",
      image: `${BASE}Images/Profile2.jpg`
    },
    {
      id: 3,
      name: 'Emma Davis',
      title: 'Party Host',
      text: 'What a truly fantastic experience from start to finish! The team arrived early, set up without any fuss, and the food was absolutely outstanding. My guests were impressed and kept asking for seconds. I will definitely be booking Coastal Bay Spuds again for my next party!',
      image: `${BASE}Images/Profile3.jpg`
    },
    {
      id: 4,
      name: 'James Wilson',
      title: 'Festival Organizer',
      text: "Coastal Bay Spuds brought incredible energy and truly delicious food to our festival. The crowd absolutely loved every dish, and the service was smooth and efficient even during the busiest periods. We're already planning to bring them back next year — can't wait to work together again!",
      image: `${BASE}Images/Profile4.jpg`
    },
    {
      id: 5,
      name: 'Lisa Rodriguez',
      title: 'Business Owner',
      text: 'Coastal Bay Spuds was absolutely perfect for our company gathering! The food quality, menu variety, and customer service were all top-notch. Our team was thoroughly impressed, and several colleagues have already mentioned booking them for their own personal events. Highly impressed and highly recommended!',
      image: `${BASE}Images/Profile5.jpg`
    },
    {
      id: 6,
      name: 'David Thompson',
      title: 'Community Coordinator',
      text: 'The entire community absolutely loved Coastal Bay Spuds at our community event! The ingredients were fresh, the dishes were creative and full of flavour, and the overall vibe they brought to the event was second to none. People are still talking about it weeks later — a truly memorable experience!',
      image: `${BASE}Images/Profile6.jpg`
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPair((prev) => (prev + 1) % totalPairs)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextReview = () => setCurrentPair((prev) => (prev + 1) % totalPairs)
  const prevReview = () => setCurrentPair((prev) => (prev - 1 + totalPairs) % totalPairs)

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-logo-wrapper">
          <div className="hero-logo-ring">
            <img src={`${BASE}Images/CoastalBaySpudsLogo.jpg`} alt="Coastal Bay Spuds" className="hero-logo" />
          </div>
        </div>
        <div className="hero-content">
          <span className="hero-welcome">Welcome to</span>
          <h1>Coastal Bay Spuds</h1>
          <div className="hero-divider"></div>
          <p>Sydney's premier catering service bringing gourmet potato dishes, smoky grilled skewers, and crowd-favourite bites right to your event. Trusted by hundreds of clients across weddings, corporate events, festivals, and private celebrations.</p>
          <Link to="/menu" className="btn btn-secondary">
            Explore Our Menu
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <h2 className="section-title">Why Choose Coastal Bay Spuds?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Premium Quality Food</h3>
              <p>We source only the freshest ingredients, crafting every dish from scratch with care and precision. From our golden crispy fries to our smoky grilled skewers, every bite reflects our commitment to outstanding flavour.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3>We Come to You</h3>
              <p>Our fully equipped catering service travels directly to your venue — whether it's a beachside location, corporate park, festival grounds, or your own backyard. No event is too far or too small.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h3>Professional Team</h3>
              <p>Our experienced and passionate team handles everything from setup to service to cleanup. We run a seamless operation so you can focus entirely on enjoying your event and making memories with your guests.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
                  <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"/>
                </svg>
              </div>
              <h3>Fully Customizable</h3>
              <p>Every event is unique, and so is every menu we create. We work closely with you to tailor our offerings, portion sizes, and service style to perfectly match your vision, dietary requirements, and budget.</p>
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
              <div className="menu-item-image">
                <img src={`${BASE}Images/Cheesyfries.jpg`} alt="Cheesy Fries" />
              </div>
              <div className="menu-item-content">
                <h3>Cheesy Fries</h3>
                <p>Perfectly golden fries piled high with our signature melted cheese blend, finished with spring onions, crispy bacon bits, and your choice of dipping sauce on the side.</p>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-image">
                <img src={`${BASE}Images/ChipsandTenders.jpg`} alt="Chips & Tenders" />
              </div>
              <div className="menu-item-content">
                <h3>Chips & Tenders</h3>
                <p>Hand-crumbed chicken strips, golden and crispy on the outside and juicy inside, served alongside a generous portion of our seasoned fries — a crowd-pleasing combo that satisfies every time.</p>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-image">
                <img src={`${BASE}Images/Skewers.jpg`} alt="Skewers" />
              </div>
              <div className="menu-item-content">
                <h3>Skewers</h3>
                <p>Juicy, flame-grilled skewers marinated in our house blend of herbs and spices, cooked to smoky perfection and served piping hot straight from the grill for your guests to enjoy.</p>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-image">
                <img src={`${BASE}Images/RoastedCorn.jpg`} alt="Roasted Corn" />
              </div>
              <div className="menu-item-content">
                <h3>Roasted Corn</h3>
                <p>Whole corn cobs slow-roasted to smoky perfection, then finished with your choice of butter, chilli lime, or chicken salt seasoning for an irresistible street-food experience at your event.</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/menu" className="btn btn-primary">
              See Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Our Fleet Section */}
      <section className="fleet-section section">
        <div className="container">
          <h2 className="section-title">Our Catering Services</h2>
          <div className="fleet-grid">
            <div className="fleet-card">
              <div className="fleet-image">
                <img src={`${BASE}Images/CoastalBaySpuds1.jpg`} alt="Coastal Spuds" />
              </div>
              <div className="fleet-info">
                <h3>Coastal Spuds</h3>
                <p>Our flagship catering service specialises in gourmet potato dishes that keep guests coming back for more. From loaded cheesy fries and waffle chips to chips on a stick, we bring the full potato experience right to your event — fresh, hot, and absolutely delicious.</p>
              </div>
            </div>
            <div className="fleet-card">
              <div className="fleet-image">
                <img src={`${BASE}Images/CoastalSkewers.jpeg`} alt="Coastal Skewers" />
              </div>
              <div className="fleet-info">
                <h3>Coastal Skewers</h3>
                <p>Our dedicated skewer catering service brings the sizzling flavours of the grill straight to your guests. Featuring a range of marinated skewers and flame-roasted corn on the cob, it's the perfect addition to any outdoor celebration, festival, or corporate gathering.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews/Testimonials Section */}
      <section className="reviews-section section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>

          <div className="testimonials-carousel">
            <button className="carousel-btn prev-btn" onClick={prevReview}>&#8249;</button>

            <div className="testimonials-pair">
              {[0, 1].map((offset) => {
                const review = reviews[currentPair * 2 + offset]
                return (
                  <div key={review.id} className="testimonial-card">
                    <p className="testimonial-text">&ldquo;{review.text}&rdquo;</p>
                    <div className="testimonial-author">
                      <img src={review.image} alt={review.name} className="author-image" />
                      <div className="author-info">
                        <h4>{review.name}</h4>
                        <p>{review.title}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <button className="carousel-btn next-btn" onClick={nextReview}>&#8250;</button>
          </div>

          <div className="carousel-dots">
            {Array.from({ length: totalPairs }).map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentPair ? 'active' : ''}`}
                onClick={() => setCurrentPair(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2>Ready to Book Coastal Bay Spuds for Your Next Event?</h2>
          <p>Whether you're planning an intimate gathering or a large-scale celebration, our catering service is ready to make your event truly unforgettable. Get in touch today and let's create something amazing together.</p>
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

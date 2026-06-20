import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const [currentPair, setCurrentPair] = useState(0)
  const totalPairs = 3

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Event Organizer',
      text: 'Coastal Spuds was the highlight of our corporate event! The food was delicious and the service was exceptional. Highly recommend!',
      image: '/Images/Profile1.jpg'
    },
    {
      id: 2,
      name: 'Mike Chen',
      title: 'Wedding Planner',
      text: 'Our guests couldn\'t stop raving about the food truck! Fresh, creative, and absolutely delicious. Best catering choice we made.',
      image: '/Images/Profile2.jpg'
    },
    {
      id: 3,
      name: 'Emma Davis',
      title: 'Party Host',
      text: 'What a fantastic experience! The team was professional, friendly, and the food was outstanding. Will definitely book again!',
      image: '/Images/Profile3.jpg'
    },
    {
      id: 4,
      name: 'James Wilson',
      title: 'Festival Organizer',
      text: 'Coastal Spuds brought amazing energy and delicious food to our festival. The crowd loved them! Can\'t wait to work together again.',
      image: '/Images/Profile4.jpg'
    },
    {
      id: 5,
      name: 'Lisa Rodriguez',
      title: 'Business Owner',
      text: 'Perfect for our company gathering! The food quality, variety, and customer service were all top-notch. Highly impressed!',
      image: '/Images/Profile5.jpg'
    },
    {
      id: 6,
      name: 'David Thompson',
      title: 'Community Coordinator',
      text: 'The entire community loved Coastal Spuds at our event. Fresh ingredients, creative dishes, and amazing vibes all around!',
      image: '/Images/Profile6.jpg'
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
          <h2 className="section-title">Why Choose Coastal Bay Spuds?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Quality Food</h3>
              <p>Fresh ingredients and gourmet preparation for every dish</p>
            </div>
            <div className="feature-card">
              <h3>Mobile Service</h3>
              <p>We come to you! Perfect for events anywhere on the coast</p>
            </div>
            <div className="feature-card">
              <h3>Professional</h3>
              <p>Experienced team dedicated to making your event memorable</p>
            </div>
            <div className="feature-card">
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
              <div className="menu-item-image">
                <img src="/Images/Cheesyfries.jpg" alt="Cheesy Fries" />
              </div>
              <div className="menu-item-content">
                <h3>Cheesy Fries</h3>
                <p>Golden fries loaded with melted cheese and toppings</p>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-image">
                <img src="/Images/ChipsandTenders.jpg" alt="Chips & Tenders" />
              </div>
              <div className="menu-item-content">
                <h3>Chips & Tenders</h3>
                <p>Crispy chicken tenders with golden fries</p>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-image">
                <img src="/Images/Skewers.jpg" alt="Skewers" />
              </div>
              <div className="menu-item-content">
                <h3>Skewers</h3>
                <p>Grilled skewers packed with flavour</p>
              </div>
            </div>
            <div className="menu-item">
              <div className="menu-item-image">
                <img src="/Images/RoastedCorn.jpg" alt="Roasted Corn" />
              </div>
              <div className="menu-item-content">
                <h3>Roasted Corn</h3>
                <p>Smoky flame-roasted corn on the cob with seasoning</p>
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
          <h2 className="section-title">Our Fleet</h2>
          <div className="fleet-grid">
            <div className="fleet-card">
              <div className="fleet-image">
                <img src="/Images/CoastalSpuds.png" alt="Coastal Spuds" />
              </div>
              <div className="fleet-info">
                <h3>Coastal Spuds</h3>
                <p>Our signature food truck serving up golden fries, cheesy loaded dishes and all your potato favourites.</p>
              </div>
            </div>
            <div className="fleet-card">
              <div className="fleet-image">
                <img src="/Images/CoastalSkewers.jpeg" alt="Coastal Skewers" />
              </div>
              <div className="fleet-info">
                <h3>Coastal Skewers</h3>
                <p>Our skewer truck bringing smoky grilled flavours and roasted corn to every event.</p>
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
            <button className="carousel-btn prev-btn" onClick={prevReview}>‹</button>

            <div className="testimonials-pair">
              {[0, 1].map((offset) => {
                const review = reviews[currentPair * 2 + offset]
                return (
                  <div key={review.id} className="testimonial-card">
                    <p className="testimonial-text">"{review.text}"</p>
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

            <button className="carousel-btn next-btn" onClick={nextReview}>›</button>
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
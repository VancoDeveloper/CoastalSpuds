import { Link } from 'react-router-dom'
import './Services.css'

export default function Services() {
  const services = [
    {
      id: 1,
      name: 'Birthday Parties',
      image: '/Images/Birthday Event.jpg',
      description: 'Perfect for all ages! Customizable menu for 20-200+ guests',
      includes: ['Full food service', 'Setup & cleanup', 'Menu customization', 'Serving staff'],
    },
    {
      id: 2,
      name: 'Weddings',
      image: '/Images/Wedding.jpg',
      description: 'Make your special day even more memorable with gourmet cuisine',
      includes: ['Premium menu options', 'Professional catering', 'Bar service available', 'Full event coordination'],
    },
    {
      id: 3,
      name: 'Corporate Events',
      image: '/Images/Corporate Event.jpg',
      description: 'Impress your team with quality food at your company event',
      includes: ['Flexible menu', 'Professional setup', 'Efficient service', 'Vegetarian options'],
    },
    {
      id: 4,
      name: 'Festivals & Fairs',
      image: '/Images/Festival.jpg',
      description: 'Boost foot traffic at your festival with our popular food truck',
      includes: ['Full-day operation', 'Equipment provided', 'Staff included', 'Permit assistance'],
    },
    {
      id: 5,
      name: 'Private Events',
      image: '/Images/Private event.jpg',
      description: 'Intimate gatherings with that special Coastal Bay Spuds touch',
      includes: ['Custom menu', 'Home delivery', 'Professional setup', 'Full service'],
    },
    {
      id: 6,
      name: 'Holiday Catering',
      image: '/Images/Christmas.jpg',
      description: 'Celebrate the season with festive potato dishes and more',
      includes: ['Seasonal menu', 'Holiday decorations', 'Full catering service', 'Advance booking discount'],
    },
  ]

  return (
    <main className="services-page">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>From intimate gatherings to large events, we've got you covered</p>
      </div>

      <div className="container">
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-card-image">
                <img src={service.image} alt={service.name} />
              </div>
              <div className="service-card-content">
                <h3>{service.name}</h3>
                <p className="service-description">{service.description}</p>

                <div className="includes">
                  <h4>What's Included:</h4>
                  <ul>
                    {service.includes.map((item, idx) => (
                      <li key={idx}>✓ {item}</li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact" className="btn btn-primary" style={{ marginTop: 'auto' }}>
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <section className="pricing-info section">
          <h2 className="section-title">Pricing Packages</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Small Groups (20-50)</h3>
              <ul>
                <li>Menu selection</li>
                <li>Full service</li>
                <li>Setup & cleanup</li>
                <li>2-3 hour event</li>
              </ul>
            </div>
            <div className="pricing-card highlight">
              <h3>Medium Events (50-150)</h3>
              <ul>
                <li>Premium menu</li>
                <li>Full catering</li>
                <li>Multiple staff</li>
                <li>4-5 hour event</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3>Large Events (150+)</h3>
              <ul>
                <li>Custom menu</li>
                <li>Full coordination</li>
                <li>Dedicated team</li>
                <li>Extended hours</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="services-cta">
          <h2>Ready to Book?</h2>
          <p>Contact us today to discuss your event and get a custom quote</p>
          <Link to="/contact" className="btn btn-secondary">
            Contact Us Now
          </Link>
        </div>
      </div>
    </main>
  )
}

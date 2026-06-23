import { Link } from 'react-router-dom'
import './Services.css'

export default function Services() {
  const BASE = import.meta.env.BASE_URL

  const services = [
    {
      id: 1,
      name: 'Birthday Parties',
      image: `${BASE}Images/Birthday Event.jpg`,
      description: 'Perfect for all ages! Customizable menu for 20 to 200 or more guests.',
      includes: ['Full food service', 'Setup & cleanup', 'Menu customization', 'Serving staff'],
    },
    {
      id: 2,
      name: 'Weddings',
      image: `${BASE}Images/Wedding.jpg`,
      description: 'Make your special day even more memorable with gourmet cuisine.',
      includes: ['Premium menu options', 'Professional catering', 'Bar service available', 'Full event coordination'],
    },
    {
      id: 3,
      name: 'Corporate Events',
      image: `${BASE}Images/Corporate Event.jpg`,
      description: 'Impress your team with quality food at your next company event.',
      includes: ['Flexible menu', 'Professional setup', 'Efficient service', 'Vegetarian options'],
    },
    {
      id: 4,
      name: 'Festivals & Fairs',
      image: `${BASE}Images/Festival.jpg`,
      description: 'Boost foot traffic at your festival with our popular food truck.',
      includes: ['Full-day operation', 'Equipment provided', 'Staff included', 'Permit assistance'],
    },
    {
      id: 5,
      name: 'Private Events',
      image: `${BASE}Images/Private event.jpg`,
      description: 'Intimate gatherings with that special Coastal Bay Spuds touch.',
      includes: ['Custom menu', 'Home delivery', 'Professional setup', 'Full service'],
    },
    {
      id: 6,
      name: 'Holiday Catering',
      image: `${BASE}Images/Christmas.jpg`,
      description: 'Celebrate the season with festive potato dishes and more.',
      includes: ['Seasonal menu', 'Holiday decorations', 'Full catering service', 'Advance booking discount'],
    },
  ]

  return (
    <main className="services-page">

      {/* Header */}
      <div className="services-header">
        <h1>Our Services</h1>
        <div className="services-header-divider"></div>
        <p>From intimate gatherings to large events, we've got you covered</p>
      </div>

      <div className="container">

        {/* Service Cards */}
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
                  <h4>What's Included</h4>
                  <ul>
                    {service.includes.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="btn btn-primary service-btn">
                  Get a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Packages */}
        <section className="pricing-info section">
          <h2 className="section-title">Pricing Packages</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-badge">Starter</div>
              <h3>Small Groups</h3>
              <p className="pricing-guests">20 to 50 guests</p>
              <ul>
                <li>Menu selection</li>
                <li>Full service</li>
                <li>Setup & cleanup</li>
                <li>2 to 3 hour event</li>
              </ul>
              <Link to="/contact" className="btn pricing-btn">Enquire</Link>
            </div>

            <div className="pricing-card highlight">
              <div className="pricing-badge">Most Popular</div>
              <h3>Medium Events</h3>
              <p className="pricing-guests">50 to 150 guests</p>
              <ul>
                <li>Premium menu</li>
                <li>Full catering</li>
                <li>Multiple staff</li>
                <li>4 to 5 hour event</li>
              </ul>
              <Link to="/contact" className="btn pricing-btn highlight-btn">Enquire</Link>
            </div>

            <div className="pricing-card">
              <div className="pricing-badge">Enterprise</div>
              <h3>Large Events</h3>
              <p className="pricing-guests">150+ guests</p>
              <ul>
                <li>Custom menu</li>
                <li>Full coordination</li>
                <li>Dedicated team</li>
                <li>Extended hours</li>
              </ul>
              <Link to="/contact" className="btn pricing-btn">Enquire</Link>
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

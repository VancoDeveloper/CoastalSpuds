import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="contact-page">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <div className="contact-header-divider"></div>
        <p>Get in touch with Coastal Bay Spuds today</p>
      </div>

      <div className="container contact-container">

        {/* Info Card */}
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <div className="info-item">
            <div className="info-icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div>
              <h3>Phone</h3>
              <p>0406 082 114 / 0426 283 983</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div>
              <h3>Email</h3>
              <p>info@coastalbayspuds.com.au</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div>
              <h3>Location</h3>
              <p>Sydney, Australia</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-circle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
              </svg>
            </div>
            <div>
              <h3>Hours</h3>
              <p>Available for events 7 days a week</p>
            </div>
          </div>

          <div className="contact-social">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a
                href="https://www.facebook.com/profile.php?id=61587128316349"
                className="social-link facebook-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="contact-form-wrapper">
          <h2>Send a Message</h2>
          {submitted && (
            <div className="success-msg">
              ✓ Thank you! We'll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="0400 000 000" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Event type or enquiry" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="6" required placeholder="Tell us about your event..."></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </main>
  )
}

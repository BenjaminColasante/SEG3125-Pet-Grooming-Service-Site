import { useState } from 'react'
import './App.css'

function App() {
  const [selectedService, setSelectedService] = useState('Bath & Brush')
  const [dogSize, setDogSize] = useState('small')
  const [dogNeed, setDogNeed] = useState('fresh')
  const [submitted, setSubmitted] = useState(false)
  const [bookingName, setBookingName] = useState('')
  const [bookingDate, setBookingDate] = useState('')
  const [bookingTime, setBookingTime] = useState('')

  let recommendedName = 'Bath & Brush'
  let recommendedPrice = 55
  let recommendedTime = '45 minutes'

  if (dogSize === 'small' && dogNeed === 'fresh') {
    recommendedName = 'Bath & Brush'
    recommendedPrice = 55
    recommendedTime = '45 minutes'
  } else if (dogSize === 'small' && dogNeed === 'haircut') {
    recommendedName = 'Full Groom'
    recommendedPrice = 85
    recommendedTime = '90 minutes'
  } else if (dogSize === 'small' && dogNeed === 'shedding') {
    recommendedName = 'Bath & Brush'
    recommendedPrice = 55
    recommendedTime = '45 minutes'
  } else if (dogSize === 'medium' && dogNeed === 'fresh') {
    recommendedName = 'Bath & Brush'
    recommendedPrice = 55
    recommendedTime = '45 minutes'
  } else if (dogSize === 'medium' && dogNeed === 'haircut') {
    recommendedName = 'Full Groom'
    recommendedPrice = 85
    recommendedTime = '90 minutes'
  } else if (dogSize === 'medium' && dogNeed === 'shedding') {
    recommendedName = 'De-shedding Care'
    recommendedPrice = 70
    recommendedTime = '60 minutes'
  } else if (dogSize === 'large' && dogNeed === 'fresh') {
    recommendedName = 'De-shedding Care'
    recommendedPrice = 70
    recommendedTime = '60 minutes'
  } else if (dogSize === 'large' && dogNeed === 'haircut') {
    recommendedName = 'Full Groom'
    recommendedPrice = 85
    recommendedTime = '90 minutes'
  } else if (dogSize === 'large' && dogNeed === 'shedding') {
    recommendedName = 'De-shedding Care'
    recommendedPrice = 70
    recommendedTime = '60 minutes'
  }

  const handleBooking = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const chooseService = (serviceName) => {
    setSelectedService(serviceName)
    setSubmitted(false)
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className="navbar fixed-top top-nav">
        <div className="container">
          <a className="navbar-brand logo" href="#top">
            Paws & Polish
          </a>

          <ul className="navbar-nav ms-auto nav-links">
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#guide">Guide</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#booking">Book</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="container">
          <div className="hero-box">
            <p className="small-title">Mobile dog grooming in Ottawa</p>
            <h1>Comfortable grooming at your door</h1>
            <p className="hero-text">
              Paws & Polish provides calm, one-on-one dog grooming from a fully
              equipped mobile studio. Compare services, see prices, and request an
              appointment online.
            </p>

            <div className="hero-buttons">
              <a className="btn btn-primary btn-lg" href="#booking">Book a visit</a>
              <a className="btn btn-light btn-lg" href="#services">View services</a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="services" className="page-section">
          <div className="container">
            <p className="small-title">Our Services</p>
            <div className="section-title">
              <h2>Simple services and clear prices</h2>
              <p>
                Each option explains what is included, how long it usually takes,
                and which dogs it is best suited for.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-4">
                <article className="service-card h-100">
                  <p className="service-price">From $55</p>
                  <h3>Bath & Brush</h3>
                  <p>A bath, blow-dry, brushing, ear cleaning, and nail trim.</p>
                  <p><strong>Time:</strong> 45 minutes</p>
                  <p><strong>Best for:</strong> Short-haired dogs or regular coat maintenance.</p>
                  <button
                    className="btn btn-primary mt-auto"
                    type="button"
                    onClick={() => chooseService('Bath & Brush')}
                  >
                    Choose service
                  </button>
                </article>
              </div>

              <div className="col-md-4">
                <article className="service-card h-100">
                  <p className="service-price">From $85</p>
                  <h3>Full Groom</h3>
                  <p>A complete bath, brush, haircut, ear cleaning, and nail trim.</p>
                  <p><strong>Time:</strong> 90 minutes</p>
                  <p><strong>Best for:</strong> Long-haired dogs that need a haircut and full coat care.</p>
                  <button
                    className="btn btn-primary mt-auto"
                    type="button"
                    onClick={() => chooseService('Full Groom')}
                  >
                    Choose service
                  </button>
                </article>
              </div>

              <div className="col-md-4">
                <article className="service-card h-100">
                  <p className="service-price">From $70</p>
                  <h3>De-shedding Care</h3>
                  <p>A bath and detailed brushing treatment to remove loose fur.</p>
                  <p><strong>Time:</strong> 60 minutes</p>
                  <p><strong>Best for:</strong> Dogs that shed heavily or have a thick double coat.</p>
                  <button
                    className="btn btn-primary mt-auto"
                    type="button"
                    onClick={() => chooseService('De-shedding Care')}
                  >
                    Choose service
                  </button>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="guide" className="page-section light-section">
          <div className="container">
            <p className="small-title">Service Guide</p>
            <div className="section-title">
              <h2>Find the right service</h2>
              <p>
                Answer a couple of simple questions about your dog to get a
                service recommendation before booking.
              </p>
            </div>

            <div className="row g-5 align-items-start">
              <div className="col-lg-5">
                <div className="booking-form">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="dog-size">Dog size</label>
                    <select
                      className="form-select"
                      id="dog-size"
                      value={dogSize}
                      onChange={(event) => setDogSize(event.target.value)}
                    >
                      <option value="small">Small</option>
                      <option value="medium">Medium</option>
                      <option value="large">Large</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label" htmlFor="dog-need">Main grooming need</label>
                    <select
                      className="form-select"
                      id="dog-need"
                      value={dogNeed}
                      onChange={(event) => setDogNeed(event.target.value)}
                    >
                      <option value="fresh">Fresh bath and clean up</option>
                      <option value="haircut">Haircut or full trim</option>
                      <option value="shedding">Help with shedding</option>
                    </select>
                  </div>

                  <div className="alert alert-success mb-3">
                    <strong>Recommended service:</strong> {recommendedName}
                    <br />
                    From ${recommendedPrice} · {recommendedTime}
                  </div>

                  <button
                    className="btn btn-primary w-100"
                    type="button"
                    onClick={() => chooseService(recommendedName)}
                  >
                    Choose this service
                  </button>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="booking-form">
                  <h3 className="mb-3">Compare service details</h3>

                  <details className="border rounded p-3 mb-3">
                    <summary className="fw-bold">
                      Bath & Brush - From $55
                    </summary>
                    <p className="mt-3">A bath, blow-dry, brushing, ear cleaning, and nail trim.</p>
                    <p><strong>Time:</strong> 45 minutes</p>
                    <p><strong>Best for:</strong> Short-haired dogs or regular coat maintenance.</p>
                    <p className="mb-0">
                      This is a good choice if your dog does not need a haircut but could use a fresh clean and basic grooming care.
                    </p>
                  </details>

                  <details className="border rounded p-3 mb-3">
                    <summary className="fw-bold">
                      Full Groom - From $85
                    </summary>
                    <p className="mt-3">A complete bath, brush, haircut, ear cleaning, and nail trim.</p>
                    <p><strong>Time:</strong> 90 minutes</p>
                    <p><strong>Best for:</strong> Long-haired dogs that need a haircut and full coat care.</p>
                    <p className="mb-0">
                      This is the best choice if your dog has longer hair, needs trimming, or needs the most complete grooming appointment.
                    </p>
                  </details>

                  <details className="border rounded p-3 mb-3">
                    <summary className="fw-bold">
                      De-shedding Care - From $70
                    </summary>
                    <p className="mt-3">A bath and detailed brushing treatment to remove loose fur.</p>
                    <p><strong>Time:</strong> 60 minutes</p>
                    <p><strong>Best for:</strong> Dogs that shed heavily or have a thick double coat.</p>
                    <p className="mb-0">
                      This is helpful for dogs that leave a lot of fur around the house or have a thick coat that needs extra brushing.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="booking" className="page-section">
          <div className="container">
            <div className="row g-5 align-items-start">
              <div className="col-lg-5">
                <p className="small-title">Book an Appointment</p>
                <h2>Request a grooming visit</h2>
                <p className="booking-intro">
                  Select a service, date, and time. We will contact you to confirm
                  the appointment and final price.
                </p>

                <div className="booking-steps">
                  <div><span>1</span><p>Choose a grooming service.</p></div>
                  <div><span>2</span><p>Select a preferred date and time.</p></div>
                  <div><span>3</span><p>Submit the request and review confirmation.</p></div>
                </div>
              </div>

              <div className="col-lg-7">
                {!submitted ? (
                  <form className="booking-form" onSubmit={handleBooking}>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="name">Your name</label>
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        value={bookingName}
                        onChange={(event) => setBookingName(event.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label" htmlFor="service">Service</label>
                      <select
                        className="form-select"
                        id="service"
                        value={selectedService}
                        onChange={(event) => setSelectedService(event.target.value)}
                      >
                        <option>Bath & Brush</option>
                        <option>Full Groom</option>
                        <option>De-shedding Care</option>
                      </select>
                    </div>

                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="date">Preferred date</label>
                        <input
                          className="form-control"
                          id="date"
                          type="date"
                          value={bookingDate}
                          onChange={(event) => setBookingDate(event.target.value)}
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label" htmlFor="time">Preferred time</label>
                        <select
                          className="form-select"
                          id="time"
                          value={bookingTime}
                          onChange={(event) => setBookingTime(event.target.value)}
                          required
                        >
                          <option value="">Choose a time</option>
                          <option>9:00 AM</option>
                          <option>11:00 AM</option>
                          <option>2:00 PM</option>
                          <option>5:30 PM</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-3 mt-3">
                      <label className="form-label" htmlFor="notes">Pet details</label>
                      <textarea
                        className="form-control"
                        id="notes"
                        rows="3"
                        placeholder="Dog's name, breed, size, or special needs"
                      />
                    </div>

                    <button className="btn btn-primary w-100" type="submit">
                      Request appointment
                    </button>
                  </form>
                ) : (
                  <div className="confirmation-box" role="status">
                    <div className="confirmation-mark">✓</div>
                    <h3>Appointment request received</h3>
                    <p>
                      Thanks, {bookingName}. You requested a <strong>{selectedService}</strong>
                      {' '}appointment for <strong>{bookingDate}</strong> at <strong>{bookingTime}</strong>.
                    </p>
                    <p>We will contact you to confirm the visit.</p>
                    <button className="btn btn-outline-primary" type="button" onClick={() => setSubmitted(false)}>
                      Edit request
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="page-section light-section">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-7">
                <p className="small-title">Contact</p>
                <h2>Questions before booking?</h2>
                <p className="contact-text">
                  Contact us to ask about coat condition, accessibility needs, service
                  areas, or which grooming option is appropriate for your dog.
                </p>
              </div>

              <div className="col-md-5">
                <div className="contact-card">
                  <p><strong>Phone:</strong> (613) 555-0147</p>
                  <p><strong>Email:</strong> hello@pawsandpolish.ca</p>
                  <p><strong>Hours:</strong> Monday–Saturday, 9:00 AM–7:00 PM</p>
                  <p><strong>Service area:</strong> Ottawa and nearby communities</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <p>© 2026 Paws & Polish Grooming</p>
          <p>Designed by Benjamin Colasante</p>
        </div>
      </footer>
    </>
  )
}

export default App

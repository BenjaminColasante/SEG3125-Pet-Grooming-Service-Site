function HomePage({ chooseService, openPage, openHomeSection }){
  return (
    <>
      <header id="top" className="hero">
        <div className="container">
          <div className="hero-box">
            <p className="small-title">Dog grooming in Ottawa</p>
            <h1>Comfortable grooming with a personal touch</h1>
            <p className="hero-text">
              Bark & Brush provides one-on-one dog grooming from a modern and equipped studio. Compare services, see prices, and request an appointment online.
            </p>

            <div className="hero-buttons">

              <a className="btn btn-primary btn-lg" href="/booking" onClick={(event) => {
                event.preventDefault()
                openPage('booking', '/booking')
              }}>Book a visit</a>

              <a className="btn btn-light btn-lg" href="/#services" onClick={(event) => {
                event.preventDefault()
                openHomeSection('services')
              }}>View services</a>

            </div>
          </div>
        </div>
      </header>

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
                  onClick={() => chooseService('Bath & Brush')}>
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
                  onClick={() => chooseService('Full Groom')}>
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
                  onClick={() => chooseService('De-shedding Care')}>
                  Choose service
                </button>

              </article>
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
                Contact us to ask about fur condition, accessibility needs, or which grooming option is appropriate for your dog.
              </p>
            </div>

            <div className="col-md-5">
              <div className="contact-card">
                <p><strong>Phone:</strong> 613-555-0147</p>
                <p><strong>Email:</strong> barkandbrush@gmail.com</p>
                <p><strong>Hours:</strong> Monday–Sunday, 9:00 AM – 7:00 PM</p>
                <p><strong>Service area:</strong> 511 Ottawa Road</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage

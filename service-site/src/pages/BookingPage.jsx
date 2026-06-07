function BookingPage({
  selectedService,
  submitted,
  bookingName,
  bookingDate,
  bookingTime,
  setSelectedService,
  setSubmitted,
  setBookingName,
  setBookingDate,
  setBookingTime,
  handleBooking,}) {

  const bookingColumnClass = submitted ? 'col-lg-7 confirmation-column' : 'col-lg-7'

  const handleNameChange = (event) => {
    setBookingName(event.target.value)
  }

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value)
  }

  const handleDateChange = (event) => {
    setBookingDate(event.target.value)
  }

  const handleTimeChange = (event) => {
    setBookingTime(event.target.value)
  }

  const editRequest = () => {
    setSubmitted(false)
  }

  return (
    <section id="booking" className="page-section light-section">
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

              <div>
                <span>1</span>
                <p>Choose a grooming service.</p>
              </div>

              <div>
                <span>2</span>
                <p>Select a preferred date and time.</p>
              </div>

              <div>
                <span>3</span>
                <p>Submit the request and review confirmation.</p>
              </div>

            </div>
          </div>

          <div className={bookingColumnClass}>
            {!submitted ? (
              <form className="booking-form" onSubmit={handleBooking}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="name">Your name</label>

                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    value={bookingName}
                    onChange={handleNameChange}
                    required
                  />

                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="service">Service</label>

                  <select
                    className="form-select"
                    id="service"
                    value={selectedService}
                    onChange={handleServiceChange}
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
                      onChange={handleDateChange}
                      required
                    />

                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="time">Preferred time</label>
                    
                    <select
                      className="form-select"
                      id="time"
                      value={bookingTime}
                      onChange={handleTimeChange}
                      required>

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
                <img
                  className="confirmation-mark"
                  src="/Check.svg"
                  alt="Success"
                />

                <h3>Appointment request received</h3>

                <p>
                  Thanks, {bookingName}. You requested a <strong>{selectedService}</strong>
                  {' '}appointment for <strong>{bookingDate}</strong> at <strong>{bookingTime}</strong>.
                </p>

                <p>We will contact you to confirm the visit.</p>

                <button className="btn btn-outline-primary" type="button" onClick={editRequest}>
                  Edit request
                </button>
                
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingPage

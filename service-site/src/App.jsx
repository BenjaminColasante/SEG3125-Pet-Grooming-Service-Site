import { useEffect, useState } from 'react'
import './App.css'
import BookingPage from './pages/BookingPage'
import GuidePage from './pages/GuidePage'
import HomePage from './pages/HomePage'

function App() {
  const getPageFromUrl = () => {
    if (window.location.pathname === '/guide') {
      return 'guide'
    }

    if (window.location.pathname === '/booking') {
      return 'booking'
    }

    return 'home'
  }

  const [page, setPage] = useState(getPageFromUrl)
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

  if (dogSize === 'small' && dogNeed === 'fresh'){
    recommendedName = 'Bath & Brush'
    recommendedPrice = 55
    recommendedTime = '45 minutes'
  } 
  else if (dogSize === 'small' && dogNeed === 'haircut') 
    {
    recommendedName = 'Full Groom'
    recommendedPrice = 85
    recommendedTime = '90 minutes'
  } 
  else if (dogSize === 'small' && dogNeed === 'shedding') 
    {
    recommendedName = 'Bath & Brush'
    recommendedPrice = 55
    recommendedTime = '45 minutes'
  } 
  else if (dogSize === 'medium' && dogNeed === 'fresh') {
    recommendedName = 'Bath & Brush'
    recommendedPrice = 55
    recommendedTime = '45 minutes'
  } 
  else if (dogSize === 'medium' && dogNeed === 'haircut') 
    {
    recommendedName = 'Full Groom'
    recommendedPrice = 85
    recommendedTime = '90 minutes'
  } 
  else if (dogSize === 'medium' && dogNeed === 'shedding') {
    recommendedName = 'De-shedding Care'
    recommendedPrice = 70
    recommendedTime = '60 minutes'
  } 
  else if (dogSize === 'large' && dogNeed === 'fresh') {
    recommendedName = 'De-shedding Care'
    recommendedPrice = 70
    recommendedTime = '60 minutes'
  } 
  else if (dogSize === 'large' && dogNeed === 'haircut'){
    recommendedName = 'Full Groom'
    recommendedPrice = 85
    recommendedTime = '90 minutes'
  } 
  else if (dogSize === 'large' && dogNeed === 'shedding'){
    recommendedName = 'De-shedding Care'
    recommendedPrice = 70
    recommendedTime = '60 minutes'
  }

  const handleBooking = (event) => {
    event.preventDefault()
    setSubmitted(true) }

  const openPage = (pageName, path) => {
    window.history.pushState({}, '', path)
    setPage(pageName)
    window.scrollTo({ top: 0, behavior: 'smooth'})
  }

  const openHomeSection = (sectionId) => {
    window.history.pushState({}, '', '/')
    setPage('home')

    setTimeout(() => {document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })}, 0)
  }

  const chooseService = (serviceName) => {
    setSelectedService(serviceName)
    setSubmitted(false)
    openPage('booking', '/booking')
  }

  useEffect(() => {
    const handleBackOrForward = () => {
      setPage(getPageFromUrl())}

    window.addEventListener('popstate', handleBackOrForward)

    return () => {
      window.removeEventListener('popstate', handleBackOrForward)}
  }, [])

  return (
    <>
      <nav className="navbar fixed-top top-nav">
        <div className="container">
          <a className="navbar-brand logo" href="/" onClick={(event) => {
            event.preventDefault()
            openPage('home', '/')
          }}>
            Bark & Brush
          </a>

          <ul className="navbar-nav ms-auto nav-links">

            <li className="nav-item">
              <a className="nav-link" href="/#services" onClick={(event) => {
                event.preventDefault()
                openHomeSection('services')
              }}>Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/guide" onClick={(event) => {
                event.preventDefault()
                openPage('guide', '/guide')
              }}>Guide</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/booking" onClick={(event) => {
                event.preventDefault()
                openPage('booking', '/booking')
              }}>Book</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/#contact" onClick={(event) => {
                event.preventDefault()
                openHomeSection('contact')
              }}>Contact</a>
            </li>

          </ul>
        </div>
      </nav>

      <main className={page === 'home' ? '' : 'standalone-page'}>
        {page === 'home' && (
          <HomePage
            chooseService={chooseService}
            openPage={openPage}
            openHomeSection={openHomeSection}
          />
        )}

        {page === 'guide' && (
          <GuidePage
            dogSize={dogSize}
            dogNeed={dogNeed}
            recommendedName={recommendedName}
            recommendedPrice={recommendedPrice}
            recommendedTime={recommendedTime}
            setDogSize={setDogSize}
            setDogNeed={setDogNeed}
            chooseService={chooseService}
          />
        )}

        {page === 'booking' && (
          <BookingPage
            selectedService={selectedService}
            submitted={submitted}
            bookingName={bookingName}
            bookingDate={bookingDate}
            bookingTime={bookingTime}
            setSelectedService={setSelectedService}
            setSubmitted={setSubmitted}
            setBookingName={setBookingName}
            setBookingDate={setBookingDate}
            setBookingTime={setBookingTime}
            handleBooking={handleBooking}
          />
        )}
        
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <p></p>
          <p>Designed by Benjamin Colasante</p>
        </div>
      </footer>
    </>
  )
}

export default App

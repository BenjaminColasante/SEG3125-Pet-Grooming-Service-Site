import { useState } from 'react'

function GuidePage({
  dogSize,
  dogNeed,
  recommendedName,
  recommendedPrice,
  recommendedTime,
  setDogSize,
  setDogNeed,
  chooseService,
}) {

  const [activeService, setActiveService] = useState('Bath & Brush')

  let bathButtonClass = 'service-tab'
  let fullGroomButtonClass = 'service-tab'
  let desheddingButtonClass = 'service-tab'

  if (activeService === 'Bath & Brush'){
    bathButtonClass = 'service-tab active'
  }

  if (activeService === 'Full Groom') {
    fullGroomButtonClass = 'service-tab active'}

  if (activeService === 'De-shedding Care'){
    desheddingButtonClass = 'service-tab active'
  }

  const handleDogSizeChange = (event) => {
    setDogSize(event.target.value)
  }

  const handleDogNeedChange = (event) => {
    setDogNeed(event.target.value)}

  const chooseRecommendedService = () => {
    chooseService(recommendedName) }

  const showBathAndBrush = () => {
    setActiveService('Bath & Brush')
  }

  const showFullGroom = () => {
    setActiveService('Full Groom')
  }

  const showDesheddingCare = () => {
    setActiveService('De-shedding Care')
  }

  const chooseBathAndBrush = () => {
    chooseService('Bath & Brush')}

  const chooseFullGroom = () => {
    chooseService('Full Groom')
  }

  const chooseDesheddingCare = () => {
    chooseService('De-shedding Care')}

  return (
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

        <div className="guide-panel">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7">
              <div className="mb-3">

                <label className="form-label" htmlFor="dog-size">Dog size</label>

                <select
                  className="form-select"
                  id="dog-size"
                  value={dogSize}
                  onChange={handleDogSizeChange}
                >

                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>

                </select>
              </div>

              <div className="mb-0">

                <label className="form-label" htmlFor="dog-need">Main grooming need</label>
                
                <select
                  className="form-select"
                  id="dog-need"
                  value={dogNeed}
                  onChange={handleDogNeedChange}>

                  <option value="fresh">Fresh bath and clean up</option>
                  <option value="haircut">Haircut or full trim</option>
                  <option value="shedding">Help with shedding</option>

                </select>
              </div>
            </div>

            <div className="col-lg-5 guide-action">

              <div className="recommendation-card">

                <p className="small-title">Recommended service</p>
                <h3>{recommendedName}</h3>
                <p>From ${recommendedPrice} | {recommendedTime}</p>

              </div>

              <button
                className="btn btn-primary w-100 mt-3"
                type="button"
                onClick={chooseRecommendedService}>
                Choose this service
              </button>

            </div>
          </div>
        </div>

        <div className="comparison-panel">
          <div className="comparison-header">

            <h3>Compare service details</h3>
            <div className="service-tabs">
              
              <button
                className={bathButtonClass}
                type="button"
                onClick={showBathAndBrush}
              > Bath & Brush
              </button>

              <button
                className={fullGroomButtonClass}
                type="button"
                onClick={showFullGroom}
              >
                Full Groom
              </button>

              <button
                className={desheddingButtonClass}
                type="button"
                onClick={showDesheddingCare}
              >De-shedding Care
              </button>
            </div>
          </div>

          {activeService === 'Bath & Brush' && (

            <article className="service-detail">
              <div>
                <p className="service-price">From $55 | 45 minutes</p>
                <h4>Bath & Brush</h4>
                <p>A bath, blow-dry, brushing, and nail trim.</p>
                <p><strong>Best for:</strong> Short-haired dogs or regular fur maintenance.</p>
              </div>

              <div>
                <h5>Included care</h5>
                <ul>
                  <li>Gentle bath and dry</li>
                  <li>Full brushing</li>
                  <li>Ear cleaning</li>
                  <li>Nail trim</li>
                </ul>
              </div>

              <div>

                <h5>When to choose it</h5>

                <p>
                  Choose this when your dog does not need a haircut but could
                  use a fresh clean and basic grooming care.
                </p>

                <p className="detail-note">
                  Good between larger grooming appointments or after outdoor play.
                </p>

                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={chooseBathAndBrush}
                >Choose Bath & Brush
                </button>

              </div>
            </article>
          )}

          {activeService === 'Full Groom' && (
            <article className="service-detail">
              <div>
                <p className="service-price">From $85 | 90 minutes</p>
                <h4>Full Groom</h4>
                <p>A complete bath, brush, haircut, and nail trim.</p>
                <p><strong>Best for:</strong> Long-haired dogs that need a haircut and full fur care.</p>
              </div>

              <div>

                <h5>Included care</h5>
                <ul>
                  <li>Bath and blow-dry</li>
                  <li>Haircut or trim</li>
                  <li>Coat brushing</li>
                  <li>Ear cleaning and nail trim</li>
                </ul>

              </div>

              <div>

                <h5>When to choose it</h5>

                <p>
                  Choose this when your dog has longer hair, needs trimming, or
                  needs the most complete grooming appointment.
                </p>

                <p className="detail-note">
                  Best for dogs whose coat shape, comfort, or mat prevention depends on regular trimming.
                </p>

                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={chooseFullGroom}> Choose Full Groom
                </button>

              </div>
            </article>
          )}

          {activeService === 'De-shedding Care' && (
            <article className="service-detail">
              <div>
                <p className="service-price">From $70 | 60 minutes</p>
                <h4>De-shedding Care</h4>
                <p>A bath and detailed brushing to remove loose fur.</p>
                <p><strong>Best for:</strong> Dogs that shed heavily or have a thick coat.</p>
              </div>

              <div>

                <h5>Included care</h5>
                <ul>
                  <li>Bath and dry</li>
                  <li>De-shedding brush-out</li>
                  <li>Loose coat removal</li>
                  <li>Ear cleaning and nail trim</li>
                </ul>

              </div>

              <div>
                <h5>When to choose it</h5>
                
                <p>
                  Choose this when your dog leaves a lot of fur around the
                  house or has a thick coat that needs extra brushing.
                </p>

                <p className="detail-note">
                  Helpful for seasonal coat changes and double-coated breeds.
                </p>

                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={chooseDesheddingCare}
                >Choose De-shedding Care
                </button>

              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  )
}

export default GuidePage

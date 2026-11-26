import './index.css'

const Guests = ({
  adults,
  children,
  infants,
  onIncrementAdults,
  onDecrementAdults,
  onIncrementChildren,
  onDecrementChildren,
  onIncrementInfants,
  onDecrementInfants,
  onPrevious,
  onNext,
}) => (
  <div className="step-content-container">
    <h2 className="step-heading">Guests</h2>
    <p className="step-description">Select the number of guests</p>

    <div className="guests-container">
      <div className="guest-item">
        <div className="guest-info">
          <p className="guest-type">Adults</p>
          <p className="guest-age-limit">Age 13 or above</p>
        </div>
        <div className="counter-container">
          <button
            type="button"
            className="counter-button"
            onClick={onDecrementAdults}
            aria-label="Decrease Adults"
          >
            -
          </button>
          <p className="guest-count">{adults}</p>
          <button
            type="button"
            className="counter-button"
            onClick={onIncrementAdults}
            aria-label="Increase Adults"
          >
            +
          </button>
        </div>
      </div>

      <hr className="guest-divider" />

      <div className="guest-item">
        <div className="guest-info">
          <p className="guest-type">Children</p>
          <p className="guest-age-limit">Age 2-12</p>
        </div>
        <div className="counter-container">
          <button
            type="button"
            className="counter-button"
            onClick={onDecrementChildren}
            aria-label="Decrease Children"
          >
            -
          </button>
          <p className="guest-count">{children}</p>
          <button
            type="button"
            className="counter-button"
            onClick={onIncrementChildren}
            aria-label="Increase Children"
          >
            +
          </button>
        </div>
      </div>

      <hr className="guest-divider" />

      <div className="guest-item">
        <div className="guest-info">
          <p className="guest-type">Infants</p>
          <p className="guest-age-limit">Under 2</p>
        </div>
        <div className="counter-container">
          <button
            type="button"
            className="counter-button"
            onClick={onDecrementInfants}
            aria-label="Decrease Infants"
          >
            -
          </button>
          <p className="guest-count">{infants}</p>
          <button
            type="button"
            className="counter-button"
            onClick={onIncrementInfants}
            aria-label="Increase Infants"
          >
            +
          </button>
        </div>
      </div>
    </div>

    <div className="buttons-container space-between">
      <button type="button" className="secondary-button" onClick={onPrevious}>
        Previous
      </button>
      <button type="button" className="primary-button" onClick={onNext}>
        Next
      </button>
    </div>
  </div>
)

export default Guests

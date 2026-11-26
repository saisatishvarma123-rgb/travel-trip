import './index.css'

const successImgUrl =
  'https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png'

const SuccessView = ({onBookNewTrip}) => (
  <div className="step-content-container success-view-container">
    <div className="success-content">
      <img src={successImgUrl} alt="success" className="success-img" />
      <h2 className="success-heading">Awesome!</h2>
      <p className="success-description">Your booking has been confirmed.</p>
      <button
        type="button"
        className="primary-button book-new-trip-button"
        onClick={onBookNewTrip}
      >
        Book New Trip
      </button>
    </div>
  </div>
)

export default SuccessView

import './index.css'

const Confirmation = ({
  name,
  startLocation,
  endLocation,
  startDate,
  endDate,
  adults,
  children,
  infants,
  assistanceNeeded,
  assistanceType,
  onCancel,
  onConfirm,
}) => {
  const totalGuests = adults + children + infants

  return (
    <div className="step-content-container">
      <h2 className="step-heading">Confirmation</h2>
      <p className="step-description">Please verify your details before confirming</p>

      <div className="confirmation-details-container">
        <ul className="confirmation-list">
          <li className="confirmation-item">
            <p className="confirmation-label">Name:</p>
            <p className="confirmation-value">{name}</p>
          </li>
          <li className="confirmation-item">
            <p className="confirmation-label">Start Location:</p>
            <p className="confirmation-value">{startLocation}</p>
          </li>
          <li className="confirmation-item">
            <p className="confirmation-label">End Location:</p>
            <p className="confirmation-value">{endLocation}</p>
          </li>
          <li className="confirmation-item">
            <p className="confirmation-label">Start Date:</p>
            <p className="confirmation-value">{startDate}</p>
          </li>
          <li className="confirmation-item">
            <p className="confirmation-label">End Date:</p>
            <p className="confirmation-value">{endDate}</p>
          </li>
          <li className="confirmation-item">
            <p className="confirmation-label">Guests:</p>
            <p className="confirmation-value">{totalGuests}</p>
          </li>
          <li className="confirmation-item">
            <p className="confirmation-label">Travel Assistance:</p>
            <p className="confirmation-value">
              {assistanceNeeded ? assistanceType || 'Car' : 'No'}
            </p>
          </li>
        </ul>
      </div>

      <div className="buttons-container space-between">
        <button
          type="button"
          className="secondary-button cancel-button"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type="button"
          className="primary-button confirm-button"
          onClick={onConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  )
}

export default Confirmation

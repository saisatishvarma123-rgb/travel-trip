import {useState} from 'react'
import './index.css'

const DateSelection = ({
  startDate,
  endDate,
  onChangeStartDate,
  onChangeEndDate,
  onPrevious,
  onNext,
}) => {
  const [startDateError, setStartDateError] = useState('')
  const [endDateError, setEndDateError] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    let hasError = false

    if (!startDate) {
      setStartDateError('Select start date')
      hasError = true
    } else {
      setStartDateError('')
    }

    if (!endDate) {
      setEndDateError('Select end date')
      hasError = true
    } else if (startDate && new Date(endDate) < new Date(startDate)) {
      setEndDateError('The end date cannot be less than the start date')
      hasError = true
    } else {
      setEndDateError('')
    }

    if (!hasError) {
      onNext()
    }
  }

  const handleStartDateChange = e => {
    const val = e.target.value
    onChangeStartDate(val)
    if (val) {
      setStartDateError('')
    }
    if (endDate && val && new Date(endDate) >= new Date(val)) {
      if (endDateError === 'The end date cannot be less than the start date') {
        setEndDateError('')
      }
    }
  }

  const handleEndDateChange = e => {
    const val = e.target.value
    onChangeEndDate(val)
    if (val) {
      if (startDate && new Date(val) < new Date(startDate)) {
        setEndDateError('The end date cannot be less than the start date')
      } else {
        setEndDateError('')
      }
    }
  }

  return (
    <div className="step-content-container">
      <h2 className="step-heading">Date Selection</h2>
      <p className="step-description">Select your start and end dates</p>

      <form className="step-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="input-label" htmlFor="startDate">
            Start Date
          </label>
          <input
            id="startDate"
            type="date"
            className={`text-input ${startDateError ? 'input-error-border' : ''}`}
            value={startDate}
            onChange={handleStartDateChange}
          />
          {startDateError && <p className="error-message">{startDateError}</p>}
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="endDate">
            End Date
          </label>
          <input
            id="endDate"
            type="date"
            className={`text-input ${endDateError ? 'input-error-border' : ''}`}
            value={endDate}
            onChange={handleEndDateChange}
          />
          {endDateError && <p className="error-message">{endDateError}</p>}
        </div>

        <div className="buttons-container space-between">
          <button
            type="button"
            className="secondary-button"
            onClick={onPrevious}
          >
            Previous
          </button>
          <button type="submit" className="primary-button">
            Next
          </button>
        </div>
      </form>
    </div>
  )
}

export default DateSelection

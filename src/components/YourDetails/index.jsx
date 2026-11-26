import {useState} from 'react'
import './index.css'

const YourDetails = ({
  name,
  startLocation,
  endLocation,
  onChangeName,
  onChangeStartLocation,
  onChangeEndLocation,
  onNext,
}) => {
  const [showNameError, setShowNameError] = useState(false)
  const [showStartLocationError, setShowStartLocationError] = useState(false)
  const [showEndLocationError, setShowEndLocationError] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()

    const isNameValid = name.trim() !== ''
    const isStartLocationValid = startLocation.trim() !== ''
    const isEndLocationValid = endLocation.trim() !== ''

    setShowNameError(!isNameValid)
    setShowStartLocationError(!isStartLocationValid)
    setShowEndLocationError(!isEndLocationValid)

    if (isNameValid && isStartLocationValid && isEndLocationValid) {
      onNext()
    }
  }

  const handleNameChange = e => {
    onChangeName(e.target.value)
    if (e.target.value.trim() !== '') {
      setShowNameError(false)
    }
  }

  const handleStartLocationChange = e => {
    onChangeStartLocation(e.target.value)
    if (e.target.value.trim() !== '') {
      setShowStartLocationError(false)
    }
  }

  const handleEndLocationChange = e => {
    onChangeEndLocation(e.target.value)
    if (e.target.value.trim() !== '') {
      setShowEndLocationError(false)
    }
  }

  return (
    <div className="step-content-container">
      <h2 className="step-heading">Your Details</h2>
      <p className="step-description">Enter your name and location details</p>

      <form className="step-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="input-label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className={`text-input ${showNameError ? 'input-error-border' : ''}`}
            placeholder="Enter name"
            value={name}
            onChange={handleNameChange}
          />
          {showNameError && <p className="error-message">Enter your name</p>}
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="startLocation">
            Start Location
          </label>
          <input
            id="startLocation"
            type="text"
            className={`text-input ${showStartLocationError ? 'input-error-border' : ''}`}
            placeholder="Enter start location"
            value={startLocation}
            onChange={handleStartLocationChange}
          />
          {showStartLocationError && (
            <p className="error-message">Enter your start location</p>
          )}
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="endLocation">
            End Location
          </label>
          <input
            id="endLocation"
            type="text"
            className={`text-input ${showEndLocationError ? 'input-error-border' : ''}`}
            placeholder="Enter end location"
            value={endLocation}
            onChange={handleEndLocationChange}
          />
          {showEndLocationError && (
            <p className="error-message">Enter your end location</p>
          )}
        </div>

        <div className="buttons-container right-aligned">
          <button type="submit" className="primary-button">
            Next
          </button>
        </div>
      </form>
    </div>
  )
}

export default YourDetails

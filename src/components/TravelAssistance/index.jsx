import './index.css'

export const travelAssistanceList = [
  {value: 'Car', displayText: 'Car'},
  {value: 'Flight', displayText: 'Flight'},
  {value: 'Bus', displayText: 'Bus'},
  {value: 'Train', displayText: 'Train'},
]

const TravelAssistance = ({
  assistanceNeeded,
  assistanceType,
  onToggleAssistanceNeeded,
  onChangeAssistanceType,
  onPrevious,
  onNext,
}) => {
  const handleCheckboxChange = e => {
    onToggleAssistanceNeeded(e.target.checked)
  }

  const handleSelectChange = e => {
    onChangeAssistanceType(e.target.value)
  }

  return (
    <div className="step-content-container">
      <h2 className="step-heading">Travel Assistance</h2>
      <p className="step-description">Select your travel assistance preference</p>

      <div className="travel-assistance-form">
        <div className="checkbox-group">
          <input
            id="travelAssistanceCheckbox"
            type="checkbox"
            className="checkbox-input"
            checked={assistanceNeeded}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="travelAssistanceCheckbox"
            className="checkbox-label"
          >
            Travel Assistance Needed
          </label>
        </div>

        {assistanceNeeded && (
          <div className="input-group assistance-select-group">
            <label
              htmlFor="travelAssistanceSelect"
              className="input-label"
            >
              Travel Assistance
            </label>
            <select
              id="travelAssistanceSelect"
              className="select-input"
              value={assistanceType || travelAssistanceList[0].value}
              onChange={handleSelectChange}
            >
              {travelAssistanceList.map(option => (
                <option key={option.value} value={option.value}>
                  {option.displayText}
                </option>
              ))}
            </select>
          </div>
        )}
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
}

export default TravelAssistance

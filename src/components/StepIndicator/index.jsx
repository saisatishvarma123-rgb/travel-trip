import './index.css'

export const initialSteps = [
  {
    id: 1,
    displayText: 'Your Details',
  },
  {
    id: 2,
    displayText: 'Date Selection',
  },
  {
    id: 3,
    displayText: 'Guests',
  },
  {
    id: 4,
    displayText: 'Travel Assistance',
  },
  {
    id: 5,
    displayText: 'Confirmation',
  },
]

const completedStepImg =
  'https://assets.ccbp.in/frontend/react-js/travel-trip-steps-successfully-completed-img.png'

const StepIndicator = ({currentStep, isConfirmed = false, stepsList = initialSteps}) => (
  <div className="step-indicator-container">
    <ul className="steps-list">
      {stepsList.map(step => {
        const isCompleted = isConfirmed || step.id < currentStep
        const isActive = !isConfirmed && step.id === currentStep

        let statusClass = 'upcoming'
        if (isCompleted) {
          statusClass = 'completed'
        } else if (isActive) {
          statusClass = 'active'
        }

        return (
          <li key={step.id} className={`step-item ${statusClass}`}>
            <div className="step-badge-container">
              {isCompleted ? (
                <img
                  src={completedStepImg}
                  alt={step.displayText}
                  className="step-completed-icon"
                />
              ) : (
                <span className={`step-number ${isActive ? 'active-number' : ''}`}>
                  {step.id}
                </span>
              )}
            </div>
            <p className={`step-text ${isActive ? 'active-text' : ''}`}>
              {step.displayText}
            </p>
          </li>
        )
      })}
    </ul>
  </div>
)

export default StepIndicator

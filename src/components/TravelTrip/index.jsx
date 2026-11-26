import {useState} from 'react'
import Header from '../Header/index.jsx'
import StepIndicator from '../StepIndicator/index.jsx'
import YourDetails from '../YourDetails/index.jsx'
import DateSelection from '../DateSelection/index.jsx'
import Guests from '../Guests/index.jsx'
import TravelAssistance from '../TravelAssistance/index.jsx'
import Confirmation from '../Confirmation/index.jsx'
import SuccessView from '../SuccessView/index.jsx'
import './index.css'

const TravelTrip = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const [name, setName] = useState('')
  const [startLocation, setStartLocation] = useState('')
  const [endLocation, setEndLocation] = useState('')

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)

  const [assistanceNeeded, setAssistanceNeeded] = useState(false)
  const [assistanceType, setAssistanceType] = useState('Car')

  const [isConfirmed, setIsConfirmed] = useState(false)

  const handleIncrementAdults = () => setAdults(prev => prev + 1)
  const handleDecrementAdults = () =>
    setAdults(prev => (prev > 1 ? prev - 1 : 1))

  const handleIncrementChildren = () => setChildren(prev => prev + 1)
  const handleDecrementChildren = () =>
    setChildren(prev => (prev > 0 ? prev - 1 : 0))

  const handleIncrementInfants = () => setInfants(prev => prev + 1)
  const handleDecrementInfants = () =>
    setInfants(prev => (prev > 0 ? prev - 1 : 0))

  const resetForm = () => {
    setCurrentStep(1)
    setName('')
    setStartLocation('')
    setEndLocation('')
    setStartDate('')
    setEndDate('')
    setAdults(1)
    setChildren(0)
    setInfants(0)
    setAssistanceNeeded(false)
    setAssistanceType('Car')
    setIsConfirmed(false)
  }

  const renderCurrentStepView = () => {
    if (isConfirmed) {
      return <SuccessView onBookNewTrip={resetForm} />
    }

    switch (currentStep) {
      case 1:
        return (
          <YourDetails
            name={name}
            startLocation={startLocation}
            endLocation={endLocation}
            onChangeName={setName}
            onChangeStartLocation={setStartLocation}
            onChangeEndLocation={setEndLocation}
            onNext={() => setCurrentStep(2)}
          />
        )
      case 2:
        return (
          <DateSelection
            startDate={startDate}
            endDate={endDate}
            onChangeStartDate={setStartDate}
            onChangeEndDate={setEndDate}
            onPrevious={() => setCurrentStep(1)}
            onNext={() => setCurrentStep(3)}
          />
        )
      case 3:
        return (
          <Guests
            adults={adults}
            children={children}
            infants={infants}
            onIncrementAdults={handleIncrementAdults}
            onDecrementAdults={handleDecrementAdults}
            onIncrementChildren={handleIncrementChildren}
            onDecrementChildren={handleDecrementChildren}
            onIncrementInfants={handleIncrementInfants}
            onDecrementInfants={handleDecrementInfants}
            onPrevious={() => setCurrentStep(2)}
            onNext={() => setCurrentStep(4)}
          />
        )
      case 4:
        return (
          <TravelAssistance
            assistanceNeeded={assistanceNeeded}
            assistanceType={assistanceType}
            onToggleAssistanceNeeded={setAssistanceNeeded}
            onChangeAssistanceType={setAssistanceType}
            onPrevious={() => setCurrentStep(3)}
            onNext={() => setCurrentStep(5)}
          />
        )
      case 5:
        return (
          <Confirmation
            name={name}
            startLocation={startLocation}
            endLocation={endLocation}
            startDate={startDate}
            endDate={endDate}
            adults={adults}
            children={children}
            infants={infants}
            assistanceNeeded={assistanceNeeded}
            assistanceType={assistanceType}
            onCancel={resetForm}
            onConfirm={() => setIsConfirmed(true)}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="travel-trip-app">
      <Header />
      <main className="main-content">
        <div className="trip-card">
          <StepIndicator
            currentStep={currentStep}
            isConfirmed={isConfirmed}
          />
          {renderCurrentStepView()}
        </div>
      </main>
    </div>
  )
}

export default TravelTrip

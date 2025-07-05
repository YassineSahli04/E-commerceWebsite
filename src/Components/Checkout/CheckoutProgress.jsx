import './CheckoutProgress.css';

export default function CheckoutProgress({ currentStep }) {
  const steps = ['Checkout', 'User Informations', 'Payment','Review', 'Confirmation'];

  return (
    <div className="progress-container">
      {steps.map((label, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;

        return (
          <div className="progress-step" key={index}>
            <div className={`progress-circle ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}></div>
            {index < steps.length - 1 && (
              <div className={`progress-line ${isCompleted ? 'completed' : ''}`}></div>
            )}
            <p className={`progress-label ${isActive ? 'active' : ''}`}>{label}</p>
          </div>
        );
      })}
    </div>
  );
}
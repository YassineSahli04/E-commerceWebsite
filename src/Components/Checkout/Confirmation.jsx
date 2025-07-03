
import '../../Pages/CSS/LoginSignup.css';
import { Link } from 'react-router-dom';

export default function Confirmation() {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container" style={{ textAlign: 'center' }}>
        <h2>Order Confirmed!</h2>
        <p style={{ fontSize: '18px', marginTop: '20px' }}>
          Thank you for your purchase. You will receive an email confirmation shortly.
        </p>
        <p style={{ fontSize: '16px', color: '#5c5c5c', marginTop: '10px' }}>
          If you requested a visit, we will contact you soon to schedule it.
        </p>
        <p style={{ marginTop: '30px', fontWeight: '500' }}>We hope you enjoy your new property.</p>

        <Link to="/"><button>Home</button></Link>
      </div>
    </div>
  );
}
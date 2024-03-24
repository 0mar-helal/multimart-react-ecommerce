import { Link } from 'react-router-dom';
import '../checkout.css';

const Canceled = () => {
  
  return (
    <div className="canceled">
      <h1>Payment Failed</h1>
      <p>Payment was not successfull</p>
      <div>
        <Link className="btn btn-dark" to="/shop">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Canceled;

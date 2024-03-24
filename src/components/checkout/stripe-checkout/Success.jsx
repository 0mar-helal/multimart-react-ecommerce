import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../../app/features/cart/cartSlice';
import { Link } from 'react-router-dom';
import { BsBagCheckFill } from 'react-icons/bs';

import '../checkout.css';

const Success = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div className="success-wrapper">
      <div className="success animated">
        <BsBagCheckFill />
        <h1>Thank you for your oder</h1>
        <p>We are currentle processing your order and will send you a confirmation email shortly</p>
        <div>
          <Link className="btn btn-dark" to="/shop">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;

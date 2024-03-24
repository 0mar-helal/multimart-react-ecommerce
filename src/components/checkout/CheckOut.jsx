import { useEffect } from 'react';
import StripeCheckOut from './stripe-checkout/StripeCheckOut';

import './checkout.css';

const CheckOut = ({ cartList }) => {
  // Calculate total amount and total number of items
  const total = cartList ? cartList.reduce((acc, item) => acc + item.qty * item.price, 0) : 0;
  const itemCount = cartList ? cartList.reduce((acc, item) => acc + item.qty, 0) : 0;

  useEffect(() => {}, [cartList]);

  return (
    <div className="checkout-container">
    <div className="checkout-text">
      <h2>Checkout</h2>
      <h3>
        Amount to Pay: $ <span style={{ color: '#4a3429' }}>{total}</span>
      </h3>
      <h3>
        Number of Items: <span style={{ color: '#4a3429' }}>{itemCount}</span>
      </h3>
      <StripeCheckOut />
    </div>
  </div>
  );
};

export default CheckOut;

// the create a helper function to make the post request to the backend

import { useStripe } from '@stripe/react-stripe-js';
import { fetchFromAPI } from '../../../helper';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import '../checkout.css';

const StripeCheckOut = () => {
  const [email, setEmail] = useState('');
  const stripe = useStripe();

  const { cartList } = useSelector((state) => state.cart);

  const handleGuestCheckout = async (e) => {
    e.preventDefault();
    console.log('cartList', cartList);
    const line_items = cartList.map((item) => ({
      quantity: item.qty,
      price_data: {
        currency: 'usd',
        unit_amount: item.price * 100,
        product_data: {
          name: item.productName,
          description: item.description,
          images: [item.imgUrl],
        },
      },
    }));

    try {
      const response = await fetchFromAPI('create-checkout-session', {
        method: 'POST',
        body: { line_items, customer_email: email },
      });

      const { sessionId } = response;
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error('Stripe redirect error:', error);
      }
    } catch (error) {
      console.error('Checkout error:', error);
    }
  };

  return (
    <form onSubmit={handleGuestCheckout}>
      <div>
        <input style={{padding: '7px', width: '100%'}} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" value={email} className="input" />
      </div>
      <div className="stripe-checkout-btn">
        <button style={{ marginTop: '10px' }} type="submit" className="btn btn-dark submit" disabled={!email}>
          Checkout
        </button>
      </div>
    </form>
  );
};

export default StripeCheckOut;

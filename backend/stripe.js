



// import stripe from 'stripe';

// const stripeAPI = stripe(process.env.STRIPE_SECRET_KEY);

// export default stripeAPI;


// or should be using the the cod eon top but thats the only way
// i could get the 

import Stripe from 'stripe';

const stripeAPI = (apikey) => {
    return new Stripe(apikey)
}

export default stripeAPI
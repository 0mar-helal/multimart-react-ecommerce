import stripeAPI from '../stripe.js';


async function createCheckOutSession(req, res) {
  const domainUrl = process.env.WEB_APP_URL;
  console.log(domainUrl);
  const { line_items, customer_email } = req.body;
console.log(JSON.stringify(line_items[0], null, 2));
  const cloneLineItems = line_items.map((item) =>  {
    return {
      ...item,
      price_data: {
        ...item.price_data,
        product_data: {
          ...item.price_data.product_data,
          images: [`${domainUrl}/${item.price_data.product_data.images[0]}`],
        },
      },
    }
  });

  console.log(line_items[0]['price_data']['product_data']['images'][0]);
  // console.log(req.body);

  // res.send('Checkout session created')
  // return;
  // Check req body has line_items and email
  // if doens't contain line_items and email you can't create a session

  if (!line_items || !customer_email) {
    return res.status(400).json({ error: 'missing session parameters' });
  }

  let session;

  try {
    // Initialize Stripe with your API key beacuse i was initializing with
    // (session = await stripe.checkout.sessions.create)
    // but it didn't work so i had to initialize it with 
    // const stripe = stripeAPI(process.env.STRIPE_SECRET_KEY);

    const stripe = stripeAPI(process.env.STRIPE_SECRET_KEY);
    // Create the checkout session using the parameters from the stipe docs
    session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: cloneLineItems,
      customer_email,
      success_url: `${domainUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domainUrl}/canceled`,
      shipping_address_collection: { allowed_countries: ['US', 'CA'] }
    });

    res.status(200).json({ sessionId: session.id }); 
    // Respond back to the frontend with the session Id

  } catch (error) {
    console.error('Stripe Error:', error);
    res.status(400).json({ error: error.message || 'An error occurred, unable to create session' });
    // Consoling the error and responding to the frontend
  }
}

export default createCheckOutSession;

// then go to the index.js file and import the createCheckOutSession function
// and create a post endpoint for it

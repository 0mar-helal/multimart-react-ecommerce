import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import createCheckOutSession from './api/checkout.js';

const port = process.env.PORT || 8080;

dotenv.config();
const app = express();


app.use(express.json());

app.use(cors());


app.get('/', (req, res) => {
  return res.send({
    message: 'Welcome to e commerce app',
  });
});

app.post('/create-checkout-session', createCheckOutSession);

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

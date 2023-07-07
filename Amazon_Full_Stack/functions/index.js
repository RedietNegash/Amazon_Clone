

require("dotenv").config()
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIP_KEY
);


const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('h world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  try {
  
    console.log('Payment Request Recieved for this amount >>> ', total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, 
      currency: 'usd',
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    
    console.log(error.message)
  }
   
  });
  app.listen(10000, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Listening 1000");
    }
})
  




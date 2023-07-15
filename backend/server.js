const express = require("express");
const cors = require("cors");
require('dotenv').config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  console.log("request", req.body);
  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    // submit_type : 'pay',
    mode: "payment",
    payment_method_types: ["card","upi"],
    billing_address_collection: "required",
    // shipping_addresss_collection:'required',
    shipping_options: [
      { shipping_rate: process.env.STRIPE_SHIPPING_RATE_1 },
      { shipping_rate: process.env.STRIPE_SHIPPING_RATE_2 },
    ],
    invoice_creation: {
        enabled: true,
    },
    payment_intent_data: {
        setup_future_usage: 'off_session',
    },
    payment_method_types : ['card'],
    line_items: req.body.map((items) => {
      return {
        price_data: {
          currency: "inr",
          product_data: {
            name: items.name,
            // images : [newImage],
          },
          unit_amount: items.price * 100,
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
        },
        quantity: items.quantity,
      };
    }),
    mode: "payment",
    success_url: `${req.headers.origin}/success`,
    cancel_url: `${req.headers.origin}/cancel`,
  });
  res.status(200).json(session);
});
// app.listen(4000, () => {
//   console.log("listening to port 4000");
// });

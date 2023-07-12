// const express = require("express");
// const app = express();
// // This is your test secret API key.
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// app.use(express.static("public"));
// app.use(express.json());

// app.post("/create-payment-intent", async (req, res) => {
//   // const { items } = req.body;

//   // Create a PaymentIntent with the order amount and currency
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: 50,
//     currency: "usd",
//     automatic_payment_methods: {
//       enabled: true,
//     },
//   });

//   res.send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

// app.listen(3000, () => console.log("Node server listening on port 3000!"));
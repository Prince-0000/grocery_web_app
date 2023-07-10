const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51MG0R4SFPvtwuestMh5neMdGWw6JSzmAJvw14ZxSkcww6FV1GHICVniq3X57QqdRKf3JBLlvKdhMyUW2KO2bWJPX00sQummVtg')

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post('/checkout', async (req,res)=>{
    console.log("request",req.body);
// Create Checkout Sessions from body params.
const session = await stripe.checkout.sessions.create({
    // submit_type : 'pay',
    mode : 'payment',
    // payment_method_types : ['card'],
    // billing_address_collection : 'auto',
    line_items: req.body.map((items) => {
        return {
            price_data : {
                currency : 'inr',
                product_data : {
                    name : items.name,
                    // images : [newImage],
                },
                unit_amount: items.price * 100,
            },
            adjustable_quantity : {
                enabled : true,
                minimum : 1,
            },
            quantity : items.quantity
        }
    }),
    mode: 'payment',
    success_url:`${req.headers.origin}/success`,
    cancel_url:`${req.headers.origin}/cancel`
  });
  res.status(200).json(session);
})
app.listen(4000, ()=>{ console.log("listening to port 4000") });
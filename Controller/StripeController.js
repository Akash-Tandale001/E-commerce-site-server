const stripe = require("stripe")(process.env.REACT_APP_STRIPE_KEY)

exports.getPayment=async (req, res) => {
    console.log(req.body)
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.REACT_APP_CLIENT_URL}/base/checkout-sucess`,
      cancel_url: `${process.env.REACT_APP_CLIENT_URL}/base/checkout-fail`,
    })
    res.send({url:session.url})
}
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_KEY)

exports.getPayment=async (req, res) => {
    const line_items = req.body.list.map((item)=>{
        return {
            price_data: {
                currency: 'inr',
                product_data: {
                  name: item.name,
                  Image: item.imageurl,
                  metadata:{
                    id:item.id
                  }
                },
                unit_amount: parseInt(item.price.replaceAll(",", "")),
              },
              quantity: item.quantity,
        }
    })
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: 'payment',
      success_url: `${process.env.REACT_APP_CLIENT_URL}/base/checkout-sucess`,
      cancel_url: `${process.env.REACT_APP_CLIENT_URL}/base/checkout-fail`,
    })
    res.send({url:session.url})
}
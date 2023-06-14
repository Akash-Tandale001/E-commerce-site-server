const stripe = require("stripe")(process.env.REACT_APP_STRIPE_KEY)

exports.getPayment=async (req, res) => {
  try {
    const line_items = req.body.list.map((item)=>{
      let amount = parseInt(item.price.toString().replaceAll(',', ''))*100
      console.log(amount)
        return {
            price_data: {
                currency: 'inr',
                product_data: {
                  name: item.name,
                  images: [item.imageurl],
                  metadata:{
                    id:item.id
                  }
                },
                unit_amount: amount,
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
  } catch (err) {
    res.status(400).json({ status: "error", error: err.message });
  }
    
}
import { getDynamicKey } from "@/lib/variables";

export default async function handler(req, res) {
  const key = getDynamicKey();
  console.log(key);
  const stripe = require("stripe")(key);
  try {
    if (req.method === "POST") {
      try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
              price: "price_1NaAq9Erkn1n0wFU5cv2WDcd",
              quantity: 1,
            },
          ],
          mode: "payment",
          success_url: `${req.headers.origin}/?success=true`,
          cancel_url: `${req.headers.origin}/?canceled=true`,
        });
        console.log(session);
        res.redirect(303, session.url);
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
    } else {
      res.setHeader("Allow", "POST");
      res.status(405).end("Method Not Allowed");
    }
  } catch (e) {
    console.log(e);
  }
}

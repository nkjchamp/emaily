const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
	app.post("/api/stripe", requireLogin, async (req, res) => {
		//  request( route, [middleware(s) in the order you want to be run], function)
		if (!req.user) {
			return res.status(401).send({ error: "You must login!fff" });
		}

		const charge = await stripe.charges.create({
			amount: 500,
			currency: "usd",
			description: "%5 for 5 credits",
			source: req.body.id
		});
		req.user.credits += 5;
		const user = await req.user.save(); // whenever you save a model, make use of the one post-save

		res.send(user);
	});
};

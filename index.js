const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");

require("./models/User");
require("./models/Survey");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json()); // parse any post/put/patch request and passing it to the req.body property

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, // time must be passed in milliseconds (== 30 days)
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

// production environment configuration
if (process.env.NODE_ENV === "production") {
	// first, express will serve up production assets (main.js / main.css)
	app.use(express.static("client/build"));
	// then, if above doesn't run, express will serve up index.html file if it doesn't know the route
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

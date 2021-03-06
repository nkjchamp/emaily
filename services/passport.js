const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");

const keys = require("../config/keys");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			// console.log("access token: ", accessToken);
			// console.log("refresh token: ", refreshToken);
			// console.log("profile id: ", profile);
			// console.log("email: ", profile.emails[0].value);
			const existingUser = await User.findOne({ googleId: profile.id });
			if (existingUser) {
				// we already have a user with this id, do not create a new user
				done(null, existingUser);
			} else {
				// we do not have a user with this id, create a new user
				const user = await new User({
					googleId: profile.id,
					email: profile.emails[0].value,
					name: profile.displayName
				}).save();
				done(null, user);
			}
		}
	)
);

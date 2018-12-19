const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
	// property: propertyType
	googleId: String
});

mongoose.model("users", userSchema);

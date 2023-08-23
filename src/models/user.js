import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "Please provide a username"],
		unique: true,
	},
	email: {
		type: String,
		required: [true, "Please provide an email"],
		unique: true,
	},
	password: {
		type: String,
		required: [true, "Please provide a password"],
	},
	isVerified: {
		type: Boolean,
		default: false,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
	forgotPasswordToken: {
		type: String,
	},
	forgotPasswordTokenExpired: {
		type: Date,
	},
	verifyToken: {
		type: String,
	},
	verifyTokenExpired: {
		type: Date,
	},
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;

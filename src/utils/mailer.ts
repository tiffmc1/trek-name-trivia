import nodemailer from "nodemailer";
import User from "@/models/user";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
	try {
		// create a hashed token
		const hashedToken = await bcryptjs.hash(userId.toString(), 10); // 10 = number of  encryption rounds

		// find the user and update
		if (emailType === "VERIFY") {
			await User.findByIdAndUpdate(userId, {
				verifyToken: hashedToken,
				verifyTokenExpired: Date.now() + 3600000,
			});
		} else if (emailType === "RESET") {
			await User.findByIdAndUpdate(userId, {
				forgotPasswordToken: hashedToken,
				forgotPasswordTokenExpired: Date.now() + 3600000,
			});
		}

		// use nodemailer to create a transport
		var transport = nodemailer.createTransport({
			host: "sandbox.smtp.mailtrap.io",
			port: 2525,
			auth: {
				user: process.env.MAILER_USERNAME,
				pass: process.env.MAILER_PASSWORD,
			},
		});

		const mailOptions = {
			from: "trek-name-trivia@gmail.com",
			to: email,
			subject: emailType === "VERIFY" ? "Email Verification" : "Password Reset",
			html: `<p>Click <a href="${
				process.env.DOMAIN
			}/verifyemail?token=${hashedToken}">here</a> to ${
				emailType === "VERIFY" ? "verify your email" : "reset your password."
			}. If the link does not work, then please copy and paste the link into your browser. <br>${
				process.env.DOMAIN
			}/verifyemail?token=${hashedToken}</p>`,
		};

		const mailResponse = await transport.sendMail(mailOptions);

		return mailResponse;
	} catch (error: any) {
		throw new Error(error.message);
	}
};

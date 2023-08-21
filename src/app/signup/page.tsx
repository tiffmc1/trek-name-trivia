"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignUpPage() {
	const [user, setUser] = useState({
		email: "",
		password: "",
		username: "",
	});
	const [buttonDisabled, setButtonDisabled] = useState(true);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		user.email.length > 0 &&
		user.password.length > 0 &&
		user.username.length > 0
			? setButtonDisabled(false)
			: setButtonDisabled(true);
	}, [user]);

	const onSignup = async () => {
		try {
			setLoading(true);

			const response = await axios.post("/api/users/signup", user);

			console.log("Signup Success", response.data);
			router.push("/login");
		} catch (error: any) {
			toast.error(error.message);
			console.log("SignUp Page Error:", error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col items-center">
			<h1>{loading ? "Processing" : "Sign Up"}</h1>
			<hr />
			<label htmlFor="username">username</label>
			<input
				type="text"
				id="username"
				value={user.username}
				placeholder="username"
				onChange={(e) => setUser({ ...user, username: e.target.value })}
				className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
			/>

			<label htmlFor="email">email</label>
			<input
				type="text"
				id="email"
				value={user.email}
				placeholder="email"
				onChange={(e) => setUser({ ...user, email: e.target.value })}
				className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
			/>

			<label htmlFor="password">password</label>
			<input
				type="password"
				id="password"
				value={user.password}
				placeholder="password"
				onChange={(e) => setUser({ ...user, password: e.target.value })}
				className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
			/>

			<button
				onClick={onSignup}
				className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
			>
				{buttonDisabled ? "No Sign Up" : "Sign Up"}
			</button>
			<Link href="/login">Log In</Link>
		</div>
	);
}

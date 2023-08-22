"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function LoginPage() {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});
	const [buttonDisabled, setButtonDisabled] = useState(true);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		user.email.length > 0 && user.password.length > 0
			? setButtonDisabled(false)
			: setButtonDisabled(true);
	}, [user]);

	const onLogin = async () => {
		try {
			setLoading(true);

			const response = await axios.post("/api/users/login", user);

			console.log("Login Success", response.data);
			toast.success("Login Success");
			router.push("/profile");
		} catch (error: any) {
			toast.error(error.message);
			console.log("Login Page Error:", error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col items-center">
			<h1>{loading ? "Processing" : "Login"}</h1>
			<hr />

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
				onClick={onLogin}
				className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
			>
				{buttonDisabled ? "No Login" : "Login"}
			</button>
			<Link href="/signup">Sign Up</Link>
		</div>
	);
}

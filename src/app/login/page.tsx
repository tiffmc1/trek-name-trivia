"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const onLogin = async () => {};

	return (
		<div className="flex flex-col items-center">
			<h1>Login</h1>
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
				Login
			</button>
			<Link href="/signup">Sign Up</Link>
		</div>
	);
}

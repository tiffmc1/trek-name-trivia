"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignUpPage() {
	const [user, setUser] = useState({
		email: "",
		password: "",
		username: "",
	});

	const onSignup = async () => {};

	return (
		<div className="flex flex-col items-center">
			<h1>Signup</h1>
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
				Sign Up
			</button>
			<Link href="/login">Log In</Link>
		</div>
	);
}

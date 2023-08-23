"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Link from "next/link";

// interface UserData {
// 	id: string;
// 	email: string;
// 	username: string;
// }

export default function ProfilePage() {
	const router = useRouter();
	// const [user, setUser] = useState<any | null>(null);
	const [user, setUser] = useState("nothing");
	const onLogout = async () => {
		try {
			const logout = await axios.get("/api/users/logout");

			toast.success("Logout Successful", logout.data);
			router.push("/login");
		} catch (error: any) {
			toast.error(error.message);
			console.log("Logout Error in Profile Page");
		}
	};

	useEffect(() => {
		const getUserData = async () => {
			const res = await axios.get("/api/users/user");
			console.log(res.data);
			setUser(res.data.data._id);
		};

		getUserData();
	}, []);

	console.log(user);

	return (
		<div>
			<h1>Profile Page</h1>
			<hr />
			<h2>
				{user ? (
					<div>
						<div>{user}</div>
					</div>
				) : null}
			</h2>
			<div>This is the profile page</div>
			<hr />
			<button
				onClick={onLogout}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			>
				Logout
			</button>
		</div>
	);
}

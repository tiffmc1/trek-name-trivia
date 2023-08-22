"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function ProfilePage() {
	const router = useRouter();

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

	return (
		<div>
			<h1>Profile Page</h1>
			<hr />
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

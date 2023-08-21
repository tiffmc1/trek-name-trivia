import React from "react";

export default function UserProfilePage({ params }: any) {
	return (
		<div>
			<h1>User Profile Page</h1>
			<hr />
			<p className="text-4xl">This is the user profile page</p>
			<span className="p-2 rounded bg-orange-200">{params.id}</span>
		</div>
	);
}

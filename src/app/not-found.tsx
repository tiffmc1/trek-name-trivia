"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Image
				src="/images/not-found.png"
				width={300}
				height={300}
				alt="404 Error Image"
			/>
			<Link href="/">Return To Home</Link>
		</div>
	);
}

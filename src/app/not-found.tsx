"use client";
import Image from "next/image";
import Link from "next/link";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-deep_blue to-light_blue text-white p-3">
			<div className="flex flex-col items-center w-[25%] h-[25%] sm:w-[20%] sm:h-[20%] md:w-[15%] md:h-[15%]">
				<Image
					src="/images/warning-icon.png"
					width={150}
					height={150}
					alt="Warning Icon"
				/>
			</div>
			<div className="font-extrabold text-5xl md:text-6xl lg:text-7xl xl:text-8xl py-[6%] md:py-[4%] lg:py-[2%]">
				404 Error
			</div>
			<div className="text-center font-semibold mb-[15%] md:mb-[7%] lg:mb-[4%] text-md md:text-lg lg:text-xl xl:text-2xl">
				The requested URL cannot be found
			</div>
			<div className="flex flex-col items-center">
				<Link href="/" className="text-md lg:text-lg xl:text-xl">
					Return
				</Link>
				<KeyboardReturnIcon />
			</div>
		</div>
	);
}

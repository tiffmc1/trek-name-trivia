import { getDataToken } from "@/utils/getTokenData";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";
import { connect } from "@/dbConfig/dbConfig";

connect();

export async function GET(request: NextRequest) {
	try {
		const userId = await getDataToken(request);
		const user = await User.findOne({ _id: userId }).select("-password");

		return NextResponse.json({
			message: "User Found",
			success: true,
			data: user,
		});
	} catch (error: any) {
		return NextResponse.json({ error: error.message }, { status: 400 });
	}
}

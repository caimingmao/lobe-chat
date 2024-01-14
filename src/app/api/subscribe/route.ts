import { subscribePrepare } from "@/lib/subscribe";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

interface TypeInterface {
    type: number;
}

export const POST = async (req: Request) => {
    const { userId } = auth();

    if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
    }
    const payload = (await req.json()) as TypeInterface;
    let wetchatPayResponse = await subscribePrepare(userId, payload.type);
    return NextResponse.json(wetchatPayResponse);
};

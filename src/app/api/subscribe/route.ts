import { subscribePrepare } from "@/lib/subscribe";
import { NextResponse } from "next/server";

interface TypeInterface {
    type: number;
}

export const POST = async (req: Request) => {
    const payload = (await req.json()) as TypeInterface;
    let wetchatPayResponse = await subscribePrepare(payload.type);
    return NextResponse.json(wetchatPayResponse);
};

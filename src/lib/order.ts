import { subscribe_order } from "@prisma/client";
import prismadb from "./prismadb";

export interface OrderPayload {
    user_id: string;
    type: number;
}

const generateOrderId = (): string => {
    const segments: string[] = [];
    for (let i = 0; i < 4; i++) {
        const randomNumber = Math.floor(Math.random() * 99999999);
        const hexSegment = randomNumber.toString(16).padStart(8, '0');
        segments.push(hexSegment);
    }
    return segments.join('-');
}

export const createOrder = async (orderPayload: OrderPayload): Promise<subscribe_order> => {
    return await prismadb.subscribe_order.create({
        data: {
            order_id: generateOrderId(),
            type: orderPayload.type,
            payload: '',
            user_id: orderPayload.user_id,
            status: 0,
            out_trade_order: ''
        },
    });
}

//
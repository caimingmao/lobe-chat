import { OrderPayload, createOrder } from "./order";
import { WechatPayPayload, WechatPayResponse, generateNativePayQR } from "./xorpay"

const formatWechatPayPayload = (type: number): WechatPayPayload => {
    let payload: WechatPayPayload = {
        name: '',
        price: 0,
        order_id: ''
    }

    switch (type) {
        case 1:
            payload.name = 'tb_sub_1';
            payload.price = 1;
            break;

        default:
            break;
    }

    return payload;
}

export const subscribePrepare = async (userId: string, type: number): Promise<WechatPayResponse> => {
    // create order
    let orderPaylod: OrderPayload = {
        type: type,
        user_id: userId,
    }

    let order = await createOrder(orderPaylod);

    // get pay qrcode

    let wechatPayPayload: WechatPayPayload = formatWechatPayPayload(type);
    wechatPayPayload.order_id = order.order_id;

    let wechatPayResponse: WechatPayResponse = await generateNativePayQR(wechatPayPayload);

    return wechatPayResponse;

}
import { Md5 } from "ts-md5";
import axios from 'axios';

export interface WechatPayPayload {
    name: string;
    pay_type?: string;
    price: number;
    order_id: string;
    order_uid: string;
    notify_url?: string;
    sign?: string;
}

export interface WechatPayResponse {
    status: string;
    error_msg: string;
    qr: string;
}

const API = 'https://xorpay.com/api/pay/698851';
const APP_SECRET = '8f69f69d54fe4b9bbe10e11a9d4983c5';

const getSign = (payload: WechatPayPayload) => {
    var signStr = `${payload.name}${payload.pay_type}${payload.price}${payload.order_id}${payload.notify_url}${APP_SECRET}`;
    return Md5.hashStr(signStr);
}

export const generateNativePayQR = async (payload: WechatPayPayload): Promise<WechatPayResponse> => {
    var wechatPayResponse: WechatPayResponse = {
        status: "",
        error_msg: "",
        qr: ""
    };
    try {
        payload.notify_url = 'http://www.toolboss.vip/notifyfromxorpay';
        payload.pay_type = 'native';
        payload.sign = getSign(payload);
        const response = await axios.post(API, payload);
        console.log(response.data);
        if (response.data.status == 'ok') {
            wechatPayResponse.status = 'success';
            wechatPayResponse.qr = response.data.info.qr;
        } else {
            wechatPayResponse.status = 'failed';
            wechatPayResponse.error_msg = response.data.status;
        }
    } catch (error) {
        console.error('Error:', error);
        wechatPayResponse.status = 'failed';
        wechatPayResponse.error_msg = ;
    }

    return wechatPayResponse;
}
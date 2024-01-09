import { WechatPayResponse } from "@/lib/xorpay";
import axios from "axios";
import React, { memo, useState } from 'react';
import { Center } from 'react-layout-kit';

const prepareSubscribePay = async (type: number) => {
    try {
        const response = await axios.post("/api/subscribe", { type: type });
        return response.data;
    } catch (error: any) {
        console.log("[CODE_ERROR]", error);
        return {
            error_msg: '',
            qr: '',
            status: 'faialed',
        };
    }
}

const SubscribeForm = memo<{ id: string }>(({ id }) => {

    console.log(id);

    const [wechatPayQRCode, setWechatPayQRCode] = useState('');

    const showPayQR = async (type: number) => {
        let ret = await prepareSubscribePay(type) as WechatPayResponse;
        console.log('================');
        console.log(ret);
        setWechatPayQRCode('https://xorpay.com/qr?data=' + ret.qr);
        document.getElementById('my_modal_2').showModal();
    };

    return (
        <Center gap={16} style={{ maxWidth: 300 }}>
            <div className="flex-col justify-center">
                <h2 className='p-2 shadow-xl'># Subscribe for more conversation!</h2>
                <div className="card w-80 bg-base-100 shadow-xl mb-4">
                    <div className="card-body">
                        <h2 className="card-title">1.00 RMB<div className="badge badge-secondary">NEW</div></h2>
                        <p>10 conversastions with GPT3.5</p>
                        <div className="card-actions justify-end">
                            <a className="btn" onClick={() => showPayQR(1)}>Subscribe!</a>
                            <dialog className="modal" id="my_modal_2">
                                <div className="modal-box">
                                    <form method="dialog">
                                        <a className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById('my_modal_2').close()}>✕</a>
                                    </form>
                                    <div className="avatar flex justify-center">
                                        <div className="w-48 rounded">
                                            <img src={wechatPayQRCode} />
                                        </div>
                                    </div>
                                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>

        </Center>
    );
});

export default SubscribeForm;

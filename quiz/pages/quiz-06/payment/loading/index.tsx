import { useState } from "react";
import Head from "next/head";
import router, { Router } from "next/router";

declare const window: typeof globalThis & {
    IMP: any;
};

export default function PaymentPage() {
    const [amount, setAmount] = useState(100);

    // const [money2, setMoney2] = useState(1000);
    // const [money3, setMoney3] = useState(2000);
    // const [money4, setMoney4] = useState(5000);

    const requestPay = () => {
        const IMP = window.IMP; // 생략 가능
        IMP.init("imp12414300"); // 예: imp00000000
        // IMP.request_pay(param, callback) 결제창 호출
        IMP.request_pay(
            {
                // param
                pg: "html5_inicis",
                pay_method: "card",
                // merchant_uid: "ORD20180131-0000011", // 상품 uid 중복 X // 자동랜덤으로 발급해준다 .
                name: "노르웨이 회전 의자",
                amount: amount,
                buyer_email: "gildong@gmail.com",
                buyer_name: "홍길동",
                buyer_tel: "010-4242-4242",
                buyer_addr: "서울특별시 강남구 신사동",
                buyer_postcode: "01181",
                m_redirect_url: "/pages/quiz06/payment/complete",
            },
            // {
            //     // param
            //     pg: "html5_inicis",
            //     pay_method: "card",
            //     // merchant_uid: "ORD20180131-0000011", // 상품 uid 중복 X // 자동랜덤으로 발급해준다 .
            //     name: "북아일랜드 검",
            //     amount: amount,
            //     buyer_email: "gildong@gmail.com",
            //     buyer_name: "홍길동",
            //     buyer_tel: "010-4242-4242",
            //     buyer_addr: "서울특별시 강남구 신사동",
            //     buyer_postcode: "01181",
            //     m_redirect_url: "/pages/quiz06/payment/complete",
            // },
            // {
            //     // param
            //     pg: "html5_inicis",
            //     pay_method: "card",
            //     // merchant_uid: "ORD20180131-0000011", // 상품 uid 중복 X // 자동랜덤으로 발급해준다 .
            //     name: "이탈리아 피자방패",
            //     amount: amount,
            //     buyer_email: "gildong@gmail.com",
            //     buyer_name: "홍길동",
            //     buyer_tel: "010-4242-4242",
            //     buyer_addr: "서울특별시 강남구 신사동",
            //     buyer_postcode: "01181",
            //     m_redirect_url: "/pages/quiz06/payment/complete",
            // },

            // {
            //     // param
            //     pg: "html5_inicis",
            //     pay_method: "card",
            //     // merchant_uid: "ORD20180131-0000011", // 상품 uid 중복 X // 자동랜덤으로 발급해준다 .
            //     name: "웨인루니 가발",
            //     amount: amount,
            //     buyer_email: "gildong@gmail.com",
            //     buyer_name: "홍길동",
            //     buyer_tel: "010-4242-4242",
            //     buyer_addr: "서울특별시 강남구 신사동",
            //     buyer_postcode: "01181",
            //     m_redirect_url: "/pages/quiz06/payment/complete",
            // },

            (rsp: any) => {
                // callback
                if (rsp.success) {
                    // 결제 성공 시 로직,
                    console.log(rsp);
                    router.push("/quiz-06/payment/complete");
                    // 백엔드에 결제관련 데이터 넘겨주기 (=>즉 ,  뮤테이션 실행하기 )
                    // ex , createPointTransactionOfLoading (back06)
                    // 중고마켓 할때
                } else {
                    // 결제 실패 시 로직,
                    alert("결제 실패했습니다. 다시 시도해주세요 ");
                }
            }
        );
    };
    // const requestPay2 = () => {
    //     const IMP = window.IMP; // 생략 가능
    //     IMP.init("imp12414300"); // 예: imp00000000
    //     // IMP.request_pay(param, callback) 결제창 호출
    //     IMP.request_pay(
    //         {
    //             // param
    //             pg: "html5_inicis",
    //             pay_method: "card",
    //             // merchant_uid: "ORD20180131-0000011", // 상품 uid 중복 X // 자동랜덤으로 발급해준다 .
    //             name: "맥북",
    //             amount: money2,
    //             buyer_email: "gildong@gmail.com",
    //             buyer_name: "홍길동",
    //             buyer_tel: "010-4242-4242",
    //             buyer_addr: "서울특별시 구로동",
    //             buyer_postcode: "01181",
    //             m_redirect_url: "/pages/quiz06/payment/complete",
    //         },
    //         (rsp: any) => {
    //             // callback
    //             if (rsp.success) {
    //                 // 결제 성공 시 로직,
    //                 console.log(rsp);

    //                 // 백엔드에 결제관련 데이터 넘겨주기 (=>즉 ,  뮤테이션 실행하기 )
    //                 // ex , createPointTransactionOfLoading (back06)
    //                 // 중고마켓 할때
    //             } else {
    //                 // 결제 실패 시 로직,
    //                 alert("결제 실패했습니다. 다시 시도해주세요 ");
    //             }
    //         }
    //     );
    // };

    // const requestPay3 = () => {
    //     const IMP = window.IMP; // 생략 가능
    //     IMP.init("imp12414300"); // 예: imp00000000
    //     // IMP.request_pay(param, callback) 결제창 호출
    //     IMP.request_pay(
    //         {
    //             // param
    //             pg: "html5_inicis",
    //             pay_method: "card",
    //             // merchant_uid: "ORD20180131-0000011", // 상품 uid 중복 X // 자동랜덤으로 발급해준다 .
    //             name: "맥에어",
    //             amount: money3,
    //             buyer_email: "gildong@gmail.com",
    //             buyer_name: "홍길동",
    //             buyer_tel: "010-4242-4242",
    //             buyer_addr: "서울특별시 구로동",
    //             buyer_postcode: "01181",
    //             m_redirect_url: "/pages/quiz06/payment/complete",
    //         },
    //         (rsp: any) => {
    //             // callback
    //             if (rsp.success) {
    //                 // 결제 성공 시 로직,
    //                 console.log(rsp);

    //                 // 백엔드에 결제관련 데이터 넘겨주기 (=>즉 ,  뮤테이션 실행하기 )
    //                 // ex , createPointTransactionOfLoading (back06)
    //                 // 중고마켓 할때
    //             } else {
    //                 // 결제 실패 시 로직,
    //                 alert("결제 실패했습니다. 다시 시도해주세요 ");
    //             }
    //         }
    //     );
    // };

    // const requestPay4 = () => {
    //     const IMP = window.IMP; // 생략 가능
    //     IMP.init("imp12414300"); // 예: imp00000000
    //     // IMP.request_pay(param, callback) 결제창 호출
    //     IMP.request_pay(
    //         {
    //             // param
    //             pg: "html5_inicis",
    //             pay_method: "card",
    //             // merchant_uid: "ORD20180131-0000011", // 상품 uid 중복 X // 자동랜덤으로 발급해준다 .
    //             name: "흡연부트캠프",
    //             amount: money4,
    //             buyer_email: "gildong@gmail.com",
    //             buyer_name: "홍길동",
    //             buyer_tel: "010-4242-4242",
    //             buyer_addr: "서울특별시 구로동",
    //             buyer_postcode: "01181",
    //             m_redirect_url: "/pages/quiz06/payment/complete",
    //         },
    //         (rsp: any) => {
    //             // callback
    //             if (rsp.success) {
    //                 // 결제 성공 시 로직,
    //                 console.log(rsp);

    //                 // 백엔드에 결제관련 데이터 넘겨주기 (=>즉 ,  뮤테이션 실행하기 )
    //                 // ex , createPointTransactionOfLoading (back06)
    //                 // 중고마켓 할때
    //             } else {
    //                 // 결제 실패 시 로직,
    //                 alert("결제 실패했습니다. 다시 시도해주세요 ");
    //             }
    //         }
    //     );
    // };
    const onChangeMarket = (event) => {
        setAmount(event.target.value);
    };

    return (
        <div>
            <Head>
                {/* <!-- jQuery --> */}
                <script
                    type="text/javascript"
                    src="https://code.jquery.com/jquery-1.12.4.min.js"
                ></script>
                {/* <!-- iamport.payment.js --> */}
                <script
                    type="text/javascript"
                    src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
                ></script>
            </Head>
            <select name="market" onChange={onChangeMarket}>
                <option>선택하세요</option>
                <option value={500}>500원 결제하기</option>
                <option value={1000}>1000원 결제하기</option>
                <option value={2000}>2000원 결제하기</option>
                <option value={5000}>5000원 결제하기</option>
            </select>
            <button onClick={requestPay}>결제하기</button>
        </div>
    );
}

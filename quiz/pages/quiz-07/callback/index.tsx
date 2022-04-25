import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";

const Row = styled.div`
    display: flex;
`;
const Column = styled.div`
    width: 30%;
`;

export default function CallbackPromiseAsyncawaitPage() {
    const [data, setData] = useState();

    const onClickCallback = () => {
        const aaa = new XMLHttpRequest();
        aaa.open("get", "http://numbersapi.com/random?min=1&max=200");
        aaa.send();
        aaa.addEventListener("load", (res) => {
            const num = res.target.response.split(" ")[0]; // 131 (랜덤숫자)

            const bbb = new XMLHttpRequest();
            bbb.open("get", `https://koreanjson.com/posts/${num}`);
            bbb.send();
            bbb.addEventListener("load", (res) => {
                const userId = JSON.parse(res.target.response)["UserId"];

                const ccc = new XMLHttpRequest();
                ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
                ccc.send();
                ccc.addEventListener("load", (res) => {
                    const result = JSON.parse(res.target.response); // 최종 결과값
                    console.log(result);
                    setData(result);
                });
            });
        });
    };

    // new Promise((resolve, reject) => {
    //     // 외부 요청 코드
    //     const ccc = new XMLHttpRequest();
    //     ccc.open("get", `http://koreanjson.com/posts?userId=${userId}`);
    //     ccc.send();
    //     ccc.addEventListener("load", (res) => {
    //         resolve(res); // 최종 결과값
    //     });

    //     // 성공
    //     resolve("철수");

    //     // 실패
    //     reject("에러 발생");
    // })
    //     .then((res) => {})
    //     .catch((err) => {});

    const onClickPromise = () => {
        axios
            .get("http://numbersapi.com/random?min=1&max=200")
            .then((res) => {
                const num = res.data.split(" ")[0];
                return axios.get(`http://koreanjson.com/posts/${num}`);
            })
            .then((res) => {
                const userId = res.data.UserId;
                return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
            })
            .then((res) => {
                setData(res.data);
            });
    };

    const onClickAsyncawait = async () => {
        // // 프로미스를 await 를 하는거다         axios.get("http://numbersapi.com/random?min=1&max=200") = promise
        // const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200"); // await 은 promise 가 아니면 쓰나마나 이다 . await 은 promise 앞에 붙여줘야한다.
        // // 굉장히 명확하다 .
        // // const bbb = await axios.get("http://numbersapi.com/random?min=1&max=200");
        // const bbb = await axios.get(`http://koreanjson.com/posts/${num}`);
        // // const ccc = await axios.get("http://numbersapi.com/random?min=1&max=200");
        // const ccc = await axios.get(`http://koreanjson.com/posts?userId=${userId}`);

        await axios
            .get("http://numbersapi.com/random?min=1&max=200")
            .then((res) => {
                const num = res.data.split(" ")[0];
                return axios.get(`http://koreanjson.com/posts/${num}`);
            })
            .then((res) => {
                const userId = res.data.UserId;
                return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
            })
            .then((res) => {
                setData(res.data);
            });
    };

    return (
        <div>
            <button onClick={onClickCallback}> Callback 요청하기</button>
            <br />
            <button onClick={onClickPromise}> Promise 요청하기</button>
            <br />
            <button onClick={onClickAsyncawait}> Asyncawait 요청하기</button>
            <br />
            {data?.map((el) => (
                <Row key={el.id}>
                    <Column>{el.UserId}</Column>
                    <Column>{el.title}</Column>
                    <Column>{el.content}</Column>
                </Row>
            ))}
        </div>
    );
}

import { Router, useRouter } from "next/router";
import { Component, createRef, useEffect, useRef, useState } from "react";

interface IState {
    count: number;
}
console.log("마운트 시작");
export default function MyComponentPage() {
    const Router = useRouter();

    const inputRef = useRef<HTMLInputElement>(null);

    const [count, setCount] = useState(99);

    useEffect(() => {
        console.log("마운트등장!!");
        inputRef.current?.focus();

        return () => {
            console.log("컴포넌트사라짐");
        };
    }, []);
    // Mount + WillUnmount 합치기

    useEffect(() => {
        console.log("수정되고 다시 그려짐 ");
    });

    const onClickCounter = () => {
        setCount((prev) => prev + 1);
    };

    const onClickMove = () => {
        Router.push("/");
    };

    return (
        <>
            <input type="password" ref={inputRef} />
            <div>카운트: {count}</div>
            <button onClick={onClickCounter}>카운트(+1)</button>
            <button onClick={onClickMove}>이동하기</button>
        </>
    );
}

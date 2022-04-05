import { Component, createRef, useEffect, useRef, useState } from "react";
import router, { useRouter } from "next/router";

interface IState {
    count: number;
}
export default function isChangePage() {
    const router = useRouter();

    // inputRef = createRef<HTMLInputElement>();
    const inputRef = useRef<HTMLInputElement>(null);

    const [isChange, setIsChange] = useState(false);

    // 1. DidMount
    // componentDidMount() {
    //   console.log("마운트됨!!!");
    //   this.inputRef.current?.focus();
    //   // 포커스 깜빡깜빡
    // }
    // useEffect(() => {
    //   console.log("마운트됨!!!");
    //   inputRef.current?.focus();
    // }, []);

    // 2. DidUpdate
    // componentDidUpdate() {
    //   console.log("수정되고 다시그려짐!!!");
    // }
    useEffect(() => {
        console.log("수정이되거라");
    }, [isChange]);

    // 3. WillUnmount
    // componentWillUnmount() {
    //   console.log("컴포넌트 사라짐!!!");
    //   // 채팅방 나가기
    //   // api 요청!!!
    // }
    // useEffect(() => {
    //   return () => {
    //     console.log("컴포넌트 사라짐!!!");
    //   };
    // }, []);

    // 4. DidMount와 WillUnmount를 합치기!!
    useEffect(() => {
        console.log("마운트됨!!!");
        inputRef.current?.focus();

        return () => {
            console.log("컴포넌트 사라짐!!!");
            alert("Bye!!!");
        };
    }, []);

    // 5. useEffect의 잘못된 사용 예(1. 추가렌더링, 2. 무한루프)
    // useEffect(() => {
    //   setCount((prev) => prev + 1);
    // }, [count]);

    const onClickIsChange = () => {
        // console.log(this);
        // console.log("카운터 클릭!!!");
        // console.log(this.state.count);
        // this.setState((prev: IState) => ({
        //   count: prev.count + 1,
        // }));
        setIsChange((prev) => !prev);
        alert("change!!!");
    };

    const onClickMove = () => {
        router.push("/");
    };

    console.log("Changed!!!");

    return (
        <div>
            <input type="password" ref={inputRef} />;<div>비밀번호</div>
            <button onClick={onClickIsChange}>변경</button>
            <button onClick={onClickMove}>이동</button>
        </div>
    );
}

import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
    console.log("컨테이너가 렌더링 됩니다.");

    let countLet = 0;
    const [countState, setCountState] = useState(0);

    // useMemo 는 많이 쓰이지 않으며 useCallback 을 많이 쓰인다. 함수가 다시 사용되지않도록 사용한다.
    const aaa = useMemo(() => Math.random(), []);
    console.log(aaa);

    const onClickCountLet = useCallback(() => {
        console.log(countLet + 1);
        countLet += 1; // countLet = countLet + 1
    }, []);

    // const onClickCountState = useCallback(() => {
    //     console.log(countState + 1);
    //     // setCountState(countState + 1);
    //     setCountState((prev) => prev + 1);
    // }, []);

    // 카운트 버튼을 누를때 마다 1에 데이터가 쌓이게 되며 , 렌더링 카운트 숫자가 증가가 안되고 1에서 멈춘다 .
    // state 까지 같이 기억을 해버린 상황이다.
    // 이전값인 prev를 통해서 다시 리렌더링이 될때 카운팅 숫자가 올라가는걸 볼수있다.
    // 함수를 새로 만들고 싶다면 디펜더시 를 통해서 함수를 만들면 된다 . (()=>{},[])
    // callback 사용시 state 가 있다면 사용X  디펜더시 어레이 [] 가 바뀌면 콜백이 다시 만들어진다.
    // [aaa,bbb,ccc] 추가될때마다 커지면 예상치 못한 에러가 발생이 되버릴수도 있다.
    // 디펜더시 어레이 추가되는양이 많아지면 아싸리 차라리 새로만드는게 좋다 1~2개 정도만 받고
    // 그이상 갯수면 새로 다시 만드는게 편하다.
    // 응용해보면 useMemo 를 usecallback 으로 만들수 있다.

    // useMemo로 useCallback 만들어보기

    // 9번퀴즈 useMemo를 활용하여 함수를 기억하도록 만들 수도 있습니다. 위 8번에서 만든 함수를 useMemo를 사용해서 변경해 보세요.

    const onClickCountState = useMemo(() => {
        return () => {
            console.log(countState + 1); // 콘솔 생략
            setCountState(countState + 1);
        };
    }, []);

    //    ↑  카운트 버튼을 누를때 마다 1에 데이터가 쌓이게 되며 , 렌더링 카운트 숫자가 증가가 안되고 1에서 멈춘다 .

    return (
        <div>
            <h1>이것은 컨테이너 입니다.</h1>
            <div>카운트(let): {countLet} </div>
            {/* <button onClick={onClickCountLet}>카운트 (let) +1 올리기!!! </button> */}
            <button onClick={() => {}}>카운트 (let) +1 올리기!!! </button>
            <div>카운트(state): {countState} </div>
            {/* <button onClick={onClickCountState}>카운트 (state) +1 올리기!!! </button> */}
            <button
                onClick={() => {
                    setCountState((prev) => prev + 1);
                }}
            >
                카운트 (state) +1 올리기!!!{" "}
            </button>
            <MemoizationPresenterPage countState={countState} />
        </div>
    );
}

//    ↑state 변경 함수를 JSX 에서 직접 작성하도록 변경

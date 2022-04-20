import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import { IBoard } from "../../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            _id
            writer
            title
        }
    }
`;

const MyRow = styled.div`
    display: flex;
`;

const MyColumn = styled.div`
    width: 25%;
`;

export default function BasketPage() {
    const { data } = useQuery(FETCH_BOARDS);
    // const [isEdit, setIsEdit] = useState("");

    // delete el.__typename 이렇게 지우면 별로 안좋다 추천 X!!
    const onClickBasket = (el) => () => {
        console.log(el);

        // 1. 기존 장바구니 가져오기
        const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

        // 2. 이미 담겼는지 확인하기

        const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
        if (temp.length === 1) {
            alert("이미 담은 물품입니다");
            return;
        }
        // 3. 장바구니 담기
        const { __typename, ...newEl } = el;
        baskets.push(newEl);
        localStorage.setItem("baskets", JSON.stringify(baskets));

        // 4. 삭제부분 참고
        // const newBaskets = baskets.filter((basketEl: IBoard) => basketEl._id !== el._id);
        // 반대로 필터를 해야겠네 >> JSON.stringify(baskets) baskets 쪽으로 밀어넣어야겠네 그 이후에 리턴
        //
    };

    const onClickDeleteBasket = (el) => () => {
        console.log(el);

        const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
        const newBaskets = baskets.filter((basketEl: IBoard) => basketEl._id !== el._id);
        // 3. 장바구니 담기
        const { __typename, ...newEl } = el;
        baskets.push(newEl);
        localStorage.setItem("baskets", JSON.stringify(newBaskets));
    };

    return (
        <div>
            {data?.fetchBoards.map((el: IBoard) => (
                <MyRow key={el._id}>
                    <MyColumn>{el.writer}</MyColumn>
                    <MyColumn>{el.title}</MyColumn>
                    <button onClick={onClickBasket(el)}>장바구니 담기</button>
                    <button onClick={onClickDeleteBasket(el)}>장바구니빼기</button>
                </MyRow>
            ))}
        </div>
    );
}

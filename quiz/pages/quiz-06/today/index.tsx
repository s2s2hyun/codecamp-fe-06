// # 2-2. 오늘 본 상품 나타내기

// 1. /pages/quiz06/today/index.tsx 페이지를 만들고 fetchBoards 게시물 목록을 불러와 주세요.
// 2. 각 행을 클릭하면 클릭된 데이터를 로컬 스토리지에 저장해 보세요.
// ⇒ 단, 클릭된 날짜와 시간을 "YYYY-MM-DD" 형태의 키로 저장해야 합니다.
// 3. 로컬 스토리지에 저장된 데이터 중, 오늘 날짜에 해당하는 데이터만 뽑아서 페이지 우측에 나타내 보세요.

import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../../src/commons/types/generated/types";
import { getDate } from "../../../src/commons/libraries/utils";

const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            _id
            writer
            title
        }
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const MyRow = styled.div`
    display: flex;
`;

const MyColumn = styled.div`
    width: 30%;
`;
const HistoryLocalStorageStage = styled.div`
    width: 50%;
`;

const LocalQ = styled.div`
    display: flex;
    flex-direction: row;
`;

const HistoryColumn = styled.div`
    width: 30%;
`;

const getDate = (date) => {
    const newdate = new Date(date);
    const yyyy = String(newdate.getFullYear()).slice(2);
    const mm = String(newdate.getMonth() + 1).padStart(2, "0");
    const dd = String(newdate.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
};

// 현재 날짜
// const newdate = new Date();
// const yyyy = String(newdate.getFullYear()).slice(2);
// const mm = String(newdate.getMonth() + 1).padStart(2, "0");
// const dd = String(newdate.getDate()).padStart(2, "0");
// const today = `${yyyy}-${mm}-${dd}`;

export default function HistoryLocalStorage() {
    const { data } = useQuery(FETCH_BOARDS);
    const [historyItems, setHistoryItems] = useState([]);

    const onClickTodayHistory = (el: IBoard) => () => {
        const baskets = JSON.parse(localStorage.getItem(getDate(new Date())) || "[]");

        const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
        if (temp.length === 1) {
            alert("이미 있어요 ");
            return;
        }

        const { __typename, ...newEl } = el;
        // 클릭했을 때 날짜나오기
        // newEl["date"] = new Date();
        // console.log(newEl);
        // console.log("here!date");
        // const clickedDate = getDate(newEl.date);

        baskets.push(newEl);
        localStorage.setItem(getDate(new Date()), JSON.stringify(baskets));
        // localStorage.setItem(today, JSON.stringify(baskets));

        const newBaskets = JSON.parse(localStorage.getItem(getDate(new Date())) || "[]");
        setHistoryItems(newBaskets);
    };

    useEffect(() => {
        const baskets = JSON.parse(localStorage.getItem(getDate(new Date())) || "[]");
        setHistoryItems(baskets);
    }, []);

    return (
        <Wrapper>
            <div>
                {data?.fetchBoards.map((el: IBoard) => (
                    <MyRow key={el._id} onClick={onClickTodayHistory(el)}>
                        <MyColumn>{el.writer}</MyColumn>
                        <MyColumn>{el.title}</MyColumn>
                    </MyRow>
                ))}

                <HistoryLocalStorageStage>
                    {historyItems.map((el: IBoard) => (
                        <LocalQ key={el._id}>
                            <HistoryColumn>{el.writer}</HistoryColumn>
                            <HistoryColumn>{el.title}</HistoryColumn>
                        </LocalQ>
                    ))}
                </HistoryLocalStorageStage>
            </div>
            <hr></hr>
        </Wrapper>
    );
}

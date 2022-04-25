import BoardListUI from "./BoardList.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { useRouter } from "next/router";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
    IQuery,
    IQueryFetchBoardsArgs,
    IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import _ from "lodash";

export default function BoardList() {
    const router = useRouter();
    const { data, refetch } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
        FETCH_BOARDS
    );
    const { data: dataBoardsCount } = useQuery<
        Pick<IQuery, "fetchBoardsCount">,
        IQueryFetchBoardsCountArgs
    >(FETCH_BOARDS_COUNT);

    const [keyword, setKeyword] = useState("");

    const getDebounce = _.debounce((data) => {
        refetch({ search: data, page: 1 });
        setKeyword(data);
    }, 200);

    const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        getDebounce(event.target.value);
    };

    const onClickMoveToBoardNew = () => {
        router.push("/boards/new");
    };

    const onClickMoveToBoardDetail = (event: MouseEvent<HTMLDivElement>) => {
        // event.target // 태그전체
        // event.target.value
        // event.target.id

        // document.getElementById("bbb").value
        if (event.target instanceof Element) router.push(`/boards/${event.target.id}`);
    };

    return (
        <BoardListUI
            data={data}
            onClickMoveToBoardNew={onClickMoveToBoardNew}
            onClickMoveToBoardDetail={onClickMoveToBoardDetail}
            refetch={refetch}
            count={dataBoardsCount?.fetchBoardsCount}
            onChangeSearch={onChangeSearch}
            keyword={keyword}
            setKeyword={setKeyword}
        />
    );
}

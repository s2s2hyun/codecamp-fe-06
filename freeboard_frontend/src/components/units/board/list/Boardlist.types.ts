import { ApolloQueryResult } from "@apollo/client";
import { ChangeEvent, MouseEvent } from "react";
import { IQuery, IQueryFetchBoardsArgs } from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
    onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
    data: any;
    onClickMoveToBoardNew: () => void;
    onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void;
    refetch: (
        variables: Partial<IQueryFetchBoardsArgs>
    ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
    count?: number;
    keyword: string;
    setKeyword: Function;
}
export interface ITextTokenprops {
    isMatched: boolean;
}

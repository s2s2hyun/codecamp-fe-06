import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface IBoardCommentWriteUIProps {
    onClickUpdate: () => void;
    onClickWrite: () => void;
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeStar: (value: number) => void;
    isEdit?: boolean;
    el?: IBoardComment;
    contents: string;
}

export interface IBoardCommentWriteProps {
    isEdit?: boolean;
    setIsEdit?: Dispatch<SetStateAction<boolean>>;
    el?: IBoardComment;
}

export interface IUpdateBoardCommentInput {
    contents?: string;
    rating?: number;
}

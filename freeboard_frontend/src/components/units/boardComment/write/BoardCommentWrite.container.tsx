import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";
import {
    IMutation,
    IMutationCreateBoardCommentArgs,
    IMutationUpdateBoardCommentArgs,
    IUpdateBoardCommentInput,
} from "../../../../commons/types/generated/types";
import { useMutation } from "@apollo/client";
import {
    CREATE_BOARD_COMMNET,
    UPDATE_BOARD_COMMENT,
} from "../../../units/boardComment/write/BoardCommnetWrite.queries";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.queries";
import { IBoardCommentWriteProps } from "./BoardCommentWrite.types";

export default function BoardCommentWrite(props: IBoardCommentWriteProps) {
    const router = useRouter();
    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [star, setStar] = useState(0);
    const [contents, setContents] = useState("");

    const [createBoardComment] = useMutation<
        Pick<IMutation, "createBoardComment">,
        IMutationCreateBoardCommentArgs
    >(CREATE_BOARD_COMMNET);

    const [updateBoardComment] = useMutation<
        Pick<IMutation, "updateBoardComment">,
        IMutationUpdateBoardCommentArgs
    >(UPDATE_BOARD_COMMENT);

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value);
    };

    const onChagePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const onChangeStar = (value = Number) => {
        setStar(value);
    };

    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
        setContents(event.target.value);
    };

    const onClickWrite = async () => {
        try {
            await createBoardComment({
                variables: {
                    createBoardCommentInput: {
                        writer,
                        password,
                        contents,
                        rating: star,
                    },
                    boardId: String(router.query.boardId),
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.boardId },
                    },
                ],
            });
        } catch (error) {
            alert(error.message);
        }
    };

    const onClickUpdate = async () => {
        if (!contents) {
            alert("내용 수정이 없습니다.");
            return;
        }
        if (!password) {
            alert("비밀번호가 올바르지 않습니다.");
            return;
        }
        try {
            if (!props.el?._id) return;

            const updateBoardCommentInput: IUpdateBoardCommentInput = {};
            if (contents) updateBoardCommentInput.contents = contents;
            if (star !== props.el?.rating) updateBoardCommentInput.rating = star;

            await updateBoardComment({
                variables: {
                    updateBoardCommentInput,
                    password: password,
                    boardCommentId: props.el?._id,
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.boardId },
                    },
                ],
            });
            props.setIsEdit?.(false);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <BoardCommentWriteUI
            onChangeWriter={onChangeWriter}
            onChagePassword={onChagePassword}
            onChangeStar={onChangeStar}
            onChangeContents={onChangeContents}
            onClickWrite={onClickWrite}
            onClickUpdate={onClickUpdate}
            isEdit={props.isEdit}
            el={props.el}
            contents={contents}
        />
    );
}

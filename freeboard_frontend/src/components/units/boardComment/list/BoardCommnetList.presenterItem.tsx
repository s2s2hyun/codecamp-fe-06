import { useRouter } from "next/router";
import * as S from "./BoardCommentList.styles";
import { Modal } from "antd";
import { IBoardCommentListUIItemProps } from "./BoardCommentList.types";
import {
    IMutation,
    IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import { useMutation } from "@apollo/client";
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from "./BoardCommentList.queries";
import { ChangeEvent, useState } from "react";
import BoardCommentWrite from "../write/BoardCommentWrite.container";

export default function BoardCommentListUIItem(props: IBoardCommentListUIItemProps) {
    const router = useRouter();
    const [isEdit, setIsEdit] = useState("");
    const [myPassword, setMyPassword] = useState("");
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

    const [deleteBoardComment] = useMutation<
        Pick<IMutation, "deleteBoardComment">,
        IMutationDeleteBoardCommentArgs
    >(DELETE_BOARD_COMMENT);

    const onClickUpdate = () => {
        setIsEdit(true);
    };

    const onClickDelete = async () => {
        try {
            await deleteBoardComment({
                variables: {
                    password: myPassword,
                    boardCommentId: props.el?._id,
                },
                refetchQueries: [
                    {
                        query: FETCH_BOARD_COMMENTS,
                        variables: { boardId: router.query.boardId },
                    },
                ],
            });
        } catch (error) {
            Modal.error({ content: error.message });
        }
    };

    const onClickOpenDeleteModal = () => {
        setIsOpenDeleteModal(true);
    };

    const onChangeDeletePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setMyPassword(event.target.value);
    };

    return (
        <>
            {isOpenDeleteModal && (
                <Modal visible={true} onOk={onClickDelete}>
                    <div>비밀번호 입력: </div>
                    <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
                </Modal>
            )}
            {!isEdit && (
                <S.ItemWrapper>
                    <S.CommentWrapper>
                        <S.Profile src="/image/profile_01.png" />
                        <S.MainWrapper>
                            <S.WriterWrapper>
                                <S.Writer>{props.el?.writer}</S.Writer>.
                                <S.Star value={props.el?.rating} disabled />
                            </S.WriterWrapper>
                            <S.Contents>{props.el?.contents}</S.Contents>
                        </S.MainWrapper>
                        <S.OptionWrapper>
                            <S.UpdateIcon src="/image/option_update.png" onClick={onClickUpdate} />
                            <S.DeleteIcon
                                src="/image/option_delete.png"
                                onClick={onClickOpenDeleteModal}
                            />
                        </S.OptionWrapper>
                    </S.CommentWrapper>
                    <S.DateString>{props.el?.createdAt}</S.DateString>
                </S.ItemWrapper>
            )}
            {isEdit && <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />}
        </>
    );
}

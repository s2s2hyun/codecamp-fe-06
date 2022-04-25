import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, DELETE_BOARD, LIKE_BOARD, DISLIKE_BOARD } from "./BoardDetail.queries";
import {
    IMutation,
    IMutationDislikeBoardArgs,
    IMutationLikeBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardDetail() {
    const router = useRouter();

    const [deleteBoard] = useMutation(DELETE_BOARD);

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
    });

    const [likeBoard] = useMutation<Pick<IMutation, "likeBoard">, IMutationLikeBoardArgs>(
        LIKE_BOARD
    );

    const [dislikeBoard] = useMutation<Pick<IMutation, "dislikeBoard">, IMutationDislikeBoardArgs>(
        DISLIKE_BOARD
    );

    const onClickMoveToBoardList = () => {
        router.push("/boards");
    };

    const onClickMoveToBoardEdit = () => {
        router.push(`/boards/${router.query.boardId}/edit`);
    };

    const onClickLike = () => {
        likeBoard({
            variables: { boardId: String(router.query.boardId) },
            refetchQueries: [{ query: FETCH_BOARD, variables: { boardId: router.query.boardId } }],
        });
    };

    const onClickDisLike = () => {
        dislikeBoard({
            variables: { boardId: String(router.query.boardId) },
            refetchQueries: [{ query: FETCH_BOARD, variables: { boardId: router.query.boardId } }],
        });
    };

    const onClickDelete = async () => {
        try {
            await deleteBoard({
                variables: {
                    boardId: router.query.boardId,
                },
            });
            alert("게시물이 삭제되었습니다.");
            router.push("/boards");
        } catch (error: any) {
            alert(error.message);
        }
    };

    return (
        <BoardDetailUI
            data={data}
            onClickMoveToBoardList={onClickMoveToBoardList}
            onClickMoveToBoardEdit={onClickMoveToBoardEdit}
            onClickDelete={onClickDelete}
            onClickLike={onClickLike}
            onClickDislike={onClickDisLike}
        />
    );
}

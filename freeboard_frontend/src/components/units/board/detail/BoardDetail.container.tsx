import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";

export default function BoardDetail() {
    const router = useRouter();

    // const [deleteBoard] = useMutation(DELETE_BOARD);

    const { data } = useQuery(FETCH_BOARD, {
        variables: { boardId: router.query.boardId },
    });

    const onClickMoveToBoardList = () => {
        router.push("/boards");
    };

    const onClickMoveToBoardEdit = () => {
        router.push(`/boards/${router.query.boardId}/edit`);
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
        />
    );
}

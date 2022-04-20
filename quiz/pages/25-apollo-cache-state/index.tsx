import { gql, useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const FETCH_BOARDS = gql`
    query fetchBoards {
        fetchBoards {
            _id
            writer
            title
            contents
        }
    }
`;

const DELETE_BOARD = gql`
    mutation deleteBoard($boardId: ID!) {
        deleteBoard(boardId: $boardId)
    }
`;

const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
            writer
            title
            contents
        }
    }
`;

export default function ApolloCacheStatePage() {
    const [deleteBoard] = useMutation(DELETE_BOARD);
    const [createBoard] = useMutation(CREATE_BOARD);
    const { data } = useQuery(FETCH_BOARDS);
    console.log(useMutation(CREATE_BOARD));
    console.log(CREATE_BOARD);
    const [myWriter, setMyWriter] = useState("");
    const [myTitle, setMyTitle] = useState("");
    const [myContents, setMyContents] = useState("");
    const [myPassword, setMyPassword] = useState("");

    const onClickDelete = (boardId: string) => async () => {
        // 삭제하기로직
        await deleteBoard({
            variables: { boardId },
            update(cache, { data }) {
                const deletedId = data.deleteBoard;
                cache.modify({
                    fields: {
                        fetchBoards: (prev, { readField }) => {
                            const filteredPrev = prev.filter(
                                (el: any) => readField("_id", el) !== deletedId
                            ); // el._id가 안되므로 readField에서 꺼내오기
                            return [...filteredPrev];
                        },
                    },
                });
            },
        });
    };

    const onClickSubmit = async () => {
        // 등록하기로직
        await createBoard({
            variables: {
                createBoardInput: {
                    writer: myWriter,
                    password: myPassword,
                    title: myTitle,
                    contents: myContents,
                },
            },
            update(cache, { data }) {
                cache.modify({
                    fields: {
                        fetchBoards: (prev) => {
                            return [data.createBoard, ...prev];
                        },
                    },
                });
            },
        });
    };

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setMyWriter(event.target.value);
    };
    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setMyTitle(event.target.value);
    };
    const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
        setMyContents(event.target.value);
    };
    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setMyPassword(event.target.value);
    };

    return (
        <div>
            {data?.fetchBoards.map((el) => (
                <div key={el._id}>
                    <div>작성자: '{el.writer}'</div>
                    <div>제목: '{el.title}'</div>
                    <div>내용:'{el.contents}'</div>
                    <button onClick={onClickDelete(el._id)}>삭제하기</button>
                    <hr></hr>
                </div>
            ))}
            <div>
                작성자 : <input type="text" onChange={onChangeWriter} /> <br />
                비밀번호 : <input type="text" onChange={onChangePassword} /> <br />
                제목 : <input type="text" onChange={onChangeTitle} /> <br />
                내용 : <input type="text" onChange={onChangeContents} /> <br />
            </div>
            <button onClick={onClickSubmit}>등록하기</button>
        </div>
    );
}

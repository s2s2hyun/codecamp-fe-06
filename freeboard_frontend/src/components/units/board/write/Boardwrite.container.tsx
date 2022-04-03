import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";

export default function BoardWrite(props: IBoardWriteProps) {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);
    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD);

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const [writerError, setWriterError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [titleError, setTitleError] = useState("");
    const [contentsError, setContentsError] = useState("");

    const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
        setWriter(event.target.value);
        if (event.target.value !== "") {
            setWriterError("");
        }

        // if (event.target.value !== "" && password !== "" && title !== "" && contents !== "") {
        if (event.target.value && password && title && contents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        if (event.target.value !== "") {
            setPasswordError("");
        }

        // if (writer !== "" && event.target.value !== "" && title !== "" && contents !== "") {
        if (writer && event.target.value && title && contents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
        if (event.target.value !== "") {
            setTitleError("");
        }

        // if (writer !== "" && password !== "" && event.target.value !== "" && contents !== "") {
        if (writer && password && event.target.value && contents) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContents(event.target.value);
        if (event.target.value !== "") {
            setContentsError("");
        }

        // if (writer !== "" && password !== "" && title !== "" && event.target.value !== "") {
        if (writer && password && title && event.target.value) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    const onClickSubmit = async () => {
        if (writer === "") {
            setWriterError("작성자를 입력해주세요.");
        }
        if (password === "") {
            setPasswordError("비밀번호를 입력해주세요.");
        }
        if (title === "") {
            setTitleError("제목을 입력해주세요.");
        }
        if (contents === "") {
            setContentsError("내용을 입력해주세요.");
        }
        if (writer !== "" && password !== "" && title !== "" && contents !== "") {
            try {
                const result = await createBoard({
                    variables: {
                        createBoardInput: {
                            writer: writer,
                            password: password,
                            title: title,
                            contents: contents,
                        },
                    },
                });
                console.log(result);
                alert("게시물 등록에 성공하였습니다!");
                router.push(`/boards/${result.data.createBoard._id}`);
            } catch (error: any) {
                console.log(error.message);
            }
        }
    };

    const onClickUpdate = async () => {
        if (!title && !contents) {
            alert("수정한 내용이 없습니다.");
            return;
        }

        if (!password) {
            alert("비밀번호를 입력해주세요.");
            return;
        }

        const updateBoardInput: IUpdateBoardInput = {};
        if (title) updateBoardInput.title = title;
        if (contents) updateBoardInput.contents = contents;

        try {
            await updateBoard({
                variables: {
                    boardId: router.query.boardId,
                    password,
                    updateBoardInput,
                },
            });
            alert("게시물 수정에 성공하였습니다!");
            router.push(`/boards/${router.query.boardId}`);
        } catch (error: any) {
            alert(error.message);
        }
    };

    return (
        <BoardWriteUI
            isActive={isActive}
            writerError={writerError}
            passwordError={passwordError}
            titleError={titleError}
            contentsError={contentsError}
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickSubmit={onClickSubmit}
            onClickUpdate={onClickUpdate}
            isEdit={props.isEdit}
            data={props.data}
        />
    );
}

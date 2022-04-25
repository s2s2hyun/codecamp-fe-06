import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./Boardwrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./Boardwrite.queries";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";
import { Modal } from "antd";

export default function BoardWrite(props: IBoardWriteProps) {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);
    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD);

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [fileUrls, setFileUrls] = useState(["", "", ""]);
    const [isOpen, setIsOpen] = useState(false);
    const [zipcode, setZipcode] = useState("");
    const [address, setAddress] = useState("");
    const [addressDetail, setAddressDetail] = useState("");
    const [youtubeUrl, setYoutubeUrl] = useState("");
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
    const onClickAddressSearch = () => {
        setIsOpen(true);
    };

    const onCompleteAddressSearch = (data: any) => {
        setAddress(data.address);
        setZipcode(data.zonecode);
        setIsOpen(false);
    };

    const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
        setAddressDetail(event.target.value);
    };

    const onChangeFileUrls = (fileUrl: string, index: number) => {
        const newFileUrls = [...fileUrls];
        newFileUrls[index] = fileUrl;
        setFileUrls(newFileUrls);
    };

    const onChangeYoutubeUrl = (event: ChangeEvent<HTMLInputElement>) => {
        setYoutubeUrl(event.target.value);
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
                            images: fileUrls,
                            youtubeUrl: youtubeUrl,
                        },
                    },
                });
                console.log(result);
                Modal.success({ content: "게시물 등록에 성공하였습니다!" });
                router.push(`/boards/${result.data.createBoard._id}`);
            } catch (error: any) {
                Modal.error({ content: error.message });
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
        const currentFiles = JSON.stringify(fileUrls);
        const defaultFiles = JSON.stringify(props.data.fetchBoard.images);
        const isChangedFiles = currentFiles !== defaultFiles;

        const updateBoardInput: IUpdateBoardInput = {};
        if (title) updateBoardInput.title = title;
        if (contents) updateBoardInput.contents = contents;
        if (isChangedFiles) updateBoardInput.images = fileUrls;
        if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;

        try {
            await updateBoard({
                variables: {
                    boardId: router.query.boardId,
                    password,
                    updateBoardInput,
                },
            });
            Modal.success({ content: "게시물 수정에 성공하였습니다!" });
            router.push(`/boards/${router.query.boardId}`);
        } catch (error: any) {
            Modal.error({ content: error.message });
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
            onChangeFileUrls={onChangeFileUrls}
            onChangeAddressDetail={onChangeAddressDetail}
            onClickAddressSearch={onClickAddressSearch}
            onCompleteAddressSearch={onCompleteAddressSearch}
            onChangeYoutubeUrl={onChangeYoutubeUrl}
            isOpen={isOpen}
            zipcode={zipcode}
            address={address}
            addressDetail={addressDetail}
            onClickSubmit={onClickSubmit}
            onClickUpdate={onClickUpdate}
            isEdit={props.isEdit}
            data={props.data}
            fileUrls={fileUrls}
        />
    );
}

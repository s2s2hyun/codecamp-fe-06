import { ChangeEvent, useState, useRef } from "react";
import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationUploadFileArgs } from "../../src/commons/types/generated/types";
import { Modal } from "antd";
import { checkFileValidation } from "../../src/commons/libraries/validation";
import { LikeOutlined } from "@ant-design/icons";

const CREAT_BOARD = gql`
    mutation myMutation($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
            writer
            title
            contents
        }
    }
`;
const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
            url
        }
    }
`;

export default function RestGetPage() {
    const [data, setData] = useState("");
    const [myWriter, setMyWriter] = useState("");
    const [myTitle, setMyTitle] = useState("");
    const [myContents, setMyContents] = useState("");
    const [myPassword, setMyPassword] = useState("");
    const [imageUrl, setImageUrl] = useState<string | undefined>("");

    const [callApi] = useMutation(CREAT_BOARD);

    const callGraphqlApi = async () => {
        const result = await callApi({
            variables: {
                createBoardInput: {
                    writer: myWriter,
                    password: myPassword,
                    title: myTitle,
                    contents: myContents,
                    images: imageUrl,
                },
            },
        });

        console.log(result);
        setData(result.data.createBoard.message);
        alert("등록완료");
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

    const fileRef = useRef<HTMLInputElement>(null);

    const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(
        UPLOAD_FILE
    );

    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        console.log(file);

        const isValid = checkFileValidation(file);
        if (!isValid) return;

        try {
            const result = await uploadFile({ variables: { file } });
            console.log(result.data?.uploadFile.url);

            setImageUrl(result.data?.uploadFile.url);
        } catch (error) {
            if (error instanceof Error) Modal.error({ content: error.message });
            //(error instanceof Error = 를 사용하면 에러 종류를 판별할수 있습니다 .
            //라이브러리를 요즘 많이 사용하고 계신대 라이브러리 에서 온 에러 객체는 클래스를
            //알아내는게 쉽지 않습니다. 이럴땐 name 프로퍼티를 사용해서 오류 종류를 확인할수있습니다. )
        }
    };

    const onClickImage = () => {
        fileRef.current?.click();
    };

    console.log(data);

    return (
        <div>
            작성자 : <input type="text" onChange={onChangeWriter} /> <br />
            비밀번호 : <input type="text" onChange={onChangePassword} /> <br />
            제목 : <input type="text" onChange={onChangeTitle} /> <br />
            내용 : <input type="text" onChange={onChangeContents} /> <br />
            <div>
                <div>이미지 업로드 연습하기</div>
                <LikeOutlined onClick={onClickImage} />
                이미지선택
            </div>
            <input style={{ display: "none" }} type="file" onChange={onChangeFile} ref={fileRef} />
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!</button>
            <img src={`https://storage.googleapis.com/${imageUrl}`} />
        </div>
    );
}

import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { IMutation, IMutationUploadFileArgs } from "../../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
    mutation uploadFile($file: Upload!) {
        uploadFile(file: $file) {
            url
        }
    }
`;

export const CREATE_BOARD = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
        createBoard(createBoardInput: $createBoardInput) {
            _id
        }
    }
`;

export default function ImageUploadPreviewPage() {
    const [imageUrls, setImageUrls] = useState(["", "", ""]);
    const [files, setFiles] = useState<(File | undefined)[]>([undefined, undefined, undefined]);
    // const [file2, setFile2] = useState<File>();
    // const [file3, setFile3] = useState<File>();
    const [myWriter, setMyWriter] = useState("");
    const [myTitle, setMyTitle] = useState("");
    const [myContents, setMyContents] = useState("");
    const [myPassword, setMyPassword] = useState("");

    const [createBoard] = useMutation(CREATE_BOARD);

    const [uploadFile] = useMutation<Pick<IMutation, "uploadFile">, IMutationUploadFileArgs>(
        UPLOAD_FILE
    );

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

    const onChangeFile = (number: number) => (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) {
            alert("파일이 없습니다.");
            return;
        }

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (data) => {
            if (typeof data.target?.result === "string") {
                const tempUrls = [...imageUrls];
                tempUrls[number] = data.target?.result;

                setImageUrls(tempUrls);

                const tempFiles = [...files];
                tempFiles[number] = file;
                setFiles(tempFiles);
            }
        };
    };

    const onClickSubmit = async () => {
        const results = await Promise.all(
            files.map((el) => el && uploadFile({ variables: { file: el } }))
        );

        const resultUrls = results.map((el) => (el?.data ? el?.data.uploadFile.url : ""));
        // files.map((el) => {
        //   // 3번째
        //    return el && uploadFile({ variables: { file: el } })

        //   //  2. return el ? uploadFile({ variables: { file: el } }) : undefined;

        //   // if (el) {
        //   //   return uploadFile({ variables: { file: el } });
        //   // }else{
        //   //   return undefined
        //   // }
        //   // }
        // });

        // await uploadFile({ variables: { file: files[0] } }); 맵위로 올라감
        // await uploadFile({ variables: { file: files[1] } });
        // await uploadFile({ variables: { file: files[2] } });
        // const result2 = await uploadFile({ variables: { file: file2 } });
        // const result3 = await uploadFile({ variables: { file: file3 } });

        const result2 = await createBoard({
            variables: {
                createBoardInput: {
                    writer: myWriter,
                    password: myPassword,
                    title: myTitle,
                    contents: myContents,
                    images: resultUrls,
                },
            },
        });
        console.log(result2.data.createBoard._id);
    };

    return (
        <div>
            <div>
                작성자 : <input type="text" onChange={onChangeWriter} /> <br />
                비밀번호 : <input type="text" onChange={onChangePassword} /> <br />
                제목 : <input type="text" onChange={onChangeTitle} /> <br />
                내용 : <input type="text" onChange={onChangeContents} /> <br />
            </div>
            <input type="file" onChange={onChangeFile(0)} />
            <input type="file" onChange={onChangeFile(1)} />
            <input type="file" onChange={onChangeFile(2)} />
            <img src={imageUrls[0]} />
            <img src={imageUrls[1]} />
            <img src={imageUrls[2]} />
            <button onClick={onClickSubmit}>게시글 등록하기</button>
        </div>
    );
}

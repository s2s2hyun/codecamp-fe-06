import { useMutation } from "@apollo/client";
import { useRef } from "react";
import { checkValidationImage } from "./Upload01.validation";
import Uploads01UI from "./Upload01.presenter";
import { UPLOAD_FILE } from "./uploads01.queries";
import { Modal } from "antd";

export default function Uploads01(props) {
    const fileRef = useRef(null);
    const [uploadFile] = useMutation(UPLOAD_FILE);

    const onClickUpload = () => {
        fileRef.current?.click();
    };

    const onChangeFile = async (event) => {
        const file = checkValidationImage(event.target.files?.[0]);
        if (!file) return;

        try {
            const result = await uploadFile({ variables: { file } });
            props.onChangeFileUrls(result.data.uploadFile.url, props.index);
        } catch (error) {
            Modal.error({ content: error.message });
        }
    };

    return (
        <Uploads01UI
            fileRef={fileRef}
            fileUrl={props.fileUrl}
            defaultFileUrl={props.defaultFileUrl}
            onClickUpload={onClickUpload}
            onChangeFile={onChangeFile}
        />
    );
}

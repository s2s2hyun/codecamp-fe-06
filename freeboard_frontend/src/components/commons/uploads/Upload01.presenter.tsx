import { UploadButton, UploadFileHidden, UploadImage } from "./Upload01.styles";

export default function Uploads01UI(props) {
    console.log(props.fileUrl);
    return (
        <>
            {props.fileUrl ? (
                <UploadImage
                    onClick={props.onClickUpload}
                    src={`https://storage.googleapis.com/${props.fileUrl}`}
                />
            ) : (
                <UploadButton onClick={props.onClickUpload}>
                    <>+</>
                </UploadButton>
            )}
            <UploadFileHidden type="file" ref={props.fileRef} onChange={props.onChangeFile} />
        </>
    );
}

import { ChangeEvent } from "react";

export interface IBoardWriteProps {
    isEdit: boolean;
    data?: any;
}

export interface IUpdateBoardInput {
    youtubeUrl?: string;
    title?: string;
    contents?: string;
}

export interface ISubmitButtonProps {
    isActive: boolean;
}

export interface IBoardWriteUIProps {
    fileUrls: any;
    onChangeFileUrls: any;
    isActive: boolean;
    writerError: string;
    passwordError: string;
    titleError: string;
    contentsError: string;
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickAddressSearch: () => void;
    onCompleteAddressSearch: (data: any) => void;
    onClickSubmit: () => void;
    onClickUpdate: () => void;
    isOpen: boolean;
    zipcode: string;
    address: string;
    addressDetail: string;
    isEdit: boolean;
    data?: any;
}

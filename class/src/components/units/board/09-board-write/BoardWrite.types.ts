import { ChangeEvent } from "react";

//프레젠터타입

export interface IBoardWriteUIProps {
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
    callGraphqlApi: () => void;
    onClickUpdate: () => void;
    isActive: boolean;
    isEdit: boolean;
    data?: any;
}

//스타일 타입

export interface ISubmitButtonProps {
    isActive: boolean;
}

//컨테이너 타입

export interface IBoardWriteProps {
    isEdit: boolean;
    data?: any;
}
export interface IMyVariables {
    number: number;
    writer?: string;
    title?: string;
    contents?: string;
}

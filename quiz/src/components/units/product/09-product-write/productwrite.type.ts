import [  ChangeEvent  ] from "react"


//프레젠터타입
export interface IBoardWriteUIProps {
    onChangeSeller:(event: ChangeEvent<HTMLInputElement>) => void;
    onChangeName:(event: ChangeEvent<HTMLInputElement>)=> void;
    onChangeDetail:(event: ChangeEvent<HTMLInputElement>)=> void;
    onChangePrice:(event: ChangeEvent<HTMLInputElement>)=> void;
    callGraphqlApi:(event: ChangeEvent<HTMLInputElement>)=> void;
    onClickUpdate:(event: ChangeEvent<HTMLInputElement>)=> void;
    isActive:boolean;
    isEdit:boolean;
    data?:any;
}



//스타일 타입

//컨테이너 타입

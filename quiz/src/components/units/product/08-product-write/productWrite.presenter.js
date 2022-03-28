import { SubmitButton, WriterInput } from "./productWrite.styles";

export default function ProductWriteUI(props) {
    return (
        <div>
            {/* <div>{data}</div> */}
            <h1>상품{props.isEdit ? "수정" : "등록"}하기</h1>
            판매자: <WriterInput type="text" onChange={props.onChangeSeller} />
            <br />
            이름: <input type="text" onChange={props.onChangeName} />
            <br />
            내용: <input type="text" onChange={props.onChangeDetail} />
            <br />
            가격: <input type="text" onChange={props.onChangePrice} />
            <br />
            <SubmitButton
                onClick={props.isEdit ? props.onClickUpdate : props.callGraphqlApi}
                isActive={props.isActive}
            >
                {props.isEdit ? "수정" : "등록"}하기
            </SubmitButton>
        </div>
    );
}

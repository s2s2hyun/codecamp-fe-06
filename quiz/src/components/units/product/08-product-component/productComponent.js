export default function ProductComponent(props) {
    return (
        <div>
            <h1>{props.isEdit ? " 수정" : "등록 "}페이지</h1>
            판매자: <input type="text" />
            <br />
            이름: <input type="text" />
            <br />
            내용: <input type="text" />
            <br />
            가격: <input type="text" />
            <br />
            <button>{props.isEdit ? " 수정" : "등록 "}등록하기</button>
        </div>
    );
}

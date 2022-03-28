export default function BoardNewPage() {
    return (
        <div>
            <h1>등록페이지</h1>
            제목: <input type="text" />
            <br />
            내용: <input type="text" />
            <br />
            {/* 주소.... <  new 페이지서 쓴거를 edit 페이지에서도 확인을 해야한다 
            자동으로 입력으로 되는게 아니라서 복사 붙여넣기를 하다보면 분명히 실수할수도있으니 
            체크를 잘해야한다 . 복붙과 컴포넌트는 다른개념이다 . */}
            <button>등록하기</button>
        </div>
    );
}

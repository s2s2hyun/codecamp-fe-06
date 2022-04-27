import styled from "@emotion/styled";

const Wrapper = styled.div`
  // 웹에서 실행
  width: 1000px;
  height: 1000px;
  background-color: red;

  @media (min-width: 768px) and (max-width: 991px) {
    width: 500px;
    height: 500px;
    background-color: green;
  }
  // 모바일 버전 display:none 하게 되면 상자가 보이지 않게 된다.
  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    background-color: blue;
    display: none;
  }
`;

export default function ResponsiveDesignPage() {
  return <Wrapper>상자</Wrapper>;
}

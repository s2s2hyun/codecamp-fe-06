export default function MapElPage() {
  // 1. 기본방법
  ["철수", "영희", "훈이"].forEach((el, index) => {
    console.log("el:", el);
    console.log("index:", index);
  });
  // ["철수","영희","훈이"].map((el)=> (el+"어린이"))
  // forEach가 map 보다 빠르다 .

  // 2.매개변수 변경한 방법
  ["철수", "영희", "훈이"].forEach((asdf, qwer) => {
    console.log("asdf:", asdf);
    console.log("qwer:", qwer);
  });
  // 3.함수 선언식 방법
  ["철수", "영희", "훈이"].forEach(function (asdf, qwer) {
    console.log("asdf:", asdf);
    console.log("qwer:", qwer);
  });

  // 4. el 과 index 바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("el:", el);
    console.log("index:", index);
  });

  return <div>el 알아보기 </div>;
}

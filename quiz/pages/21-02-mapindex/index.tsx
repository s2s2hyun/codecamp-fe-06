export default function MapElPage() {
    ["철수", "영희", "훈이", "맹구"].forEach((el, t1faker) => {
        console.log("el:", el);
        console.log("t1fakter:", t1faker);
    });

    return <div>el 알아보기</div>;
}

// ["철수", "영희", "훈이", "맹구"].map((index) => {
// 	console.log(`영희는 ${index}번째 칸에 들어있습니다.`)
// })

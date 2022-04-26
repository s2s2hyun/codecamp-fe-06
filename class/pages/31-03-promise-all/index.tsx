export default function PromiseAllpage() {
  const onClickPromise = async () => {
    console.time("Promise시작!!");
    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog1.jpg");
      }, 3000);
    });
    console.log(result1);
    // aaa = 철수가 된다 .

    const result2 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog2.jpg");
      }, 1000);
    });
    console.log(result2);

    const result3 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog3.jpg");
      }, 2000);
    });
    console.log(result3);
    console.timeEnd("Promise시작!!");
  };

  // 프로미스를 기다리는게 await 이 된다 .

  const onClickPromiseAll = async () => {
    // 배열 형태로 들어가게 된다 .
    // 1. 하나하나씩 확인 하는 방법.
    // console.time("promise.all 시작!!!");
    // const result = await Promise.all([
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog1.jpg");
    //     }, 3000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog2.jpg");
    //     }, 3000);
    //   }),

    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog3.jpg");
    //     }, 3000);
    //   }),
    // ]);

    // console.log(result);
    // console.timeEnd("promise.all 시작!!!");
    // // 주석 하나하나씩 확인하는 방법.

    // 2. 한방에 확인하는 방법!!
    console.time("promise.all 시작!!!");
    const result = await Promise.all(
      ["https://dog1.jpg", "https://dog2.jpg", "https://dog3.jpg"].map(
        (el) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el);
            }, 3000);
          })
      )
    );
    console.log(result);
    console.timeEnd("promise.all 시작!!!");
  };

  return (
    <div>
      <button onClick={onClickPromise}>Promise 연습하기</button>
      <button onClick={onClickPromiseAll}>Promise.all 연습하기!! </button>
    </div>
  );
}

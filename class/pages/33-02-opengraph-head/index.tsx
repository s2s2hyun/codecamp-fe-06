import Head from "next/head";

export default function OpengraphPage() {
  return (
    <div>
      <Head>
        <meta property="og:title" content="나만의 사이트 " />
        <meta
          property="og:description"
          content="나만의 사이트에 오신것을 환영합니다"
        />
        <meta property="og:image" content="http://~~~" />
      </Head>
      <h1>오픈 그래프 연습 페이지</h1>
    </div>
  );
}

// "og " 오픈 그래프 이다. 실제로 존재하는게 아니다 . property 도 이름이 정해진게 아니다 우리가 마음대로 이름을 지어준거이다.

import Head from "next/head";
import { useEffect } from "react";
// import Script from "next/script"        Head 에 먼저 추가하면 가장 먼저 시작이고 Script 에 하게되면 위에서 부터 바디 까지 내려올때 작동

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
      // 지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
      level: 3, // 지도의 레벨(확대, 축소 정도)
    };

    const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴 담아도 되고 안담아도 된다 .
  });

  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9d99a2f189c81d29d915f1ce22b73df7"
        ></script>
      </Head>
      <div id="map" style={{ width: 500, height: 400 }}>
        지도
      </div>
    </div>
  );
}

// 9d99a2f189c81d29d915f1ce22b73df7

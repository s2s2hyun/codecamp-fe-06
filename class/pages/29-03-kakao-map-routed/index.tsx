// import Head from "next/head";
import { useEffect } from "react";
// import Script from "next/script"        Head 에 먼저 추가하면 가장 먼저 시작이고 Script 에 하게되면 위에서 부터 바디 까지 내려올때 작동

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>

    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=9d99a2f189c81d29d915f1ce22b73df7&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴 담아도 되고 안담아도 된다 .

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };

    // const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
    // const options = {
    //   // 지도를 생성할 때 필요한 기본 옵션
    //   center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
    //   level: 3, // 지도의 레벨(확대, 축소 정도)
    // };

    // const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴 담아도 되고 안담아도 된다 .
  }, []);

  return (
    <div>
      {/* <Head> // useEffect 에서 직접 스크립트를 다운받게 하자 
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9d99a2f189c81d29d915f1ce22b73df7"
        ></script>
      </Head> */}

      <div id="map" style={{ width: 500, height: 400 }}>
        지도
      </div>
    </div>
  );
}

// 9d99a2f189c81d29d915f1ce22b73df7

const mapContainer = document.getElementById("map"), // 지도를 표시할 div
  mapOption = {
    center: new window.kakao.maps.LatLng(37.54699, 127.09598), // 지도의 중심좌표
    level: 3, // 지도의 확대 레벨
  };

const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// HTML5의 geolocation으로 사용할 수 있는지 확인합니다
if (navigator.geolocation) {
  // GeoLocation을 이용해서 접속 위치를 얻어옵니다
  navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude, // 위도
      lon = position.coords.longitude; // 경도

    const locPosition = new window.kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
      message = '<div style="padding:5px;">여기서 거래 하실래요?</div>'; // 인포윈도우에 표시될 내용입니다

    // 마커와 인포윈도우를 표시합니다
    displayMarker(locPosition, message);
  });
} else {
  // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

  var locPosition = new window.kakao.maps.LatLng(37.54699, 127.09598),
    message = "geolocation을 사용할수 없어요..";

  displayMarker(locPosition, message);
}

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {
  // 마커를 생성합니다
  const marker = new window.kakao.maps.Marker({
    map: map,
    position: locPosition,
  });

  var iwContent = message, // 인포윈도우에 표시할 내용
    iwRemoveable = true;

  // 인포윈도우를 생성합니다
  const infowindow = new window.kakao.maps.InfoWindow({
    content: iwContent,
    removable: iwRemoveable,
  });

  // 인포윈도우를 마커위에 표시합니다
  infowindow.open(map, marker);

  // 지도 중심좌표를 접속위치로 변경합니다
  map.setCenter(locPosition);
}

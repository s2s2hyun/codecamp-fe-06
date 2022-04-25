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
                const Container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
                const Options = {
                    // 지도를 생성할 때 필요한 기본 옵션
                    center: new window.kakao.maps.LatLng(37.54699, 127.09598), // 지도의 중심좌표.
                    level: 3, // 지도의 레벨(확대, 축소 정도)
                };
                const map = new window.kakao.maps.Map(Container, Options); // 지도 생성 및 객체 리턴 담아도 되고 안담아도 된다 .

                const imageSrc =
                        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
                    imageSize = new window.kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
                    imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

                // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
                const markerImage = new window.kakao.maps.MarkerImage(
                        imageSrc,
                        imageSize,
                        imageOption
                    ),
                    markerPosition = new window.kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다

                // 마커를 생성합니다
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition,
                    image: markerImage, // 마커이미지 설정
                });

                // 마커가 표시될 위치입니다
                // const markerPosition = new window.kakao.maps.LatLng(37.54699, 127.09598);

                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);

                // 지도에 클릭 이벤트를 등록합니다
                // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
                window.kakao.maps.event.addListener(map, "click", function (mouseEvent) {
                    // 클릭한 위도, 경도 정보를 가져옵니다
                    const latlng = mouseEvent.latLng;

                    // 마커 위치를 클릭한 위치로 옮깁니다
                    marker.setPosition(latlng);

                    let message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
                    message += "경도는 " + latlng.getLng() + " 입니다";

                    const resultDiv = document.getElementById("clickLatlng");
                    resultDiv.innerHTML = message;
                });
            });
        };
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
            <div id="clickLatlng"></div>
        </div>
    );
}

// 9d99a2f189c81d29d915f1ce22b73df7

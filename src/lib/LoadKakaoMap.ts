// @ts-ignore
const { kakao } = window;

export default function LoadKakaoMap({
  level,
  latitude,
  longitude,
}: MapLocation) {
  const container = document.getElementById('kakaoMap');
  const options = {
    level, // 시작 zoom
    center: new kakao.maps.LatLng(latitude, longitude),
  };
  new kakao.maps.Map(container, options);
}

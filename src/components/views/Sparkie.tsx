import React, { useCallback, useEffect, useState } from 'react';
import LoadKakaoMap from '../../lib/LoadKakaoMap';
import styled from '@emotion/styled';
import requestChargeStatus from '../../lib/requestChargeStatus';

// @ts-ignore
const { kakao } = window;
const MapDiv = styled.div`
  width: 100%;
  height: 50vh;
`;

const Sparkie: React.FC = () => {
  // Map Load
  const [initialLocation, setInitialLocation] = useState<MapLocation>({
    level: 7,
    latitude: 37.566316,
    longitude: 126.977048,
  });
  const [chargerList, setChargerList] = useState([]);
  let map: any;
  useEffect(() => {
    map = LoadKakaoMap(initialLocation);
    const res = async () => {
      const params = {
        // latitude: 37.566316,
        // longitude: 126.977048,
        // rdnmadr: '인천광역시 남동구 소래로 633',
        pageNo: 1,
        numOfRows: 20,
        zcode: '11',
      };

      await requestChargeStatus(params).then((res) => {
        setChargerList(res.data.items[0].item);
      });
    };
    res().then((r) => {
      console.log(chargerList);
      makeMarkers(chargerList);
    });
  }, []);

  const makeMarkers = useCallback((list) => {
    list.forEach((item: any) => {
      const marker = new kakao.maps.Marker({
        map,
        position: new kakao.maps.LatLng(item.lat, item.lng),
      });
      console.log(marker);
    });
  }, []);

  return (
    <section>
      <MapDiv id="kakaoMap" />
    </section>
  );
};

export default Sparkie;

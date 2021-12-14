import React, { useCallback, useEffect, useState } from 'react';
import LoadKakaoMap from '../../lib/common/LoadKakaoMap';
import styled from '@emotion/styled';
import requestChargeStatus from '../../lib/api/charger/requestChargeStatus';

// @ts-ignore
const { kakao } = window;
const MapDiv = styled.div`
  width: 100%;
  height: 50vh;
`;

const Sparkie: React.FC = () => {
  // Map Load
  const [initialLocation] = useState<MapLocation>({
    level: 7,
    latitude: 37.566316,
    longitude: 126.977048,
  });
  const [chargerList, setChargerList] = useState([]);
  const [map, setMap] = useState();

  const makeMarkers = useCallback(
    (list) => {
      list.forEach((item: any) => {
        const marker = new kakao.maps.Marker({
          map,
          position: new kakao.maps.LatLng(item.lat, item.lng),
        });
        console.log(marker);
      });
    },
    [map],
  );

  useEffect(() => {
    setMap(LoadKakaoMap(initialLocation));
    const res = async () => {
      const params = {
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
  }, [chargerList, initialLocation, makeMarkers]);

  return (
    <section>
      <MapDiv id="kakaoMap" />
    </section>
  );
};

export default Sparkie;

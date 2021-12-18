/* global kakao */
import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import requestChargeStatus from '../../lib/api/charger/requestChargeStatus';

const { kakao }: any = window;
const MapDiv = styled.div`
  width: 100%;
  height: 50vh;
`;

const Sparkie: React.FC = () => {
  const [map, setMap] = useState();
  const [chargerList, setChargerList] = useState([]);
  const [searchParams, setSearchParams] = useState({
    pageNo: 1,
    numOfRows: 10,
    zcode: '11',
  });
  const [mapPosition, setMapPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  // Map loading...
  useEffect(() => {
    const container = document.getElementById('kakaoMap');
    const options = {
      level: 7, // 시작 zoom
      center: new kakao.maps.LatLng(37.566316, 126.977048),
    };
    let kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);

    kakao.maps.event.addListener(kakaoMap, 'dragend', () => {
      const latlng = kakaoMap.getCenter();
      setMapPosition({
        latitude: latlng.getLat(),
        longitude: latlng.getLng(),
      });
    });

    res(searchParams);
  }, []);

  useEffect(() => {
    makeMarkers(map, chargerList);
  }, [chargerList]);

  const res = async (params: any) => {
    // const params = {
    //   pageNo: 1,
    //   numOfRows: 20,
    //   zcode: '11',
    // };
    await requestChargeStatus(params).then((res) => {
      setChargerList(res.data.items[0].item);
    });
  };

  // Map Load
  const [initialLocation] = useState<MapLocation>({
    level: 7,
    latitude: 37.566316,
    longitude: 126.977048,
  });

  const makeMarkers = useCallback((map, list) => {
    list.forEach((item: any) => {
      const marker = new kakao.maps.Marker({
        map,
        position: new kakao.maps.LatLng(item.lat, item.lng),
      });
    });
  }, []);

  // useEffect(() => {
  //   console.log('markers!');
  //   makeMarkers(chargerList);
  // }, [chargerList]);

  return (
    <section>
      <MapDiv id="kakaoMap" />
    </section>
  );
};

export default Sparkie;

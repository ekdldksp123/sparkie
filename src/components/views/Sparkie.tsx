import React, { useCallback, useEffect, useState } from 'react';
import LoadKakaoMap from '../../lib/LoadKakaoMap';
import styled from '@emotion/styled';
import requestChargeStatus from '../../lib/requestChargeStatus';

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
  useEffect(() => {
    LoadKakaoMap(initialLocation);
    res();
  }, []);

  // Data Load
  const res = useCallback(async () => {
    const status = await requestChargeStatus();
    console.log(status.data);
  }, []);

  return (
    <section>
      <MapDiv id="kakaoMap" />
    </section>
  );
};

export default Sparkie;

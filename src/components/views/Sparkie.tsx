import React, { useEffect, useState } from 'react';
import LoadKakaoMap from '../../lib/LoadKakaoMap';

const Sparkie: React.FC = () => {
  useEffect(() => LoadKakaoMap(), []);

  return (
    <section>
      <div id="myMap" style={{ width: '100%', height: '50vh' }} />
    </section>
  );
};

export default Sparkie;

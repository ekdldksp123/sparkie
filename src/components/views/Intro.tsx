import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div>
      <h1>인트로</h1>
      <p>
        <Link to={'/main'}>메인 ㄱㄱ</Link>
      </p>
    </div>
  );
};

export default Intro;

import React from 'react';
import axios from 'axios';

const DataWithExpress: React.FC = () => {
  const result = axios.get('/api/v1/post').then((res) => {
    console.log(res);
  });
  return <div></div>;
};

export default DataWithExpress;

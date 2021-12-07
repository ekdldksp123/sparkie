import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './views/Main';
import Intro from './views/Intro';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/main" element={<Main />} />
    </Routes>
  );
};

export default Router;

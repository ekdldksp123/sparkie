import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Intro from './views/Intro';
import Sparkie from './views/Sparkie';
import Board from './views/Board';
import About from './views/About';
import Contact from './views/Contact';
import QnA from './views/QnA';
import QnAtest from './views/QnAtest';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/main" element={<Main />} />
      <Route path="/sparkie" element={<Sparkie />} />
      <Route path="/community" element={<Board />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/qna" element={<QnA />} />
      <Route path="/qnaTest" element={<QnAtest />} />
    </Routes>
  );
};

export default Router;

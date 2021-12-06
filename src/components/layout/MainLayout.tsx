import React from 'react';
import EmotionJsExample from '../molecules/EmotionJsExample';
import Router from '../Router';

const MainLayout: React.FC = () => {
  return (
    <>
      <Router />
      <EmotionJsExample />
    </>
  );
};

export default MainLayout;
